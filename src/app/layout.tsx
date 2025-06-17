import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Navigation from "@/components/navigation";
import Providers from "@/app/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Umím první pomoc",
  description: "První český vyhledávač vzdělávání v první pomoci",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh flex flex-col`}
      >
        <Providers>
          <Navigation />
          <div className="flex-1 flex items-center justify-center px-12 bg-background-grey">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
