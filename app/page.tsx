import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Head from "next/head"; // Importing Head component for SEO
import Auth from "./dashboard/_components/Auth";

export default function Home() {


  return (
    <>
      <Head>
        <title>AI Content Generator - Create High-Quality Content Effortlessly</title>
        <meta name="description" content="AI Content Generator helps you create high-quality articles, blog posts, and social media content with ease. Join us today to unlock the potential of AI-driven writing!" />
        <meta name="keywords" content="AI content generator, AI writing, article generator, blog post generator, social media content, content creation, AI technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Auth />
      <div className="h-screen text-white home-img gap-2 flex flex-col w-full items-end justify-center text-center bg-cover bg-center px-7">
       <div className="content flex gap-5 items-center justify-center px-2 sm:px-10 flex-col w-full xl:w-[900px]">
       <h2 className=" text-4xl sm:text-6xl">Welcome to AI Content Generator</h2>
        <p className="">Welcome to AI Content Generator, your solution for creating high-quality content with ease. Our AI technology helps you generate articles, blog posts, and social media content in just a few clicks. Say goodbye to writer's block and enjoy seamless content creation. Join us today to unlock the potential of AI-driven writing!</p>
        <button className="button mt-5"><SignInButton /></button>
       </div>
      </div>
    </>
  );
}
