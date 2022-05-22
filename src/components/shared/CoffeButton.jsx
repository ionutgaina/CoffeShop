export const CoffeButton = ({ text, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      className="border-2 border-solid border-black rounded-2xl text-lg md:text-2xl p-1 cursor-pointer"
      type={type ? type : "button"}
    >
      {text}
    </button>
  );
};
