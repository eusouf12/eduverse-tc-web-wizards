"use client";

import React from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  message,
  Select,
} from "antd";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import createCourseSchema, { CreateCourseFormValues } from "./create.schema";
import handleResponse from "@/lib/handle-response";
import { useCreateCourse } from "@/lib/actions/course/create.item";

const { Item, ErrorList } = Form;

const CreateForm: React.FC = () => {
  const { mutateAsync: create, isPending } = useCreateCourse();
  const { reset, handleSubmit, control, clearErrors } =
    useForm<CreateCourseFormValues>({
      resolver: zodResolver(createCourseSchema),
    });

  async function onSubmit(values: CreateCourseFormValues) {
    // Clearing errors
    clearErrors();

    message.open({
      type: "loading",
      content: "Creating Course...",
      duration: 0,
    });

    // Making the request
    const res = await handleResponse(() => create({ ...values }), 201);

    // Generating Toast
    message.destroy();
    if (res.status) {
      message.success(res.message || "Course created successfully");
      reset();
    } else {
      message.error(res.message);
    }
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-3 py-5">
        <h1 className="text-lg font-semibold text-primary-400">
          Create New Course
        </h1>
        <p className="max-w-md text-center">
          This page allows administrators to input and store essential
          information about a new course.
        </p>
      </div>

      <Form
        layout="vertical"
        className="my-5 font-semibold"
        onSubmitCapture={handleSubmit(onSubmit)}
      >
        <h1 className="mb-2 pb-1 text-base font-semibold sm:col-span-2">
          Course Details
        </h1>
        <div className="mb-5 grid grid-cols-1 gap-x-5 rounded-md border bg-slate-50 p-5 sm:grid-cols-2">
          <Controller
            control={control}
            name={"title"}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <Item<CreateCourseFormValues> label="Course Title" required>
                <Item noStyle>
                  <Input
                    placeholder="Example: CS50"
                    size="large"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    status={error ? "error" : ""}
                  />
                </Item>
                <ErrorList
                  className="text-red-500"
                  fieldId="title"
                  errors={[error?.message]}
                />
              </Item>
            )}
          />

          <Controller
            control={control}
            name={"description"}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <Item<CreateCourseFormValues> label="Course Description" required>
                <Item noStyle>
                  <Input.TextArea
                    placeholder="Aaa.."
                    size="large"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    status={error ? "error" : ""}
                  />
                </Item>
                <ErrorList
                  className="text-red-500"
                  fieldId="description"
                  errors={[error?.message]}
                />
              </Item>
            )}
          />

          <Controller
            control={control}
            name={"total_available_seats"}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <Item<CreateCourseFormValues> label="Available Seats" required>
                <Item noStyle>
                  <InputNumber
                    placeholder="Input a number"
                    size="large"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    status={error ? "error" : ""}
                  />
                </Item>
                <ErrorList
                  className="text-red-500"
                  fieldId="total_available_seats"
                  errors={[error?.message]}
                />
              </Item>
            )}
          />

          <Controller
            control={control}
            name={"credits"}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <Item<CreateCourseFormValues> label="Course Credits" required>
                <Item noStyle>
                  <InputNumber
                    placeholder="Input a number"
                    size="large"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    status={error ? "error" : ""}
                  />
                </Item>
                <ErrorList
                  className="text-red-500"
                  fieldId="credits"
                  errors={[error?.message]}
                />
              </Item>
            )}
          />
          <Controller
            control={control}
            name={"start_date"}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <Item<CreateCourseFormValues> label="Course Start Date" required>
                <Item noStyle>
                  <DatePicker
                    size="large"
                    className="w-full"
                    allowClear
                    value={value}
                    onChange={onChange}
                  />
                </Item>
                <ErrorList
                  className="text-red-500"
                  fieldId="start_date"
                  errors={[error?.message]}
                />
              </Item>
            )}
          />
          <Controller
            control={control}
            name={"end_date"}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <Item<CreateCourseFormValues> label="Course End Date" required>
                <Item noStyle>
                  <DatePicker
                    size="large"
                    className="w-full"
                    allowClear
                    value={value}
                    onChange={onChange}
                  />
                </Item>
                <ErrorList
                  className="text-red-500"
                  fieldId="end_date"
                  errors={[error?.message]}
                />
              </Item>
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
