import React from "react";
import "./single.css";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";
import Chart from "../../component/chart/Chart";
import Listing from "../../component/table/Listing";

function Single() {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <button className="editButton">Edit</button>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/1182128/pexels-photo-1182128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="picture of products"
                className="itemImg"
              />
             <div className="details">
              <h1 className="itemTitle">Son Hun Min</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">SonMin@gmail.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone number:</span>
                <span className="itemValue">080-1234-5678</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Adress:</span>
                <span className="itemValue">Tokyo</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">Japan</span>
              </div>
             </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title='User Spending (Last 6 Months)'/>
          </div>
        </div>
        <div className="bottom1">
          <h1 className="title">Last Transactions</h1>
          <Listing/>
        </div>
      </div>
    </div>
  );
}

export default Single;
