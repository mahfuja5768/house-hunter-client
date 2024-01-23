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
      password: user?.password
    };
    const { data } = await axiosPublic.post("/login", currentUser);
    // console.log(data);
    return data;
  };