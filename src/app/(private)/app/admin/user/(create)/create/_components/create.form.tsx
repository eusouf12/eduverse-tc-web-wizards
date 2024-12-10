"use client";

import React from "react";
import { Button, DatePicker, Form, Input, message, Select } from "antd";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import createUserSchema, { CreateUserFormValues } from "./create.schema";
import handleResponse from "@/lib/handle-response";
import { useCreateUser } from "@/lib/actions/user/create.item";

const { Item, ErrorList } = Form;

const CreateForm: React.FC = () => {
  const { mutateAsync: create, isPending } = useCreateUser();
  const { reset, handleSubmit, control, clearErrors } =
    useForm<CreateUserFormValues>({
      resolver: zodResolver(createUserSchema),
    });

  async function onSubmit(values: CreateUserFormValues) {
    // Clearing errors
    clearErrors();

    message.open({
      type: "loading",
      content: "Creating User...",
      duration: 0,
    });

    // Making the request
    const res = await handleResponse(() => create({ ...values }), 201);

    // Generating Toast
    message.destroy();
    if (res.status) {
      message.success(res.message || "User created successfully");
      reset();
    } else {
      message.error(res.message);
    }
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-3 py-5">
        <h1 className="text-lg font-semibold text-primary-400">
          Create New User
        </h1>
        <p className="max-w-md text-center">
          This page allows administrators to input and store essential
          information about a new user, such as personal details, role, and
          contact information, for organizational record-keeping.
        </p>
      </div>

      <Form
        layout="vertical"
        className="my-5 font-semibold"
        onSubmitCapture={handleSubmit(onSubmit)}
      >
        <h1 className="mb-2 pb-1 text-base font-semibold sm:col-span-2">
          Personal Details
        </h1>
        <div className="mb-5 grid grid-cols-1 gap-x-5 rounded-md border bg-slate-50 p-5 sm:grid-cols-2">
          <Controller
            control={control}
            name={"first_name"}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <Item<CreateUserFormValues> label="First Name" required>
                <Item noStyle>
                  <Input
                    placeholder="Example: Jhon"
                    size="large"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    status={error ? "error" : ""}
                  />
                </Item>
                <ErrorList
                  className="text-red-500"
                  fieldId="first_name"
                  errors={[error?.message]}
                />
              </Item>
            )}
          />

          <Controller
            control={control}
            name={"last_name"}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <Item<CreateUserFormValues> label="Last Name" required>
                <Item noStyle>
                  <Input
                    placeholder="Example: Doe"
                    size="large"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    status={error ? "error" : ""}
                  />
                </Item>
                <ErrorList
                  className="text-red-500"
                  fieldId="last_name"
                  errors={[error?.message]}
                />
              </Item>
            )}
          />

          <Controller
            control={control}
            name={"email"}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <Item<CreateUserFormValues> label="Email" required>
                <Item noStyle>
                  <Input
                    placeholder="Email"
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
            )}
          />
          <Controller
            control={control}
            name={"user_role"}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <Item<CreateUserFormValues> label="Role" required>
                <Item noStyle>
                  <Select
                    placeholder="Select a Role"
                    size="large"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    showSearch
                    allowClear
                    className="min-w-72"
                    options={[
                      { label: "Admin", value: "admin" },
                      { label: "Faculty", value: "faculty" },
                      { label: "Student", value: "student" },
                    ]}
                  />
                </Item>
                <ErrorList
                  className="text-red-500"
                  fieldId="user_role"
                  errors={[error?.message]}
                />
              </Item>
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
                <Item<CreateUserFormValues>
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
        </div>
        <div className="flex items-center justify-between gap-5">
          <Button
            size="large"
            type="dashed"
            htmlType="reset"
            className="w-full"
            onClick={() => {
              // Reset react-hook-form fields to default values
              reset();
            }}
          >
            Reset
          </Button>

          <Button
            size="large"
            type="primary"
            htmlType="submit"
            className="w-full"
            disabled={isPending}
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateForm;
