import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Providers from "@/lib/store/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type BaseLayoutProps = {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
};

export default function BaseLayout({
  children,
  header,
  footer,
}: BaseLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh flex flex-col`}
      >
        <Providers>
          {header}
          <main className="flex-1 flex items-center justify-center">
            {children}
          </main>
          {footer}
        </Providers>
      </body>
    </html>
  );
}
