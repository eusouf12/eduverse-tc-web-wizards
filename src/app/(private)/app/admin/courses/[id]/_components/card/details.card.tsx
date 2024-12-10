"use client";

import { stringAvatar } from "@/lib/string-avatar";
import { Avatar, Chip } from "@mui/material";
import { useParams } from "next/navigation";
import ToolbarComponent from "../toolbar/toolbar.component";
import { Skeleton } from "antd";
import { cn } from "@/lib/utils";
import { useGetUserById } from "@/lib/actions/user/details.get";
import { useGetCourseById } from "@/lib/actions/course/details.get";

export default function UserDetailsCard() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useGetCourseById(id);
  return (
    <>
      <div className="mx-auto flex max-w-6xl flex-row items-start justify-between gap-4 p-4">
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
              <span>{data?.data?.data?.title}</span>
            </h1>
          </Skeleton>
        </div>
        <ToolbarComponent />
      </div>
    </>
  );
}
