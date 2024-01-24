import React, { useState } from "react";
import useUserInfo from "../../../hooks/useUserInfo";
import { useLocation, useNavigate } from "react-router-dom";
import bg from "../../../assets/images/church-03.jpg";
import { imageUpload } from "../../../api/utils";
import axiosSecure from "../../../api";
import Swal from "sweetalert2";

const AddNewProperty = () => {
  const [error, setError] = useState(null);
  const user = useUserInfo();
  const navigate = useNavigate();
  const location = useLocation();

  const handleBook = async (e) => {
    e.preventDefault();
    setError(null);
    const formValues = e.target;
    const form = new FormData(e.currentTarget);
    const phone_number = form.get("phnNum");
    const address = form.get("address");
    const availability_date = form.get("availability_date");
    const bathrooms = form.get("bathrooms");
    const bedrooms = form.get("bedrooms");
    const city = form.get("city");
    const rent_per_month = form.get("rent_per_month");
    const room_size = form.get("room_size");
    const description = form.get("description");
    const propertyImge = form.get("picture");

    const bangladeshiPhoneNumberPattern =
      /^(\+8801[3-9]\d{8}|8801[3-9]\d{8}|01[3-9]\d{8})$/;

    if (!bangladeshiPhoneNumberPattern.test(phone_number)) {
      return setError("Please enter a valid Bangladeshi phone number.");
    }

    const propertyImgData = await imageUpload(propertyImge);
    const picture = propertyImgData?.data?.display_url;

    const property = {
      picture,
      address,
      availability_date,
      bathrooms,
      bedrooms,
      city,
      description,
      email: user?.email,
      name: user?.name,
      phone_number,
      rent_per_month,
      room_size,
    };
    const saveProperty = await axiosSecure.post("/admin-properties", property);

    console.log(saveProperty);

    if (saveProperty.data.insertedId) {
      Swal.fire({
        title: "Success!",
        text: "Property added!",
        icon: "success",
        confirmButtonText: "Done",
      });
      navigate("/dashboard/adminAddedProperty");
    } else {
      Swal.fire({
        title: "Error!",
        text: `${saveProperty.message}`,
        icon: "error",
        confirmButtonText: "Done",
      });
    }
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
        <div className="lg:col-span-2 ">
          <h1 className=" lg:text-5xl text-center text-4xl font-bold  my-12">
            Welcome to <span className="text-secondary">Add property</span>{" "}
            page,
          </h1>
          <form onSubmit={handleBook} className=" space-y-5 text-black">
            <div className="">
              <div className="form-control">
                <label>
                  <input
                    readOnly
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

              <div className="form-control">
                <label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter property city"
                    className="input input-bordered  border-2 border-primary rounded-none w-full"
                    required
                  />
                </label>
              </div>

              <div className="form-control my-5">
                <label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter property address"
                    className="input input-bordered  border-2 border-primary rounded-none w-full"
                    required
                  />
                </label>
              </div>

              <div className="form-control my-5">
                <label>
                  <input
                    type="date"
                    name="availability_date"
                    placeholder="Enter your phone number"
                    className="input input-bordered  border-2 border-primary rounded-none w-full"
                    required
                  />
                </label>
              </div>

              <div className="form-control my-5">
                <label>
                  <input
                    type="number"
                    name="bathrooms"
                    placeholder="Enter total bathrooms "
                    className="input input-bordered  border-2 border-primary rounded-none w-full"
                    required
                  />
                </label>
              </div>

              <div className="form-control my-5">
                <label>
                  <input
                    type="number"
                    name="bedrooms"
                    placeholder="Enter total bedrooms "
                    className="input input-bordered  border-2 border-primary rounded-none w-full"
                    required
                  />
                </label>
              </div>

              <div className="form-control my-5">
                <label>
                  <input
                    type="number"
                    name="room_size"
                    placeholder="Enter room size "
                    className="input input-bordered  border-2 border-primary rounded-none w-full"
                    required
                  />
                </label>
              </div>

              <div className="form-control my-5">
                <label>
                  <input
                    type="number"
                    name="rent_per_month"
                    placeholder="Enter rent per month "
                    className="input input-bordered  border-2 border-primary rounded-none w-full"
                    required
                  />
                </label>
              </div>

              <div className="form-control">
                <label>
                  <textarea
                    type="text"
                    name="description"
                    placeholder="Enter property description"
                    className="input input-bordered  border-2 border-primary rounded-none w-full"
                    required
                  />
                </label>
              </div>

              <div className="form-control my-3">
                <label className="label">
                  <span className="label-text">Choose Property Photo </span>
                </label>
                <input
                  type="file"
                  required
                  id="image"
                  name="picture"
                  accept="image/*"
                  className="w-full cursor-pointer file-input-primary"
                />
              </div>
            </div>
            {error && <h3 className="text-2xl text-primary  pb-2">{error}</h3>}
            <input
              type="submit"
              className="w-full btn cursor-pointer bg-secondary text-white  border-transparent hover:border-primary border-4 hover:bg-transparent hover:text-primary text-lg"
              value="Add now"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewProperty;
