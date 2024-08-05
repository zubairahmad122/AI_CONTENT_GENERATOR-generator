import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Head from "next/head"; // Importing Head component for SEO

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Content Generator - Create High-Quality Content Effortlessly</title>
        <meta name="description" content="AI Content Generator helps you create high-quality articles, blog posts, and social media content with ease. Join us today to unlock the potential of AI-driven writing!" />
        <meta name="keywords" content="AI content generator, AI writing, article generator, blog post generator, social media content, content creation, AI technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="h-screen text-white home-img gap-2 flex flex-col w-full items-center justify-center text-center bg-cover bg-center">
        <h2 className="h1 max-w-[1000px]">Welcome to AI Content Generator</h2>
        <p className="max-w-[600px]">Welcome to AI Content Generator, your solution for creating high-quality content with ease. Our AI technology helps you generate articles, blog posts, and social media content in just a few clicks. Say goodbye to writer's block and enjoy seamless content creation. Join us today to unlock the potential of AI-driven writing!</p>
        <button className="button"><SignInButton /></button>
      </div>
    </>
  );
}
