import React from "react";
import "./top.scss";
import { BiSearchAlt } from "react-icons/bi";
import {TbMessageCircle} from 'react-icons/tb'
import {IoMdNotificationsOutline} from 'react-icons/io'

//Imported Image ======>
import img from '../../../Assets/user2.jpg'

function Top() {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to CAIE</h1>
          <p>for O-Level & A-Level Subjects Verification!</p>
        </div>
        <div className="searchBar flex">
          <input type="text" placeholder="Search Here..." />
          <BiSearchAlt className="icon" />
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className="icon"/>
          <IoMdNotificationsOutline className="icon"/>

          <div className="adminImage">
            <img src={img} alt="Admin Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;
