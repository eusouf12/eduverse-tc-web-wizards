import { useMutation } from "@tanstack/react-query";
import instance from "..";

interface LoginData {
  email: string;
  password: string;
}

const login = (data: LoginData) => {
  return instance.post("/users/login", { ...data });
};

export const useLogin = () => {
  return useMutation({ mutationFn: login });
};
