import { Helmet } from "react-helmet-async";
import AllProperties from "../AllProperties/AllProperties";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>House-Hunter | Home</title>
      </Helmet>
     <AllProperties/>
    </div>
  );
};

export default Home;
