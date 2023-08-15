import React, { FCC } from "react";

import "./styles.css";

const Sidebar: FCC = ({ children }) => {
  return <div className="sidebar">{children}</div>;
};

export default Sidebar;
