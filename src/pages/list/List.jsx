import React from "react";
import './list.css'
import DataTable from "../../component/datatable/Datatable";
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
