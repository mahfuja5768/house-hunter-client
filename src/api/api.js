import axiosSecure from ".";
import axiosPublic from "../hooks/useAxiosPublic";

export const saveUser = async (user) => {
  // console.log(user);
  // console.log(user?.email);
  const currentUser = {
    name: user?.name,
    email: user?.email,
    password: user?.password,
    phnNum: user?.phnNum,
    role: user?.role,
  };
  const { data } = await axiosPublic.post("/users", currentUser);
  // console.log(data);
  return data;
};

export const logUser = async (user) => {
  // console.log(user);
  // console.log(user?.email);
  const currentUser = {
    email: user?.email,
    password: user?.password,
  };
  const { data } = await axiosPublic.post("/login", currentUser);
  // console.log(data);
  return data;
};


//clear token from client side
export const clearToken = async () => {
  localStorage.removeItem("token");
};

export const getDetails = async (id) => {
  // console.log(user)
  const { data } = await axiosSecure.get(`/properties/${id}`);
  return data;
};

export const bookAProperty = async (property) => {
  // console.log(review)
  const { data } = await axiosSecure.post("/bookings", property);
  return data;
};

export const deleteBookedProperty = async (id) => {
  // console.log(review)
  const { data } = await axiosSecure.delete(`/bookings/${id}`);
  return data;
};

export const deleteOwnerAddedProperty = async (id) => {
  // console.log(review)
  const { data } = await axiosSecure.delete(`/admin-properties/${id}`);
  return data;
};
