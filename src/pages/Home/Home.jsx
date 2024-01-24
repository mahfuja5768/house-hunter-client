import { Helmet } from "react-helmet-async";
import AllProperties from "../AllProperties/AllProperties";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>House-Hunter | Home</title>
      </Helmet>
      <Banner />
     <AllProperties/>
    </div>
  );
};

export default Home;
