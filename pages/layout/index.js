import React from "react";
import Loader from "../../component/loader/Loader";

const Layout = ({ children }) => {
  return (
    <div>
      <Loader />
      {children}
    </div>
  );
};

export default Layout;
