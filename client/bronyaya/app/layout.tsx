import "./globals.css";
import type { Metadata } from "next";
import TanstackProvider from "@/components/providers/tanstackProvider";
import Header from "@/components/header/header";



export const metadata: Metadata = {
  title: "Bronyaya",
  description: "Get your latest info..",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-text">
        <TanstackProvider>
          <Header/>
          {children}
          </TanstackProvider>
      </body>
    </html>
  );
}
