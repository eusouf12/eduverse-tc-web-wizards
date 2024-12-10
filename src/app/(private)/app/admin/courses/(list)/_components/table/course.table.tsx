"use client";

import { GridRowsProp } from "@mui/x-data-grid";
import { useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import CustomDataGrid from "@/app/_components/datagrid";
import columns from "./course.column";
import { useGetcourseList } from "@/lib/actions/course/list.get";

export default function CourseTable() {
  const router = useRouter();
  const { data, isLoading } = useGetcourseList();
  const rows: GridRowsProp = useMemo(() => data?.data?.data || [], [data]);
  const pagination: {
    count: number;
  } = useMemo(() => {
    if (data?.data?.count !== undefined) {
    }
    return {
      count: data?.data?.count || 0,
    };
  }, [data]);

  return (
    <div className="min-h-96 w-full">
      <CustomDataGrid
        columns={columns}
        rows={rows}
        loading={isLoading}
        rowCount={pagination?.count || 0}
        getRowId={(row) => row._id}
        onRowDoubleClick={(row) => router.push(`/user/${row.id}`)}
      />
    </div>
  );
}
