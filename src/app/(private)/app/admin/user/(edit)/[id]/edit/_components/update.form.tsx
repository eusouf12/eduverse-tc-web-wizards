"use client";

import React, { useEffect } from "react";
import { Button, DatePicker, Form, Input, message, Select } from "antd";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import handleResponse from "@/lib/handle-response";
import updateUserSchema, { UpdateUserFormValues } from "./update.schema";
import { useParams } from "next/navigation";
import { useUpdateUser } from "@/lib/actions/user/update.patch";
import { useGetUserById } from "@/lib/actions/user/details.get";

const { Item, ErrorList } = Form;

const UpdateForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  //API Call
  const { data: user, isLoading, isFetchedAfterMount } = useGetUserById(id);
  const { mutateAsync: update, isPending } = useUpdateUser();

  //Form Handle
  const {
    reset,
    handleSubmit,
    control,
    clearErrors,
    formState: { isDirty },
  } = useForm<UpdateUserFormValues>({
    resolver: zodResolver(updateUserSchema),
  });

  useEffect(() => {
    if (!user) return;
    if ((user && !isLoading) || (!isDirty && isFetchedAfterMount)) {
      reset({
        first_name: user?.data?.data?.first_name,
        last_name: user?.data?.data?.last_name,
        email: user?.data?.data?.email,
        user_role: user?.data?.data?.user_role,
        phone: user?.data?.data?.phone,
        address: user?.data?.data?.address,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  //Update Function
  async function onSubmit(values: UpdateUserFormValues) {
    // Clearing errors
    clearErrors();

    message.open({
      type: "loading",
      content: "Updating User...",
      duration: 0,
    });

    // Making the request
    const res = await handleResponse(
      () => update({ id: id, data: values }),
      200
    );

    // Generating Toast
    message.destroy();
    if (res.status) {
      message.success(res.message || "User updated successfully");
      reset();
    } else {
      message.error(res.message);
    }
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-3 py-5">
        <h1 className="text-lg font-semibold text-primary-400">Update User</h1>
        <p className="max-w-md text-center">
          This page allows administrators to input and update essential
          information about an user, such as personal details, role.
        </p>
      </div>

      <Form
        layout="vertical"
        className="my-5 font-semibold"
        onSubmitCapture={handleSubmit(onSubmit)}
      >
        <h1 className="mb-2 pb-1 text-base font-semibold sm:col-span-2">
          Personal Information
        </h1>
        <div className="mb-5 grid grid-cols-1 gap-x-5 rounded-md border bg-slate-50 p-5 sm:grid-cols-2">
          <Controller
            control={control}
            name={"first_name"}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <Item<UpdateUserFormValues> label="First Name" required>
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
              <>
                <Item<UpdateUserFormValues> label="Last Name" required>
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
              </>
            )}
          />

          <Controller
            control={control}
            name={"email"}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <>
                <Item<UpdateUserFormValues> label="Email" required>
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
              </>
            )}
          />
          <Controller
            control={control}
            name={"phone"}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <>
                <Item<UpdateUserFormValues> label="Phone Number">
                  <Item noStyle>
                    <Input
                      placeholder="Phone Number"
                      size="large"
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      status={error ? "error" : ""}
                    />
                  </Item>
                  <ErrorList
                    className="text-red-500"
                    fieldId="mobile"
                    errors={[error?.message]}
                  />
                </Item>
              </>
            )}
          />
          <Controller
            control={control}
            name={"user_role"}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <Item<UpdateUserFormValues> label="Role" required>
                <Item noStyle>
                  <Select
                    placeholder="Select a Role"
                    size="large"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    showSearch
                    allowClear
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
            name={"address"}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <>
                <Item<UpdateUserFormValues> label="Address">
                  <Item noStyle>
                    <Input.TextArea
                      placeholder="Address"
                      size="large"
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      status={error ? "error" : ""}
                    />
                  </Item>
                  <ErrorList
                    className="text-red-500"
                    fieldId="address"
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

export default UpdateForm;
