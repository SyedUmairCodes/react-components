import Img from "../assets/image2.jpg";
import Img2 from "../assets/image3.jpg";
import Img3 from "../assets/image4.jpg";
import Img4 from "../assets/image5.jpg";
import { useState } from "react";
import { Search, Album } from "lucide-react";

const initialImages = [
  {
    id: 1,
    src: Img,
    alt: "Old building",
    title: "Vintage building",
    likes: 150,
    shares: 20,
    category: "Images",
  },
  {
    id: 2,
    src: Img2,
    alt: "Rooftop tiles",
    title: "Rooftop Modern",
    likes: 205,
    shares: 45,
    category: "Images",
  },
  {
    id: 3,
    src: Img3,
    alt: "Modern building facade",
    title: "Architecture Lines",
    likes: 300,
    shares: 50,
    category: "Vectors", // Example
  },
  {
    id: 4,
    src: Img4,
    alt: "Abstract aerial landscape",
    title: "Abstract Painting",
    likes: 245,
    shares: 35,
    category: "Illustrations", // Example, this one had info visible
    isFeatured: false, // To show info by default
  },
];
const filters = ["All", "Vectors", "Images", "Illustrations", "Icons"];
const ImageCard = ({ image }) => {
  return (
    <div className="relative group aspect-[4/3] sm:aspect-square rounded-lg overflow-hidden shadow-md cursor-pointer">
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
      <div
        className={`absolute inset-0 bg-black/70 flex flex-col justify-end p-3 sm:p-4 text-white
                    transition-all duration-300 ease-in-out
                    ${
                      image.isFeatured
                        ? "bg-opacity-50 opacity-100"
                        : "bg-opacity-0 group-hover:bg-opacity-50 opacity-0 group-hover:opacity-100"
                    }`}
      >
        <h3 className="font-semibold text-sm sm:text-base truncate">
          {image.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-300">
          {image.likes} likes - {image.shares} Shares
        </p>
        <button className="absolute top-2 right-2 sm:top-3 sm:right-3 text-white opacity-70 hover:opacity-100 p-1 rounded-full hover:bg-white/20">
          <Album className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("Images"); // Default to Images as in example

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredImages = initialImages.filter((image) => {
    const matchesSearch =
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.alt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      activeFilter === "All" || image.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className=" bg-black flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="bg-neutral-950 w-full max-w-6xl rounded-xl sm:rounded-2xl shadow-2xl p-5 sm:p-8 md:p-10">
        {/* Header Section */}
        <header className="mb-6 sm:mb-8 md:mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
            {/* Search Bar */}
            <div className="relative w-full md:w-2/5 lg:w-1/3">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearch}
                className="w-full py-2.5 sm:py-3 pl-10 pr-4 text-white bg-neutral-900  rounded-lg focus:ring-2 focus:ring-neutral-800  outline-none transition-colors"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>

            {/* Filters */}
            <nav className="flex flex-wrap justify-center md:justify-start items-center gap-x-3 sm:gap-x-4 gap-y-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-1.5 py-1 text-sm sm:text-base font-medium transition-colors duration-200
                    ${
                      activeFilter === filter
                        ? "text-gray-100 " // Active filter might have an underline or different style
                        : "text-gray-500 hover:text-white"
                    }
                  `}
                >
                  {filter}
                </button>
              ))}
            </nav>

            {/* Upload Button */}
            <button className="w-full md:w-auto bg-white text-black font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap text-sm sm:text-base">
              Upload
            </button>
          </div>
        </header>

        {/* Image Grid */}
        {filteredImages.length > 0 ? (
          <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
            {filteredImages.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </main>
        ) : (
          <div className="text-center py-10 text-gray-500">
            <p className="text-xl mb-2">No images found.</p>
            <p>Try adjusting your search or filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
