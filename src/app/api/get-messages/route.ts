import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import dbConnect from "@/lib/DbConnect";
import { UserModel } from "@/model/User.model";
import { User } from "next-auth";
import mongoose from "mongoose";

export async function GET(req:Request)
{
	await dbConnect();
	const session = await getServerSession(authOptions)
	const user = session?.user 
	console.log('session',session)
	if (!user || !session?.user) {
		return Response.json({
			success: false,
			messsage: "not authenticated "
		},
			{
				status: 500
			})
	}

	const userId=new mongoose.Types.ObjectId(user._id);
	
	try {
		const user=await UserModel.aggregate([
			{$match:{_id:userId}},
			{$unwind:{path:'$message',preserveNullAndEmptyArrays:true}},
			 {$sort:{'message.createdAt':-1}},
			{$group:{_id:'$_id',message:{$push:'$message'}}}
		]).exec()
		console.log(user)
		if(!user || user.length==0)
		{
			return Response.json({
				success: false,
				messsage: "user not found"
			},
				{
					status: 404
				})
		}
		return Response.json({
			success: true,
			messages: user[0].message
		},
		{
				status: 200
		})
	} catch (error) {
		
	}

}