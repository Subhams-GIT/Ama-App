import { z } from 'zod'


export const UsernameSchema=z.string().min(3, "username must include atleast 3 characters").max(10, "username should not exceed 10 characters").regex(/^[a-zA-Z0-9]+$/, "username must not contain special characters")
export const signUp = z.object({
	username: UsernameSchema,
	email:z.string().min(11).max(30).regex(/.+@.+\..+/,"enter a valid email"),
	password:z.string().min(8,"password must be at least 8 characters").max(10),
})

	