import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/navbar";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "../components/footer";
import Image from "next/image";

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
          className={`${roboto.className} tracking-wide`}
        >
          <Image
            src="/background.webp"
            alt="Hero"
            priority={true}
            className="fixed left-0 top-0 -z-10 h-full w-full object-cover"
            width={100000}
            height={100000}
          />
          <div className="flex h-screen flex-col content-between justify-between">
            <Navbar />
            {children}
            <Footer />
          </div>
          <ToastContainer />
        </body>
      </html>
    </ClerkProvider>
  );
}
