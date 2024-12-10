"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import instance from "..";
import { CreateUserFormValues } from "@/app/(private)/app/admin/user/(create)/create/_components/create.schema";

const createUser = (data: CreateUserFormValues) => {
  return instance.post("/users/", data);
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users-list"] });
    },
  });
};
