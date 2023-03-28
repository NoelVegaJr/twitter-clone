import { FormEvent, useState } from "react";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();
    if (!cleanEmail) return;

    signIn("email", { email: cleanEmail, redirect: false, callbackUrl: "/" });
  };

  const { data } = useSession();
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p>User: {JSON.stringify(data?.user)}</p>
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          className="border "
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
