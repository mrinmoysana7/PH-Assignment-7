// import Navlogo from "../../assets/images/Logo (2).png";
import Navlogo from "../../assets/images/logo.png";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
  return (
    <nav className="shadow-sm px-10 md:px-20">
      <div className="flex py-5 justify-between">
        <img src={Navlogo} className="" alt="nav-logo" />

        <ul className="flex items-center gap-5">
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
