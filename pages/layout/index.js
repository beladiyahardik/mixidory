import React, { useEffect } from "react";
import { useRouter } from 'next/router';
import Loader from "../../component/loader/Loader";
import Footer from "../../component/footer/Footer";

const Layout = ({ children }) => {
  const router = useRouter();
  const path = ['/signup', '/resetpassword', '/'];
  const { pathname } = { ...router };

  useEffect(() => {
    if (!path.includes(pathname)) {
      router.push('/');
    }
  }, []);

  return (
    <div>
      <Loader />
      {children}
      {!path.includes(pathname) ? <Footer /> : <></>}
    </div>
  );
};

export default Layout;
