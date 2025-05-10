import Cookie from "../assets/cookie.svg";
const Cookies = () => {
  return (
    <div
      className="bg-neutral-950 text-white p-4 rounded-xl
        shadow
        flex items-center
        gap-3
        w-full
        max-w-[320px]
        sm:max-w-xs
        font-sans
      "
      role="dialog"
      aria-labelledby="cookie-policy-title"
      aria-describedby="cookie-policy-description"
    >
      <div className="flex-shrink-0">
        <img
          src={Cookie}
          alt="Image of a cookie"
          className="w-12 h-12 sm:w-14 sm:h-14 object-contain" // Adjust size as needed
        />
      </div>
      <div className="flex-grow">
        <h3
          id="cookie-policy-title"
          className="text-stone-100 font-semibold text-sm"
        >
          Cookie Policy
        </h3>
        <p
          id="cookie-policy-description"
          className="text-white text-xs mt-0.5 leading-snug"
        >
          We use analytical cookies to show you suggestions based on your
          interests
        </p>
        <button
          type="button"
          className="
            bg-white
            hover:bg-stone-100
            text-black
            text-xs
            font-semibold
            px-3 py-1.5
            rounded-md
            mt-3
            transition-colors duration-150 ease-in-out focus:outline-none"
        >
          Okay, got it.
        </button>
      </div>
    </div>
  );
};

export default Cookies;
