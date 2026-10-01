"use client";

import Input from "@/components/input";
import { useState } from "react";
import { Mail, LockKeyhole } from "lucide-react";
import Button from "@/components/button";
import Link from "next/link";
import { SigninTypes } from "@/types/authTypes";

export default function Signin() {
  const [signinData, setSigninData] = useState<SigninTypes>({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState<Record<keyof SigninTypes, boolean>>({
    email: false,
    password: false,
  });

  const inputChangeHandler = (inputIdentifier: string, value: string) => {
    setSigninData((prevData) => ({
      ...prevData,
      [inputIdentifier]: value,
    }));
  };

  const inputBlurHandler = (inputIdentifier: keyof SigninTypes) => {
    setDidEdit((prevData) => ({
      ...prevData,
      [inputIdentifier]: true,
    }));
  };

  const signinHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setDidEdit({
      email: true,
      password: true,
    });

    console.log(signinData);

    // const errors = validateLoginInData(loginData);

    // if (Object.values(errors).some((error) => error !== "")) {
    //   return;
    // }

    // mutate(loginData);
  };

  return (
    <form onSubmit={signinHandler} className="w-full max-w-md space-y-6">
      <div className="space-y-1">
        <h1 className="text-3xl font-black">Welcome back</h1>

        <p className="text-sm text-gray-500">
          Sign in to continue watching African cinema.
        </p>
      </div>

      <Input
        label="Email"
        placeholder="you@gmail.com"
        type="email"
        icon={<Mail size={15} />}
        onChange={(e) => inputChangeHandler("email", e.target.value)}
        onBlur={() => inputBlurHandler("email")}
        didEdit={didEdit.email}
      />

      <Input
        label="Password"
        placeholder="Enter your password"
        type="password"
        icon={<LockKeyhole size={15} />}
        onChange={(e) => inputChangeHandler("password", e.target.value)}
        onBlur={() => inputBlurHandler("password")}
        didEdit={didEdit.password}
      />

      <div className="cursor-pointer text-right text-sm text-primary transition-colors hover:text-primary-light">
        <Link href="/auth?mode=reset-password">Forgot password?</Link>
      </div>
      <Button>Sign in</Button>

      <div className="flex items-center justify-center gap-2 text-sm">
        <p className="text-gray-500">Don't have an account?</p>
        <Link href="/auth?mode=signup" className="cursor-pointer text-primary">
          Sign up
        </Link>
      </div>
    </form>
  );
}
