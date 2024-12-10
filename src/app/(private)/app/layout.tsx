import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import RoleChecker from "./role.checker";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Check if the user is logged in
  const token = cookies().get("access_token")?.value;
  if (!token) {
    redirect("/", RedirectType.replace);
  }

  return (
    <RoleChecker>
      <main>{children}</main>
    </RoleChecker>
  );
}
