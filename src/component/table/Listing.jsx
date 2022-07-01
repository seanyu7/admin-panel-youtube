import React from "react";
import "./table.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Listing() {
  const rows = [
    {
      id: 1143155,
      product: "Acer",
      img: "",
      customer: "",
      date: "",
      amount: "",
      method: "",
      status: "approved",
    },
    {
      id: 1143156,
      product: "Acer2",
      img: "",
      customer: "",
      date: "",
      amount: "",
      method: "",
      status: "approved",
    },
    {
      id: 1143157,
      product: "Acer3",
      img: "",
      customer: "",
      date: "",
      amount: "",
      method: "",
      status: "approved",
    },
    {
      id: 1143158,
      product: "Acer4",
      img: "",
      customer: "",
      date: "",
      amount: "",
      method: "",
      status: "approved",
    },
    {
      id: 1143159,
      product: "Acer5",
      img: "",
      customer: "",
      date: "",
      amount: "",
      method: "",
      status: "approved",
    },
    {
      id: 1143160,
      product: "Acer6",
      img: "",
      customer: "",
      date: "",
      amount: "",
      method: "",
      status: "rejected",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Data</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell className="tableCell">{row.product}</TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Listing;
