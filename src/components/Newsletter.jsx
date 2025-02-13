import React from 'react';

const Newsletter = () => {
    return (
      <div>
        <div className="block md:hidden max-w-7xl mx-auto pt-14">
          <div className="styles__NewsletterContainer-sc-n6xdzd-0 bdhYKl">
            <div className="uk-container bg-white rounded-2xl shadow-lighter mx-7 lg:mx-auto relative">
              <div className="fill-current stroke-current stroke-0 w-full hidden lg:block rounded-2xl">
                <img
                  style={{
                    display: "block",
                    WebkitUserSelect: "none",
                    margin: "auto",
                    backgroundColor: "hsl(0, 0%, 90%)",
                    transition: "background-color 300ms",
                  }}
                  src="https://www.ease.travel/_next/image?url=%2F_next%2Fstatic%2Fimages%2Fnewsletter_mobile-bcb9ba9a7fde1c7cab010026d5d65617.png&w=384&q=75"
                  height="681"
                  width="384"
                  alt="newsletter-mobile-icon"
                />
              </div>
              <div className="grid lg:grid-cols-2 lg:px-10 px-5 pb-5 bottom-0 left-0 right-0 -mt-52 lg:mt-0">
                <div className="z-10">
                  <h2 className="headingstyles__H2Simple-sc-cwoqq7-2 jdGglH text-2xl font-bold text-center lg:text-left leading-7">
                    Ne ratez aucun de nos bons plans
                  </h2>
                  <div className="text-sm text-center lg:text-left text-primary">
                    Inscrivez-vous à notre newsletter et Recevez nos meilleures
                    offres de vols, obtenez les meilleurs prix pour les
                    destinations les plus populaires !
                  </div>
                  <form className="flex items-center mt-4 lg:justify-between">
                    <div className="inlineInput__InlineInput-sc-limi49-0 iBntBf w-2/3 lg:pr-2">
                      <input
                        type="email"
                        className="inputstyles__Input-sc-18dbwlb-0 jIYbsZ py-2 px-8 h-14 rounded-tl-md rounded-bl-md"
                        placeholder="Adresse Email"
                        name="email"
                        autoComplete="off"
                      />
                    </div>
                    <div className="lg:w-1/3 z-10">
                      <button
                        type="submit"
                        className="buttonstyles__StyledButton-sc-ovvs4o-0 enbshE bg-[#001F3F] text-white z-10 rounded-md rounded-tr-md rounded-br-md h-14 px-4 w-full text-sm"
                      >
                        M'inscrire
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Newsletter;