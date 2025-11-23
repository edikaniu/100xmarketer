import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { SidebarProvider } from "@/contexts/SidebarContext";
import MainContent from "@/components/MainContent";

export const metadata: Metadata = {
  title: "100x Marketer",
  description: "AI Marketing Tools & Resources",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={` antialiased`}
        >
          <SidebarProvider>
            <div className="flex min-h-screen bg-gray-50">
              <Sidebar />
              <MainContent>
                {children}
              </MainContent>
            </div>
          </SidebarProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
