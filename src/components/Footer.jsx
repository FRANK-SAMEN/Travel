import React from 'react';
import masterca from "../assets/masterca.png";
import Momocard from "../assets/Momocard.jpeg";
import orangemoney from "../assets/orangemoney.png";
import Amex from "../assets/Amex.png";
import Visa from "../assets/Visa.png";
import google from "../assets/google.png";
import aps from "../assets/aps.png";

const Footer = () => {
    return (
      <div>
        <div className="pt-50">
          <div className="bg-[#001F3F] mb-4 p-4 w-full h-full  dark:bg-[#001F3F] ">
            <div className="hidden md:block">
              <div className="mt-[-150px]  max-w-7xl mx-auto bg-white rounded-md ">
                <div className="grid grid-cols-2"></div>
                <div className=" w-full h-full bg-white  rounded-md ">
                  <img
                    style={{
                      display: "block",
                      WebkitUserSelect: "none",
                      margin: "auto",
                      cursor: "zoom-in",
                      backgroundColor: "hsl(0, 0%, 90%)",
                      transition: "background-color 300ms",
                      borderRadius: "20px",
                    }}
                    src="https://www.ease.travel/_next/image?url=%2F_next%2Fstatic%2Fimages%2Fnewsletter-b643fc10300cbc13ddd8cbb6088d1739.png&amp;w=1920&amp;q=75"
                    width="1300"
                    height="183"
                  />
                  <div className="flex flex-col">
                    <h2 className="headingstyles__H2Simple-sc-cwoqq7-2 jdGglH text-2xl font-bold text-center lg:text-left leading-7 mt-[-150px] mx-10">
                      Ne ratez aucun de nos bons plans
                    </h2>
                    <div className="text-sm text-center lg:text-left text-primary mx-10">
                      Inscrivez-vous à notre newsletter et Recevez nos
                      meilleures offres de <br />
                      vols, obtenez les meilleurs prix pour les destinations les
                      plus populaires !
                    </div>
                    <div className="flex flex-row pt-4 ">
                      <input
                        type="text"
                        id="mon-champ"
                        className="border border-gray-300 w-80 mx-10 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                        placeholder="Adresse E-mail"
                      />
                      <button className="bg-[#001F3F] text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">
                        M'inscrire
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-full h-15 w-15 flex items-center justify-center cursor-pointer px-5 py-5">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="chevron-up"
                className="svg-inline--fa fa-chevron-up h-5 w-5 text-primary-800"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
                ></path>
              </svg>
            </div>
            <div className="mx-auto max-w-7xl w-full max-w-screen-xl">
              <div className="  grid grid-cols-1 lg:grid-cols-12 gap-4 mx-auto max-w-7xl">
                <div className="lg:col-span-3 text-white">
                  <span className="text-white text-xl font-semibold ">
                    Plus sur Ease
                  </span>
                  <ul className="py-5 lg:py-8 lg:columns-1 list space-y-2">
                    <li>
                      <a href="https://www.ease.travel/">Ease Travel</a>
                    </li>
                    <li>
                      <a href="https://www.ease.travel/a-propos">
                        A propos de nous
                      </a>
                    </li>
                    <li>
                      <a href="https://www.ease.travel/blog">Blog</a>
                    </li>
                    <li>
                      <a href="https://www.ease.travel/career">
                        Recrutement à EASE
                      </a>
                    </li>
                    <li>
                      <a href="/tourisme/dubai-2024">
                        Vacances all-inclusive à Dubaï
                      </a>
                    </li>
                    <li>
                      <a href="https://www.ease.travel/v2/flight/cameroon_canada">
                        Billets d'avion Cameroon-Canada
                      </a>
                    </li>
                    <li>
                      <a href="https://www.ease.travel/v2/flight/douala_yaounde">
                        Vols Douala-Yaoundé
                      </a>
                    </li>
                    <li>
                      <a href="https://www.ease.travel/v2/flight/dakar_abidjan">
                        Vols Dakar-Abidjan
                      </a>
                    </li>
                    <li>
                      <a href="https://www.ease.travel/v2/flight/yaounde_garoua">
                        Vols Yaoundé-Garoua
                      </a>
                    </li>
                    <li>
                      <a href="https://www.ease.travel/a-propos/condition-general-confidentialite">
                        Conditions générales d'utilisation
                      </a>
                    </li>
                    <li>
                      <a href="https://www.ease.travel/a-propos/condition-general-utilisation">
                        Conditions de confidentialité
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-2 text-white">
                  <span className="text-white text-xl font-semibold">
                    Nos services
                  </span>
                  <ul className="py-5 lg:py-8 lg:columns-1 list space-y-2">
                    <li>
                      <a href="/flights">Billets d'avion</a>
                    </li>
                    <li>
                      <a href="/tourisme">Séjour touristique</a>
                    </li>
                    <li>
                      <a href="/activites">Tourist attractions</a>
                    </li>
                    <li>
                      <a href="/appartements">Appartement meublé</a>
                    </li>
                    <li>
                      <a href="/hotels">Réservation hôtels</a>
                    </li>
                    <li>
                      <a href="/visa">Service de visa</a>
                    </li>
                    <li>
                      <a href="https://www.ease.travel/v2/tontine-vacances">
                        Tontine Vacances
                      </a>
                    </li>
                    <li>
                      <a href="/appartements/search?city=douala">
                        Meublés à Douala
                      </a>
                    </li>
                    <li>
                      <a href="/appartements/search?city=kribi">
                        Meublés à Kribi
                      </a>
                    </li>
                    <li>
                      <a href="/appartements/search?city=yaounde">
                        Meublés à Yaounde
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-2">
                  <span className="text-white text-xl font-semibold">
                    Contactez-nous
                  </span>
                  <ul className="py-5 lg:py-8 lg:columns-1 list space-y-16">
                    <li className="flex flex-col items-start justify-start space-y-1">
                      <span className="text-white font-bold text-l">
                        Cameroun
                      </span>
                      <span className="text-white uppercase text-l">
                        Douala/Yaoundé
                      </span>
                      <span className="text-white text-l">
                        <span className="uppercase">RC/DLA/2020/M/4960</span>,
                        BP3024 Douala-Cameroun
                      </span>
                      <span className="text-white text-l underline">
                        <a href="mailto:contact@ease-ts.com">contact@ease.cm</a>
                      </span>
                      <span className="text-white uppercase text-l">
                        <a href="tel:(+237) 699 28 35 29">
                          (+237) 699 28 35 29
                        </a>
                      </span>
                    </li>
                    <li className="flex flex-col items-start justify-start space-y-1">
                      <span className="text-white font-bold  text-l">
                        États-Unis d'Amérique
                      </span>
                      <span className="text-white uppercase text-l">
                        Ease Travel inc.
                      </span>
                      <span className="text-white uppercase text-l">
                        16192 Coastal Highway, Lewes, DE 19958
                      </span>
                      <span className="text-white text-l underline">
                        <a href="mailto:contact@ease-ts.com">
                          contact@ease.travel
                        </a>
                      </span>
                      <span className="text-white uppercase text-l">
                        <a href="tel:+1 205 608 54 42">+1 (205) 608-5442</a>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-2">
                  <ul className="py-5 lg:py-7 lg:columns-1 list lg:mt-8 space-y-10">
                    <li className="flex flex-col items-start justify-start space-y-1">
                      <span className="text-white font-bold text-l">
                        Côte d'Ivoire
                      </span>
                      <span className="text-white uppercase text-l">
                        Abidjan
                      </span>
                      <span className="text-white uppercase text-l">
                        Ease SARLU RC/Abidjan
                      </span>
                      <span className="text-white uppercase text-l">
                        CI-ABJ-03-2022-B13-00785, BP4799
                      </span>
                      <span className="text-white text-l underline">
                        <a href="mailto:contact@ease-ts.com">contact@ease.ci</a>
                      </span>
                      <span className="text-white uppercase text-l">
                        <a href="tel:(+225) 07 98 52 78 25">
                          (+225) 07 98 52 78 25
                        </a>
                      </span>
                    </li>
                    <li className="flex flex-col items-start justify-start space-y-1">
                      <span className="text-white font-bold text-l">
                        Belgique
                      </span>
                      <span className="text-white uppercase text-l">
                        EASE TRAVEL EU.
                      </span>
                      <span className="text-white text-l"></span>
                      <span className="text-white text-l underline">
                        <a href="mailto:contact@ease-ts.com">
                          contact@ease.travel
                        </a>
                      </span>
                      <span className="text-white uppercase text-l">
                        <a href="tel:+34 466 90 36 53">+34 466 90 36 53</a>
                      </span>
                    </li>
                  </ul>
                </div>
                 <div className="lg:col-span-2 lg:ml-14">
      <span className="text-white text-xl font-semibold">Paiement</span>
      <div className="lg:block flex py-5 lg:py-8">
     <div><div className="uk-border-rounded p-1 h-full w-full">
      <img alt="orange money logo" width="105" height="50"   src={orangemoney}   /></div></div>   
       <div><div className="uk-border-rounded p-1 h-full w-full">
        <img alt="amex logo" width="105" height="50"   src={Momocard} /></div></div>    
     <div><div className="uk-border-rounded p-1 h-full w-full"><img alt="mastercard-logo" width="105" height="50"  src={Visa}  /></div></div>
     <div><div className="uk-border-rounded p-1 h-full w-full"><img alt="amex logo" width="105" height="50"  src={masterca} /></div></div>
     <div><div className="uk-border-rounded p-1 h-full w-full"><img alt="beobank logo" width="105" height="50"   src={Amex} /></div></div>    
    </div>
  </div>
  <div className="lg:col-span-2 flex justify-center lg:justify-start"><a href="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 134.361 50" className="fill-current stroke-current stroke-0 h-10 text-white mt-6"><defs></defs><g transform="translate(-433.683 -230.233)"><g transform="translate(433.683 242.357)"><path className="a-log" d="M442.711,269.291h14.269a1.809,1.809,0,0,1,1.81,1.81v4.073a1.81,1.81,0,0,1-1.81,1.81H442.711v6.3h16.621a1.81,1.81,0,0,1,1.81,1.81v4.235a1.81,1.81,0,0,1-1.81,1.81H435.493a1.81,1.81,0,0,1-1.81-1.81V256.625a1.81,1.81,0,0,1,1.81-1.81h23.839a1.809,1.809,0,0,1,1.81,1.81v4.232a1.81,1.81,0,0,1-1.81,1.81H442.711Z" transform="translate(-433.683 -254.012)"></path><path className="a-log" d="M579.164,265.557H573.6a1.834,1.834,0,0,1-1.712-1.228c-.75-2.041-2.451-3.365-5.551-3.365s-5.183,1.281-5.183,3.633c0,1.977,1.442,2.831,4.165,3.419l5.077,1.174c6.625,1.444,10.953,4.115,10.953,10.365,0,7.264-5.986,11.805-15.068,11.805-7.447,0-14.23-3.2-16.022-10.556a1.819,1.819,0,0,1,1.754-2.265h5.545a1.809,1.809,0,0,1,1.681,1.153c.987,2.508,3.579,3.975,7.312,3.975,3.362,0,5.128-1.229,5.128-3.205,0-1.229-.748-2.51-3.845-3.1l-5.985-1.336c-7.158-1.548-10.522-4.913-10.522-10.683,0-7.267,5.876-11.86,14.424-11.86,5.389,0,13.214,1.934,15.165,9.808A1.818,1.818,0,0,1,579.164,265.557Z" transform="translate(-479.92 -253.484)"></path><path className="a-log" d="M619.934,269.291H634.2a1.809,1.809,0,0,1,1.81,1.81v4.073a1.81,1.81,0,0,1-1.81,1.81H619.934v6.3h16.621a1.809,1.809,0,0,1,1.81,1.81v4.235a1.809,1.809,0,0,1-1.81,1.81H612.713a1.81,1.81,0,0,1-1.81-1.81V256.625a1.809,1.809,0,0,1,1.81-1.81h23.842a1.809,1.809,0,0,1,1.81,1.81v4.232a1.809,1.809,0,0,1-1.81,1.81H619.934Z" transform="translate(-504.003 -254.012)"></path><path className="a-log" d="M522.455,288.487l-13.862-32.922a1.809,1.809,0,0,0-1.668-1.107h-6.2a1.809,1.809,0,0,0-1.667,1.105L485.15,288.485A1.809,1.809,0,0,0,486.816,291h1.95a12.187,12.187,0,0,0,9.987-5.2l1.958-2.8-.077,1.979a5.8,5.8,0,0,0,5.8,6.027h14.353A1.81,1.81,0,0,0,522.455,288.487Zm-13.4-9.6a.727.727,0,0,1-.02.17.754.754,0,0,1-.907.562l-4.117-.972-1.565,2.714a.752.752,0,0,1-1.395-.27l-.413-2.487,5.933-10.305a.188.188,0,0,0-.306-.213l-7.574,9.3-3.513-.831a.752.752,0,0,1-.288-1.324l12.944-10.642a.752.752,0,0,1,1.227.583Z" transform="translate(-454.047 -253.87)"></path></g><path className="a-log" d="M0,11.289a20.472,20.472,0,0,1,8.3-8.4A22.789,22.789,0,0,1,13.987.656,25.032,25.032,0,0,1,20.09,0a24.9,24.9,0,0,1,6.065.954A22.7,22.7,0,0,1,31.72,3.469a20.47,20.47,0,0,1,7.88,8.8l-.16.109A24.31,24.31,0,0,0,30.99,4.808,24.007,24.007,0,0,0,20.043,1.941,24.076,24.076,0,0,0,8.97,4.27,24.366,24.366,0,0,0,.155,11.407Z" transform="translate(465.557 230.233) rotate(8)"></path></g></svg></a></div>
 <div className="lg:col-span-3 flex justify-center lg:justify-start"><div className="flex flex-row space-x-4 lg:py-0"><div><a target="_blank" href="https://easets.page.link/RtQw"><div className="flex items-end justify-center h-full w-full"><img alt="google-play-store-icon" loading="lazy" width="120" height="40" decoding="async" data-nimg="1"  src={google} /></div></a></div><div><a target="_blank" href="https://easets.page.link/RtQw"><div className="flex items-end justify-center h-full w-full"><img alt="apple-store-icon" loading="lazy" width="120" height="40" decoding="async" data-nimg="1" src={aps}/></div></a></div></div></div>    
  <div className="lg:col-span-2 flex items-end justify-center lg:justify-start space-x-2"><ul className="lg:pb-0 flex justify-start iconnav"><li className="space-x-2"><a href="https://www.facebook.com/easets/?fref=ts" target="_blank"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" className="svg-inline--fa fa-facebook-f h-6 w-6 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg></a></li><li><a href="https://twitter.com/EaseTravelServ" target="_blank"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="svg-inline--fa fa-twitter h-6 w-6 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></a></li><li><a href="https://www.linkedin.com/company/ease-travel-services" target="_blank"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" className="svg-inline--fa fa-linkedin h-6 w-6 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></a></li></ul></div>
  <div className="lg:col-span-5 flex items-end lg:justify-start "><p className="text-white text-sm lg:text-right">Copyright 2024 © Ease Travel Inc.
    Tous les droits sont réservés.</p></div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;