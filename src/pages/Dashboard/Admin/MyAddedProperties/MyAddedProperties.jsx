import Container from "../../../../shared/Container/Container";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useUserInfo from "../../../../hooks/useUserInfo";
import axiosSecure from "../../../../api";
import { Link } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { deleteOwnerAddedProperty } from "../../../../api/api";
import Swal from "sweetalert2";

const MyAddedProperties = () => {
  const user = useUserInfo();

  const { refetch, data: myAddedProperties = [] } = useQuery({
    queryKey: ["myAddedProperties", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/admin-properties?email=${user?.email}`
      );
      const myAddedProperties = await res.data;
      return myAddedProperties;
    },
  });

  const handleDelete = async (id) => {
    try {
      const addedProperty = await deleteOwnerAddedProperty(id);
      // console.log(addedProperty);
      Swal.fire({
        title: "Success!",
        text: "Deleted successfully!",
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
    <Container>
      <Helmet>
        <title>House-Hunter | My Properties</title>
      </Helmet>
      <SectionTitle heading={"My Properties"}></SectionTitle>
      {myAddedProperties?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-lg  text-primary  border-4 border-primary">
                <th></th>
                <th>Property Image</th>
                <th>Owner Name</th>

                <th>City</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {myAddedProperties?.map((item, idx) => (
                <tr
                  key={item?._id}
                  className="text-lg  border-4 border-primary font-semibold"
                >
                  <th>{idx + 1}</th>
                  <th>
                    <img
                      className="w-24 h-24 rounded-2xl"
                      src={item.picture}
                      alt=""
                    />
                  </th>
                  <th>{item.name}</th>
                  <th>{item.city}</th>
                  <td>
                    <Link to={`/dashboard/update/${item._id}`}>
                      <MdEdit className="text-2xl" />
                    </Link>
                  </td>
                  <td>
                    <MdDelete
                      onClick={() => handleDelete(item._id)}
                      className="text-2xl text-red-500"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-xl text-center"> This is Empty </p>
      )}
    </Container>
  );
};

export default MyAddedProperties;
