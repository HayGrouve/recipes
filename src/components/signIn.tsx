"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SignIn, SignUp } from "@clerk/nextjs";
import { useState } from "react";

export function LogIn() {
  const [isNewUser, setIsNewUser] = useState(false);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>SignIn</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            {isNewUser ? "Welcome to Vkusotiiki" : "Login to Vkusotiiki"}
          </SheetTitle>
        </SheetHeader>
        <div className="mt-12 flex justify-center sm:mt-8">
          {isNewUser ? (
            <div onClick={() => setIsNewUser(false)}>
              <SignUp
                appearance={{
                  variables: {
                    colorPrimary: "#1f2937",
                    borderRadius: "0.3",
                  },
                }}
              />
            </div>
          ) : (
            <div onClick={() => setIsNewUser(true)}>
              <SignIn
                appearance={{
                  variables: {
                    colorPrimary: "#1f2937",
                    borderRadius: "0.3",
                  },
                }}
              />
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
