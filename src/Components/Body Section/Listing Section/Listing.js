import React from "react";
import "./listing.scss";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

function Listing() {
  const students = [
    {
      id: 182360,
      name: "MALAIKA KHAN",
      img: "https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?w=740&t=st=1666931203~exp=1666931803~hmac=bee8d8e1531349500354d7b73c8947a76d94e50ae50d95afd2df7954c7307a6e",
      class: "AI",
      sec: "C",
      father: "ISMAIL KHAN",
      cnic: "36503-333423-0",
    },
    {
      id: 539413,
      name: "HAMNA JAVAID",
      img: "https://img.freepik.com/free-photo/glamour-stylish-feminine-woman-with-long-natural-red-hair-purple-sweater-holding-hand-pocket-as-pointing-upper-left-corner-showing-place-she-does-hairstyle-makeup-violet-wall_1258-81055.jpg?w=740&t=st=1667007094~exp=1667007694~hmac=f4bce86538945b2bfdb14d7e5fe5459cc717609de9d69e3ac8d5470557590f97",
      class: "AI",
      sec: "C",
      father: "JAVAID KHAN",
      cnic: "36503-346426-3",
    },

    {
      id: 539413,
      name: "HAMNA JAVAID",
      img: "https://img.freepik.com/free-photo/business-concept-confident-young-cheerful-woman-showing-thumb-up-isolated-grey-copy-space-backg_1258-104421.jpg?w=740&t=st=1667007143~exp=1667007743~hmac=d942cdc703d41beed7438b96ec347810122abf0f62c356cd5b8fab34d869067f",
      class: "AI",
      sec: "C",
      father: "JAVAID KHAN",
      cnic: "36503-346426-3",
    },
  ];
  const columns = [
    {
      dataField: "id",
      text: "Roll #",

      headerStyle: { width: "80px", height:"45px",textAlign: "center" },
      style: { textAlign: "center", paddingTop: "1.5rem" },
    },
    {
      dataField: "name",
      text: "Student Name",
      headerStyle: { width: "240px",height:"45px", textAlign: "center" },
      formatter: (cell, row) => {
        console.log(row);
        return (
          <div className="mainTable">
            <div className="imgDiv">
              <img src={`${row.img}`} alt="student image" className="image" />
            </div>
            <p>{`${row.name}`}</p>
          </div>
        );
      },
    },
    {
      dataField: "class",
      text: "Class / Sec",
      formatter: (cell, row) => {
        console.log(row);
        return <div>{`${row.class} - ${row.sec}`}</div>;
      },
      headerStyle: { width: "100px", height:"45px",textAlign: "center" },
      style: { textAlign: "center", paddingTop: "1.5rem" },
    },
    {
      dataField: "father",
      text: "Father's Name",
      headerStyle: { width: "240px", height:"45px", textAlign: "center" },
      style: { textAlign: "center", paddingTop: "1.5rem" },
    },
    {
      dataField: "cnic",
      text: "CNIC #",
      headerStyle: { width: "130px", height:"45px", textAlign: "center" },
      style: { textAlign: "center", paddingTop: "1.5rem" },
    },
  ];
  return (
    <div className="listing">
      <h3>Recently Added Students</h3>
      <BootstrapTable keyField="id" data={students} columns={columns} />
    </div>
  );
}

export default Listing;
