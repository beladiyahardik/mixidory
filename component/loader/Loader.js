import React from "react";
import BarLoader from "react-spinners/BarLoader";

const Loader = () => {
  return (
    <div>
      <BarLoader loading={true} color='red' />
    </div>
  );
};

export default Loader;
