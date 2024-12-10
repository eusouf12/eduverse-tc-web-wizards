"use client";

import { useQuery } from "@tanstack/react-query";
import instance from "..";

export const useGetuserList = () => {
  return useQuery({
    queryKey: ["users-list"],
    queryFn: () => {
      return instance.get("/users");
    },
  });
};
