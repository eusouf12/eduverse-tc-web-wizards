"use client";

import { useUser } from "@/app/hooks/use-user";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const RoleChecker = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { user } = useUser();

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!user) return;

    if (
      user.user_role === "admin" &&
      !pathname.startsWith("/app/admin/dashbaord")
    ) {
      router.replace("/app/admin/dashboard"); // Redirect to a generic unauthorized page
    }

    if (user.user_role === "faculty" && !pathname.startsWith("/app/faculty")) {
      router.replace("/app/faculty");
    }
    if (user.user_role === "student" && !pathname.startsWith("/app/student")) {
      router.replace("/app/student");
    }
  }, [user]);
  return <>{children}</>;
};

export default RoleChecker;
