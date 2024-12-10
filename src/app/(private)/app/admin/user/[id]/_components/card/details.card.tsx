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
              `${data?.data?.first_name} ${data?.data?.last_name}`
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
            <h1 className="flex flex-row items-center gap-2 text-xl font-semibold">
              <span>
                {data?.data?.first_name} {data?.data?.last_name}
              </span>{" "}
              <Chip
                size="small"
                className="hidden md:inline-flex"
                label={data?.data?.role || "No Role Assigned"}
              />
            </h1>
          </Skeleton>

          <Skeleton
            loading={isLoading}
            active
            paragraph={false}
            className="max-w-sm"
          >
            <p className="text-sm text-gray-500">
              {data?.data?.user?.username || "No Role Assigned"}
            </p>
          </Skeleton>
          <Skeleton
            loading={isLoading}
            active
            paragraph={false}
            className="max-w-sm"
          >
            <p className="text-sm capitalize text-gray-500">
              {data?.data?.job_title || "No Designation Assigned"}
            </p>
          </Skeleton>
        </div>
        <ToolbarComponent />
      </div>
    </>
  );
}
