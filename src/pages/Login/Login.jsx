import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import gif from "../../assets/images/login-form.gif";
import bg from "../../assets/images/church-03.jpg";
import { logUser } from "../../api/api";
import Swal from "sweetalert2";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [showPass, setShowPass] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formValues = e.target;
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    const userInfo = { email, password };

    const saveUserInfo = await logUser(userInfo);
    console.log(saveUserInfo);
    if (saveUserInfo.name) {
      localStorage.setItem("user", JSON.stringify(saveUserInfo));
      Swal.fire({
        title: "Success!",
        text: "Successfully user logged in!",
        icon: "success",
        confirmButtonText: "Done",
      });
      navigate("/");
    } else {
      Swal.fire({
        title: "Error!",
        text: `${saveUserInfo.message}`,
        icon: "error",
        confirmButtonText: "Done",
      });
    }

    setLoginError("");
    formValues.reset();
  };

  return (
    <div
      className="py-0 lg:py-8 px-4 h-[100vh]"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" py-8 max-w-[1280px] mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-6">
          <div className="lg:col-span-2">
            <img
              src={gif}
              alt=""
              className="flex justify-center items-center"
            />
          </div>
          <div className="lg:col-span-2">
            <h1 className=" lg:text-5xl text-center text-4xl font-bold  my-12">
              Welcome to <span className="text-secondary">login</span> page,
            </h1>
            <form onSubmit={handleSubmit} className=" space-y-5  text-black">
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered  border-2 border-primary rounded-none w-full"
                  required
                />
              </div>

              <div className="form-control  text-lg">
                <div className=" flex items-center">
                  <input
                    type={showPass ? "password" : "text"}
                    name="password"
                    placeholder="password"
                    className="input w-full border-2 border-primary rounded-none input-bordered text-black"
                    required
                  />
                  <span className="-ms-12">
                    {showPass ? (
                      <FaEyeSlash onClick={() => setShowPass(!showPass)} />
                    ) : (
                      <FaEye onClick={() => setShowPass(!showPass)} />
                    )}
                  </span>
                </div>
              </div>
              <p className=" text-lg my-5 text-secondary">
                New to this
                <Link to="/register" className="link text-blue-500 ms-2">
                  Register now
                </Link>
              </p>

              {loginError && (
                <h3 className="text-2xl text-primary  pb-2">{loginError}</h3>
              )}
              <input
                type="submit"
                className="w-full btn cursor-pointer bg-secondary text-white  border-transparent hover:border-primary border-4 hover:bg-transparent hover:text-primary text-lg"
                value="Login now"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
