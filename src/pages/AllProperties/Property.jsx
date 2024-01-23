import React from "react";
import CustomButton from "../../shared/CustomButton/customButton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useUserInfo from "../../hooks/useUserInfo";

const Property = ({ property }) => {
  //   console.log(property);
  const user = useUserInfo();
//   console.log(user);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    picture,
    availability_date,
    bathrooms,
    bedrooms,
    city,
    rent_per_month,
    room_size,
    _id,
  } = property || {};

  const handleBook = () => {
    if (user) {
      if (user.role === "renter") {
        Swal.fire({
          title: "Success!",
          text: "Booked!",
          icon: "success",
          confirmButtonText: "Done",
        });
      } else {
        return Swal.fire({
          title: "Error!",
          text: "Owner can not buy property!",
          icon: "error",
          confirmButtonText: "Done",
        });
      }
    } else {
      return Swal.fire({
        title: "Error!",
        text: "You are not login, please login first!",
        icon: "error",
        showCancelButton: true,
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div
      style={{
        borderImage: "linear-gradient(to right, #cda840, #000)",
        borderImageSlice: 1,
        borderWidth: "4px",
        borderStyle: "solid",
      }}
      className="card"
    >
      <figure className="h-[400px] rounded-none">
        <img
          className="w-full h-full rounded-none"
          src={picture}
          alt="picture"
        />
      </figure>
      <div className="card-body p-3">
        <div className="grid grid-cols-2 justify-between  pt-5 px-2 text-lg ">
          <p>
            <span className="font-semibold">City:</span> {city}
          </p>
          <p>
            <span className="font-semibold">Bathrooms:</span> {bathrooms}
          </p>
          <p>
            <span className="font-semibold">Bedrooms:</span> {bedrooms}
          </p>
          <p>
            <span className="font-semibold">Rent:</span> {rent_per_month}$
          </p>
          <p>
            <span className="font-semibold">Room Size:</span> {room_size} sq ft
          </p>
          <p>
            <span className="font-semibold">Available:</span>{" "}
            {availability_date}
          </p>
        </div>
        <div className="card-actions flex justify-between gap-5 my-6 p-2">
          <CustomButton onAction={handleBook} buttonText={"Book Now"} />
          <Link to={`/details/${_id}`}>
            <CustomButton buttonText={"Details"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Property;
