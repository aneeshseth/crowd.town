"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import Header from "./components/header";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Theme
          accentColor="crimson"
          grayColor="sand"
          radius="large"
          scaling="95%"
        >
          <RecoilRoot>
            <div className="bg-gradient-to-r from-pink-100 to-blue-300 md:w-screen md:h-screen w-full h-full">
              {children}
            </div>
          </RecoilRoot>
        </Theme>
      </body>
    </html>
  );
}
