import { useState } from "react";
import { nameData } from "../config";
import { Link } from "react-router-dom";
import Logo from '../assets/images/foodLogo.jpg';

let Header = ({ search, setSearch,isLoggedIn,setIsLoggedIn }) => {
  return (
    <div id="header">
      <Link to="/">
        <div style={{ marginLeft: "10px" }}>
          <img src={Logo} />
          <p>{nameData.data.name}</p>
        </div>
      </Link>
      <form
        id="searchHeader"
        onSubmit={(e) => {
          e.preventDefault();
          console.warn(e);
          const formdata = new FormData(e.target);
          const input = formdata.get("search");
          setSearch(input);
        }}
      >
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search text here"
        />
        <button type="submit">Search</button>
      </form>
      <div id="links">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <Link to="/auth" state={
        {s: isLoggedIn}
      } >
        <button id="loginButton">
          {isLoggedIn ? "Log out" : "Login"}
        </button>
      </Link>
    </div>
  );
};

export default Header;
