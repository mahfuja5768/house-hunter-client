const CustomButton = ({ buttonText, onAction, wFull }) => {
  return (
    <button
      onClick={onAction}
      className={`${
        wFull ? "btn w-full" : "btn"
      } btn cursor-pointer bg-primary text-white hover:border-primary border-4 hover:bg-transparent hover:text-primary`}
    >
      {" "}
      {buttonText}
    </button>
  );
};

export default CustomButton;
