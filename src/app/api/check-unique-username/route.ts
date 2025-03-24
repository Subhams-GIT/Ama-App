import { z } from 'zod'
import { UsernameSchema } from '@/schemas/signUpSchema'
import dbConnect from '@/lib/DbConnect'
import { NextRequest } from 'next/server'
import { UserModel } from '@/model/User.model'

const UsernamequerySchema = z.object({
	username: UsernameSchema
})

export  async function GET(req: NextRequest) {
	await dbConnect();
	try {
		const { searchParams } = new URL(req.url)
		const queryParams = {
			username: searchParams.get('username')
		}
		const result = UsernamequerySchema.safeParse(queryParams)
		if (!result.success) {
			const error = result.error.format().username?._errors || [];
			return Response.json({
				success: false,
				message: error?.length > 0 ? error.join(', ') : "Invalid query parameters",
			}, { status: 200})
		}

		const {username}=result.data;
		const isVerifiedUser=await UserModel.findOne({username,isverified:true})
		if(isVerifiedUser){
			return Response.json({
				success: false,
				message:"username is already taken"
			},{status:200})
		}
		return Response.json({
			success: true,
			message:"username is unique"
		},{status:200})
		
	} catch (error) {
		console.error("error checking username:", error);
		return Response.json({
			success: false,
		})
	}
}