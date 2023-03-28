import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Navigation from "./Navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect("/");
  }
  return (
    <div className="h-screen flex">
      <div className="relative h-full max-w-5xl w-full mx-auto border border-red-600">
        <div className="absolute -left-72 top-6">
          <Navigation />
        </div>
        <div className=" border-x h-full w-full">{children}</div>
      </div>
    </div>
  );
}
