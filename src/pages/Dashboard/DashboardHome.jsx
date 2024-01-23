import { Link } from "react-router-dom";
import Container from "../../shared/Container/Container";
import Swal from "sweetalert2";
import { MdLogout } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import MenuItem from "../../components/Dashboard/MenuItem";
import { IoIosArrowDown } from "react-icons/io";
import useUserInfo from "../../hooks/useUserInfo";
import userIcon from "../../assets/images/user.png";

const DashboardHome = () => {

  const user = useUserInfo();
  const userRole = user?.role;

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
    <Container>
      <div className=" ps-3 my-12">
        <div className="flex items-center justify-between  ">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold">
              Welcome to, {userRole} Dashboard
            </h2>
          </div>
          <div className="">
              <div className="dropdown dropdown-left">
                <label
                  tabIndex={0}
                  className="container mx-auto btn m-1 bg-transparent hover:bg-transparent border-none"
                >
                  <img
                    src={userIcon}
                    className=" w-10 h-10 cursor-pointer rounded-full select-none"
                    alt="user photo"
                  />{" "}
                  <IoIosArrowDown className="text-xl font-bold" />
                </label>

                <ul
                  tabIndex={0}
                  className="dropdown-content flex flex-col justify-center items-center bg-black text-black z-[1] menu p-2 shadow rounded-box w-52"
                >
                  <MenuItem
                    icon={FaUser}
                    label={"My Profile"}
                    address="/dashboard/myProfile"
                  ></MenuItem>
                  <Link
                    to="/login"
                    onClick={handleLogout}
                    className=" text-red-500 mb-4 font-semibold text-xl flex-row-reverse items-center border-none flex justify-center gap-3"
                  >
                    <span> Log out</span> <MdLogout className="text-lg" />
                  </Link>
                </ul>
              </div>
       
          </div>
        </div>
        <div className="divider divider-Neutral"></div>
      </div>
    </Container>
  );
};

export default DashboardHome;
