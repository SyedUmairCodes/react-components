import Headphones from "../assets/headphone.png";

const ProductModal = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      {/* Product Card */}
      <div className="bg-neutral-950 text-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-2xl lg:max-w-3xl">
        <div className="flex flex-col md:flex-row md:gap-8 items-start">
          <div className="w-full md:w-2/3 flex justify-center mb-6 md:mb-0 md:justify-start">
            <img
              src={Headphones}
              alt="Product image"
              className="w-auto h-52 sm:h-60 md:h-72 object-contain"
            />
          </div>
          <div className="w-full md:w-2/3 flex flex-col">
            <span className="bg-white text-black text-xs font-semibold px-3 py-1 rounded-full mb-4 self-start">
              Free Shipping
            </span>

            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Razer Kitty 2 | Gaming Headphones
            </h1>

            <div className="mb-4">
              <span className="text-slate-400 line-through text-lg mr-2">
                $799
              </span>
              <span className="text-3xl sm:text-4xl font-extrabold text-white">
                $500
              </span>
            </div>

            <p className="text-slate-400 text-xs mb-6">
              Discount is only valid till stock lasts.
            </p>

            <button className="bg-pink-300 hover:bg-pink-300/80 text-black font-semibold py-3 px-6 rounded-lg w-full text-center mb-6 transition-colors duration-150 ease-in-out">
              Buy now
            </button>

            <div className="flex items-center text-sm text-neutral-100 mb-6">
              <span className="bg-green-500 w-2.5 h-2.5 rounded-full mr-2 flex-shrink-0"></span>
              50+ pcs. in stock
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-white hover:bg-slate-100 text-black font-semibold py-3 px-5 rounded-lg w-full sm:w-auto transition-colors duration-150 ease-in-out">
                Add to cart
              </button>
              <button className="bg-white hover:bg-slate-200 text-black font-semibold py-3 px-5 rounded-lg w-full sm:w-auto transition-colors duration-150 ease-in-out">
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
