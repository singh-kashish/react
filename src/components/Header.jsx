import { useState } from "react";
import { nameData } from "../config";

let Header = ({ search, setSearch }) => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div id="header">
      <div style={{ marginLeft: "10px" }}>
        <img src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"></img>
        <p>{nameData.data.name}</p>
      </div>
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
          <li>About</li>
          <li>Home</li>
          <li>Call</li>
        </ul>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsLoggedIn(!isLoggedIn);
        }}
        id="loginButton"
      >
        {isLoggedIn ? "Log out" : "Login"}
      </button>
    </div>
  );
};

export default Header;
