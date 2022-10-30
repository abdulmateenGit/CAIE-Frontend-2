import "./widget.scss";
import { BsPerson } from "react-icons/bs";
import { MdOutlineAutoStories, MdKeyboardArrowUp, MdOutlinePending } from "react-icons/md";

function Widget({ type }) {
    let data;
  
    const number = 2000;
    const diff = 20;
  
    switch (type) {
      case "student":
        data = {
          title: "STUDENTS",
          total: false,
          link: "See all students",
          icon: (
            <BsPerson
              className="icon"
              style={{
                color: "goldenrod",
                backgroundColor: "rgba(218, 165, 32,0.2)",
              }}
            />
          ),
        };
        break;
  
      case "subject":
        data = {
          title: "SUBJECTS",
          total: false,
          link: "See all subjects",
          icon: (
            <MdOutlineAutoStories
              className="icon"
              style={{
                color: "green",
                backgroundColor: "rgba(0, 128, 0,0.2)",
              }}
            />
          ),
        };
        break; 
  
      case "pending":
        data = {
          title: "PENDING",
          total: false,
          link: "View all pending",
          icon: (
            <MdOutlinePending
              className="icon"
              style={{ 
                color: "crimson",
                backgroundColor: "rgba(255, 0, 0,0.2)" 
              }}
            />
          ),
        };
        break;
  
    //   case "approved":
    //     data = {
    //       title: "APPROVED",
    //       total: false,
    //       link: "See all approved",
    //       icon: (
    //         <MdOutlineAutoStories
    //           className="icon"
    //           style={{
    //             color: "purple",
    //             backgroundColor: "rgba(128, 0, 128,0.2)",
    //           }}
    //         />
    //       ),
    //     };
    //     break;
  
      default:
        break;
    }
  
 return (
    <div className="widget">
      <div className="left">
        <div className="title">{data.title}</div>
        <div className="counter">{data.total}{number}</div>
        <div className="link">{data.link}</div>
      </div>
      <div className="right"> 
        <div className="percentage positive">
          <MdKeyboardArrowUp />
          {diff}
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default Widget;
