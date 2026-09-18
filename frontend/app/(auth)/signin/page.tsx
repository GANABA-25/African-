import Input from "@/components/input";
import Image from "next/image";
import { ArrowLeft, Mail, LockKeyhole, Plus } from "lucide-react";
import Button from "@/components/button";
import Link from "next/link";

export default function Signin() {
  return (
    <div className="flex min-h-dvh">
      <div className="relative w-1/2">
        <Image
          className="object-cover"
          src="https://images.pexels.com/photos/7991305/pexels-photo-7991305.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="authBg"
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
          />

          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            icon={<LockKeyhole size={15} />}
          />

          <p className="cursor-pointer text-right text-sm text-primary transition-colors hover:text-primary-light">
            Forgot password?
          </p>

          <Button>Sign in</Button>

          <div className="flex items-center justify-center gap-2 text-sm">
            <p className="text-gray-500">Don't have an account?</p>
            <p className="cursor-pointer text-primary">Sign up</p>
          </div>
        </div>
      </div>
    </div>
  );
}
