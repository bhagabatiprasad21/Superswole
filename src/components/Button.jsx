// eslint-disable-next-line react/prop-types
const Button = ({ text, func }) => {
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={func}
        className="px-8 py-4 mx-auto rounded-md border-blue-400 border-[2px] border-solid bg-slate-950 blueShadow duration-200"
      >
        <p>{text}</p>
      </button>
    </div>
  );
};

export default Button;
