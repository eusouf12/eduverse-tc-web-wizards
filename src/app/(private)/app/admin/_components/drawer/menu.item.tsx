import { MenuProps } from "antd";
import { IoMdBookmarks } from "react-icons/io";

//Icons import
import { LuLayoutDashboard, LuUsers } from "react-icons/lu";
import { TbReportAnalytics } from "react-icons/tb";

type MenuItem = Required<MenuProps>["items"][number];

export const items: MenuItem[] = [
  {
    key: "overview",
    label: "Overview",
    type: "group",
    children: [
      {
        key: "dashboard",
        label: "Dashboard",
        icon: <LuLayoutDashboard style={{ fontSize: "20px" }} />,
      },
    ],
  },

  {
    key: "organization",
    label: "Organization",
    type: "group",
    children: [
      {
        key: "courses",
        label: "Courses",
        icon: <IoMdBookmarks style={{ fontSize: "18px" }} />,
      },
      {
        key: "user",
        label: "All Users",
        icon: <LuUsers style={{ fontSize: "18px" }} />,
      },
    ],
  },
];
