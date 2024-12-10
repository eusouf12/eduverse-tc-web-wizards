import { Divider } from "antd";
import ToolbarComponent from "./_components/toolbar/toolbar.component";
// import StatsComponent from "./_components/stats/stats.component";
// import ToolbarComponent from "./_components/toolbar/toolbar.component";
// import LayoutTabs from "./_components/navigation/users.tabs";
// import LayoutStore from "@/app/_components/list-context/layout.store";

export default function ListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section>
        <div className="p-5 pb-0">
          <h1 className="text-xl font-semibold">Manage Users</h1>
        </div>
        <Divider />
      </section>
      {/* <StatsComponent /> */}
      {/* <LayoutTabs /> */}
      <ToolbarComponent />
      <section>{children}</section>
    </>
  );
}
