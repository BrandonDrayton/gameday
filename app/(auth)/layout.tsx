import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Roboto } from "next/font/google";
import "../globals.css";
export const metadata = {
  title: "Threads",
  description: "A Next.js 13 Meta Sports Application",
};
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${roboto.className} bg-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
