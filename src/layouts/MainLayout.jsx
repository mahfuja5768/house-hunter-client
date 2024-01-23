import { Outlet } from "react-router-dom";
import Layout from "./Layout";
import Footer from "../shared/Footer/Footer";

const MainLayout = () => {
  return (
      <div className="font-inter">
      <Layout>
      <div className="pt-12 min-h-[calc(100vh-306px)]">
        <Outlet />
        <Footer></Footer>
      </div>
      </Layout >
    </div>
 
  );
};

export default MainLayout;
