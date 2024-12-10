"use client";

import { Menu as AntMenu } from "antd";
import { items } from "./menu.item";
import { useSelectedLayoutSegments } from "next/navigation";
import Link from "next/link";

export default function Menu() {
  const segments = useSelectedLayoutSegments();

  return (
    <AntMenu
      style={{ borderRight: "none", fontWeight: "normal" }}
      defaultSelectedKeys={segments}
      defaultOpenKeys={segments}
      mode="inline"
      items={items}
      _internalRenderMenuItem={(originNode, menuItemProps) => (
        <Link href={`/${menuItemProps.eventKey}`}>{originNode}</Link>
      )}
      _internalRenderSubMenuItem={(originNode, menuItemProps) => (
        <Link href={`/${menuItemProps.eventKey}`}>{originNode}</Link>
      )}
    />
  );
}
