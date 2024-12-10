"use client";

import { UpdateUserFormValues } from "@/app/(private)/app/admin/user/(edit)/[id]/edit/_components/update.schema";
import instance from "..";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const update = ({
  id,
  data,
}: {
  id: number | string;
  data: Partial<UpdateUserFormValues>;
}) => {
  return instance.patch(`/users/${id}`, { ...data });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users-list"] });
      queryClient.invalidateQueries({ queryKey: ["users-details"] });
    },
  });
};
