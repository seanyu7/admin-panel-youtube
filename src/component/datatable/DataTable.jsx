import React from "react";
import "./datatable.css";
import { DataGrid } from "@mui/x-data-grid";
import {userColumns,rows} from "../../datatablesource"


function Datatable() {
const actionColumn = [{field:"action", headerName:"Action", width:200, renderCell:()=>{
    return(
<div className="cellAction">
    <button className="viewButton">View</button>
    <button className="deleteButton">Delete</button>
</div>
    )
}}]



  return (
    <div className="dataTable">
      <DataGrid
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
