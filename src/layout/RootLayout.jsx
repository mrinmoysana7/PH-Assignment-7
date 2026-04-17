import { Outlet } from "react-router-dom";
import Navbar from "../component/shared/Navbar";
import Footer from "../component/pages/footer/Footer";

const RootLayout = () => {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]"> 
      <Navbar></Navbar>
      <div className="bg-green-50">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
