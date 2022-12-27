import React from "react"

import {SideBarData} from "./SideBarData"


function SideBar() {
   return ( 
    <div className="SideBar">
     <ul className="SideBarList">
      {SideBarData.map((val,key) => {
  return(
    <li 
    key={key}
    className="row"
    onClick={()=> {
      window.location.pathname = val.link;
     }}
     >
  <div>{val.title}</div>
 </li>
);
})}
    </ul>
   </div>
   );
}

export default SideBar;