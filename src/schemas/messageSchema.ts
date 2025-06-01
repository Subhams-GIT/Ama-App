import { z } from 'zod'

export const MessageSchema= z.object({
	content:z.string().min(10,"min message length is 10 ")
	.max(300,"max length is 300 characters"),
	email:z.string().min(8,'min length is 8 ')
})

