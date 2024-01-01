import { useState } from "react";

let Header = () => {
  let [searchText, setSearchText] = useState("");
  return (
    <div id="header">
      <div style={{ marginLeft: "10px" }}>
        <img src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"></img>
        <p>Zumbato</p>
      </div>
      <div id="searchHeader">
        <input
          type="text"
          placeholder="Search text here"
          value={searchText}
          onChange={(e) => {
            e.preventDefault();
            setSearchText(e.target.value);
          }}
        />
        <button>Search</button>
      </div>
      <div id="links">
        <ul>
          <li>About</li>
          <li>Home</li>
          <li>Call</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
