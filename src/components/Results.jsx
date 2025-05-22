const Results = () => {
  return (
    <section className="bg-gradient-to-b from-slate-300 to-slate-500 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-xs sm:text-sm text-gray-800 uppercase tracking-widest mb-4">
          RESULTS
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-slate-700 leading-relaxed max-w-4xl mx-auto mb-12 sm:mb-16">
          We created an intuitive and functional website, along with a health
          diagnostics platform utilizing artificial intelligence. Our goal was
          to provide users with fast, accurate, and convenient tools for medical
          diagnostics.
        </h2>

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-10">
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gray-200 opacity-20 animate-pulse-slow"></div>
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-[30rem] md:h-[30rem] lg:w-[40rem] lg:h-[40rem] rounded-full bg-gray-200 opacity-15 animate-pulse-slow delay-100"></div>
            <div className="absolute w-80 h-80 sm:w-[24rem] sm:h-[24rem] md:w-[35rem] md:h-[35rem] lg:w-[50rem] lg:h-[50rem] rounded-full bg-gray-200 opacity-10 animate-pulse-slow delay-200"></div>
          </div>

          {/* Metric Cards */}
          <div className="relative z-10 flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-10 w-full justify-center">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg inset-shadow-sm  flex flex-col items-center justify-center text-center max-w-[300px] w-full mx-auto md:mx-0">
              <p className="text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 mb-2">
                200K+
              </p>
              <p className="text-xs sm:text-sm uppercase text-gray-600 font-medium tracking-wide mb-4">
                ACTIVE USERS
              </p>
              <p className="text-xs text-gray-500 max-w-[200px]">
                Engaged with our platform within the first 6 months.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg inset-shadow-sm flex flex-col items-center justify-center text-center max-w-[300px] w-full mx-auto md:mx-0">
              <p className="text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 mb-2">
                50%
              </p>
              <p className="text-xs sm:text-sm uppercase text-gray-600 font-medium tracking-wide mb-4">
                DIAGNOSTIC SPEED IMPROVEMENT
              </p>
              <p className="text-xs text-gray-500 max-w-[200px]">
                Reduction in diagnosis time due to AI algorithms.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg inset-shadow-sm flex flex-col items-center justify-center text-center max-w-[300px] w-full mx-auto md:mx-0">
              <p className="text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 mb-2">
                98%
              </p>
              <p className="text-xs sm:text-sm uppercase text-gray-600 font-medium tracking-wide mb-4">
                DIAGNOSTIC ACCURACY
              </p>
              <p className="text-xs text-gray-500 max-w-[200px]">
                Achieved high accuracy confirmed by clinical studies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
import React from "react";
