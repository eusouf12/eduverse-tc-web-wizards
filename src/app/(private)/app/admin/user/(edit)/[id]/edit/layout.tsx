import GoBack from "@/app/_components/go-back/index.button";
import { Divider } from "antd";

export default function UpdateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section>
        <div className="flex flex-row items-center justify-between p-5 pb-0">
          <GoBack />
          <div></div>
        </div>
        <Divider />
      </section>
      <section>{children}</section>
    </>
  );
}
