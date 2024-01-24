import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import CustomButton from "../../../../shared/CustomButton/customButton";
import { deleteBookedProperty } from "../../../../api/api";

const BookedProperty = ({ property, refetch }) => {
  // console.log(property);
  const { picture, availability_date, city, email, _id, address } =
    property || {};

  const handleRemove = async (id) => {
    // console.log(id);
    try {
      const bookedProperty = await deleteBookedProperty(id);
      // console.log(bookedProperty);
      Swal.fire({
        title: "Success!",
        text: "Removed successfully!",
        icon: "success",
        confirmButtonText: "Done",
      });
      refetch();
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: `${error.message}`,
        icon: "error",
        confirmButtonText: "Done",
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
        <div className="pt-5 px-2 text-lg ">
          <p>
            <span className="font-semibold">Address:</span> {address}
          </p>
          <p>
            <span className="font-semibold">City:</span> {city}
          </p>
          <p>
            <span className="font-semibold">Available:</span>{" "}
            {availability_date}
          </p>
          <p>
            <span className="font-semibold">Owner:</span> {email}
          </p>
        </div>
        <div className="card-actions flex justify-between gap-5 my-6 p-2">
          <CustomButton
            onAction={() => handleRemove(_id)}
            buttonText={"Remove"}
          />
        </div>
      </div>
    </div>
  );
};

export default BookedProperty;
