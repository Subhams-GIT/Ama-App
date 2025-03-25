import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google'
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/DbConnect";
import { UserModel } from "@/model/User.model";
import { randomBytes } from "crypto";
export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {
				email: { label: "email", type: 'text', placeholder: 'enter username' },
				password: { label: "password", type: "text", placeholder: "enter password" }
			},
			async authorize(credentials: any): Promise<any> {
				await dbConnect()
				try {
					const user = await UserModel.findOne({
						$or: [{ email: credentials?.email }]
					})
					if (!user) {
						throw new Error('no user found with this email')
					}
					if (!user?.isverified) {
						throw new Error('please verify your account first')
					}
					const ispasswordCorrect = await bcrypt.compare(credentials.password, user.password)
					return ispasswordCorrect ? user : new Error('incorrect password')
				} catch (error: any) {
					console.error(error)
					throw new Error(error)
				}
			},

		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
			authorization: {
			  params: {
				prompt: "consent",
				access_type: "offline",
				response_type: "code",
			  },
			},
		  }),
	],
	callbacks: {
		async jwt({ token, user }) {
			if(user){
			token._id=user._id?.toString()
			token.isVerified=user.isVerified
			token.isAcceptingMessage=user.isAcceptingMessage
			token.username=user.username
			}
			return token
		},
		async session({ session, token,user }) {
			console.log(user)
			if (token) {
				session.user._id = token._id as string;
				session.user.isVerified = token.isVerified as boolean ;
				session.user.isAcceptingMessage = token.isAcceptingMessage as boolean;
				session.user.username = token.username as string;
				return session
			  }
			  else {
				session.user._id = user._id as string;
				session.user.isVerified = user.isVerified as boolean ;
				session.user.isAcceptingMessage = user.isAcceptingMessage as boolean;
				session.user.username = user.username as string;
			  }
			return session;
		},
		async signIn({account,profile,user})
		{
			if(account?.provider=="google")
			{
				await dbConnect();
				try {
					const email = profile?.email;
					const name = profile?.name;
					const existingUser = await UserModel.findOne({ email });
		  
					if (existingUser) {
					  return true;
					}
		  
					const verifyCode=Math.floor(10000+Math.random()*900000).toString()
					const newUser = new UserModel({
					  email,
					  username: name,
					  password: randomBytes(16).toString('hex'), // Generate random password
					  isverified: true,
					  isAcceptingMessage: true,
					  verifyCode,
					  CodeExpiry: new Date(),
					  message:[]
					});
					user._id = newUser._id as string;
					user.isAcceptingMessage=true
					user.isVerified=true
					user.username=name
					await newUser.save();
					
					return true;
				  } catch (error) {
					console.error("Google sign-in error:", error);
					return false;
				  }
			}
			return false
		}
	},
	pages: {
		signIn: "/signin"
	},
	session: {
		strategy: "jwt"
	},
	secret: process.env.NEXTAUTH_SECRET,
}