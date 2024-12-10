"use client";

import { stringAvatar } from "@/lib/string-avatar";
import { Avatar, Chip } from "@mui/material";
import { useParams } from "next/navigation";
import ToolbarComponent from "../toolbar/toolbar.component";
import { Skeleton } from "antd";
import { cn } from "@/lib/utils";
import { useGetUserById } from "@/lib/actions/user/details.get";

export default function UserDetailsCard() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useGetUserById(id);
  console.log(data);
  return (
    <>
      <div className="mx-auto flex max-w-6xl flex-row items-start justify-between gap-4 p-4">
        <Skeleton
          loading={isLoading}
          avatar
          active
          title={false}
          paragraph={false}
          className="h-16 w-16"
        >
          <Avatar
            className="h-16 w-16 text-xl font-bold"
            {...stringAvatar(
              `${data?.data?.data?.first_name} ${data?.data?.data?.last_name}`
            )}
          />
        </Skeleton>
        <div
          className={cn("flex flex-1 flex-col", isLoading ? "space-y-1" : "")}
        >
          <Skeleton
            loading={isLoading}
            active
            paragraph={false}
            className="max-w-xs"
          >
            <h1 className="flex flex-col items-start  text-xl font-semibold">
              <span>
                {data?.data?.data?.first_name} {data?.data?.data?.last_name}
              </span>
              <Chip
                size="small"
                className="capitalize"
                label={data?.data?.data?.user_role || "No Role Assigned"}
              />
            </h1>
          </Skeleton>
        </div>
        <ToolbarComponent />
      </div>
    </>
  );
}
