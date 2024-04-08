import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/header";
import "../styles/global.css";

const inter = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Next Template",
  description: "Site description.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
