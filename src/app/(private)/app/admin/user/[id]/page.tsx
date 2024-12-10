"use client";

import NoData from "@/app/_components/no-data/index.components";
import { useGetUserById } from "@/lib/actions/user/details.get";
import { Badge, Descriptions, Skeleton } from "antd";
import moment from "moment";
import { useParams } from "next/navigation";

export default function UserDetails() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetUserById(id);

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
            key: "first_name",
            label: "First Name",
            children: (
              <Skeleton loading={isLoading} active paragraph={false}>
                {data?.data?.data?.first_name || <NoData />}
              </Skeleton>
            ),
          },
          {
            key: "last_name",
            label: "Last Name",
            children: (
              <Skeleton loading={isLoading} active paragraph={false}>
                {data?.data?.data?.last_name || <NoData />}
              </Skeleton>
            ),
          },
          {
            key: "email",
            label: "Email",
            children: (
              <Skeleton loading={isLoading} active paragraph={false}>
                {data?.data?.data?.email || <NoData />}
              </Skeleton>
            ),
          },
          {
            key: "mobile",
            label: "Phone Number",
            children: (
              <Skeleton loading={isLoading} active paragraph={false}>
                {data?.data?.data?.phone || <NoData />}
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
