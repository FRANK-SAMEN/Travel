import React from "react";

const ImageTourisme = ({ imageUrl, destination, subtitle, daysText, price }) => {
  return (
    <div
      className=" relative h-[224px] flex flex-col justify-between rounded-md bg-no-repeat bg-cover p-4 overflow-hidden  flex-none md:overflow-x-auto"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute bg-gradient-to-t from-black to-transparent w-full bottom-0 inset-x-0 h-1/2 z-0"></div>
      <div className="px-2 py-1 bg-[#000080] opacity-70 rounded-md">
        <span className="text-white font-medium text-center opacity-100">
          <strong>{destination}</strong>
          <em>{subtitle}</em>
        </span>
      </div>
      <div className="flex items-stretch justify-between space-x-4 z-10">
        <div className="text-white font-medium">
          <div className="font-medium">{daysText}</div>
          <div className="font-bold">
            {price}
            <span className="font-medium">/pers</span>
          </div>
        </div>
        <div>
          <div className="bg-blue-800/60 rounded-full p-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-yellow-500"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M255.55 22.36c-30.93 0-56 25.07-56 56 0 30.927 25.07 56 56 56 30.927 0 56-25.073 56-56 0-30.93-25.073-56-56-56zM105.067 144.47c..."></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageTourisme;
