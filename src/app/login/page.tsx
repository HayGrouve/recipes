import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";
import React from "react";

interface ILogin {}

export const metadata: Metadata = {
  title: "Login",
};

const Login: React.FC<ILogin> = ({}) => {
  return (
    <div className="flex min-h-screen justify-center bg-gray-800 pt-10">
      <SignIn
        appearance={{
          variables: {
            colorPrimary: "#3b82f6",
            borderRadius: "0.3",
          },
        }}
      />
    </div>
  );
};

export default Login;
