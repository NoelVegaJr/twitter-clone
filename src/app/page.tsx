import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import SignInForm from "./SignInForm";

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect("/home");
  }
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
