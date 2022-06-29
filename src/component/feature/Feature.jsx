import React from "react";
import "./feature.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

function Feature() {
  return (
    <div className="feature">
      <div className="top">
        Total revenue
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="discription">Previous transaction processing. Last payment may not be included.</p>
      </div>
    </div>
  );
}

export default Feature;
