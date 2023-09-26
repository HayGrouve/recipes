"use client";
import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { user } = useUser();
  const pathName = usePathname();

  return (
    <Disclosure as="nav" className="border-b-4 border-yellow-500 bg-gray-900">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href="/">Logo</Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Link href="/">
                      <Button
                        className={`${
                          pathName === "/" && "bg-gray-900 text-white"
                        }`}
                      >
                        Recipes
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Link href="/new">
                      <Button
                        variant={"green"}
                        className={`${
                          pathName === "/new" && "bg-gray-900 text-white"
                        } `}
                      >
                        New Recipe
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center">
                  {/* Profile dropdown */}
                  <div className="flex items-center justify-center">
                    <SignedIn>
                      <span className="sr-only">Open user menu</span>
                      <UserButton />
                    </SignedIn>
                    <SignedOut>
                      <Link href="/login">
                        <Button
                          className={`${
                            pathName === "/login" && "bg-gray-900 text-white"
                          }`}
                        >
                          Login
                        </Button>
                      </Link>
                      <Link href="/register">
                        <Button
                          className={`${
                            pathName === "/register" && "bg-gray-900 text-white"
                          }`}
                        >
                          Register
                        </Button>
                      </Link>
                    </SignedOut>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button
                  id="1"
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Link href="/">
                <Button
                  className={`${pathName === "/" && "bg-gray-900 text-white"}`}
                >
                  Recipes
                </Button>
              </Link>
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <SignedIn>
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <UserButton />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">
                      {user?.fullName}
                    </div>
                    <div className="text-sm font-medium text-gray-400">
                      {user?.primaryEmailAddress?.emailAddress}
                    </div>
                  </div>
                </div>
              </SignedIn>
              <div className="mt-3 space-y-1 px-2">
                <SignedOut>
                  <Link
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    href="/login"
                  >
                    <Button
                      className={`${
                        pathName === "/login" && "bg-gray-900 text-white"
                      }`}
                    >
                      Login
                    </Button>
                  </Link>
                  <Link
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    href="/register"
                  >
                    <Button
                      className={`${
                        pathName === "/register" && "bg-gray-900 text-white"
                      }`}
                    >
                      Register
                    </Button>
                  </Link>
                </SignedOut>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
