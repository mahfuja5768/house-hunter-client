import { Helmet } from "react-helmet-async";
import AllProperties from "../AllProperties/AllProperties";
import Banner from "../../components/Banner/Banner";
import CardSection from "../../components/CardSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>House-Hunter | Home</title>
      </Helmet>
      <Banner />
      <CardSection/>
     <AllProperties/>
    </div>
  );
};

export default Home;
