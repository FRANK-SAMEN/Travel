import React from "react";

const ImageAppart = ({ location, subtitle, title, price, imageUrl }) => {
  return (
    <div>
      <div
        className="h-[224px] flex flex-col justify-between rounded-md bg-no-repeat bg-cover relative"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-0"></div>

        <div className="m-4 px-2 py-1 bg-[#000080] opacity-70 rounded-md relative z-10">
          <span className="text-white font-medium text-center opacity-100">
            <strong>{location}</strong>
            <em>-{subtitle}</em>
          </span>
        </div>
        <div className="flex items-stretch justify-between space-x-4 z-10">
          <div className="text-white font-medium">
            <div className="text-xs mx-4 truncate w-full">{title}</div>
            <div className="mx-4 lowercase first-letter:uppercase">
              2 Jour(s) À partir de :{" "}
              <span className="font-bold text-base uppercase">{price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageAppart;
