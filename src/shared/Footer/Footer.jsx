import { FaFacebookF, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaPhone } from "react-icons/fa6";
import Container from "../Container/Container";
import CustomButton from "../CustomButton/customButton";

const Footer = () => {
  return (
    <div className="bg-[#000000] text-white border-t px-8 mt-12">
      <footer>
        <Container>
          <div
            className="  md:py-16 mb-10 grid grid-cols-1 md:grid-cols-2 justify-center items-start  lg:grid-cols-3 gap-12"
          >
            <div className="flex justify-center lg:items-center flex-col">
              <nav className="flex flex-col gap-4 list-none">
                <header className="text-[#cda840] font-bold text-2xl  mb-2 ">
                  Quick Menu
                </header>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? " underline decoration-primary bg-transparent hover:text-primary hover:bg-transparent decoration-2 underline-offset-8"
                        : "bg-transparent hover:text-primary hover:bg-transparent"
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
                        ? " underline decoration-primary bg-transparent hover:text-primary hover:bg-transparent decoration-2 underline-offset-8"
                        : "bg-transparent hover:text-primary hover:bg-transparent"
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
                        ? " underline decoration-primary bg-transparent hover:text-primary hover:bg-transparent decoration-2 underline-offset-8"
                        : "bg-transparent hover:text-primary hover:bg-transparent"
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/signUp"
                    className={({ isActive }) =>
                      isActive
                        ? " underline decoration-primary bg-transparent hover:text-primary hover:bg-transparent decoration-2 underline-offset-8"
                        : "bg-transparent hover:text-primary hover:bg-transparent"
                    }
                  >
                    Sign up
                  </NavLink>
                </li>
              </nav>
            </div>
            
           

            

            <div className=" lg:text-center ">
              <header className="font-bold text-2xl  mb-2 text-[#cda840]">About</header>
              <p className="lg:w-1/2 mx-auto">
                {" "}
                Discover the perfect home with House-Hunter. As your dedicated
                real estate partner, we combine expertise with personalized
                service, ensuring a seamless experience. Trust us for integrity,
                innovation, and a commitment to your goals.
              </p>
            </div>

            <div className="md:grid-cols-2 flex justify-center items-center flex-col -mt-20">
              <div className="flex flex-col gap-3 ">
                <Link to="/">
                  <img src={logo} alt="" className="mb-3 mx-auto" />
                </Link>
                <h3 className="text-[#cda840] -mt-16">QUESTION OR FEEDBACK?</h3>
                <p className="flex items-center gap-2 ">
                  <FaPhone className="text-lg"></FaPhone>{" "}
                  <span>+099 222 111</span>
                </p>
                <p className="flex items-center gap-2">
                  <FaMailBulk className="text-lg"></FaMailBulk>{" "}
                  <span>@houseHunter.com</span>
                </p>
              </div>
            </div>

          </div>
          
          <hr />
          <nav className="mx-auto flex justify-center items-center mt-5">
            <div className="flex justify-start md:items-center   md:justify-center gap-12 my-6">
              <a
                href="https://www.facebook.com/"
                className="hover:-translate-y-2 duration-300"
                target="blank"
              >
                <FaFacebookF className="text-xl text-[#cda840]"></FaFacebookF>
              </a>
              <a
                href="https://www.dribbble.com/"
                className="hover:-translate-y-2 duration-300"
                target="blank"
              >
                <FaLinkedin className="text-xl text-[#cda840]"></FaLinkedin>
              </a>
              <a
                href="https://www.twitter.com/"
                className="hover:-translate-y-2 duration-300"
                target="blank"
              >
                <FaTwitter className="text-xl text-[#cda840]"></FaTwitter>
              </a>
            </div>
          </nav>
        </Container>
        <div className=" flex  justify-center text-center items-center flex-end  py-3 px-3">
          <p>
            Copyright &copy; {new Date().getFullYear()} All Rights Reserved
            Here.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
