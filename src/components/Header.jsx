import React from "react";
import eas from "../assets/eas.png";
const Header = () => {
  return (
    <>
    <div className="max-w-7xl mx-auto z-20 hidden md:block">
      <nav className="flex justify-between items-center bg-white md:flex-row">
        <div className="flex items-center lg:space-x-0 space-x-3 lg:h-20 relative:min-h-sc">
          <img className="w-20" src={eas} alt="logo" />
        </div>
        <div className="relative  w-full lg:flex  lg:items-center lg:justify-center lg:space-x-6 space-y-4 lg:space-y-0 z-20">
          <ul className="flex space-x-6">
            <li>
              <a
                className="hover:text-black-500 basis-1/4 text-[#001F3F] text-primary-800"
                href="#"
              >
                Nos services
              </a>
            </li>
            <li>
              <a
                className="hover:text-black-500 basis-1/4 text-[#001F3F] text-primary-800"
                href="#"
              >
                Tourisme
              </a>
            </li>
            <li>
              <a
                className="hover:text-black-500 basis-1/4 text-[#001F3F] text-primary-800"
                href="#"
              >
                Billet d'avion
              </a>
            </li>
            <li>
              <a
                className="hover:text-black-500 basis-1/4 text-[#001F3F] text-primary-800"
                href="#"
              >
                Hôtels
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:flex lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
          <a
            className="xl:text-base text-sm capitalize flex-1 text-[#001F3F] text-primary-800"
            href="#"
          >
            Français
          </a>
          <a
            className="xl:text-base text-sm capitalize flex-1 text-[#001F3F] text-primary-800"
            href="#"
          >
            FCFA
          </a>
          <button className="w-40   bg-white flex px-4 py-6 p-2 border-solid border rounded-lg border-black space-y-4">
            <span className="text-[#001F3F]  text-primary-800">
              Connectez-vous
            </span>
          </button>
        </div>
      </nav>
    </div>
               </>
  );
  
  
};

export default Header;
