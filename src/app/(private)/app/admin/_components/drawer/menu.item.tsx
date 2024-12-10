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
    key: "inventory",
    label: "Inventory",
    type: "group",
    children: [
      {
        key: "products",
        label: "Products",
        icon: <PiPackage style={{ fontSize: "20px" }} />,
      },
      {
        key: "categories",
        label: "Category",
        icon: <TbCategory2 style={{ fontSize: "20px" }} />,
      },
      {
        key: "brands",
        label: "Brands",
        icon: <LuTags style={{ fontSize: "20px" }} />,
      },
      {
        key: "stock-location",
        label: "Stock Location",
        icon: <LuGitBranch style={{ fontSize: "20px" }} />,
      },
      {
        key: "assets",
        label: "Assets",
        icon: <IoFileTrayStacked style={{ fontSize: "20px" }} />,
      },
    ],
  },
  {
    key: "organization",
    label: "Organization",
    type: "group",
    children: [
      {
        key: "employees",
        label: "Employees",
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
        key: "settings",
        label: "Settings",
        icon: <LuSettings style={{ fontSize: "20px" }} />,
      },
      {
        key: "signout",
        label: "Signout",
        danger: true,
        icon: <LuLogOut style={{ fontSize: "20px" }} />,
      },
    ],
  },
];
