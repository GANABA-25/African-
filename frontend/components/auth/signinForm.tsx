import Input from "@/components/input";
import { Mail, LockKeyhole } from "lucide-react";
import Button from "@/components/button";
import Link from "next/link";

export default function Signin() {
  return (
    <div className="w-full max-w-md space-y-6">
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
    </div>
  );
}
