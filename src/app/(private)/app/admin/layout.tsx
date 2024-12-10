import { cookies } from "next/headers";
import { RedirectType, redirect } from "next/navigation";
import AppDrawer from "./_components/drawer/drawer.component";
import ResponsiveDrawer from "./_components/drawer.responsive";

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
    <div className="flex h-screen flex-col lg:flex-row lg:gap-6 lg:bg-slate-200 lg:p-6">
      <ResponsiveDrawer />
      <aside className="relative hidden max-w-[300px] flex-[0.40] flex-col-reverse overflow-hidden rounded-md bg-white p-4 pb-0 shadow-md shadow-slate-300 lg:flex lg:flex-col">
        <AppDrawer />
      </aside>

      <main className="flex-1 overflow-y-auto overflow-x-hidden bg-white p-2 shadow-md shadow-slate-300 lg:rounded-md lg:p-4">
        {children}
      </main>
    </div>
  );
}
