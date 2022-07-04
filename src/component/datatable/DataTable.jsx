import React, { useState } from "react";
import "./datatable.css";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, rows } from "../../datatablesource";
import { Link } from "react-router-dom";
import "../../style/dark.css";

function Datatable() {

const [data, setData] = useState(rows)

const handleDelete = (id) => {
  setData(data.filter(item=>item.id!== id))
}

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <button className="viewButton">View</button>
            </Link>
            <button className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</button>
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
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default Datatable;
