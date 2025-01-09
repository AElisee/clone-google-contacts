import React from "react";
import { IoPrintSharp } from "react-icons/io5";
import { PiExport } from "react-icons/pi";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { DataGrid } from "@mui/x-data-grid";
import { Avatar, Typography, Box } from "@mui/material";
import { dataTable } from "./../data/rows.js";
const rows = dataTable.sort((a, b) => a.name.localeCompare(b.name));

const columns = [
  {
    field: "name",
    headerName: "Nom",
    width: 250,
    renderCell: (params) => (
      <Box display="flex" alignItems="center" border="none">
        <Avatar
          sx={{
            bgcolor: stringToColor(params.row.name),
            mr: 2,
            mt: 1,
          }}
        >
          {params.row.name.charAt(0)}
        </Avatar>
        <Typography>{params.row.name}</Typography>
      </Box>
    ),
  },
  { field: "email", headerName: "E-mail", width: 250 },
  { field: "phone", headerName: "Numéro de téléphone", width: 200 },
  { field: "action", headerName: "", width: 0 },
];

function stringToColor(string) {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  const color = `hsl(${hash % 360}, 70%, 50%)`;
  return color;
}

const Contacts = () => {
  return (
    <div className="bg-white rounded-2xl p-5 fixed  w-[75vw] h-[85vh] overflow-hidden">
      <div className="flex gap-3 items-center">
        <p className="text-3xl">Contacts</p>
        <span className="pt-2">({rows.length})</span>
      </div>

      <div>
        <div className="flex w-[100%] justify-between pt-5 pb-2 px-2 border-b-2">
          <div className="w-[35%]">Nom</div>
          <div className="w-[25%]">E-mail</div>
          <div className="w-[25%]">Numéro de téléphone</div>
          <div className="w-[15%] flex gap-3 items-center justify-end">
            <Tooltip title="Imprimer">
              <IconButton>
                <IoPrintSharp className="w-5 h-5" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Exporter">
              <IconButton>
                <PiExport className="w-5 h-5" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Paramètres de liste">
              <IconButton>
                <PiDotsThreeVerticalBold className="w-5 h-5" />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="h-[400px] w-full pt-3 pb-10">
        <p className="pb-2">contacts</p>
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          hideFooter={true} // Cache la pagination et le footer
          disableColumnMenu={true} // Désactive le menu des colonnes
          disableColumnFilter={true} // Désactive le filtre sur les colonnes
          disableColumnSelector={true} // Désactive le sélecteur de colonnes
          sx={{
            "& .MuiDataGrid-columnHeaders": { display: "none" }, // Cache le header
          }}
        />
      </div>
    </div>
  );
};

export default Contacts;
