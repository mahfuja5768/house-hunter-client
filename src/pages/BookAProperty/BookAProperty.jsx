import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import useUserInfo from "../../hooks/useUserInfo";
import bg from "../../assets/images/church-03.jpg";
import Swal from "sweetalert2";
import { bookAProperty } from "../../api/api";
import { useState } from "react";

export default function BookAProperty() {
  const [error, setError] = useState(null);
  const { id } = useParams();
  // console.log(id);
  const user = useUserInfo();
  //   console.log(user);
  const navigate = useNavigate();
  const location = useLocation();

  const handleBook = async (e) => {
    e.preventDefault();
    setError(null);
    const formValues = e.target;
    const form = new FormData(e.currentTarget);
    if (user.role === "renter") {
      let phnNum = form.get("phnNum");

      const bangladeshiPhoneNumberPattern =
        /^(\+8801[3-9]\d{8}|8801[3-9]\d{8}|01[3-9]\d{8})$/;

      if (!bangladeshiPhoneNumberPattern.test(phnNum)) {
        return setError("Please enter a valid Bangladeshi phone number.");
      }

      const bookingInfo = {
        name: user?.name,
        email: user?.email,
        phnNum,
        propertyId: id,
      };

      const saveBookingInfo = await bookAProperty(bookingInfo);
      // console.log(saveBookingInfo);
      if (saveBookingInfo.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Property booked!",
          icon: "success",
          confirmButtonText: "Done",
        });
        navigate("/");
      } else {
        Swal.fire({
          title: "Error!",
          text: `${saveBookingInfo.message}`,
          icon: "error",
          confirmButtonText: "Done",
        });
      }
    } else {
      return Swal.fire({
        title: "Error!",
        text: "Owner can not buy property!",
        icon: "error",
        confirmButtonText: "Done",
      });
    }
    formValues.reset();
    setError(null);
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
        <div className="lg:col-span-2 ">
          <h1 className=" lg:text-5xl text-center text-4xl font-bold  my-12">
            Welcome to <span className="text-secondary">Booking</span> page,
          </h1>
          <form onSubmit={handleBook} className=" space-y-5 text-black">
            <div className="">
              <div className="form-control">
                <label>
                  <input
                    defaultValue={user?.name}
                    placeholder="Enter your name"
                    className="input input-bordered  border-2 border-primary rounded-none w-full"
                    required
                  />
                </label>
              </div>

              <div className="form-control my-5">
                <label>
                  <input
                    defaultValue={user?.email}
                    placeholder="Enter your email"
                    className="input input-bordered  border-2 border-primary rounded-none w-full"
                    readOnly
                  />
                </label>
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
            {error && <h3 className="text-2xl text-primary  pb-2">{error}</h3>}
            <input
              type="submit"
              className="w-full btn cursor-pointer bg-secondary text-white  border-transparent hover:border-primary border-4 hover:bg-transparent hover:text-primary text-lg"
              value="Book now"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
