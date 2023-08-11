import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Navbar from "../components/navbar";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "../components/footer";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vkusotiiki",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          suppressHydrationWarning={true}
          className={`${roboto.className} body-background tracking-wide`}
        >
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
