"use client";
import {useParams} from "next/navigation";
import {Button} from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Skeleton } from "@/components/ui/skeleton";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {MessageSchema} from "@/schemas/messageSchema";
import {Textarea} from "@/components/ui/textarea";
import axios, {AxiosError} from "axios";
import {z} from "zod";
import {Apiresponse} from "@/types/ApiResponse";
import {toast} from "sonner";
import {Loader2} from "lucide-react";
const page = (re: Request) => {
  const [isLoading, setisloading] = useState(false);
  const params = useParams<{username: string}>();
  const username = params.username;
  const [messages, setmessages] = useState<string[]>([]);
  const form = useForm({
    resolver: zodResolver(MessageSchema),
  });

  const getsuggestedMessages = async () => {
    setmessages([]);
    const suggestedmessages = await axios.get("/api/suggest-messages");
    const msg = suggestedmessages.data.text;
    setmessages(msg.split("||"));
  };
  useEffect(() => {
    
    getsuggestedMessages();
  }, []);

  const messageContent = form.watch("content");

  const onSubmit = async (data: z.infer<typeof MessageSchema>) => {
    try {
      const response = await axios.post<Apiresponse>("/api/send-message", {
        username,
        message: data.content,
      });
      if (response.data.message === "user not found") {
        toast.error("user not found");
      } else if (response.data.message === "user not accepting message") {
        toast.message("user not accepting messages!");
      } else {
        toast.success("message send successfully");
      }
      form.resetField("content");
    } catch (error) {
      const axioserror = error as AxiosError;
      toast.error(axioserror.message);
      return;
    }
  };
  return (
    <div className="container mx-auto my-8 p-6 bg-white rounded max-w-4xl">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Public Profile Link
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="content"
            render={({field}) => (
              <FormItem>
                <FormLabel>Send Anonymous Message to @{username}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write your anonymous message here"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center">
            {isLoading ? (
              <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button type="submit" disabled={isLoading || !messageContent}>
                Send It
              </Button>
            )}
          </div>
        </form>
      </Form>

      <div className="my-[2rem] mx-auto">
        <Button className="py-2 px-1 my-3" onClick={getsuggestedMessages}>Suggest Messages</Button>
        <section
          className="font-semibold text-lg
		"
        >
          Click on any Message
        </section>

        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold">Messages</h3>
          </CardHeader>
          <CardContent className="flex flex-col space-y-4">
            {messages && messages.length > 0 ? (
              messages.map((message, index) => <Card className="cursor-pointer h-[2rem] rounded-md" key={index} onClick={()=>form.setValue('content',message)}>{message}</Card>)
            ) : (
              <Skeleton  className="h-4 w-[250px]"/>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;
