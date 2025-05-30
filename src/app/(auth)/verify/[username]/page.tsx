'use client'
import {Button} from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {zodResolver} from "@hookform/resolvers/zod";
import axios from "axios";
import {useParams, useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import * as z from "zod";
import {verifySchema} from "@/schemas/verifySchema";
import { toast } from "sonner";

const Page = () => {
  const router = useRouter();
  const param = useParams<{username: string}>();
  const form = useForm({
	resolver:zodResolver(verifySchema)
  });

  const onSubmit=async (data:z.infer<typeof verifySchema>)=>{
	try {
		const reponse=await axios.post('/api/verify-code',{
			username:param.username,
			code:data.code
		})
		toast(`${reponse.data.message}`)
		router.replace('/signin');
	} catch (error) {
		console.error(error)
		toast('An error occurred. Please try again.');
		}
	}
  return (
	<div className="flex justify-center items-center min-h-screen bg-gray-100">
	<div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
	  <div className="text-center">
		<h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
		  Verify Your Account
		</h1>
		<p className="mb-4">Enter the verification code sent to your email</p>
	  </div>
	  <Form {...form}>
		<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
		  <FormField
			name="code"
			control={form.control}
			render={({ field }) => (
			  <FormItem>
				<FormLabel>Verification Code</FormLabel>
				<Input {...field} />
				<FormMessage />
			  </FormItem>
			)}
		  />
		  <Button type="submit">Verify</Button>
		</form>
	  </Form>
	</div>
  </div>
  );
}

export default Page;
