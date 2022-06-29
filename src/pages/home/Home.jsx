import React from "react";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";
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
          <Widgets type="erarning" />
          <Widgets type="balance" />
        </div>
      </div>
    </div>
  );
}

export default Home;
