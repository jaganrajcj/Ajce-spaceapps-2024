"use client";

import { useState } from "react";

import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { Loader2 } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

const LoginPage = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSignIn = async () => {
    if (!email) {
      setError("Enter email address");
      return;
    }
    if (!password) {
      setError("Enter a password");
      return;
    }
    setError("");
    setLoading(true);

    const res = await signIn("credentials", {
      email: email,
      password: password,
      callbackUrl: "/internal/e2dc6cbc80e73397/dashboard",
      redirect: false,
    });

    if (!res?.ok) {
      setLoading(false);
      setError("Invalid Email or Password");
    } else {
      router.push("/internal/e2dc6cbc80e73397/dashboard");
    }
    setLoading(false);
    setEmail('')
    setPassword('')
  };

  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  return (
    <section className="grid text-center h-screen items-center p-8">
      <div>
        <Typography variant="h3" color="blue-gray" className="mb-2">
          Sign In
        </Typography>
        <Typography className="mb-6 text-gray-600 font-normal text-[18px]">
          Enter your email and password to sign in
        </Typography>
        {error && (
          <Typography className="mb-0 -mt-3 text-red-500 font-semibold text-sm">
            {error}
          </Typography>
        )}
        <form action="#" className="mx-auto max-w-[24rem] text-left">
          <div className="mb-6">
            <label htmlFor="email">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Email
              </Typography>
            </label>
            <Input
              id="email"
              color="gray"
              size="lg"
              type="email"
              name="email"
              placeholder="name@mail.com"
              className="w-full focus:border-t-primary border-t-blue-gray-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Password
              </Typography>
            </label>
            <Input
              size="lg"
              placeholder="********"
              className="w-full focus:border-t-primary border-t-blue-gray-200"
              type={passwordShown ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              icon={
                <i onClick={togglePasswordVisiblity}>
                  {passwordShown ? (
                    <EyeIcon className="h-5 w-5" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5" />
                  )}
                </i>
              }
            />
          </div>
          <Button
            onClick={handleSignIn}
            color="gray"
            size="lg"
            className="mt-6 flex justify-center items-center"
            disabled={loading}
            fullWidth
          >
            {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />} sign
            in
          </Button>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
