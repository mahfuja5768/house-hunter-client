import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Container from "../../../../shared/Container/Container";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import axiosSecure from "../../../../api";
import useUserInfo from "../../../../hooks/useUserInfo";
import BookedProperty from "./BookedProperty";
import { useQuery } from "@tanstack/react-query";
export default function BookedProperties() {
  const user = useUserInfo();

  const { refetch, data: bookedProperties = [] } = useQuery({
    queryKey: ["bookedProperties", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/bookings-for-users?email=${user?.email}`
      );
      const bookedProperties = await res.data;
      console.log(bookedProperties);
      return bookedProperties;
    },
  });

  return (
    <Container>
      <Helmet>
        <title>House-Hunter | All Bookings</title>
      </Helmet>
      <SectionTitle heading={"All Bookings"}></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-9 justify-center items-center">
        {bookedProperties?.map((property) => (
          <BookedProperty
            key={property._id}
            property={property}
            refetch={refetch}
          ></BookedProperty>
        ))}
      </div>
    </Container>
  );
}
