"use client";
import { FormEvent, useState } from "react";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  return (
    <div className="h-screen bg-gray-100 flex flex-col ">
      <div className="max-w-5xl w-full flex-1 mx-auto">
        <div className="flex justify-center items-center h-full gap-24">
          <section className="w-1/2">
            <h1 className="text-5xl text-blue-500 font-bold mb-4">
              Twitter Clone
            </h1>
            <p className="text-2xl">
              Connect with friends and the world around you on Twitter.
            </p>
          </section>
          <section className="w-1/2">
            <SignInForm />
          </section>
        </div>
      </div>
      <div className="h-52 bg-white flex justify-center items-center text-5xl">
        Footer
      </div>
    </div>
  );
}

function SignUpForm() {}

function SignInForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();
    if (!cleanEmail) return;

    signIn("email", {
      email: cleanEmail,
      redirect: false,
      callbackUrl: "/home",
    });
  };

  return (
    <div className="bg-white p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col  rounded border-b pb-6 mb-6"
      >
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
          className="border p-2 rounded outline-none mb-4 text-lg"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold text-xl py-2 rounded"
        >
          Log In
        </button>
      </form>
      <div className="flex justify-center">
        <button className="bg-green-500 text-white font-semibold mx-auto py-2 px-4 rounded">
          Create new account
        </button>
      </div>
    </div>
  );
}
