import { Outlet } from "react-router-dom";
import Navbar from "../component/shared/Navbar";
import Footer from "../component/pages/footer/Footer";
import { ToastContainer } from "react-toastify";

const RootLayout = () => {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]"> 
      <Navbar></Navbar>
      <div className="bg-green-50">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>


      <ToastContainer />
    </div>
  );
};

export default RootLayout;
