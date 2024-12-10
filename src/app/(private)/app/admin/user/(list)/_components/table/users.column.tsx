"use client";
import NoData from "@/app/_components/no-data/index.components";
import { GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import moment from "moment";
import { Button } from "antd";
import Link from "next/link";
import { FiEdit2 } from "react-icons/fi";

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
    headerName: "User Name",
    field: "name",
    minWidth: 100,
    flex: 1,
    renderCell(params) {
      return [params.row.first_name, params.row.last_name].join(" ") || "";
    },
  },
  {
    headerName: "Email",
    field: "email",
    minWidth: 200,
    flex: 1,
  },
  {
    headerName: "Role",
    field: "user_role",
    minWidth: 100,
    flex: 1,
  },
  {
    headerName: "Status",
    field: "is_active",
    minWidth: 100,
    flex: 1,
  },
  {
    headerName: "Last Updated",
    field: "updatedAt",
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
          <Link href={`/app/admin/user/${params.id}`}>
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
          <Link href={`/app/admin/user/${params.id}/edit`}>
            <FiEdit2 className="text-lg" />
          </Link>
        }
        label="Edit"
      />,
      //   <GridActionsCellItem
      //     key={params.id}
      //     icon={<DeleteButton id={params.id} />}
      //     label="Delete"
      //   />,
    ],
  },
];
export default columns;
