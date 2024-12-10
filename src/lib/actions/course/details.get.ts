"use client";

import { useQuery } from "@tanstack/react-query";
import instance from "..";

export const getCourseById = async (id: number | string | undefined) => {
  return instance.get(`/courses/${id}`);
};

export const useGetCourseById = (id: number | string | undefined) => {
  return useQuery({
    queryKey: ["courses-details", id],
    enabled: !!id,
    queryFn: () => getCourseById(id),
  });
};
