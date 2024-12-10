"use client";

import React, { useEffect } from "react";
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
import handleResponse from "@/lib/handle-response";
import updateCourseSchema, { UpdateCourseFormValues } from "./update.schema";
import { useParams } from "next/navigation";
import { useUpdateCourse } from "@/lib/actions/course/update.patch";
import { useGetCourseById } from "@/lib/actions/course/details.get";

const { Item, ErrorList } = Form;

const UpdateForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  //API Call
  const { data: course, isLoading, isFetchedAfterMount } = useGetCourseById(id);
  const { mutateAsync: update, isPending } = useUpdateCourse();

  //Form Handle
  const {
    reset,
    handleSubmit,
    control,
    clearErrors,
    formState: { isDirty },
  } = useForm<UpdateCourseFormValues>({
    resolver: zodResolver(updateCourseSchema),
  });

  useEffect(() => {
    if (!course) return;
    if ((course && !isLoading) || (!isDirty && isFetchedAfterMount)) {
      reset({
        title: course?.data?.data?.title,
        description: course?.data?.data?.description,
        total_available_seats: course?.data?.data?.total_available_seats,
        credits: course?.data?.data?.credits,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [course]);

  //Update Function
  async function onSubmit(values: UpdateCourseFormValues) {
    // Clearing errors
    clearErrors();

    message.open({
      type: "loading",
      content: "Updating Course...",
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
      message.success(res.message || "Course updated successfully");
      reset();
    } else {
      message.error(res.message);
    }
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-3 py-5">
        <h1 className="text-lg font-semibold text-primary-400">
          Update Course
        </h1>
        <p className="max-w-md text-center">
          This page allows administrators to input and update essential
          information about an course, such as personal details, role.
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
              <Item<UpdateCourseFormValues> label="Course Title" required>
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
              <Item<UpdateCourseFormValues> label="Course Description" required>
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
              <Item<UpdateCourseFormValues> label="Available Seats" required>
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
              <Item<UpdateCourseFormValues> label="Course Credits" required>
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
