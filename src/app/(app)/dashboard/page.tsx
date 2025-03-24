"use client";
import React, {use, useCallback, useEffect, useState} from "react";
import {Separator} from "@/components/ui/separator";
import {Message} from "@/model/User.model";
import {toast} from "sonner";
import {useSession} from "next-auth/react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {isAcceptingMessage} from "@/schemas/acceptMessageSchema";
import axios, {AxiosError} from "axios";
import {Apiresponse} from "@/types/ApiResponse";
import { User } from "next-auth";
import { MessageCard } from "@/components/MessageCard";
import { Loader2, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
const page = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setisLoading] = useState(false);
  const [isSwitchLoading, setisSwitchLoading] = useState(false);
  const handleDeleteMessage = (messageId: string) => {
	console.log(messageId)
    setMessages(messages.filter((message) => message._id != messageId));
  };

  const {data: session} = useSession();
  const form = useForm({
    resolver: zodResolver(isAcceptingMessage),
  });

  const {register, watch, setValue} = form;
  const acceptMessages = watch("identifier");

  const fetchAccepMessage = useCallback(async () => {
    setisSwitchLoading(true);
    try {
      const response = await axios.get<Apiresponse>("/api/accept-message");
      setValue("identifier", response.data.isAcceptingMessage);
    } catch (error) {
      const axiosError = error as AxiosError;
      toast(`${axiosError.response?.data} || "failed to fetch message settigs`);
    } finally {
      setisSwitchLoading(false);
    }
  }, [setValue]);

  const fetchMessages = useCallback(async (refresh: boolean = false) => {
    setisLoading(true);
    setisSwitchLoading(false);
    try {
      const response = await axios.get<Apiresponse>("/api/get-messages");
      setMessages(response.data.messages || []);
      if (refresh) toast("showing latest messages");
    } catch (error) {
      const axiosError = error as AxiosError;
      toast(`${axiosError.response?.data} || "failed to fetch latest messages`);
    }finally {
		setisLoading(false)
		setisSwitchLoading(false);
	  }
  }, [setisLoading,setMessages]);

  useEffect(()=>{
	if(!session || !session.user) 
	{
		return ;
	}
	fetchAccepMessage();
	fetchMessages();

  },[session,fetchAccepMessage,fetchMessages,setValue])

  const handleSwitchChange=async ()=>{
	try {
		const response=await axios.post<Apiresponse>('/api/accept-message',{
			data:{
				acceptMessages:!acceptMessages
			}
		})
		setValue('identifier',!acceptMessages)
		toast('status changed')
	} catch (error) {
		const axiosError = error as AxiosError;
		console.log("error",axiosError)
      toast(`${axiosError.response?.data} || "failed to fetch message settings`);
	}
  }

  if(!session || !session.user)
  {
	return <></>
  }
  const { username } = session.user as User;

  const baseUrl = `${window.location.protocol}//${window.location.host}`;
  const profileUrl = `${baseUrl}/u/${username}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(profileUrl);
    toast('URL Copied!');
  };
  return (
	<div className="my-8 mx-4 md:mx-8 lg:mx-auto p-6 bg-white rounded w-full max-w-6xl">
	<h1 className="text-4xl font-bold mb-4">User Dashboard</h1>

	<div className="mb-4">
	  <h2 className="text-lg font-semibold mb-2">Copy Your Unique Link</h2>{' '}
	  <div className="flex items-center">
		<input
		  type="text"
		  value={profileUrl}
		  disabled
		  className="input input-bordered w-full p-2 mr-2"
		/>
		<Button onClick={copyToClipboard}>Copy</Button>
	  </div>
	</div>

	<div className="mb-4">
	  <Switch
		{...register('identifier')}
		checked={acceptMessages}
		onCheckedChange={handleSwitchChange}
		disabled={isSwitchLoading}
	  />
	  <span className="ml-2">
		Accept Messages: {acceptMessages ? 'On' : 'Off'}
	  </span>
	</div>
	<Separator />

	<Button
	  className="mt-4"
	  variant="outline"
	  onClick={(e) => {
		e.preventDefault();
		fetchMessages(true);
	  }}
	>
	  {loading ? (
		<Loader2 className="h-4 w-4 animate-spin" />
	  ) : (
		<RefreshCcw className="h-4 w-4" />
	  )}
	</Button>
	<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
	  {messages.length > 0 ? (
		messages.map((message, index) => (
		  <MessageCard
			key={message._id as string}
			message={message}
			onMessageDelete={handleDeleteMessage}
		  />
		))
	  ) : (
		<p>No messages to display.</p>
	  )}
	</div>
  </div>
  );
};

export default page;
