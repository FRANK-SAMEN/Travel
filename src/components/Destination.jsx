import React from 'react';

const Destination = ({ depart, destiner, villeDestination, villeDépart, }) => {
  return (
    <div>
      <div className="basis-5/12 flex flex-row  border rounded-xl z-10 ">
        <div className=" p-3">
          <span className="input-icon text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
              className="fill-current stroke-current stroke-0 h-6 w-6"
            >
              <path d="M0 0h24v24H0Z" fill="none"></path>
              <path d="m12 23.728-6.364-6.364a9 9 0 1 1 12.728 0Zm4.95-7.778a7 7 0 1 0-9.9 0L12 20.9l4.95-4.95ZM12 13a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z"></path>
            </svg>
          </span>
        </div>
        <div className="flex-1 border ">
          <label
            for="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mx-2 py-1"
          >
            {depart}
          </label>
          <div className="mt-[-12px]  mx-2">
            <input type="text" placeholder={villeDépart} />
          </div>
        </div>
        <div className="flex-1">
          <label
            for="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mx-2 py-1"
          >
            {destiner}
          </label>
          <div className="mt-[-12px]  mx-2">
            <input type="text" placeholder={villeDestination} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;