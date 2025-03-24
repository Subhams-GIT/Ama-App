import dbConnect from "@/lib/DbConnect";
import { UserModel } from "@/model/User.model";
import { sendVerificationEmail } from "@/Helpers/sendverificationEmail";
import bcrypt from "bcryptjs";


export async function POST(req: Request) {
	await dbConnect()

	try {
		const { username, email, password } = await req.json()
		const user = await UserModel.findOne({
			username,
			isverified: true
		})
		if (user) return Response.json({
			success: false,
			message: "username is already taken"
		}, { status: 400 })

		const emailtaken = await UserModel.findOne({
			email,
		})
		const verifyCode=Math.floor(10000+Math.random()*900000).toString()
		

		if (emailtaken) 
			{
				if(emailtaken?.isverified){
					return Response.json({
						success: false,
						message: "email is already taken"
					}, { status: 400 })
				}
				else{
					const hashedPassword = await bcrypt.hash(password, 10)
					emailtaken.password=hashedPassword
					emailtaken.CodeExpiry=new Date(Date.now()+3600000)
					await emailtaken.save();
				}
				
			}
		else {
			const hashedPassword = await bcrypt.hash(password, 10)
			const expiryDate = new Date()
			expiryDate.setHours(expiryDate.getHours() + 1)

			const newUser=new UserModel({
				username,
				email,
				password:hashedPassword,
				verifyCode,
				CodeExpiry:expiryDate,
				isverified: false,
				isAcceptingMessage: true,
				message:[]
			})
			await newUser.save()
		}

		const emailResponse=await sendVerificationEmail(username,email,verifyCode)
		return emailResponse.success?Response.json({sucess:true,message:"email  send sucessfully"},{status:200}):Response.json({sucess:false,message:"email could not send sucessfully"},{status:400})

	} catch (error) {
		console.error('error registering user', error)
		return Response.json({
			success: false,
			message: "Error registering user"
		}, {
			status: 500
		})
	}

}