import { Link, useLoaderData } from "react-router-dom";
import Container from "../../shared/Container/Container";
import CustomButton from "../../shared/CustomButton/customButton";
import { Helmet } from "react-helmet-async";

const PropertyDetails = () => {
  const property = useLoaderData();

  const {
    picture,
    address,
    availability_date,
    bathrooms,
    bedrooms,
    city,
    description,
    email,
    name,
    phone_number,
    rent_per_month,
    room_size,
    _id,
  } = property || {};

  return (
    <Container>
      <Helmet>
        <title>House-Hunter | Details</title>
      </Helmet>
      <div className="px-4 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 items-center justify-center">
          <div className=" lg:col-span-4">
            <img
              src={picture}
              className="w-full rounded-2xl lg:h-[80vh] object-cover"
              alt=""
            />
          </div>
          <div className=" lg:col-span-2  pt-5 px-2">
            <p className="text-xl">
              <span className="font-semibold text-xl mb-4">Description:</span>{" "}
              {description}
            </p>
            <div className="grid grid-cols-2 justify-between space-y-3 mt-6 text-lg ">
              <p>
                <span className="font-semibold">City:</span> {city}
              </p>
              <p>
                <span className="font-semibold">Address:</span> {address}
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
                <span className="font-semibold">Room Size:</span> {room_size} sq
                ft
              </p>
              <p>
                <span className="font-semibold">Available:</span>{" "}
                {availability_date}
              </p>
              <p>
                <span className="font-semibold">Phone Number:</span>{" "}
                {phone_number}
              </p>
              <p>
                <span className="font-semibold">Owner:</span> {name}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {email}
              </p>
            </div>
            <div className="card-actions flex justify-between gap-5 my-6 p-2">
              <Link to={`/booking/${_id}`}>
                <CustomButton buttonText={"Book Now"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PropertyDetails;
