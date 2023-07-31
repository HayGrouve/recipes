import { SignIn } from "@clerk/nextjs";
import React from "react";

interface ILogin {}

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
