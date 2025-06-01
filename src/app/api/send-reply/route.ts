import dbConnect from "@/lib/DbConnect";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import { Reply } from "@/Helpers/sendverificationEmail";

export async function POST(req: Request) {
	await dbConnect();
	const session = await getServerSession(authOptions)
	const user = session?.user
	const { message, email } = await req.json();
	try {
		if (!user) {
			throw new Error('user not found')
			return;
		}
		const result = await Reply(email, user?.username as string, message)
		return Response.json({
			success: true,
			messsage: "message sent successfully"
		},
			{
				status: 200
			})
	} catch (error) {
		console.error('error sending reply', error)
		return Response.json({
			success: false,
			messsage: "unexpected error occured"
		},
			{
				status: 500
			})
	}
}