import { Helmet } from "react-helmet-async";
import AllProperties from "../AllProperties/AllProperties";
import Banner from "../../components/Banner/Banner";
import CardSection from "../../components/CardSection";
import bg from "../../assets/images/church-03.jpg";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>House-Hunter | Home</title>
      </Helmet>
      <Banner />
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <CardSection />
        <AllProperties />
      </div>
    </div>
  );
};

export default Home;
