import { useQuery } from "@tanstack/react-query";
import useUserInfo from "../../../hooks/useUserInfo";
import axiosSecure from "../../../api";
import Container from "../../../shared/Container/Container";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AllBookings = () => {
  const user = useUserInfo();
  //   console.log(user);
  const { refetch, data: allBookings = [] } = useQuery({
    queryKey: ["allBookings", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/bookings-for-admin?email=${user?.email}`
      );
      const allBookings = await res.data;
      //   console.log(allBookings);
      return allBookings;
    },
  });

  return (
    <Container>
      <Helmet>
        <title>House-Hunter | All Bookings</title>
      </Helmet>
      <SectionTitle heading={"All Bookings"}></SectionTitle>
      {allBookings?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-lg  text-primary  border-4 border-primary">
                <th></th>
                <th>Property Image</th>
                <th>City</th>
                <th>Owner Email</th>
                <th>phnNum</th>
                <th>userName</th>
                <th>userEmail</th>
              </tr>
            </thead>

            <tbody>
              {allBookings?.map((item, idx) => (
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
                  <th>{item.city}</th>
                  <th>{item.email}</th>
                  <th>{item.phnNum}</th>
                  <th>{item.userName}</th>
                  <th>{item.userEmail}</th>
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

export default AllBookings;
