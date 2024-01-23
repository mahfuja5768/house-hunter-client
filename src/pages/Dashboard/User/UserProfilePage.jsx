import Container from "../../../shared/Container/Container";
import CustomButton from "../../../shared/CustomButton/customButton";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useUserInfo from "../../../hooks/useUserInfo";
import userIcon from "../../../assets/images/user.png";

const UserProfilePage = () => {
  const user = useUserInfo();
  const userRole = user?.role;

  return (
    <Container>
      <Helmet>
        <title>Dream-Property | Profile</title>
      </Helmet>
      <SectionTitle heading={"Your Profile"}></SectionTitle>
      <div
        style={{
          borderImage: "linear-gradient(to right, #cda840, #000)",
          borderImageSlice: 1,
          borderWidth: "4px",
          borderStyle: "solid",
        }}
        className="mt-24 card mx-auto md:w-96 bg-[#ecd69969] shadow-xl"
      >
        <figure className="-mt-12">
          <img
            src={userIcon}
            alt="Shoes"
            className=" w-40 h-40 rounded-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Your name: {user?.name}</h2>
          <p className="text-lg font-medium">Role: {userRole}</p>
        </div>
      </div>
    </Container>
  );
};

export default UserProfilePage;
