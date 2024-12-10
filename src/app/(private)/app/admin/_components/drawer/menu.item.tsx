import { MenuProps } from "antd";

//Icons import
import {
  LuGitBranch,
  LuLayoutDashboard,
  LuLogOut,
  LuSettings,
  LuTags,
  LuUsers,
} from "react-icons/lu";
import { PiPackage } from "react-icons/pi";
import { TbCategory2, TbReportAnalytics } from "react-icons/tb";
import { IoFileTrayStacked } from "react-icons/io5";

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
        key: "faculty",
        label: "Faculty",
        icon: <LuUsers style={{ fontSize: "18px" }} />,
      },
      {
        key: "reports",
        label: "Reports",
        icon: <TbReportAnalytics style={{ fontSize: "20px" }} />,
      },
    ],
  },

  {
    key: "user",
    label: "User",
    type: "group",
    children: [
      {
        key: "user",
        label: "User",
        icon: <LuUsers style={{ fontSize: "18px" }} />,
      },
    ],
  },
];
