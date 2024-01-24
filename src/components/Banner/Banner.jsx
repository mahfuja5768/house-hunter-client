
import banner from "../../assets/images/banner.jpg";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div data-aos="fade-up" data-aos-duration="3000">
            <div className=" lg:col-span-3 ">
              <h1 className="mb-4 text-3xl md:text-6xl leading-9 font-bold w-full  md:w-10/12  lg:w-full mx-auto">
                Hunt Your Dream House Today
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold">
                Luxury Homes Tailored to Your Distinctive Lifestyle
              </h2>
              <p className="w-2/3 mx-auto my-6 text-[#f5f4f4]">
                Welcome to House-Hunter where exceptional living begins. Immerse
                yourself in a world of timeless elegance as you explore our
                curated collection of luxury homes.
              </p>
            </div>
            <Link to={"/allProperties"} className="mt-6">
              <button className="btn cursor-pointer bg-primary text-white border hover:border-4 hover:border-white  border-transparent hover:bg-transparent hover:text-white">
                Show Properties
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
