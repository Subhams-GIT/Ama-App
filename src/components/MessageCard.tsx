'use client'
import { toast } from 'sonner';
import React from 'react';
import axios, { AxiosError } from 'axios';
import dayjs from 'dayjs';
import { X } from 'lucide-react';
import { Message } from '@/model/User.model';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from './ui/button';
import { Apiresponse } from '@/types/ApiResponse';
import { Input } from './ui/input';

type MessageCardProps = {
  message: Message;
  reply:string;
  setreply:(reply:string)=>void;
  onMessageDelete: (messageId: string) => void;
};

export function MessageCard({ message, onMessageDelete ,reply,setreply}: MessageCardProps) {

const sendreply=async()=>{
  try {
    const result=await axios.post('/api/send-reply',{
    message:reply,
    email:message.email
  })
  if(result)
  {
    setreply('')
    toast.success('reply send successfully')
  }
  } catch (error) {
    console.error(error)
  }
  

}
  const handleDeleteConfirm = async () => {
    try {
      const response = await axios.delete<Apiresponse>(
        `/api/message-delete/${message._id}`
      );
      console.log(response)
      toast(`${response.data.message}`);
      onMessageDelete(message._id as string);

    } catch (error) {
      const axiosError = error as AxiosError<Apiresponse>;
      toast(`${axiosError.response?.data.message ?? "Failed to delete message"}`);
    } 
  };

  return (
    <Card className="card-bordered">
      <CardHeader>
        <div className="flex flex-col justify-between items-center">
          <CardTitle>{message.content}</CardTitle>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant='destructive'>
                <X className="w-5 h-5" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  this message.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction onClick={handleDeleteConfirm}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div>
          <Input className=' h-10 w-full shadow-md ' onChange={(e)=>setreply(e.target.value)}/>
          <button onClick={sendreply} className='bg-gray-900 rounded-md px-2 py-1 mt-1 text-white'>send reply</button>
          </div>
        <div className="text-sm">
          {dayjs(message.createdAt).format('MMM D, YYYY h:mm A')}
        </div>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
}