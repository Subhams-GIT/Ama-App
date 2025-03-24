import { z } from 'zod'

export const isAcceptingMessage= z.object({
	identifier:z.boolean()
})

