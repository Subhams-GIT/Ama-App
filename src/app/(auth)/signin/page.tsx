"use client";
import React, {useEffect, useState} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {SubmitHandler, useForm} from "react-hook-form";
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
const page = () => {
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
      // Sign in with credentials
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      console.log("Sign-in response:", response);

      if (response?.error) {
        // Handle specific errors
        if (response.error === "CredentialsSignin") {
          toast.error("Login failed. Please check your email and password.");
        } else {
          toast.error(response.error);
        }
      } else if (response?.url) {
        // Update the session with additional data
        await update({
          ...session,
          user: {
            ...session?.user,
          },
        });

        // Redirect to the dashboard
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
      </div>
    </div>
  );
};

export default page;
