import React, { FCC } from "react";

import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

import "./styles.css";

const Layout: FCC = ({ children }) => {
  return <div className="layout">{children}</div>;
};

export default Object.assign(Layout, {
  Main,
  Header,
  Footer,
  Sidebar,
});
