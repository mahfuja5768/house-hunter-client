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
              ? " underline decoration-primary text-primary hover:text-primary hover:bg-transparent decoration-2 underline-offset-8"
              : "bg-transparent hover:text-primary "
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
              ? " underline decoration-primary bg-transparent hover:text-primary hover:bg-transparent decoration-2 underline-offset-8"
              : "bg-transparent hover:text-primary"
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
              ? " underline decoration-primary bg-transparent hover:text-primary hover:bg-transparent decoration-2 underline-offset-8"
              : "bg-transparent hover:text-primary"
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
              ? " underline decoration-primary bg-transparent hover:text-primary hover:bg-transparent decoration-2 underline-offset-8"
              : "bg-transparent hover:text-primary"
          }
        >
          Our Goal
        </NavLink>
      </li>
    </>
  );
};

export default Navbar;
