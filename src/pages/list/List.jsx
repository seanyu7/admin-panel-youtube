import React from "react";
import DataTable from "../../component/datatable/DataTable";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";

function List() {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataTable/>
      </div>
    </div>
  );
}

export default List;
