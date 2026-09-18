"use client";

import Image from "next/image";
import { ArrowLeft, Mail, LockKeyhole, Plus } from "lucide-react";
import Link from "next/link";
import Signin from "../../../components/auth/signinForm";
import Signup from "../../../components/auth/signupForm";
import ResetPassword from "@/components/auth/resetpasswordForm";
import { useSearchParams } from "next/navigation";

export default function AuthPage() {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");

  const isSignin = mode === "signin";
  const isSignup = mode === "signup";
  const isResetPassword = mode === "reset-password";
  return (
    <div className="flex min-h-dvh">
      <div className="relative w-1/2">
        <Image
          className="object-cover"
          src="https://images.pexels.com/photos/7991305/pexels-photo-7991305.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="authBg"
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw,"
          loading="eager"
          fill
        />

        <div className="absolute bg-black/60 w-full h-full" />

        <div className="absolute bottom-0 p-12 space-y-6">
          <div className="flex items-center gap-1">
            <h1 className="text-2xl font-black">African</h1>

            <Plus size={15} color="#f8bf4b" strokeWidth={7} />
          </div>

          <div className="space-y-1">
            <h1 className="text-2xl font-bold">
              Stories from Africa. Made for the <br /> world.
            </h1>
            <p className="text-gray-500 text-sm">
              Discover unforgettable African movies, emerging <br /> filmmakers,
              and stories that deserve to be seen.
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-1/2 items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">
          <Link href="/" className="flex items-center gap-2 text-gray-500">
            <ArrowLeft size={15} />
            <p>Back to home</p>
          </Link>

          {isSignin && <Signin />}
          {isSignup && <Signup />}
          {isResetPassword && <ResetPassword />}
        </div>
      </div>
    </div>
  );
}
