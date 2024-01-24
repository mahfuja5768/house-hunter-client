import { useQuery } from "@tanstack/react-query";
import axiosPublic from "./useAxiosPublic";

const useProperties = () => {

  
  
  const { refetch, data: properties = [] } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const res = await axiosPublic.get("/properties");
      return res.data;
    },
  });

  return [properties, refetch];
};

export default useProperties;
