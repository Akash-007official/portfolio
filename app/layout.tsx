import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akash H — Software • AI • Automation",
  description:
    "Akash H — technology enthusiast building software, AI, and automation experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageTransition />
        {children}
      </body>
    </html>
  );
}