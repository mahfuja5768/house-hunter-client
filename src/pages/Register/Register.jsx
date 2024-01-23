import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import gif from "../../assets/images/regi.gif";
import bg from "../../assets/images/church-03.jpg";
import Swal from "sweetalert2";
import { saveUser } from "../../api/api";

const Register = () => {
  const navigate = useNavigate();

  const [registerError, setRegisterError] = useState("");
  const [showPass, setShowPass] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formValues = e.target;
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const role = form.get("role");
    const email = form.get("email");
    let phnNum = form.get("phnNum");
    const password = form.get("password");

    const bangladeshiPhoneNumberPattern =
      /^(\+8801[3-9]\d{8}|8801[3-9]\d{8}|01[3-9]\d{8})$/;

    if (!bangladeshiPhoneNumberPattern.test(phnNum)) {
      return setRegisterError("Please enter a valid Bangladeshi phone number.");
    }

    // console.log(name, role, email, password, phnNum);
    const userInfo = {
      name,
      role,
      password,
      email,
      phnNum,
    };
    const userInfoForLocal = {
      name,
      role,
      email,
    };

    // if (name.length === 0 || password.length < 0) {
    //   return;
    // } else if (password.length < 6) {
    //   return setRegisterError(" The password is less than 6 characters");
    // } else if (!/[A-Z]/.test(password)) {
    //   return setRegisterError(" The password don't have a capital letter");
    // } else if (!/[!#$%&?]/.test(password)) {
    //   return setRegisterError(" The password don't have a special character");
    // }

    const saveUserInfo = await saveUser(userInfo);
    // console.log(saveUserInfo);
    if (saveUserInfo.insertedId) {
      localStorage.setItem("user", JSON.stringify(userInfoForLocal));
      Swal.fire({
        title: "Success!",
        text: "Successfully user created!",
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

    setRegisterError("");
    formValues.reset();
  };

  return (
    <div
      className="h-[100vh] py-0 lg:py-8 px-4"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="py-8 max-w-[1280px] mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-6">
          <div className="lg:col-span-2">
            <img src={gif} alt="" />
          </div>
          <div className="lg:col-span-2 ">
            <h1 className=" lg:text-5xl text-center text-4xl font-bold  my-12">
              Welcome to <span className="text-secondary">register</span> page,
            </h1>
            <form onSubmit={handleSubmit} className=" space-y-5 text-black">
              <div className="">
                <div className="form-control">
                  <label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="input input-bordered  border-2 border-primary rounded-none w-full"
                      required
                    />
                  </label>
                </div>

                <div className="form-control mt-5">
                  <select
                    name="role"
                    className="select select-bordered border-2 border-primary rounded-none w-full"
                    required
                  >
                    <option disabled>Choose Role</option>
                    <option value={"renter"}>House Renter</option>
                    <option value={"owner"}>House Owner</option>
                  </select>
                </div>

                <div className="form-control my-5">
                  <label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="input input-bordered  border-2 border-primary rounded-none w-full"
                      required
                    />
                  </label>
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
                <div className="form-control my-5">
                  <label>
                    <input
                      type="text"
                      name="phnNum"
                      placeholder="Enter your phone number"
                      className="input input-bordered  border-2 border-primary rounded-none w-full"
                      required
                    />
                  </label>
                </div>
              </div>
              <p className=" text-lg my-5  text-secondary">
                Already have an account ?
                <Link to="/login" className="link text-blue-500 ms-2">
                  Login now
                </Link>
              </p>

              {registerError && (
                <h3 className="text-2xl text-primary pb-2">{registerError}</h3>
              )}
              <input
                type="submit"
                className="w-full btn cursor-pointer bg-secondary text-white  border-transparent hover:border-primary border-4 hover:bg-transparent hover:text-primary text-lg"
                value="  Register now"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
