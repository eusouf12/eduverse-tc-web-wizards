"use client";

import NoData from "@/app/_components/no-data/index.components";
import { useGetCourseById } from "@/lib/actions/course/details.get";
import { useGetUserById } from "@/lib/actions/user/details.get";
import { Badge, Descriptions, Skeleton } from "antd";
import moment from "moment";
import { useParams } from "next/navigation";

export default function UserDetails() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetCourseById(id);

  return (
    <>
      <Descriptions
        bordered
        title="Personal Details"
        size={"small"}
        layout="vertical"
        column={{
          xxl: 4,
          xl: 4,
          lg: 4,
          md: 4,
          sm: 2,
          xs: 1,
        }}
        items={[
          {
            key: "title",
            label: "Course Title",
            children: (
              <Skeleton loading={isLoading} active paragraph={false}>
                {data?.data?.data?.title || <NoData />}
              </Skeleton>
            ),
          },
          {
            key: "credits",
            label: "Course Credits",
            children: (
              <Skeleton loading={isLoading} active paragraph={false}>
                {data?.data?.data?.credits || <NoData />}
              </Skeleton>
            ),
          },
          {
            key: "available_seats",
            label: "Available Seats",
            children: (
              <Skeleton loading={isLoading} active paragraph={false}>
                {data?.data?.data?.available_seats || <NoData />}
              </Skeleton>
            ),
          },
        ]}
      />
      <Descriptions
        bordered
        title="Employment Details"
        size={"small"}
        layout="vertical"
        column={{
          xxl: 4,
          xl: 4,
          lg: 4,
          md: 4,
          sm: 2,
          xs: 1,
        }}
        items={[
          {
            key: "user_role",
            label: "User Role",
            children: (
              <Skeleton loading={isLoading} active paragraph={false}>
                {data?.data?.data?.user_role || <NoData />}
              </Skeleton>
            ),
          },
          {
            key: "joining_date",
            label: "Joining Date",
            children: (
              <Skeleton loading={isLoading} active paragraph={false}>
                {moment(data?.data?.data?.createdAt).format("lll") || (
                  <NoData />
                )}
              </Skeleton>
            ),
          },
          {
            key: "status",
            label: "Status",
            children: (
              <Skeleton loading={isLoading} active paragraph={false}>
                <Badge
                  status={data?.data?.data?.is_active ? "success" : "error"}
                  text={data?.data?.data?.is_active ? "Active" : "Inactive"}
                />
              </Skeleton>
            ),
          },
        ]}
      />
      <Descriptions
        bordered
        title="Contact Details"
        size={"small"}
        layout="vertical"
        column={{
          xxl: 2,
          xl: 2,
          lg: 2,
          md: 2,
          sm: 1,
          xs: 1,
        }}
        items={[
          {
            key: "address",
            label: "Address",
            contentStyle: {
              whiteSpace: "pre-line",
            },
            span: {
              xxl: 2,
              xl: 2,
              lg: 2,
              md: 2,
              sm: 1,
              xs: 1,
            },
            children: (
              <Skeleton loading={isLoading} active paragraph title={false}>
                {data?.data?.data?.address || <NoData />}
              </Skeleton>
            ),
          },
        ]}
      />
    </>
  );
}
