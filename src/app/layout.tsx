import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
          className={`${roboto.className} tracking-wide`}
        >
          <picture>
            <source
              srcSet="./background.webp"
              type="image/webp"
              className="hidden"
            />
            <img
              src="./background.jpg"
              alt="Hero"
              className="fixed left-0 top-0 -z-10 h-full w-full object-cover"
            />
          </picture>
          <Navbar />
          {children}
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </ClerkProvider>
  );
}
