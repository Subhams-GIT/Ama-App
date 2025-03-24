import dbConnect from "@/lib/DbConnect";
import { UserModel } from "@/model/User.model";
import { z } from "zod";
import { UsernameSchema } from "@/schemas/signUpSchema";

export async function POST(req:Request){
	await dbConnect();

	try {
		const {username,code}=await req.json();

		const decodedUsername=decodeURIComponent(username)
		const user=await UserModel.findOne({username:decodedUsername})
		if(!user)
		{
			return Response.json({success:false,message:"user not found"},{status:500})
		}

		const isCodeValid=user.verifyCode=== code
		const isCodeNotExpired=new Date(user.CodeExpiry)>new Date()

		if(isCodeValid && isCodeNotExpired)
		{
			user.isverified=true;
			await user.save()

			return Response.json({
				success:true,
				message:"Accound Verified Successfully"
			},
		{status:200})
		}
		else if (!isCodeNotExpired) {
			return Response.json(
			  {
				success: false,
				message:
				  'Verification code has expired. Please sign up again to get a new code.',
			  },
			  { status: 400 }
			);
		  } else {
			return Response.json(
			  { success: false, message: 'Incorrect verification code' },
			  { status: 400 }
			);
		  }
	} catch (error) {
		return Response.json({success:false,message:"Error verifying User"},{status:400})
	}
}