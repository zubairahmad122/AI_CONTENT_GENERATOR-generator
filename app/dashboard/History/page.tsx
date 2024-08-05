'use client'
import Templates from '@/app/(data)/Templates';
import { Button } from '@/components/ui/button';
import { db } from '@/utlis/db';
import { AIOutput } from '@/utlis/schema';
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm';
import { Copy } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
function Page() {
  const { user } = useUser();
  const [history, setHistory] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      if (user?.primaryEmailAddress?.emailAddress) {
        try {
          setLoading(true);
          const historyList = await db
            .select()
            .from(AIOutput)
            .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress));
          setHistory(historyList);
        } catch (error) {
          console.error("Failed to fetch history:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    getData();
  }, [user]);

  const copyText = (aiOutput: any) => {
    navigator.clipboard.writeText(aiOutput);
    toast.success("Copied Successfully");
  }

  if (loading) {
    return <div className="flex justify-center items-center h-screen"><p className='animate-spin w-10 h-10 bg-white rounded-xl flex items-center justify-center text-white'> <p className='p-4 bg-black rounded-full'></p> </p></div>; // Replace with your loading spinner
  }

  return (
    <div className='p-6 main-his overflow-x-scroll no-scrollbar rounded-lg m-6'>
      <div>
        <div className='grid gap-9 no-scrollbar min-w-[1100px] overflow-x-scroll p-5 border-b grid-cols-4'>
          <p className='text-lg font-bold'>Title</p>
          <p className='text-lg font-bold'>AI Response</p>
          <p className='text-lg font-bold'>Date</p>
          <p className='text-lg font-bold'>Copy</p>
        </div>
        {history?.map((item: any) => (
          <div key={item.id} className='grid no-scrollbar gap-9 min-w-[1100px] overflow-x-scroll border-b-2 grid-cols-4'>
            <div className='flex p-5 items-start gap-2'>
              <Image 
                src={Templates?.find(template => template.slug === item?.slug)?.icon || '/path/to/default/icon.png'}
                alt='icon'
                width={25}
                height={25}
              />
              <p className='w-full'>
                {item.slug}
              </p>
            </div>
            <p className='w-full text-sm p-5'>{item?.aiResponse.slice(0, 100)}</p>
            <p className='w-full p-5'>{item?.createdAt}</p>
            <Button onClick={() => copyText(item.aiResponse)} className='flex max-w-[100px] mt-5 items-center gap-2'>
              <Copy className='w-4 h-4' /> Copy 
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
