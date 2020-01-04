import React from "react";

// import Header from "./header"
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;
