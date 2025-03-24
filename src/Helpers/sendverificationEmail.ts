import { Resend } from "resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { Apiresponse } from "@/types/ApiResponse";

const resend=new Resend(process.env.RESEND_API_KEY)
export async function sendVerificationEmail(email:string,username:string,verifyCode:string):Promise<Apiresponse>{
	try {
		const { data, error } = await resend.emails.send({
			from: 'Acme <onboarding@resend.dev>',
			to: username.toString(),
			subject: 'Mstry message - Verification code',
			react: VerificationEmail({ username: email,otp:verifyCode }),
		  });
		  console.log(username)
		return {success:true,message:"verfication email send sucessfully"}
	} catch (error) {
		console.error("error sending verification email",error)
		return {success:false,message:"failed to send verification email"}
	}
}