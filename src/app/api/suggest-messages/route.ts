import { createMistral } from '@ai-sdk/mistral';
import { generateText} from 'ai';

export const runtime = 'edge'

export async function GET() {
	const prompt = "Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous social messaging platform, like Qooh.me, and should be suitable for a diverse audience. Avoid personal or sensitive topics, focusing instead on universal themes that encourage friendly interaction. For example, your output should be structured like this: 'What’s a hobby you’ve recently started?||If you could have dinner with any historical figure, who would it be?||What’s a simple thing that makes you happy?'. Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment.";
	const mistral = createMistral({
		baseURL: "https://api.mistral.ai/v1",
		apiKey: process.env.MISTRAL_API_KEY
	})
	try {
		const  {text}  = await  generateText({
			model: mistral('mistral-large-latest'),
			prompt:prompt,
		});
		
		return Response.json({
			"text":text
		})
	}
	catch (error) {
		console.error('An unexpected error occured')
		throw error
	}
}