import React from "react";
import Chart from "../../component/chart/Chart";
import Feature from "../../component/feature/Feature";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";
import Table from "../../component/table/Table";
import Widgets from "../../component/widgets/Widgets";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgets type="users" />
          <Widgets type="order" />
          <Widgets type="earning" />
          <Widgets type="balance" />
        </div>
        <div className="charts">
          <Feature/>
          <Chart/>
        </div>
        <div className="table">
          <Table/>
        </div>
      </div>
    </div>
  );
}

export default Home;
