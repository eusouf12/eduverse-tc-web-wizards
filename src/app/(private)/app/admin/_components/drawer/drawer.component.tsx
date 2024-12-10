"use client";

import Menu from "./menu.component";
import { Button, Divider, message } from "antd";
import { Avatar, ListItemText } from "@mui/material";
import { IoClose, IoLogOut } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { useUser } from "@/app/hooks/use-user";
import { stringAvatar } from "@/lib/string-avatar";
import { authService } from "@/lib/auth.service";
import { useRouter } from "next/navigation";

export default function AppDrawer({ onClose }: { onClose?: () => void }) {
  const { user } = useUser();
  const router = useRouter();

  const logout = async () => {
    authService.removeToken();
    router.refresh();
  };
  return (
    <>
      <div className="flex-1 overflow-y-auto">
        <Menu />
      </div>
      <Divider
        className={cn(!!onClose ? "inline-flex" : "hidden", "mb-2 mt-1")}
      />
      <div
        className={
          "mb-2 flex flex-row items-center justify-between gap-3 px-3 py-2"
        }
      >
        <div className="flex flex-row items-center gap-4">
          <Avatar
            {...stringAvatar([user?.first_name, user?.last_name].join(" "))}
          />
          <ListItemText
            primary={`${user?.first_name} ${user?.last_name}`}
            secondary={user?.user_role || "No Role Assigned"}
            primaryTypographyProps={{
              noWrap: true,
              className: "font-bold text-sm",
            }}
            secondaryTypographyProps={{
              noWrap: true,
              className: "text-xs leading-tight font-semibold",
            }}
          />
        </div>
        {onClose !== undefined ? (
          <Button type="dashed" icon={<IoClose />} onClick={onClose} />
        ) : (
          <Button
            onClick={() => logout()}
            icon={<IoLogOut />}
            type="default"
            danger
          />
        )}
      </div>
    </>
  );
}
