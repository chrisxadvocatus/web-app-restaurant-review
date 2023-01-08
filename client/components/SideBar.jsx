import React from "react"
import "./sideBar.Style.css"
import {SideBarData} from "./SideBarData"


function SideBar() {
   return ( 
    <body className="body-sidebar">
      sidebar
   </body>
   );
}

export default SideBar;

// function SideBar() {
//    return ( 
//     <div className="bodySideBar">
//       sidebar
//      <ul className="SideBarList">
//       {SideBarData.map((val,key) => {
//   return(
//     <li 
//     key={key}
//     className="row"
//     onClick={()=> {
//       window.location.pathname = val.link;
//      }}
//      >
//   <div>{val.title}</div>
//  </li>
// );
// })}
//     </ul>
//    </div>
//    );
// }