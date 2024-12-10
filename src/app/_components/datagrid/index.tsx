import { cn } from "@/lib/utils";
import { DataGrid, DataGridProps } from "@mui/x-data-grid";
import CustomNoRowsOverlay from "./no-result";

export default function CustomDataGrid({ className, ...props }: DataGridProps) {
  return (
    <DataGrid
      className={cn(className, "!min-h-[464px] !border-slate-200")}
      density="compact"
      rowSelection={false}
      slotProps={{
        loadingOverlay: {
          variant: "skeleton",
          noRowsVariant: "skeleton",
        },
        noResultsOverlay: {
          className: "h-full bg-black",
        },
      }}
      slots={{
        noResultsOverlay: CustomNoRowsOverlay,
        noRowsOverlay: CustomNoRowsOverlay,
      }}
      disableColumnSorting
      disableColumnMenu
      disableRowSelectionOnClick
      hideFooterSelectedRowCount
      pageSizeOptions={[10]}
      paginationMode="server"
      scrollbarSize={10}
      classes={{
        "row--borderBottom": "!hidden",
        columnHeader: "bg-primary-400 text-primary-50",
      }}
      getRowClassName={(params) =>
        cn(
          params.indexRelativeToCurrentPage % 2 !== 0
            ? "bg-white"
            : "bg-primary-50",
          "hover:bg-primary-100 hover:bg-opacity-40 hover:text-primary-500 cursor-pointer"
        )
      }
      {...props}
    />
  );
}
