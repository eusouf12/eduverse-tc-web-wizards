import { useMutation, useQueryClient } from "@tanstack/react-query";
import instance from "..";

const deleteCourses = (id: number | string) => {
  return instance.delete(`/courses/${id}`);
};

export const useDeleteCourses = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteCourses,
    onSuccess: () => {
      // Query invalidations
      queryClient.invalidateQueries({
        queryKey: ["courses-list"],
      });
    },
  });
};
