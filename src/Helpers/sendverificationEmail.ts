import { Resend } from "resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { Apiresponse } from "@/types/ApiResponse";
import ReplyFunction from "../../emails/Reply";
import { response } from "@/types/ApiResponse";
const resend=new Resend(process.env.RESEND_API_KEY)
export async function sendVerificationEmail(email:string,username:string,verifyCode:string):Promise<Apiresponse>{
	try {
		  resend.emails.send({
			from: 'Acme <onboarding@resend.dev>',
			to: 'subhamkumardas4444@gmail.com',
			subject: 'Mstry message - Verification code',
			react: VerificationEmail({ username: email,otp:verifyCode }),
		  }).then(data=>{
			console.log(data)
			  return {success:true,message:"verfication email send sucessfully", isAcceptingMessage: false, messages: []}
		  }).catch(error=>{
			console.error(error)
		  })
		  return {success:true,message:"verfication email send sucessfully", isAcceptingMessage: false, messages: []}
	} catch (error) {
		console.error("error sending verification email",error)
		return {success:false,message:"failed to send verification email", isAcceptingMessage: false, messages: []}
	}
}
export async function Reply(email:string,username:string,reply:string):Promise<response>{
	try {
		  resend.emails.send({
			from: 'Acme <onboarding@resend.dev>',
			to: 'subhamkumardas4444@gmail.com',
			subject:`reply form ${username}`,
			react: ReplyFunction({ username: email,reply:reply }),
		  }).then(data=>{
			console.log(data)
			  return {success:true,message:"reply send sucessfully"}
		  }).catch(error=>{
			console.error(error)
		  })
		  return {success:true,message:"reply send sucessfully"}
	} catch (error) {
		console.error("error sending reply",error)
		return {success:false,message:"failed to send reply"}
	}
}