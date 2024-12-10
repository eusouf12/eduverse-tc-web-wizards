"use client";

import React from "react";
import { Button, Card, Form, Input, message } from "antd";
import { Controller, useForm } from "react-hook-form";
import { useLogin } from "@/lib/actions/auth/sign-in";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { authService } from "@/lib/auth.service";
import handleResponse from "@/lib/handle-response";
const { Item, ErrorList } = Form;
// Form Schema
import schema, { FormValues } from "./signin.schema";
import { useCookies } from "next-client-cookies";
import { useUser } from "@/app/hooks/use-user";

export function SignForm() {
  const { setUser } = useUser();
  // Cookies Hook
  const cookies = useCookies();

  // Router Hook
  const router = useRouter();

  // Login Hook
  const { mutateAsync: login, isPending } = useLogin();

  const { reset, handleSubmit, control } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // console.log(errors);
  // Form Hook

  async function onSubmit(values: FormValues) {
    // Clearing errors
    message.open({
      type: "loading",
      content: "Logging in..",
      duration: 0,
    });

    // Making the request
    const res = await handleResponse(() => login(values));

    message.destroy();

    if (res.status) {
      // Setting cookies
      setUser(res.response.data);
      authService.setToken(res.response.token);
      localStorage.setItem("user_data", JSON.stringify(res.response.data));
      reset();
      // Generating Toast
      message.success(res.message || "Logged in successfully");
    } else {
      message.error(res.message || "Failed to login");
    }
    // Redirect to dashboard
    router.refresh();
  }
  return (
    <>
      <div className="pb-10 text-center">
        <h1 className="pb-1 text-2xl font-bold">Welcome</h1>
        <p className="font-medium">
          Sign in with your organization credentials.
        </p>
      </div>
      <Card className="shadow-md">
        <Form
          layout="vertical"
          className="font-semibold"
          requiredMark={false}
          onSubmitCapture={handleSubmit(onSubmit)}
        >
          <Controller
            control={control}
            name={"email"}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <>
                <Item<FormValues>
                  label="Email"
                  style={{ marginBottom: "12px" }}
                >
                  <Item name="email" noStyle>
                    <Input
                      placeholder="example@institution.com"
                      size="large"
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      status={error ? "error" : ""}
                    />
                  </Item>
                  <ErrorList
                    className="text-red-500"
                    fieldId="email"
                    errors={[error?.message]}
                  />
                </Item>
              </>
            )}
          />
          <Controller
            control={control}
            name={"password"}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <>
                <Item<FormValues>
                  label="Password"
                  style={{ marginBottom: "12px" }}
                >
                  <Item name="password" noStyle>
                    <Input.Password
                      placeholder="******"
                      size="large"
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      status={error ? "error" : ""}
                    />
                  </Item>
                  <ErrorList
                    className="text-red-500"
                    fieldId="password"
                    errors={[error?.message]}
                  />
                </Item>
              </>
            )}
          />
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            className="w-full"
            disabled={isPending}
          >
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
}
