import bg from "../assets/images/church-03.jpg";

const CardSection = () => {
  return (
    <div
      className="py-0 lg:py-8 px-4 h-[100vh]"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="grid  grid-cols-1 lg:grid-cols-3">
        <div className="flex flex-col justify-center items-center">
          <h3>Find A Home</h3>
          <p className=" text-center">
            Let us work with you to find and purchase the home of your dreams.
            We know the area, the market conditions, and the opportunities for
            buyers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
