import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { memo } from "react";

const ShareLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default memo(ShareLayout);
