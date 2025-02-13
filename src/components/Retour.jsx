import React from 'react';

const Retour = () => {
    return (
        <>
      <div className="hidden md:block">
        <div className="flex justify-between space-x-4">
          <div className="flex items-center space-x-4 ">
            <label className="flex items-center">
              <input
                type="radio"
                name="voyage"
                value="aller-simple"
                className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">Aller-Simple</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="voyage"
                value="aller-retour"
                className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">Aller-Retour</span>
            </label>
          </div>

          <label className="inline-flex items-center cursor-pointer space-x-4">
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 lg:space-x-4 lg:text-sm text-xs">
              Mes dates de voyages sont flexibles
            </span>
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-200 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-200 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>

          {/*mobile*/}
       <div className="block md:hidden">
                    <div className="flex justify-between space-x-4">
                      <div>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="voyage"
                            value="aller-simple"
                            className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-gray-700">
                            Aller-Simple
                          </span>
                        </label>
                      </div>
                      <div>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="voyage"
                            value="aller-retour"
                            className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-gray-700">
                            Aller-Retour
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-col p-4 space-y-2 ">
                      <div className="flex flex-row border border-gray-300 rounded-md border-solid  ">
                        <div className=" p-3">
                          <span className="input-icon text-gray-300">
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
                        <div className="mt-[12px]  mx-2">
                          <input type="text" placeholder="ville de Départ" />
                        </div>
                      </div>
                      <div className="flex flex-row border border-gray-300 rounded-md border-solid  ">
                        <div className=" p-3">
                          <span className="input-icon text-gray-300">
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
                        <div className="mt-[12px]   mx-2">
                          <input
                            type="text"
                            placeholder="ville de Destination"
                          />
                        </div>
                      </div>
                      <div className="col-span-2 lg:order-none order-2 lg:!col-span-3">
                        <div className="bg-white flex items-center justify-between w-full border border-gray-300 rounded-xl lg:divide-x divide-gray-300 lg:space-x-0">
                          <div className="flex items-center justify-center p-3">
                            <span className="input-icon text-gray-300">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 25 25"
                                className="fill-current stroke-current stroke-0 h-6 w-6"
                              >
                                <path d="M0 0h24v24H0Z" fill="none"></path>
                                <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2Zm3 6V5h-3v2h-2V5H9v2H7V5H4v4Zm0 2H4v8h16ZM6 13h5v4H6Z"></path>
                              </svg>
                            </span>
                          </div>
                          <div className="lg:divide-x divide-gray-300 flex-1">
                            <div className="flex lg:flex-row flex-col lg:items-center lg:divide-x divide-gray-300 lg:p-0 pr-3">
                              <div className="lg:px-3 py-1 lg:pt-1">
                                <div>
                                  <label
                                    for=""
                                    className="text-sm text-primary-900 text-normal hidden lg:block"
                                  >
                                    Départ
                                  </label>
                                  <div className="inlineInput__InlineInput-sc-limi49-0 iBntBf w-full">
                                    <div className="styles__Container-sc-12nv29s-0 jWChbD">
                                      <div className="lg:relative">
                                        <div>
                                          <input
                                            placeholder=""
                                            className="inputstyles__Input-sc-18dbwlb-0 jIYbsZ placeholder-[#001F3F] !text-[#001F3F] capitalize !border-0 h-7 !p-0 !font-semibold cursor-pointer"
                                            readonly=""
                                            autocomplete="off"
                                            value="30 nov."
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="lg:px-3 py-1 lg:pt-1 border-t lg:border-t-0 flex justify-between lg:relative">
                                <div>
                                  <label
                                    for=""
                                    className="text-sm text-primary-900 text-normal hidden lg:block"
                                  >
                                    Retour
                                  </label>
                                  <div className="inlineInput__InlineInput-sc-limi49-0 iBntBf w-full">
                                    <div className="styles__Container-sc-12nv29s-0 jWChbD">
                                      <div className="lg:relative">
                                        <div>
                                          <input
                                            placeholder=""
                                            className="inputstyles__Input-sc-18dbwlb-0 jIYbsZ placeholder-[#001F3F] !text-[#001F3F] w-full capitalize !border-0 h-7 !p-0 !font-semibold cursor-pointer"
                                            readonly=""
                                            autocomplete="off"
                                            value="07 déc."
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2 lg:order-none order-3">
                        <div className="bg-white grid lg:grid-cols-12 grid-cols-8 grid-rows-1 gap-0 w-full border border-gray-300 rounded-xl lg:divide-x divide-gray-100 lg:p-0 px-2 py-2">
                          <div className="lg:col-span-3 col-span-1">
                            <div className="flex items-center justify-center h-full">
                              <span className="input-icon text-gray-200">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 25 25"
                                  className="fill-current stroke-current stroke-0 h-6 w-6"
                                >
                                  <path d="M0 0h24v24H0Z" fill="none"></path>
                                  <path d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5Zm-8-9a6 6 0 1 1 6-6 6 6 0 0 1-6 6Zm0-2a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div className="lg:col-span-9 col-span-7 lg:px-3 pl-1 lg:pt-1">
                            <label
                              for=""
                              className="text-sm text-primary-900 text-normal hidden lg:block"
                            >
                              Voyageur(s)
                            </label>
                            <div className="inlineInput__InlineInput-sc-limi49-0 iBntBf">
                              <div className="w-full">
                                <div className="">
                                  <div className="flex-1 flex items-center justify-center cursor-pointer !py-0.5 placeholder-[#001F3F]  !align-middle !text-[#001F3F] !border-0 h-8 !p-0 !font-semibold !justify-start">
                                    <div className="truncate text-sm">
                                      {" "}
                                      1 Adulte, Economique
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button className="bg-[#001F3F] text-white text-center font-semibold w-full h-full rounded hover:bg-blue-700 px-2">
                        RECHERCHEZ
                      </button>
                    </div>
                  </div>
                  </>

    );
};

export default Retour;