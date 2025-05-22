import { Bookmark, Instagram } from "lucide-react";

const JobCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-white rounded-full border border-gray-200 flex items-center justify-center shadow-sm">
              <Instagram className="text-pink-700" />
            </div>
          </div>
          <button className="flex items-center bg-slate-200 text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium">
            Saved <Bookmark className="w-3 h-3 ml-1" fill="currentColor" />
          </button>
        </div>

        <p className="text-sm mb-1">
          <span className="font-semibold text-black">Instagram</span> 1 week ago
        </p>
        <h3 className="text-xl font-bold text-black mb-4">Graphic Designer</h3>

        <div className="flex gap-2 mb-6">
          <span className="bg-slate-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
            Full-time
          </span>
          <span className="bg-slate-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
            Flexible schedule
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-bold text-black">$150 - 220k</p>
            <p className="text-sm text-gray-600">Mountain View, CA</p>
          </div>
          <button className="bg-black text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-neutral-900 transition-colors">
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
