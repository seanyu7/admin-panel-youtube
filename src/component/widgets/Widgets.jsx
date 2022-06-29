import React from "react";
import "./widgets.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonIcon from "@mui/icons-material/Person";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";

function Widgets({ type }) {
  let data;
  //temporary
  const amount = 100;
  const diff = 50;

  switch (type) {
    case "users":
      data = {
        title: "USERS",
        isMoney: false,
        Link: "See all users",
        icon: <PersonIcon className="icon" style={{ color: "crimson",backgroundColor:"" }} />,
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        Link: "View all orders",
        icon: <LocalShippingIcon className="icon" style={{ color: "blue",backgroundColor:"" }}/>,
      };
      break;
    case "earning":
      data = {
        title: "EARNING",
        isMoney: true,
        Link: "View net earnings",
        icon: <AttachMoneyIcon className="icon" style={{ color: "green",backgroundColor:"" }}/>,
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        Link: "View balance",
        icon: <PointOfSaleIcon className="icon" style={{ color: "purple",backgroundColor:"" }}/>,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {amount}
        </span>
        <span className="link">See all users</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default Widgets;
