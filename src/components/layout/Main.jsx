import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <Header />
      <div className="pt-[130px] pb-[200px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
