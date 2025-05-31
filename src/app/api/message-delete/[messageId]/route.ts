
import dbConnect from "@/lib/DbConnect";
import { UserModel } from "@/model/User.model";
import { getServerSession} from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import { NextRequest } from "next/server";

interface RouteParams{
	params:{
		messageId:string
	}
	
}
export async function DELETE( req: NextRequest,{ params}: RouteParams) {

	const session = await getServerSession(authOptions)
	const user = session?.user
	const messageid=params.messageId
	await dbConnect();
	console.log(messageid)
	if (!session || !user) {
		return Response.json({
			success: false,
			message: "not authenticated"
		}, {
			status: 400
		})
	}
	try {
		const userdetails = await UserModel.findByIdAndUpdate(
			{ _id: user._id }, // Find the user by their ID
			{ $pull: { message: { _id: messageid } } }, // Remove the message with the specified ID
			{ new: true } // Return the updated user document
		  );
		if(!userdetails?.isModified)
		{
			return Response.json({
				success: false,
				message: "not updated"
			}, {
				status: 404
			})
		}
		else return Response.json({
			success: true,
			message: "deleted sucessfully"
		}, {
			status: 200
		})

	} catch (e) {
		console.error(e)
		return Response.json({
			success: false,
			message: "error deleting message"
		}, {
			status: 500
		})
	}
}