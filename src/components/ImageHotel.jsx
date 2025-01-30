import React from 'react';

const ImageHotel = ({ hotelName, location, price, ImageSrc }) => {
  return (
    <div>
      <div className="relative block w-74 h-46 bg-white rounded-t-md rounded-b-none shadow-lg hover:shadow-xl transition text-blue-800">
        <img
          src={ImageSrc}
          alt="Image 1"
          className="w-full h-[160px] rounded-t-md rounded-b-none"
        />
        <div className="absolute bg-blue-900 bg-no-repeat opacity-80 top-0 right-0 h-9 w-9 rounded-full mx-4 mt-4">
          <div className="flex items-center justify-center">
            <svg
              className="text-white mt-2"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 ..."></path>
            </svg>
          </div>
        </div>
        <div className="bg-white flex items-stretch flex flex-col space-y-6 pt-4">
          <p className="mx-6 text-[#001F3F]">
            <strong>{hotelName}</strong>
            <br />
            <span>{location}</span>
          </p>
          <div className="h-8">
            <p className="mx-6 mt-0 text-[#001F3F]">
              <strong>{price}</strong>
              <em className="text-sm">/Nuit</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageHotel;