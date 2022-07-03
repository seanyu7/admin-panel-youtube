import React from "react";
import "./datatable.css";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, rows } from "../../datatablesource";
import { Link } from "react-router-dom";
import "../../style/dark.css";

function Datatable() {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <button className="viewButton">View</button>
            </Link>
            <button className="deleteButton">Delete</button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="dataTable">
      <div className="datatabletitle">
        Add New User
        <Link
          to="/users/new"
          style={{ textDecoration: "none" }}
          className="link"
        >
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={rows}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default Datatable;
