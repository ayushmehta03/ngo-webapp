import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider"
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from 'react-hot-toast'
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "Creative NGO",
  description: "Creative Educational and Social Welfare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          
          <ClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
       <Toaster position="top-center" reverseOrder={false} />

            {children}
            <Footer />
          </ThemeProvider>
          </ClerkProvider>
        </body>
      </html>
    </>
  );
}
