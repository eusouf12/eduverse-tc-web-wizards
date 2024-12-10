"use client";

import { useQuery } from "@tanstack/react-query";
import instance from "..";

export const getUserById = async (id: number | string | undefined) => {
  return instance.get(`/users/${id}`);
};

export const useGetUserById = (id: number | string | undefined) => {
  return useQuery({
    queryKey: ["users-details", id],
    enabled: !!id,
    queryFn: () => getUserById(id),
  });
};
