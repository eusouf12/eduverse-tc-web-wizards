"use client";

import { useQuery } from "@tanstack/react-query";
import instance from "..";

export const useGetcourseList = () => {
  return useQuery({
    queryKey: ["courses-list"],
    queryFn: () => {
      return instance.get("/courses");
    },
  });
};
