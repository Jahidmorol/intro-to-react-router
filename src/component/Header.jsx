import React from "react";
import { Link, NavLink } from "react-router-dom";
import ActiveLink from "./ActiveLink";
const Header = () => {
    console.log(NavLink);
  return (
    <div className="w-96 m-auto">
      {/* <nav className="inline-flex gap-8 py-7">
        <NavLink to="/" className={({isActive}) => (isActive ? "text-red-500" : "")}>Home</NavLink>
        <NavLink to="/about" className={({isActive}) => (isActive ?"text-red-500" : "")}>About</NavLink>
        <NavLink to="/contact" className={({isActive}) => (isActive ? "text-red-500" : "")}>Contact</NavLink>
        <NavLink to="/friends" className={({isActive}) => (isActive ? "text-red-500" : "")}>Friends</NavLink>
        <NavLink to="/posts" className={({isActive}) => (isActive ? "text-red-500" : "")}>Posts</NavLink>
      </nav> */}
      <nav className="inline-flex gap-8 py-7">
        <ActiveLink to="/">Home</ActiveLink>
        <ActiveLink to="/about">About</ActiveLink>
        <ActiveLink to="/contact">Contact</ActiveLink>
        <ActiveLink to="/friends">Friends</ActiveLink>
        <ActiveLink to="/posts">Posts</ActiveLink>
      </nav>
    </div>
  );
};

export default Header;
