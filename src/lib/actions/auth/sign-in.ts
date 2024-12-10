import { useMutation } from "@tanstack/react-query";
import instance from "..";

interface LoginData {
  username: string;
  password: string;
}

const login = (data: LoginData) => {
  return instance.post("/user/login", { ...data });
};

export const useLogin = () => {
  return useMutation({ mutationFn: login });
};
