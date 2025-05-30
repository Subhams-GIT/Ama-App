import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import dbConnect from "@/lib/DbConnect";
import { UserModel } from "@/model/User.model";
import { User } from "next-auth";


export async function POST(req: Request) {
	await dbConnect();
	const session = await getServerSession(authOptions)
	const user = session?.user as User

	if (!user || !session?.user) {
		return Response.json({
			success: false,
			messsage: "error verifying user"
		},
			{
				status: 500
			})
	}

	const userId=user._id;
	const {acceptMessage}=await req.json();
	try {
		const updatedUser=await UserModel.findByIdAndUpdate(userId,{isAcceptingMessage:acceptMessage},{new:true})
		if(!updatedUser)
		{
			return Response.json({
				success: false,
				messsage: "user not found"
			},
				{
					status: 401
				})
		}
		return Response.json({
			success: true,
			messsage: "updated user status"
		},
			{
				status: 200
			})
	} catch (error) {
		console.error(error)
		console.log('failed to update user status ')
		return Response.json({
			success: false,
			messsage: "failed to update user status"
		},
			{
				status: 500
			})
	}

}

export async function GET(req:Request)
{
	await dbConnect();
	const session = await getServerSession(authOptions)
	const user = session?.user as User

	if (!user || !session?.user) {
		return Response.json({
			success: false,
			messsage: "error verifying user"
		},
			{
				status: 500
			})
	}

	const userId=user._id;

	try {
		const foundUser=await UserModel.findById(userId);
	if(!foundUser){
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
		isAcceptingMessage:foundUser.isAcceptingMessage
	},
		{
			status: 200
		})
	} catch (error) {
		console.log(error)
		return Response.json({
			success: false,
			message:"error in getting message acceptance status"
		},
			{
				status: 500
			})
	}
	
	
}