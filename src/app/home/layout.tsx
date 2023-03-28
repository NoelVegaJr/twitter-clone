import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import AuthProvider from "@/providers/AuthProvider";

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
    <html lang="en">
      <body>
        <AuthProvider session={session!}>{children}</AuthProvider>
      </body>
    </html>
  );
}
