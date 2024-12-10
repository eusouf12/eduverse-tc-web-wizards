"use client";
import NoData from "@/app/_components/no-data/index.components";
import { GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import moment from "moment";
import { Button } from "antd";
import Link from "next/link";
import { FiEdit2 } from "react-icons/fi";
import DeleteButton from "./action_items/delete.button";

const columns: GridColDef[] = [
  // {
  //   field: "_id",
  //   headerName: "ID",
  //   description: "Employee's ID",
  //   headerAlign: "center",
  //   align: "center",
  //   width: 200,
  // },
  {
    headerName: "Course Name",
    // headerAlign: "center",
    field: "title",
    minWidth: 200,
    flex: 1,
  },
  {
    headerName: "Course Description",
    // headerAlign: "center",
    field: "description",
    minWidth: 350,
    flex: 1,
  },
  {
    headerName: "Credits",
    headerAlign: "center",
    align: "center",
    field: "credits",
    minWidth: 100,
    flex: 1,
  },
  {
    headerName: "Assigned Faculty",
    headerAlign: "center",
    field: "assigned_faculty",
    minWidth: 160,
    align: "center",
    flex: 1,
    valueGetter(value: string[]) {
      return value?.map((faculty) => faculty).join(", ") || "";
    },
  },
  {
    headerName: "Available Seats",
    headerAlign: "center",
    field: "total_available_seats",
    minWidth: 160,
    align: "center",
    flex: 1,
  },
  {
    headerName: "Start Date",
    field: "start_date",
    minWidth: 150,
    flex: 1,
    valueGetter(value) {
      return moment(value).format("ll");
    },
  },
  {
    headerName: "End Date",
    field: "end_date",
    minWidth: 150,
    flex: 1,
    valueGetter(value) {
      return moment(value).format("ll");
    },
  },
  {
    headerName: "Status",
    field: "is_active",
    minWidth: 100,
    flex: 1,
  },
  {
    headerName: "Created At",
    field: "createdAt",
    minWidth: 200,
    valueGetter(value) {
      return moment(value).format("lll");
    },
  },
  {
    field: "actions",
    type: "actions",
    flex: 1,
    minWidth: 150,
    getActions: (params) => [
      <GridActionsCellItem
        key={params.id}
        disableRipple
        disableTouchRipple
        disableFocusRipple
        className="hover: bg-transparent"
        icon={
          <Link href={`/app/admin/courses/${params.id}`}>
            <Button type="dashed" size={"small"}>
              View
            </Button>
          </Link>
        }
        label="Details"
      />,
      <GridActionsCellItem
        key={params.id}
        icon={
          <Link href={`/app/admin/courses/${params.id}/edit`}>
            <FiEdit2 className="text-lg" />
          </Link>
        }
        label="Edit"
      />,
      <GridActionsCellItem
        key={params.id}
        icon={<DeleteButton id={params.id} />}
        label="Delete"
      />,
    ],
  },
];
export default columns;
