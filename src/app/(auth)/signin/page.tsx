"use client";
import React, {useEffect, useState} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import { useForm} from "react-hook-form";
import * as z from "zod";
import {toast} from "sonner";
import { signInSchema } from "@/schemas/signinSchema";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Loader2} from "lucide-react";
import { FaGoogle } from "react-icons/fa";
const Page = () => {
  const [issubmitting, setisSubmitting] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  
  const { data:session, update } = useSession();
  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
    const { email, password } = data;
   
    setisSubmitting(true);

    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      console.log("Sign-in response:", response);

      if (response?.error) {
        if (response.error === "CredentialsSignin") {
          toast.error("Login failed. Please check your email and password.");
        } else {
          toast.error(response.error);
        }
      } else if (response?.url) {
        await update({
          ...session,
          user: {
            ...session?.user,
          },
        });
        router.replace("/dashboard");
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      toast.error("Sign-in failed. Please try again.");
    } finally {
      setisSubmitting(false);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
            Join True Feedback
          </h1>
          <p className="mb-4">Sign In to start your anonymous adventure</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      
            <FormField
              name="email"
              control={form.control}
              render={({field}) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <Input {...field} name="email" />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="password"
              control={form.control}
              render={({field}) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" {...field} name="password" />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={issubmitting}>
              {issubmitting? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
        </Form>
         <div className=" flex content-center items-center">
                
                  <button
                    onClick={() => signIn("google",{callbackUrl:'/dashboard'})}
                    className="flex items-center justify-center w-full gap-3 px-4 py-3 text-sm font-medium text-gray-900 transition-colors bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-500"
                  >
                    <FaGoogle className="w-5 h-5" />
                    <span>Sign in with Google</span>
                  </button>
                </div>
      </div>
    </div>
  );
};

export default Page;
