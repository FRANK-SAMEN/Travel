import React from 'react';
import Titre from './Titre'
const flight = () => {
    return (
      <div>
                   <div className='max-w-7xl mx-auto'>
            <Titre 
                mainText="Soyez libre de toutes vos envies avec" 
                highlightText="Ease Flight" 
            />
            {/* D'autres éléments de ton composant */}
        </div>
        <div className="max-w-7xl mx-auto  ">
          <div className="md:mx-4 mb-4 p-4 bg-[#001F3F] from-primary-700 to-primary-800 lg:p-10 py-4 lg:my-10 my-8 lg:rounded-2xl rounded-xl md:mx-4  ">
            <div className=" space-y-8 flex items-center flex-col">
              <div className=" bg-blue-100 rounded-lg">
                <div className="flex justify-center items-center   space-x-9">
                  <div
                    className="flex lg:items-center justify-evenly overflow-y-auto w-full lg:justify-center"
                    role="tablist"
                    aria-orientation="horizontal"
                  >
                    <div className="flex lg:space-x-7 space-x-2 bg-primary-50 lg:px-9 px-3 py-3 rounded-md">
                      <div
                        className="flex flex-col items-center justify-center text-blue-800 font-normal outline-none relative space-y-2 overflow-hidden cursor-pointer group"
                        id="headlessui-tabs-tab-:r0:"
                        role="tab"
                        aria-selected="true"
                        tabindex="0"
                        data-headlessui-state="selected"
                        aria-controls="headlessui-tabs-panel-:r7:"
                      >
                        <span className="border lg:p-3 p-2.5 rounded-full text-blue-800 border-blue-800 border-primary-500 text-primary-500 group-hover:text-primary-500 group-hover:border-primary-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="fill-current stroke-current stroke-0 h-4 w-4"
                          >
                            <path
                              data-name="Trac\xE9 3033"
                              d="M0 0h24v24H0Z"
                              fill="none"
                            ></path>
                            <path
                              data-name="Trac\xE9 3034"
                              d="M13.579 8.947 22 14v2l-8.421-2.526v5.36l3.158 1.666V22L12 21l-4.737 1v-1.5l3.158-1.667v-5.36L2 16v-2l8.421-5.053V3.5a1.581 1.581 0 0 1 3.158 0v5.447Z"
                            ></path>
                          </svg>
                        </span>
                        <span className="inline lg:text-xs text-[9px] mt-1 w-full capitalize text-blue-800 text-center text-primary-500 group-hover:text-primary-500 ">
                          Vol
                        </span>
                      </div>
                      <div
                        className="flex flex-col items-center justify-center text-blue-800 font-normal outline-none relative space-y-2 overflow-hidden cursor-pointer group"
                        id="headlessui-tabs-tab-:r1:"
                        role="tab"
                        aria-selected="false"
                        tabindex="-1"
                        data-headlessui-state=""
                        aria-controls="headlessui-tabs-panel-:rb:"
                      >
                        <span className="border lg:p-3 p-2.5 rounded-full border-blue-800 text-blue-800 text-primary-900 border-primary-900 group-hover:text-primary-500 group-hover:border-primary-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="fill-current stroke-current stroke-0 h-4 w-4"
                          >
                            <path
                              data-name="Trac\xE9 3023"
                              d="M0 0h24v24H0Z"
                              fill="none"
                            ></path>
                            <path
                              data-name="Trac\xE9 3024"
                              d="M13 21h5v2H6v-2h5v-1.05a10 10 0 0 1-7.684-4.988l1.737-.992A8 8 0 1 0 15.97 3.053l.992-1.737A10 10 0 0 1 13 19.95Zm-1-4a7 7 0 1 1 7-7 7 7 0 0 1-7 7Zm0-2a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z"
                            ></path>
                          </svg>
                        </span>
                        <span className="inline lg:text-xs text-[9px] mt-1 w-full capitalize text-center text-primary-900 group-hover:text-primary-500 ">
                          tourisme
                        </span>
                      </div>
                      <div
                        className="flex flex-col items-center justify-center text-blue-800 font-normal outline-none relative space-y-2 overflow-hidden cursor-pointer group"
                        id="headlessui-tabs-tab-:r2:"
                        role="tab"
                        aria-selected="false"
                        tabindex="-1"
                        data-headlessui-state=""
                        aria-controls="headlessui-tabs-panel-:rc:"
                      >
                        <span className="border lg:p-3 p-2.5 rounded-full border-blue-800 text-blue-800 text-primary-900 border-primary-900 group-hover:text-primary-500 group-hover:border-primary-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 22"
                            className="fill-current stroke-current stroke-0 h-4 w-4"
                          >
                            <path d="M6.83037 7.79L5.00037 8.456V12H3.00038V7.05H3.01537L8.28337 5.132C8.52737 5.039 8.79337 4.992 9.06537 5.001C9.60888 5.01455 10.1347 5.19711 10.5696 5.52328C11.0046 5.84946 11.3271 6.30305 11.4924 6.821C11.6784 7.404 11.8484 7.798 12.0024 8.003C12.4678 8.62362 13.0714 9.12723 13.7654 9.47388C14.4594 9.82052 15.2246 10.0007 16.0004 10V12C14.9677 12.0011 13.9476 11.7733 13.0135 11.3329C12.0794 10.8925 11.2546 10.2504 10.5984 9.453L9.90137 13.409L12.0004 15.17V22H10.0004V16.102L7.73037 14.198L7.00338 18.325L0.109375 17.11L0.457375 15.14L5.38137 16.008L6.83037 7.79ZM10.5004 4.5C9.96994 4.5 9.46123 4.28929 9.08616 3.91421C8.71109 3.53914 8.50037 3.03043 8.50037 2.5C8.50037 1.96957 8.71109 1.46086 9.08616 1.08579C9.46123 0.710714 9.96994 0.5 10.5004 0.5C11.0308 0.5 11.5395 0.710714 11.9146 1.08579C12.2897 1.46086 12.5004 1.96957 12.5004 2.5C12.5004 3.03043 12.2897 3.53914 11.9146 3.91421C11.5395 4.28929 11.0308 4.5 10.5004 4.5Z"></path>
                          </svg>
                        </span>
                        <span className="inline lg:text-xs text-[9px] mt-1 w-full capitalize text-blue-800 border-blue-800 text-center text-primary-900 group-hover:text-primary-500 ">
                          Activités
                        </span>
                      </div>
                      <div
                        className="flex flex-col items-center justify-center text-white font-normal outline-none relative space-y-2 overflow-hidden cursor-pointer group"
                        id="headlessui-tabs-tab-:r3:"
                        role="tab"
                        aria-selected="false"
                        tabindex="-1"
                        data-headlessui-state=""
                        aria-controls="headlessui-tabs-panel-:rd:"
                      >
                        <span className="border lg:p-3 p-2.5 rounded-full text-blue-800 border-blue-800 text-primary-900 border-primary-900 group-hover:text-primary-500 group-hover:border-primary-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="fill-current stroke-current stroke-0 h-4 w-4"
                          >
                            <defs>
                              <clipPath id="a">
                                <path
                                  data-name="Rectangle 2794"
                                  transform="translate(-358)"
                                  fill="none"
                                  d="M0 0h24v24H0z"
                                ></path>
                              </clipPath>
                            </defs>
                            <g transform="translate(358)" clip-path="url(#a)">
                              <g
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                              >
                                <path
                                  data-name="Trac\xE9 3027"
                                  d="M-340.462 11.307h-12.462v-4.5a1.736 1.736 0 0 1 1.731-1.731h10.385a1.736 1.736 0 0 1 1.731 1.731v4.5Z"
                                ></path>
                                <path
                                  data-name="Trac\xE9 3028"
                                  d="M-355.001 18.923v-4.846a2.778 2.778 0 0 1 2.769-2.77h12.463a2.778 2.778 0 0 1 2.768 2.769v4.846"
                                ></path>
                                <path
                                  data-name="Trac\xE9 3029"
                                  d="M-355.001 18.923v-.346a1.042 1.042 0 0 1 1.039-1.039h15.924a1.042 1.042 0 0 1 1.037 1.039v.346"
                                ></path>
                                <path
                                  data-name="Trac\xE9 3030"
                                  d="M-352.232 10.307v-.692a1.389 1.389 0 0 1 1.385-1.385h3.462A1.389 1.389 0 0 1-346 9.615v.692"
                                ></path>
                                <path
                                  data-name="Trac\xE9 3031"
                                  d="M-346 10.307v-.692a1.389 1.389 0 0 1 1.385-1.385h3.462a1.389 1.389 0 0 1 1.385 1.385v.692"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                        <span className="inline lg:text-xs text-[9px] mt-1 w-full capitalize border-blue-800 text-blue-800 text-center text-primary-900 group-hover:text-primary-500 ">
                          Hôtels
                        </span>
                      </div>
                      <div
                        className="flex flex-col items-center justify-center border-blue-800 text-blue-800 text-white font-normal outline-none relative space-y-2 overflow-hidden cursor-pointer group"
                        id="headlessui-tabs-tab-:r4:"
                        role="tab"
                        aria-selected="false"
                        tabindex="-1"
                        data-headlessui-state=""
                        aria-controls="headlessui-tabs-panel-:re:"
                      >
                        <span className="border lg:p-3 p-2.5 rounded-full border-blue-800 text-blue-800 text-primary-900 border-primary-900 group-hover:text-primary-500 group-hover:border-primary-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="fill-current stroke-current stroke-0 h-4 w-4"
                          >
                            <path
                              data-name="Trac\xE9 3019"
                              d="M0 0h24v24H0Z"
                              fill="none"
                            ></path>
                            <path
                              data-name="Trac\xE9 3020"
                              d="M22 21H2v-2h1V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v5h2v10h1Zm-5-2h2v-8h-6v8h2v-6h2Zm0-10V5H5v14h6V9ZM7 11h2v2H7Zm0 4h2v2H7Zm0-8h2v2H7Z"
                            ></path>
                          </svg>
                        </span>
                        <span className="inline lg:text-xs text-[9px] mt-1 w-full capitalize text-blue-800 border-blue-800 text-center text-primary-900 group-hover:text-primary-500 ">
                          Logements
                        </span>
                      </div>
                      <div
                        className="flex flex-col items-center justify-center border-blue-800 text-blue-800 text-white font-normal outline-none relative space-y-2 overflow-hidden cursor-pointer group"
                        id="headlessui-tabs-tab-:r5:"
                        role="tab"
                        aria-selected="false"
                        tabindex="-1"
                        data-headlessui-state=""
                        aria-controls="headlessui-tabs-panel-:rf:"
                      >
                        <span className="border lg:p-3 p-2.5 rounded-full text-blue-800 border-blue-800 text-primary-900 border-primary-900 group-hover:text-primary-500 group-hover:border-primary-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="fill-current stroke-current stroke-0 h-4 w-4"
                          >
                            <defs>
                              <clipPath id="a-evisa">
                                <path
                                  data-name="Trac\xE9 7786"
                                  d="M0 0h24v24H0Z"
                                  transform="translate(1337 965)"
                                ></path>
                              </clipPath>
                            </defs>
                            <g
                              transform="translate(-1337 -965)"
                              clip-path="url(#a-evisa)"
                            >
                              <path
                                data-name="Trac\xE9 7785"
                                d="M1357 967a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1v-18a1 1 0 0 1 1-1Zm-1 2h-14v16h14Zm-3 12v2h-8v-2Zm-4-10a4 4 0 1 1-4 4 4 4 0 0 1 4-4Zm0 2a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        <span className="inline lg:text-xs text-[9px] mt-1 w-full capitalize text-blue-800 border-blue-800 text-primary-900 group-hover:text-primary-500 ">
                          Visa
                        </span>
                      </div>
                      <div
                        className="flex flex-col items-center justify-center text-white font-normal outline-none relative space-y-2 overflow-hidden cursor-pointer group"
                        id="headlessui-tabs-tab-:r6:"
                        role="tab"
                        aria-selected="false"
                        tabindex="-1"
                        data-headlessui-state=""
                        aria-controls="headlessui-tabs-panel-:rg:"
                      >
                        <span className="border lg:p-3 p-2.5 rounded-full text-blue-800 border-blue-800  text-primary-900 border-primary-900 group-hover:text-primary-500 group-hover:border-primary-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="fill-current stroke-current stroke-0 h-4 w-4"
                          >
                            <path
                              data-name="Trac\xE9 3021"
                              d="M0 0h24v24H0Z"
                              fill="none"
                            ></path>
                            <path
                              data-name="Trac\xE9 3022"
                              d="M19 20H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V11l2.48-5.788A2 2 0 0 1 6.32 4h11.36a2 2 0 0 1 1.838 1.212L22 11v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1Zm1-7H4v5h16ZM4.176 11h15.648l-2.143-5H6.32l-2.143 5ZM6.5 17A1.5 1.5 0 1 1 8 15.5 1.5 1.5 0 0 1 6.5 17Zm11 0a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5Z"
                            ></path>
                          </svg>
                        </span>
                        <span className="inline lg:text-xs text-[9px] text-blue-800 border-blue-800 mt-1 w-full capitalize text-center text-primary-900 group-hover:text-primary-500 ">
                          Voitures
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" bg-white rounded-lg p-4 w-full z-10">
                <div className="space-y-6">
                  <div className="hidden md:block">
                    <div className="flex justify-between space-x-4">
                      <div className="flex items-center space-x-4">
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

                      <label className="inline-flex items-center cursor-pointer space-x-4">
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 lg:space-x-4 lg:text-sm text-xs">
                          Mes dates de voyages sont flexibles
                        </span>
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                        />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-200 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-200 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                  {/*mobile*/}
                   <div className="block md:hidden">
                      <div className="flex justify-between space-x-4">
               <div>
                <label className="flex items-center">
                    <input type="radio" name="voyage" value="aller-simple" className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500"/>
                    <span className="ml-2 text-gray-700">Aller-Simple</span>
                </label>
               </div>
               <div>
                <label className="flex items-center">
                    <input type="radio" name="voyage" value="aller-retour" className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500"/>
                    <span className="ml-2 text-gray-700">Aller-Retour</span>
                </label>
              </div>
                  </div>
                  <div className="flex flex-col p-4 space-y-2 ">
                  <div className="flex flex-row border border-gray-300 rounded-md border-solid  ">
                    <div className=" p-3">
                     <span className="input-icon text-gray-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className="fill-current stroke-current stroke-0 h-6 w-6"><path d="M0 0h24v24H0Z" fill="none"></path><path d="m12 23.728-6.364-6.364a9 9 0 1 1 12.728 0Zm4.95-7.778a7 7 0 1 0-9.9 0L12 20.9l4.95-4.95ZM12 13a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z"></path></svg></span>
                   </div>  
                    <div className="mt-[12px]  mx-2">
                          <input type="text" placeholder="ville de Départ"/>
                    </div>
                  </div>
                   <div className="flex flex-row border border-gray-300 rounded-md border-solid  ">
                    <div className=" p-3">
                     <span className="input-icon text-gray-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className="fill-current stroke-current stroke-0 h-6 w-6"><path d="M0 0h24v24H0Z" fill="none"></path><path d="m12 23.728-6.364-6.364a9 9 0 1 1 12.728 0Zm4.95-7.778a7 7 0 1 0-9.9 0L12 20.9l4.95-4.95ZM12 13a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z"></path></svg></span>
                   </div>  
                    <div className="mt-[12px]   mx-2">
                          <input type="text" placeholder="ville de Destination"/>
                    </div>
                  </div>
                  <div className="col-span-2 lg:order-none order-2 lg:!col-span-3"><div className="bg-white flex items-center justify-between w-full border border-gray-300 rounded-xl lg:divide-x divide-gray-300 lg:space-x-0"><div className="flex items-center justify-center p-3"><span className="input-icon text-gray-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className="fill-current stroke-current stroke-0 h-6 w-6"><path d="M0 0h24v24H0Z" fill="none"></path><path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2Zm3 6V5h-3v2h-2V5H9v2H7V5H4v4Zm0 2H4v8h16ZM6 13h5v4H6Z"></path></svg></span></div><div className="lg:divide-x divide-gray-300 flex-1"><div className="flex lg:flex-row flex-col lg:items-center lg:divide-x divide-gray-300 lg:p-0 pr-3"><div className="lg:px-3 py-1 lg:pt-1"><div><label for="" className="text-sm text-primary-900 text-normal hidden lg:block">Départ</label><div className="inlineInput__InlineInput-sc-limi49-0 iBntBf w-full"><div className="styles__Container-sc-12nv29s-0 jWChbD"><div className="lg:relative"><div><input placeholder="" className="inputstyles__Input-sc-18dbwlb-0 jIYbsZ placeholder-[#001F3F] !text-[#001F3F] capitalize !border-0 h-7 !p-0 !font-semibold cursor-pointer" readonly="" autocomplete="off" value="30 nov."/></div></div></div></div></div></div><div className="lg:px-3 py-1 lg:pt-1 border-t lg:border-t-0 flex justify-between lg:relative"><div><label for="" className="text-sm text-primary-900 text-normal hidden lg:block">Retour</label><div className="inlineInput__InlineInput-sc-limi49-0 iBntBf w-full"><div className="styles__Container-sc-12nv29s-0 jWChbD"><div className="lg:relative"><div><input placeholder="" className="inputstyles__Input-sc-18dbwlb-0 jIYbsZ placeholder-[#001F3F] !text-[#001F3F] w-full capitalize !border-0 h-7 !p-0 !font-semibold cursor-pointer" readonly="" autocomplete="off" value="07 déc."/></div></div></div></div></div></div></div></div></div></div>
                  <div className="col-span-2 lg:order-none order-3"><div className="bg-white grid lg:grid-cols-12 grid-cols-8 grid-rows-1 gap-0 w-full border border-gray-300 rounded-xl lg:divide-x divide-gray-100 lg:p-0 px-2 py-2"><div className="lg:col-span-3 col-span-1"><div className="flex items-center justify-center h-full"><span className="input-icon text-gray-200"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className="fill-current stroke-current stroke-0 h-6 w-6"><path d="M0 0h24v24H0Z" fill="none"></path><path d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5Zm-8-9a6 6 0 1 1 6-6 6 6 0 0 1-6 6Zm0-2a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"></path></svg></span></div></div><div className="lg:col-span-9 col-span-7 lg:px-3 pl-1 lg:pt-1"><label for="" className="text-sm text-primary-900 text-normal hidden lg:block">Voyageur(s)</label><div className="inlineInput__InlineInput-sc-limi49-0 iBntBf"><div className="w-full"><div className=""><div className="flex-1 flex items-center justify-center cursor-pointer !py-0.5 placeholder-[#001F3F]  !align-middle !text-[#001F3F] !border-0 h-8 !p-0 !font-semibold !justify-start"><div className="truncate text-sm"> 1 Adulte, Economique</div></div></div></div></div></div></div></div>
                </div>
                 <div>
                     <button className="bg-[#001F3F] text-white text-center font-semibold w-full h-full rounded hover:bg-blue-700 px-2">
                      RECHERCHEZ
                     </button>
                  </div>
                </div>
                





                 <div className="hidden md:block">
                  <div className="flex flex-row h-14 space-x-2   ">
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
                          D'ou partez-vous?
                        </label>
                        <div className="mt-[-12px]  mx-2">
                          <input type="text" placeholder="ville de Départ" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <label
                          for="first_name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mx-2 py-1"
                        >
                          ou allez-vous?
                        </label>
                        <div className="mt-[-12px]  mx-2">
                          <input
                            type="text"
                            placeholder="ville de Destination"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="basis-3/12 flex flex-row  border rounded-xl">
                      <div className=" p-3 ">
                        <span className="input-icon text-gray-200">
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
                      <div className="border flex-1">
                        <label
                          for="first_name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mx-2 py-1"
                        >
                          Départ
                        </label>
                        <div className="mt-[-12px]  mx-2">
                          <p className="text-[#001F3F] font-semibold capitalize">
                            26 OCT
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <label
                          for="first_name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mx-2 py-1"
                        >
                          retour
                        </label>
                        <div className="mt-[-12px] mx-2">
                          <p className="text-[#001F3F] font-semibold capitalize">
                            02 NOV.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="basis-2/12 border  flex flex-row border rounded-xl  ">
                      <div className="border-r p-3 ">
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
                      <div className=" ">
                        <label
                          for="first_name"
                          className="block mb-2 text-sm font-medium text-gray-900  dark:text-white mx-2 py-1"
                        >
                          Voyageurs
                        </label>
                        <div className="mt-[-12px] mx-2">
                          <p className="text-[#001F3F] font-semibold capitalize">
                            1 Adulte, ...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="basis-2/12 ">
                      <button className="bg-[#001F3F] text-white text-center font-semibold w-full h-full rounded hover:bg-blue-700 px-2">
                        RECHERCHEZ
                      </button>
                    </div>
                  </div>
                  </div>
                  <div className="flex flex-row h-14    ">
                    <div className="basis-2/12 flex flex-row  ">
                      <div className=" p-3 ">
                        <span className="input-icon bg-[#001F3F]">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            className="h-5 w-5 text-primary-800"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M2 18H9V20H2V18ZM2 11H11V13H2V11ZM2 4H22V6H2V4ZM20.674 13.0251L21.8301 12.634L22.8301 14.366L21.914 15.1711C21.9704 15.4386 22 15.7158 22 16C22 16.2842 21.9704 16.5614 21.914 16.8289L22.8301 17.634L21.8301 19.366L20.674 18.9749C20.2635 19.3441 19.7763 19.6295 19.2391 19.8044L19 21H17L16.7609 19.8044C16.2237 19.6295 15.7365 19.3441 15.326 18.9749L14.1699 19.366L13.1699 17.634L14.086 16.8289C14.0296 16.5614 14 16.2842 14 16C14 15.7158 14.0296 15.4386 14.086 15.1711L13.1699 14.366L14.1699 12.634L15.326 13.0251C15.7365 12.6559 16.2237 12.3705 16.7609 12.1956L17 11H19L19.2391 12.1956C19.7763 12.3705 20.2635 12.6559 20.674 13.0251ZM18 18C19.1046 18 20 17.1046 20 16C20 14.8954 19.1046 14 18 14C16.8954 14 16 14.8954 16 16C16 17.1046 16.8954 18 18 18Z"></path>
                          </svg>
                        </span>
                      </div>
                      <div className="mt-[4px]  ">
                        <label
                          for="first_name"
                          className="block mb-2  font-medium text-[#001F3F]  dark:text-Blue mx-2 py-2"
                        >
                          FiltresAdditionnels
                        </label>
                      </div>
                    </div>
                   {/*mob*/}


                    <div className="hidden md:block">
                      <div className="basis-4/12 flex flex-row mt-[8px] space-x-4  ">
                        <div>
                          <form className="min-w-36 lg:relative">
                            <select
                              id="countries"
                              className="bg-white border border-gray-300  text-gray-900 text-sm rounded-md  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                              <option>Compagnies aérienne</option>
                              <option>Canada</option>
                              <option>France</option>
                              <option>Germany</option>
                            </select>
                          </form>
                        </div>
                        <div>
                          <form className="min-w-36  lg:relative ">
                            <select
                              id="countries"
                              className="bg-white border border-gray-300  text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                              <option>Nombres d'escales</option>
                              <option>Canada</option>
                              <option>France</option>
                              <option>Germany</option>
                            </select>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                       <div className="block md:hidden " >
                      <div className="flex flex-col mt-[8px] space-y-4 p-[-8px] ">
                           <div >
                <form className="min-w-36 lg:relative">
                  <select id="countries" className="bg-white border border-gray-300  text-gray-900 text-sm rounded-md  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Compagnies aérienne</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                  </select>
                </form>
                     </div>
                     <div>
                  <form className="min-w-36  lg:relative ">
                    <select id="countries" className="bg-white border border-gray-300  text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option>Nombres d'escales</option>
                      <option>Canada</option>
                      <option>France</option>
                      <option>Germany</option>
                    </select>
                  </form>
                  </div>
                    </div>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default flight;