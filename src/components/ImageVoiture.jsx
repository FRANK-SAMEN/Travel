import React from 'react';

const ImageVoiture = ({ imageSrc, title, details, price }) => {
  return (
    <div>
      <div className="bg-white bg-no-repeat shadow-md relative h-full rounded-xl overflow-hidden">
        <div className="relative block h-[270px] h-46 bg-white rounded-t-md rounded-b-none shadow-lg hover:shadow-xl transition text-blue-800">
          <img
            src={imageSrc}
            alt={title}
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
                <path
                  d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533,8,64514,16,9029,C9,39,17,495,10,1845,18,048,5110661,18,6038,C11,3646,18,7919,11,6611,18,9729,12,19,1752,C12,3389,18,9729,12,6354,18,7919,C12
                             ,9339 ,18 ,6038Z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="bg-white flex items-stretch flex flex-col space-y-6 pt-4">
            <p className="mx-6 text-[#001F3F]">
              <strong>{title}</strong>
              <br />
              <em className="text-xs">{details}</em>
            </p>
            <div className="h-8">
              <p className="mx-6 mt-0 text-[#001F3F]">
                <strong>{price}</strong>
                <em className="text-sm">/jour</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageVoiture;