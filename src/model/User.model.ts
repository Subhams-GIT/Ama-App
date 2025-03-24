import mongoose, { Schema, Document, models } from "mongoose";

export interface Message extends Document {
	content: string;
	createdAt: Date;
}

export interface User extends Document{
	username:string;
	email:string;
	password:string;
	verifyCode:string;
	CodeExpiry:Date;
	isverified:boolean;
	isAcceptingMessage:boolean;
	message?:Message[];
}

/* defined the custom schema for message */
const MessageSchema: Schema<Message> = new Schema({
	content: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		required: true,
		default: Date.now()
	}
})
/* defined the custom schema for user */
const UserSchema:Schema<User> = new Schema({
	username:{
		type:String,
		required:[true,"username is required"],
		trim:true,
		unique:true
	},
	email:{
		type:String,
		required:true,
		trim:true,
		unique:true,
		match:[/.+@.+\..+/,'please use a valid email regex']
	},
	password:{
		type:String,
		required:[true,"password is required"],
	},
	verifyCode:{
		type:String,
		required:[true,"code is required"],
	},
	CodeExpiry:{
		type:Date,
		required:true
	},
	isverified:{
		type:Boolean,
		required:true,
		default:false
	},
	isAcceptingMessage:{
		type:Boolean,
		required:true
	},
	message:[MessageSchema]
})

export const UserModel=(models.User as mongoose.Model<User>)|| mongoose.model<User>("User",UserSchema)