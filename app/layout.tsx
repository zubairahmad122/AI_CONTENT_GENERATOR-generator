import type { Metadata } from "next";
import { Inter,Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes';

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: 'AI Content Generator | Create Engaging Content Effortlessly',
  description: 'Unleash the power of AI with our content generator. Create high-quality, engaging content for your website, blog, or social media in minutes.',
  openGraph: {
    type: 'website',
    url: 'https://www.yourcontentgenerator.com/', // Replace with your website URL
    title: 'AI Content Generator | Create Engaging Content Effortlessly',
    description: 'Transform your content creation process with our AI-powered content generator. Effortlessly produce high-quality, engaging content for any platform.',
    images: [
      {
        url: 'https://images.pexels.com/photos/123456/pexels-photo-123456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Replace with a relevant image URL
        width: 1200,
        height: 630,
        alt: 'AI Content Generator Open Graph Image'
      }
    ],
    'theme-color': '#ffffff',
    'color-scheme': 'light dark only',
  },
  twitter: {
    cardType: 'summary_large_image',
    'twitter-image': 'https://images.pexels.com/photos/123456/pexels-photo-123456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' // Replace with a relevant image URL
  }
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider  appearance={{
      baseTheme: [dark]
    }} >
    <html lang="en">

      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
