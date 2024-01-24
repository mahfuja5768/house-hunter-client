import { Link, NavLink } from "react-router-dom";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
  
  return (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? " underline decoration-black text-black hover:text-black hover:bg-transparent decoration-2 underline-offset-8"
              : "bg-transparent hover:text-black "
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? " underline decoration-black bg-transparent hover:text-black hover:bg-transparent decoration-2 underline-offset-8"
              : "bg-transparent hover:text-black"
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/career"
          className={({ isActive }) =>
            isActive
              ? " underline decoration-black bg-transparent hover:text-black hover:bg-transparent decoration-2 underline-offset-8"
              : "bg-transparent hover:text-black"
          }
        >
          Career
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/ourGoal"
          className={({ isActive }) =>
            isActive
              ? " underline decoration-black bg-transparent hover:text-black hover:bg-transparent decoration-2 underline-offset-8"
              : "bg-transparent hover:text-black"
          }
        >
          Our Goal
        </NavLink>
      </li>
    </>
  );
};

export default Navbar;
