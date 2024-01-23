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
              ? " underline decoration-primary bg-transparent hover:text-secondary hover:bg-transparent decoration-2 underline-offset-8"
              : "bg-transparent hover:text-secondary hover:bg-transparent"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allProperties"
          className={({ isActive }) =>
            isActive
              ? " underline decoration-primary bg-transparent hover:text-secondary hover:bg-transparent decoration-2 underline-offset-8"
              : "bg-transparent hover:text-secondary hover:bg-transparent"
          }
        >
          All Properties
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? " underline decoration-primary bg-transparent hover:text-secondary hover:bg-transparent decoration-2 underline-offset-8"
              : "bg-transparent hover:text-secondary hover:bg-transparent"
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
              ? " underline decoration-primary bg-transparent hover:text-secondary hover:bg-transparent decoration-2 underline-offset-8"
              : "bg-transparent hover:text-secondary hover:bg-transparent"
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
              ? " underline decoration-primary bg-transparent hover:text-secondary hover:bg-transparent decoration-2 underline-offset-8"
              : "bg-transparent hover:text-secondary hover:bg-transparent"
          }
        >
          Our Goal
        </NavLink>
      </li>
      <li>
        <Link to="/dashboard/cart">
          <FaBell className="text-primary"></FaBell>
          {/* <div className="badge badge-secondary">+{notification.length}</div> */}
        </Link>
      </li>
    </>
  );
};

export default Navbar;
