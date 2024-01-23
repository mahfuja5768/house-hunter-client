import { useEffect, useState } from "react";

const useUserInfo = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userJSON = localStorage.getItem("user");

    try {
      const userInfo = JSON.parse(userJSON);
      setUser(userInfo);
    } catch (error) {
      console.error("Error parsing user JSON:", error);
      setUser(null);
    }
  }, []);
  return user;
};

export default useUserInfo;
