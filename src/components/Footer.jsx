import React from 'react';

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
                      <span class="text-white text-l underline">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;