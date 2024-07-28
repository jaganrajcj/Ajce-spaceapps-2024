import React, { useCallback, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Button, Input, Typography } from "@material-tailwind/react";
import { Download } from "lucide-react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { ColDef, GridReadyEvent, GridApi } from "ag-grid-community";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { getRegistrations } from "@/app/actions";
import TableSkeleton from "./tableSkeleton";

interface Registration {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  institution: string;
  district: string;
  teamLeadName: string;
  teamLeadPhone: string;
}

type DynamicRegistration = Partial<Registration> & { [key: string]: any };

const Registrations = () => {
  const [rowData, setRowData] = useState<Registration[]>([]);

  const [colDefs] = useState<ColDef<Registration>[]>([
    {
      field: "id",
      headerName: "ID",
      width: 70,
      maxWidth: 80, // Set a maximum width
      filter: "agNumberColumnFilter",
      flex: 0, // Prevent this column from flexing
    },
    {
      field: "firstName",
      headerName: "First Name",
      filter: "agTextColumnFilter",
    },
    { field: "lastName", headerName: "Last Name" },
    { field: "email", headerName: "Email", filter: "agTextColumnFilter" },
    { field: "phone", headerName: "Phone", filter: "agTextColumnFilter" },
    {
      field: "institution",
      headerName: "Institution",
      filter: "agTextColumnFilter",
      sortable: true,
    },
    {
      field: "district",
      headerName: "District",
      filter: "agTextColumnFilter",
      sortable: true,
    },
    { field: "teamLeadName", headerName: "Team Lead Name" },
    { field: "teamLeadPhone", headerName: "Team Lead Phone" },
  ]);
  const [loading, setLoading] = useState<boolean>(true);

  const defaultColDef = {
    flex: 1,
    sortable: false,
    filter: false,
    floatingFilter: false,
  };
  React.useEffect(() => {
    const getRegs = async () => {
      const data = await getRegistrations();
      console.log("Data: ", data);
      setRowData(data as Registration[]);
      setLoading(false);
    };
    getRegs();
  }, []);

  const [gridApi, setGridApi] = useState<GridApi | null>(null);

  const onGridReady = (params: GridReadyEvent) => {
    setGridApi(params.api);
  };

  const exportToExcel = (data: Registration[], fileName: string) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Registrations");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const dataBlob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    saveAs(dataBlob, `${fileName}.xlsx`);
  };

  const handleExport = () => {
    exportToExcel(rowData, "Registrations");
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between md:items-center gap-y-4 flex-col md:flex-row">
        <div>
          <Typography className="font-bold">Registrations List</Typography>
          <Typography variant="small" className="font-normal text-gray-600">
            See information about all registered participants
          </Typography>
        </div>
        <div className="flex gap-2">
          <Button
            className="flex flex-row gap-2 items-center justify-center"
            onClick={() => {
              handleExport();
            }}
          >
            <Download className="h-4 w-4" />
            Download
          </Button>
        </div>
      </div>
      <div className="py-3 mx-auto ag-theme-quartz" style={{ height: 500 }}>
        {loading ? (
          <TableSkeleton />
        ) : (
          <AgGridReact<Registration>
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

export default Registrations;
