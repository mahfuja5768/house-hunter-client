
const CardSection = () => {
  return (
    <div
    >
    <div className="grid  grid-cols-1 lg:grid-cols-3 gap-2 px-6 ">
        <div className="flex flex-col justify-center items-center ">
          <h3 className="text-2xl font-bold mb-2">Find A Home</h3>
          <p className=" text-center w-1/2">
            Let us work with you to find and purchase the home of your dreams.
            We know the area, the market conditions, and the opportunities for
            buyers.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center bg-primary p-6 py-12">
          <h3 className="text-2xl font-bold mb-2">Our Commitment</h3>
          <p className=" text-center w-1/2">
            Working with us guarantees you the local knowledge and market
            information you need. We’re local experts with a reputation for
            excellence.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-2xl font-bold mb-2">Sell Your Home</h3>
          <p className=" text-center w-1/2">
            Trust the sale of your home to a trusted partner. We’re here to help
            guide you through every step of the process with expert advice and
            representation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
