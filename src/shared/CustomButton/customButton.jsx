const CustomButton = ({ buttonText, onAction, wFull, border }) => {
  return (
    <>
      {!border ? (
        <button
          onClick={onAction}
          className={`${
            wFull ? "btn w-full" : "btn"
          } btn cursor-pointer bg-primary text-white border-transparent hover:border-primary border-4 hover:bg-transparent hover:text-primary`}
        >
          {" "}
          {buttonText}
        </button>
      ) : (
        <button
          onClick={onAction}
          className={`${
            wFull ? "btn w-full" : "btn"
          } btn cursor-pointer  bg-transparent text-white border-primary hover:border-primary border-4 hover:bg-transparent hover:text-primary`}
        >
          {" "}
          {buttonText}
        </button>
      )}
    </>
  );
};

export default CustomButton;
