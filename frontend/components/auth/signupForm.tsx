import Input from "@/components/input";
import Link from "next/link";
import { Mail, LockKeyhole } from "lucide-react";
import Button from "@/components/button";

export default function Signup() {
  return (
    <div className="w-full max-w-md space-y-6">
      <div className="space-y-1">
        <h1 className="text-3xl font-black">Create your account</h1>
        <p className="text-sm text-gray-500">
          Join African+ and start streaming African cinema.
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

      <Input
        label="Confirm password"
        placeholder="Re-enter your password"
        type="password"
        icon={<LockKeyhole size={15} />}
      />

      <Button>Create account</Button>

      <div className="flex items-center justify-center gap-2 text-sm">
        <p className="text-gray-500">Already have an account?</p>
        <Link href="/auth?mode=signin" className="cursor-pointer text-primary">
          Sign in
        </Link>
      </div>
    </div>
  );
}
