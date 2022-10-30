import React from "react";
import "./body.scss";
import Top from "./Top Section/Top";
import Listing from "./Listing Section/Listing";
import Widget from "./Widget Section/Widget";

function Body() {
  return (
    <div className="mainContent">
      <Top />
      <div className="bottom flex">
        <div className="widgets">
          <Widget type="student" />
          <Widget type="pending" />
          <Widget type="subject" />
        </div>
      </div>
        <div className="list">
          <Listing />
        </div>
    </div>
  );
}

export default Body;
