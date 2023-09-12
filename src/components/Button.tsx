const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-full border px-7 py-4 font-montserrat text-lg leading-none shadow-lg
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : " border-coral-red bg-coral-red text-white"
      }
      ${fullWidth && "w-full"}`}
    >
      {label}{" "}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrowRight"
          className="ml-2 h-5 w-5 rounded-full "
        />
      )}
    </button>
  );
};

export default Button;
