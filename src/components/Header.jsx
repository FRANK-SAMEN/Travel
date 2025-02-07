import React, { useState } from 'react';
import eas from "../assets/eas.png";
import Boutton from "./Boutton";
const header = () => {

     const handleClick = () => {
       // Action à réaliser lors du clic sur le bouton
       console.log("Bouton cliqué !");
     };
  let Links = [
    { name: "Nos service", link: "/" },
    { name: "Tourisme", link: "/" },
    { name: "Billet d'avion ", link: "/" },
    { name: "Hotels", link: "/" },
  ];
  let[open,setOpen]= useState(false);
  return (
    <>
      <div className="max-w-7xl mx-auto z-20 hidden md:block">
        <div className="flex justify-between items-center bg-white md:flex-row">
          <div className="flex items-center  lg:space-x-0 space-x-3 lg:h-20 relative:min-h-sc">
            <img className="w-20" src={eas} alt="logo" />
          </div>
          <ul className=" relative    w-full lg:flex lg:items-center lg:justify-center lg:space-x-6 space-y-4 lg:space-y-0 z-20">
            {Links.map((LINK) => (
              <li>
                <a href={LINK.link}>{LINK.name}</a>
              </li>
            ))}
          </ul>
          <div className="lg:flex lg:items-center space-y-4 lg:space-y-0 lg:space-x-6 ">
            <a
              className="xl:text-base text-sm capitalize flex-1 text-[#001F3F] text-primary-800 "
              href="#"
            >
              {" "}
              Francais
            </a>
            <a
              className="xl:text-base text-sm capitalize flex-1 text-[#001F3F] text-primary-800 "
              href="#"
            >
              {" "}
              FCFA
            </a>
            <Boutton
              text="Connectez-vous"
              onClick={handleClick}
              className="text-[#001F3F] text-primary-800  w-44 bg-[#ffffff] flex px-4 Py-6 p-2  border-solid border rounded-lg ... border-black ... space-y-4"
            />
          </div>
        </div>
      </div>
      <div className="block md:hidden  max-w-7xl mx-auto">
        <div className="flex flex-row justify-between items-center py-4 mx-4">
          <div>
            <span className="cursor-pointer">
              <img className="w-20" src={eas} alt="logo" />
            </span>
          </div>
          <div className="flex flex-row">
            <ion-icon
              onclick={()=>setOpen(!open)}
              name={open ? 'close': 'menu'}
              className="text-3xl cursor-pointer "
            ></ion-icon>
          </div>
        </div>
        <div className="  nav-links hidden relative bg-white min-h-[60vh] left-0 top-[9%] w-full flex items-center">
          <ul className=" space-y-6">
            {Links.map((LINK) => (
              <li>
                <a href={LINK.link}>{LINK.name}</a>
              </li>
            ))}
            <li>
              <div className="text-primary-800">
                <div className="relative" data-headlessui-state="">
                  <div
                    className="lg:block flex items-center justify-between w-full rounded-md lg:p-0 lg:border-0 py-3 px-3 border border-gray-300"
                    aria-expanded="false"
                    data-headlessui-state=""
                    id="headlessui-popover-button-:r28:"
                  >
                    <div class="lg:hidden">Langue</div>
                    <div className="flex cursor-pointer lg:justify-center items-center space-x-2 lg:px-2 lg:py-1 focus:outline-none lg:px-3">
                      <div className="xl:text-base text-sm capitalize flex-1"></div>
                      <div className="h-0.5 w-0.5 bg-white"></div>
                      <div className="text-sm">FCFA</div>
                      <div className="">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="chevron-down"
                          class="svg-inline--fa fa-chevron-down w-3 h-3 text-primary-800"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px; display: none;"></div>
              </div>
            </li>
            <li>
              <a
                itemprop="url"
                role="menuitem"
                className="lg:px-4 lg:py-1.5 border rounded-md lg:block flex items-center lg:w-44 lg:text-center space-x-4 lg:space-x-0 lg:text-primary-800 text-white lg:bg-[#001F3F] bg-[#001F3F] rounded-md lg:p-0 py-3 px-3 border-primary-800"
                href="/auth2"
              >
                <div className="lg:block flex space-x-4 lg:space-x-0">
                  <div className="">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="w-6 h-6"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div>Connectez-vous</div>
                </div>
              </a>
            </li>
          </ul>
           
  
        </div>

      </div>

    </>
  );
};


export default header;