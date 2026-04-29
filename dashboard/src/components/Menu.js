import { People } from "@mui/icons-material";
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isprofileOpen, setIsProfileOpen] = useState(false);
  const [profile,setProfile]=useState({email:"abc",name:"abc"})
  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };
  const handleProfileClick = () => {
    setIsProfileOpen(!isprofileOpen);
  };

   useEffect(()=>{
    axios.get("http://localhost:3002/profile").then((res)=>{
      profile(res.data);
    }).catch((err)=>{
      console.log(err);
    });
  },[]);

  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link to={"/"} onClick={()=>handleMenuClick(0)} style={{ textDecoration: "none" }}>
              <p className={selectedMenu==0 ? activeMenuClass:menuClass }>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to={"/orders"} onClick={()=>handleMenuClick(1)} style={{ textDecoration: "none" }}>
              <p className={selectedMenu==1 ? activeMenuClass:menuClass }>Orders</p>
            </Link>
          </li>
          <li>
              <Link to={"/holdings"} onClick={()=>handleMenuClick(2)} style={{ textDecoration: "none" }}>
              <p className={selectedMenu==2 ? activeMenuClass:menuClass }>Holdings</p>
            </Link>
          </li>
          <li>
            <Link to={"/positions"} onClick={()=>handleMenuClick(3)} style={{ textDecoration: "none" }}>
              <p className={selectedMenu==3 ? activeMenuClass:menuClass }>Positions</p>
            </Link>
          </li>
          <li>
           <Link to={"/funds"} onClick={()=>handleMenuClick(4)} style={{ textDecoration: "none" }}>
              <p className={selectedMenu==4 ? activeMenuClass:menuClass }>Funds</p>
            </Link>
          </li>
          <li>
            <Link to={"/apps"} onClick={()=>handleMenuClick(5)} style={{ textDecoration: "none" }}>
              <p className={selectedMenu==5 ? activeMenuClass:menuClass }>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        {/* onClick={handleProfileClick} */}
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{profile.name.slice(0,2).toUpperCase()}</div>
          <p className="username">{profile.name}</p>
        </div>
        {isprofileOpen}
      </div>
    </div>
  );
};

export default Menu;
