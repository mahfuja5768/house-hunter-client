import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../CustomButton/customButton";
import useUserInfo from "../../hooks/useUserInfo";
import userIcon from "../../assets/images/user.png";

export default function UserProfile({ flex, center }) {
  const user = useUserInfo();
  const navigate = useNavigate()
  // console.log(user);
  const handleLogout =()=>{
    localStorage.clear()
    navigate('/login')
  }
  return (
    <div
      className={
        flex
          ? "flex items-center justify-center gap-3 "
          : " flex flex-col gap-4"
      }
    >
      <div className="flex gap-3  lg:justify-center lg:items-center">
        {user ? (
          <div className=" flex flex-col lg:flex-row items-start lg:items-center gap-2 justify-start lg:justify-center mx-2">
            <div>
              <div className="dropdown dropdown-left">
                <label
                  tabIndex={0}
                  className="w-full btn m-1 bg-transparent hover:bg-transparent border-none"
                >
                  <img
                    src={userIcon}
                    className=" w-10 h-10 cursor-pointer rounded-full select-none"
                    alt="user photo"
                  />
                </label>

                <ul
                  tabIndex={0}
                  className="dropdown-content text-black z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {user && (
                    <Link
                      to="/login"
                      onClick={handleLogout}
                      className="btn bg-secondary border-none text-white"
                    >
                      Log out
                    </Link>
                  )}
                  {!user && (
                    <div>
                      <Link
                        to="/login"
                        className="btn bg-secondary border-none text-white"
                      >
                        Login
                      </Link>
                      <Link
                        to="/signup"
                        className="btn bg-secondary border-none text-white"
                      >
                        sign up
                      </Link>
                    </div>
                  )}
                </ul>
              </div>
            </div>

            <h3 className=" text-sm text-center mt-1">{user?.name}</h3>
          </div>
        ) : (
          <div className="flex gap-4">
            <Link
              to="/login"
              className="btn bg-secondary border-none text-white"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn bg-secondary border-none text-white"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
