import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <Header />
      <div className="pt-[120px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
