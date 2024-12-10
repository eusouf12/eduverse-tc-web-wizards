import { useMutation, useQueryClient } from "@tanstack/react-query";
import instance from "..";

const deleteUsers = (id: number | string) => {
  return instance.delete(`/users/${id}`);
};

export const useDeleteUsers = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteUsers,
    onSuccess: () => {
      // Query invalidations
      queryClient.invalidateQueries({
        queryKey: ["users-list"],
      });
    },
  });
};
