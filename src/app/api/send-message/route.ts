import dbConnect from "@/lib/DbConnect";
import { UserModel, User } from "@/model/User.model";
import { Message } from "@/model/User.model";

export async function POST(req: Request) {
	await dbConnect();
	const { username, message  } = await req.json();
	try {
		const user = await UserModel.findOne({ username: username })
		if (!user) {
			return Response.json({
				success: false,
				messsage: "user not found"
			},
				{
					status: 404
				})
		}
		if (!user.isAcceptingMessage) {
			return Response.json({
				success: false,
				messsage: "user not accepting message"
			},
				{
					status: 403
				})
		}

		const newMessage = { content: message, createdAt: new Date() }
		user.message?.push(newMessage as Message)
		await user.save()
		return Response.json({
			success: true,
			messsage: "message sent successfully"
		},
			{
				status: 200
			})
	} catch (error) {
		console.error('error sending messages', error)
		return Response.json({
			success: false,
			messsage: "unexpected error occured"
		},
			{
				status: 500
			})
	}
}