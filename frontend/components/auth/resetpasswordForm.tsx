import Input from "@/components/input";
import { Mail, ArrowLeft } from "lucide-react";
import Button from "@/components/button";
import Link from "next/link";

export default function ResetPassword() {
  return (
    <div className="w-full max-w-md space-y-6">
      <div className="space-y-1">
        <h1 className="text-3xl font-black">Reset your password</h1>

        <p className="text-sm text-gray-500">
          Enter your email and we'll send you a reset link.
        </p>
      </div>

      <Input
        label="Email"
        placeholder="you@gmail.com"
        type="email"
        icon={<Mail size={15} />}
      />

      <Button>Sign in</Button>

      <Link
        href="/auth?mode=signup"
        className="flex justify-center items-center gap-2 text-gray-500"
      >
        <ArrowLeft size={15} />
        <p>Back to sign in</p>
      </Link>
    </div>
  );
}
