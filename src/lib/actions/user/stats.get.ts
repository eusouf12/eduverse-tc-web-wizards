"use client";

import { useQuery } from "@tanstack/react-query";
import instance from "..";

interface UserStatsParams {
  page?: number;
  search?: string;
}

export const useGetUserStats = (params?: UserStatsParams) => {
  return useQuery({
    queryKey: ["user-stats", params],
    queryFn: () => {
      return instance.get("/users/totalUsersNumber", {
        params,
      });
    },
  });
};
