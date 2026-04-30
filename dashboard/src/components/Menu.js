import {
  AccountCircle,
  Dashboard as DashboardIcon,
  KeyboardArrowDown,
  Logout,
  Person,
  Settings,
} from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [profile, setProfile] = useState({ email: "", user: "User" });
  const profileMenuRef = useRef(null);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:3002/profile", {
          withCredentials: true,
        });

        if (res.data?.status) {
          setProfile(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchProfile();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  const profileInitials = profile?.user
    ? profile.user
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "US";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="Zerodha" />
      <div className="menus">
        <ul>
          <li>
            <Link
              to={"/"}
              onClick={() => handleMenuClick(0)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              to={"/orders"}
              onClick={() => handleMenuClick(1)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              to={"/holdings"}
              onClick={() => handleMenuClick(2)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              to={"/positions"}
              onClick={() => handleMenuClick(3)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              to={"/funds"}
              onClick={() => handleMenuClick(4)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              to={"/apps"}
              onClick={() => handleMenuClick(5)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile-menu-wrap" ref={profileMenuRef}>
          <button
            className={`profile ${isProfileOpen ? "profile-open" : ""}`}
            onClick={handleProfileClick}
            aria-expanded={isProfileOpen}
            aria-haspopup="menu"
            type="button"
          >
            <div className="avatar">{profileInitials}</div>
            <p className="username">{profile.user}</p>
            <KeyboardArrowDown className="profile-chevron" />
          </button>

          {isProfileOpen && (
            <div className="profile-dropdown" role="menu">
              <div className="profile-dropdown-header">
                <div className="profile-dropdown-avatar">
                  <AccountCircle />
                </div>
                <div>
                  <h6>{profile.user}</h6>
                  <small>{profile.email || "No email added"}</small>
                </div>
              </div>

              <button className="profile-dropdown-item" type="button" role="menuitem">
                <Person className="profile-dropdown-icon" />
                <span>My Profile</span>
              </button>
              <button className="profile-dropdown-item" type="button" role="menuitem">
                <Settings className="profile-dropdown-icon" />
                <span>Settings</span>
              </button>
              <button className="profile-dropdown-item" type="button" role="menuitem">
                <DashboardIcon className="profile-dropdown-icon" />
                <span>Dashboard</span>
              </button>

              <div className="profile-dropdown-divider" />

              <button
                className="profile-dropdown-item profile-dropdown-logout"
                type="button"
                role="menuitem"
              >
                <Logout className="profile-dropdown-icon" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
