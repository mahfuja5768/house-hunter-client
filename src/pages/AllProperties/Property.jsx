import React from "react";
import CustomButton from "../../shared/CustomButton/customButton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useUserInfo from "../../hooks/useUserInfo";

const Property = ({ property }) => {
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
          <Link to={`/booking/${_id}`}>
            <CustomButton buttonText={"Book Now"} />
          </Link>
          <Link to={`/details/${_id}`}>
            <CustomButton buttonText={"Details"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Property;
