import { Divider } from "antd";
import UserDetailsCard from "./_components/card/details.card";
import GoBack from "@/app/_components/go-back/index.button";

export default function DetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <section>
        <div className="p-5 pb-0">
          <GoBack />
        </div>
        <Divider />
      </section>
      <UserDetailsCard />
      <Divider className="mb-0" />
      <section className="mx-auto max-w-6xl space-y-7 px-2 py-6">
        {children}
      </section>
    </div>
  );
}
