// import Navlogo from "../../assets/images/Logo (2).png";
import Navlogo from "../../assets/images/logo.png";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
  return (
    <nav className="shadow-sm px-10 md:px-20 sticky top-0 z-50 bg-white">
      <div className="md:flex py-5 justify-between">
        <img src={Navlogo} className="mx-auto md:mx-0" alt="nav-logo" />

        <ul className="flex items-center mt-5 md:mt-0 justify-center  gap-5">
          <li>
            <MyNavLink to={"/"}>Home</MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/timeline"}>Timeline</MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/stats"}>Stats</MyNavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
