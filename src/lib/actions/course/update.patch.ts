"use client";

import { UpdateCourseFormValues } from "@/app/(private)/app/admin/courses/(edit)/[id]/edit/_components/update.schema";
import instance from "..";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const update = ({
  id,
  data,
}: {
  id: number | string;
  data: Partial<UpdateCourseFormValues>;
}) => {
  return instance.patch(`/courses/${id}`, { ...data });
};

export const useUpdateCourse = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses-list"] });
      queryClient.invalidateQueries({ queryKey: ["courses-details"] });
    },
  });
};
