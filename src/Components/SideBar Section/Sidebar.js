import React from "react";
import "./sidebar.scss";

//Imported Images ======>
import logo from "../../Assets/Logo.png";

//Imported Images ======>
import { MdSpaceDashboard, MdReduceCapacity } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { RiFileList3Fill } from "react-icons/ri";
import { HiDocumentReport } from "react-icons/hi";
import { ImBooks } from "react-icons/im";
import { BsQuestionCircle } from "react-icons/bs";

function Sidebar() {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <img src={logo} alt="Image Name" />
        <h2>CAIE</h2>
      </div>

      {/* Quick Menue */}
      <div className="menuDiv">
        <h3 className="divTitle">QUICK MENU</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdSpaceDashboard className="icon" />
              <span className="smallText">Dashboard</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <FaUserGraduate className="icon" />
              <span className="smallText">Student</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <RiFileList3Fill className="icon" />
              <span className="smallText">Lists</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <HiDocumentReport className="icon" />
              <span className="smallText">Report</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Settings */}

      <div className="settingsDiv">
        <h3 className="divTitle">SETTINGS</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <ImBooks className="icon" />
              <span className="smallText">Subjects</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdReduceCapacity className="icon" />
              <span className="smallText">Class Assign</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="sideBarCard">
        <BsQuestionCircle className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Help Center</h3>
          <p>
            Having trouble in CIE, Please contact us from for more questions.
          </p>
          <button className="btn">Go to help center</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
