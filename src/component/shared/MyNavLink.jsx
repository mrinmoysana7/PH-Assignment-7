import { NavLink } from "react-router-dom";

const MyNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        ` font-medium ${
            isActive 
            ? "text-white bg-[#275a49e0] px-4 py-2 rounded"
            : "text-gray-700"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;
