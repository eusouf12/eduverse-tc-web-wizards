"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import instance from "..";
import { CreateCourseFormValues } from "@/app/(private)/app/admin/courses/(create)/create/_components/create.schema";

const createCourse = (data: CreateCourseFormValues) => {
  return instance.post("/courses/", data);
};

export const useCreateCourse = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCourse,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses-list"] });
    },
  });
};
