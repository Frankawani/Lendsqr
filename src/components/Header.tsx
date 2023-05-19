import React from "react";
const Logo = require("../images/Group.png") as string;
function Header() {
  return (
    <header>
      <div>
        <img src={Logo} alt="" />
      </div>
      <div></div>
      <div></div>
    </header>
  );
}

export default Header;
