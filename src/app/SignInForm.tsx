"use client";

import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";

export default function SignInForm() {
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
