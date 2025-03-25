"use client";
import React, {useEffect, useState} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {SubmitHandler, useForm} from "react-hook-form";
import {FaGoogle} from "react-icons/fa";
import * as z from "zod";
import Link from "next/link";
import {useDebounceCallback, useDebounceValue} from "usehooks-ts";
import {toast} from "sonner";
import {signUp} from "@/schemas/signUpSchema";
import axios, {Axios, AxiosError} from "axios";
import {Apiresponse} from "@/types/ApiResponse";
import {redirect, useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Loader2} from "lucide-react";
import { signIn } from "next-auth/react";
const page = () => {
  const [username, setusername] = useState("");
  const [usernameMessage, setusernameMessage] = useState("");
  const [loading, setloading] = useState(false);
  const [issubmitting, setisSubmitting] = useState(false);
  const debouncedUsername = useDebounceCallback(setusername, 500);
  const router = useRouter();
  const form = useForm<z.infer<typeof signUp>>({
    resolver: zodResolver(signUp),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    const checkusername = async () => {
      if (username) {
        setloading(true);
        setusernameMessage("");
        try {
          const response = await axios.get(
            `/api/check-unique-username?username=${username}`
          );
          console.log(response);
          setusernameMessage(response.data.message);
        } catch (error: any) {
          console.log(error);
          setusernameMessage("error checking username");
        } finally {
          setloading(false);
        }
      }
    };
    checkusername();
  }, [username]);

  const onSubmit = async (data: z.infer<typeof signUp>) => {
    setisSubmitting(true);
    try {
      const response = await axios.post<Apiresponse>("/api/signup", data);
      toast(`${response.data.message}`);
      router.replace(`/verify/${username}`);
    } catch (error) {
      toast("SignUp Failed");
      console.error("error in signup", error);
    } finally {
      setisSubmitting(false);
    }
  };
  console.log(usernameMessage);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
            Join True Feedback
          </h1>
          <p className="mb-4">Sign up to start your anonymous adventure</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              name="username"
              control={form.control}
              render={({field}) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <Input
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      debouncedUsername(e.target.value);
                    }}
                  />
                  {loading && <Loader2 className="animate-spin" />}
                  {!loading && usernameMessage && (
                    <p
                      className={`text-sm ${
                        usernameMessage === "username is unique"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {usernameMessage}
                    </p>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({field}) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <Input {...field} name="email" />
                  <p className="text-muted text-gray-900 text-sm">
                    We will send you a verification code
                  </p>
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
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : (
                "Sign Up"
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
        <div className="text-center mt-4">
          <p>
            Already a member?{" "}
            <Link href="/signin" className="text-blue-600 hover:text-blue-800">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
