const Newsletter = () => {
  return (
    <div className="bg-neutral-950 p-8 rounded-xl shadow w-full max-w-lg">
      <h2 className="text-white text-2xl font-bold mb-2">
        Get our latest posts in your inbox.
      </h2>
      <p className="text-gray-400 text-sm mb-6">No spam, just updates</p>
      <form className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          aria-label="Email address for newsletter"
          className="flex-grow bg-black text-white  rounded-md px-4 py-3   placeholder-gray-500 w-full "
        />
        <button
          type="submit"
          className="bg-white hover:bg-white/85 text-black font-semibold rounded-md px-6 py-3 transition-colors duration-150 ease-in-out w-full sm:w-auto whitespace-nowrap"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
