'use client';

import { LoaderCircleIcon, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay';
import messages from '../../../messages.json';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session?.user) {
      router.replace('/dashboard');
    }
  }, [session, router]);

  if (status === 'loading' || status === 'authenticated') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <LoaderCircleIcon className="animate-spin text-white h-8 w-8" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-800 text-white">
      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 md:px-24 py-12">
        <section className="text-center mb-12 max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold">
            Dive into the World of Anonymous Feedback
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-300">
            True Feedback - Where your identity remains a secret.
          </p>
        </section>

        {/* Carousel */}
        <div className="w-full max-w-xl">
          <Carousel plugins={[Autoplay({ delay: 2000 })]}>
            <CarouselContent>
              {messages.map((message, index) => (
                <CarouselItem key={index} className="p-4">
                  <Card className="bg-gray-900 text-white">
                    <CardHeader>
                      <CardTitle>{message.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col md:flex-row items-start gap-3">
                      <Mail className="flex-shrink-0 mt-1" />
                      <div>
                        <p>{message.content}</p>
                        <p className="text-xs text-gray-400 mt-2">
                          {message.received}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center p-6 bg-gray-900 text-sm text-gray-400 my-auto">
        © 2023 True Feedback. All rights reserved.
      </footer>
    </div>
  );
}
