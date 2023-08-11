import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";
import React from "react";

interface IRegister {}

export const metadata: Metadata = {
  title: "Register",
};

const Register: React.FC<IRegister> = ({}) => {
  return (
    <div className="flex min-h-screen justify-center bg-gray-800 pt-10">
      <SignUp
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

export default Register;
