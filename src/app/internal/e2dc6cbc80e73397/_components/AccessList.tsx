import React, { useState, useEffect } from "react";
import { Button, Input, Typography } from "@material-tailwind/react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { ColDef, GridReadyEvent, GridApi } from "ag-grid-community";
import { getUsers } from "@/app/actions";
import TableSkeleton from "./tableSkeleton";
import { Plus, X } from "lucide-react";
import AddUser from "./AddUser";

interface User {
  id: number;
  email: string;
  name: string;
  createdAt: string;
}

const AccessList = () => {
  const [rowData, setRowData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [open, setOpen] = React.useState(false);

  const [colDefs] = useState<ColDef<User>[]>([
    { field: "id", headerName: "ID", width: 70, maxWidth: 80 },
    { field: "email", headerName: "Email" },
    { field: "name", headerName: "Name" },
    { field: "createdAt", headerName: "Created At" },
  ]);

  const defaultColDef = {
    flex: 1,
  };

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    return date.toLocaleDateString(undefined, options).replace(",", "");
  };

  const fetchUsers = async () => {
    setLoading(true);
    const data = await getUsers();
    const formattedData = data?.map((user: any) => ({
      ...user,
      createdAt: formatDate(new Date(user.createdAt)),
    }));
    setRowData(formattedData as User[]);
    setLoading(false);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const [gridApi, setGridApi] = useState<GridApi | null>(null);

  const onGridReady = (params: GridReadyEvent) => {
    setGridApi(params.api);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between md:items-center gap-y-4 flex-col md:flex-row">
        <div>
          <Typography className="font-bold">Access List</Typography>
          <Typography variant="small" className="font-normal text-gray-600">
            Manage who have access to the registration list
          </Typography>
        </div>
        <div className="flex gap-2">
          <Button
            className="flex flex-row gap-2 items-center justify-center"
            onClick={() => {
              setOpen((prevOpen) => !prevOpen);
            }}
          >
            {open ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            {open ? "Cancel" : "Add"}
          </Button>
          {/* <AddUser /> */}
        </div>
      </div>
      <div
        className={`transition-all duration-500 ease-in-out ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <AddUser fetchUsers={fetchUsers} setOpen={setOpen}/>
      </div>

      <div className="py-3 mx-auto ag-theme-quartz" style={{ height: 500 }}>
        {loading ? (
          <TableSkeleton />
        ) : (
          <AgGridReact<User>
            rowData={rowData}
            columnDefs={colDefs}
            defaultColDef={defaultColDef}
            onGridReady={onGridReady}
          />
        )}
      </div>
    </div>
  );
};

export default AccessList;
