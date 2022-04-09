import React from "react";
import { useSelector } from 'react-redux';

const Loader = () => {
  const ISLOADING = useSelector((state) => state.isLoading);
  return (
    <div>
      {
        ISLOADING ?
          <div className="col-sm-6 text-center bg-loader">
            <div className="loader"></div>
          </div>
          : ''
        }
    </div>
  );
};

export default Loader;
