import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/DbConnect";
import { UserModel } from "@/model/User.model";
import GoogleProvider from "next-auth/providers/google";
import { randomBytes } from "node:crypto";
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
			clientId: process.env.GOOGLE_CLIENT_ID || "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
		})
	],
	callbacks: {
		async jwt({ token, user, account, profile }) {
			if (account && user) {
				if (account.provider === "google") {
					token.accessToken = account.access_token;
					token.refreshToken = account.refresh_token;
					token.accessTokenExpires = account.expires_at
						? account.expires_at * 1000
						: Date.now() + 3600 * 1000;
				}


				return {
					...token,
					_id: user._id,
					username: user.username,
					isVerified: user.isVerified,
					isAcceptingMessage: user.isAcceptingMessage
				};
			}
			return token;
		},
		async session({ session, token, user }) {
			console.log("token", token)
			console.log('user', user)
			if (token.accessToken) {
				session.user._id = user._id as string;
				session.user.isVerified = user.isVerified as boolean;
				session.user.isAcceptingMessage = user.isAcceptingMessage as boolean;
				session.user.username = user.username as string;
				return session
			}
			else if (token) {
				session.user._id = token._id as string;
				session.user.isVerified = token.isVerified as boolean;
				session.user.isAcceptingMessage = token.isAcceptingMessage as boolean;
				session.user.username = token.username as string;
				return session
			}
			return session;
		},
		async signIn({ user, account, profile }) {
			if (account?.provider === "google") {
				await dbConnect();
				try {
					const email = profile?.email;
					const name = profile?.name;
					const existingUser = await UserModel.findOne({ email });

					if (existingUser) {
						return true;
					}
					const data={
						email,
						username: name?.replace(/\s+/g, '').toLowerCase(),
						isAcceptingMessage: true,
						isverified: true,
						password: randomBytes(16).toString('hex'),
						CodeExpiry: new Date().setHours(new Date().getHours() + 1),
						verifyCode: Math.floor(10000 + Math.random() * 900000).toString(),
						message: [],
					}
					const newUser = new UserModel({
						data
					});

					await newUser.save()
					console.log(newUser)
					return true;
				} catch (error: any) {
					console.error("Google sign-in error:", error);
					return "/auth/error?error=oauth_failed";
				}
			}
			return true;
		},
	},
	pages: {
		signIn: "/signin"
	},
	session: {
		strategy: 'jwt'
	},
	secret: process.env.NEXTAUTH_SECRET,
}