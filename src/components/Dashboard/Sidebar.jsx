import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { AiOutlineBars } from "react-icons/ai";
import { FaHouseChimney } from "react-icons/fa6";
import MenuItem from "./MenuItem";
import { FaUser } from "react-icons/fa6";
import Swal from "sweetalert2";
import UserMenu from "./UserMenu";
import AdminMenu from "./AdminMenu";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../shared/CustomButton/customButton";
import { MdLogout } from "react-icons/md";
import useUserInfo from "../../hooks/useUserInfo";

const Sidebar = () => {
  const [isActive, setActive] = useState(true);
  const user = useUserInfo();
  const userRole = user?.role;
  const navigate = useNavigate();

  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    Swal.fire({
      title: "Success!",
      text: "Successfully logged out!",
      icon: "success",
      confirmButtonText: "Done",
    });
  };

  return (
    <>
      <div className="bg-primary flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <img src={logo} className="w-28" alt="" />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-black text-white w-80 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div className=" flex flex-col justify-center items-center">
            <div className="w-full flex px-4 py-2 rounded-lg justify-center items-center mx-auto">
              <Link to="/">
                {" "}
                <img src={logo} alt="" />
              </Link>{" "}
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <MenuItem
                icon={FaHouseChimney}
                label={"Home"}
                address="/"
              ></MenuItem>
              <MenuItem
                icon={FaUser}
                label={"My Profile"}
                address="/dashboard/myProfile"
              ></MenuItem>

              {userRole === "renter" && <UserMenu></UserMenu>}
              {userRole === "admin" && <AdminMenu></AdminMenu>}
            </nav>
          </div>
        </div>

        <div>
          <CustomButton wFull border
            onAction={handleLogout}
            buttonText={"Logout Now"}
            icon={MdLogout}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
