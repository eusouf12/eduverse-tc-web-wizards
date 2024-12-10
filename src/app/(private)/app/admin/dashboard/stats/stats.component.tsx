"use client";

import { Row } from "antd";
import { LuShieldCheck } from "react-icons/lu";
import StatsCard from "./stats.card";
import { useGetUserStats } from "@/lib/actions/user/stats.get";
import { PiStudent } from "react-icons/pi";
import { MdOutlinePerson4 } from "react-icons/md";

export default function StatsComponent() {
  const { data } = useGetUserStats();
  console.log(data);
  return (
    <Row
      gutter={[16, 16]}
      justify={"center"}
      align={"stretch"}
      className="relative h-fit pb-5"
    >
      <StatsCard
        title="Total Admins"
        value={data?.data?.data?.total_admin || 0}
        prefix={<LuShieldCheck className="flex-inline text-[20px]" />}
      />
      <StatsCard
        title="Total Faculty"
        value={data?.data?.data?.total_faculty || 0}
        prefix={<MdOutlinePerson4 className="flex-inline text-[20px]" />}
      />
      <StatsCard
        title="Total Students"
        value={data?.data?.data?.total_student || 0}
        prefix={<PiStudent className="flex-inline text-[20px]" />}
      />
    </Row>
  );
}
