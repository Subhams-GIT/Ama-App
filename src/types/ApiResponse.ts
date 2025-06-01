import { Message } from "@/model/User.model";

export interface Apiresponse{
	success:boolean,
	message:string,
	isAcceptingMessage:boolean,
	messages:Array<Message>
}
export interface response{
	success:boolean,
	message:string,
}
