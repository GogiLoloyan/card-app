import React, { FCC } from "react";

import "./styles.css";

const Header: FCC = ({ children }) => {
  return <header className="header">{children}</header>;
};

export default Header;
