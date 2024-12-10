"use client";

import { useQuery } from "@tanstack/react-query";
import instance from "..";

export const useGetfacultyList = () => {
  return useQuery({
    queryKey: ["facultys-list"],
    queryFn: () => {
      return instance.get("/faculty");
    },
  });
};
