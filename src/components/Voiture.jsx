import React from 'react';
import ImageVoiture from "./ImageVoiture";
import Titregrille from "./Titregrille";
import to5 from "../assets/to5.jpeg";
import Button from "./Button";
const Voiture = () => {
      const handleClick = () => {
        // Action à réaliser lors du clic sur le bouton
        console.log("Bouton cliqué !");
      };
      const titleStyles =
        "mb-2 p-2 mb-3 inline-block lg:text-4xl text-2xl font-bold lg:!leading-tight !leading-9 text-primary-700 text-[#001F3F]";
      const subtitleStyles =
        "mb-2 p-2 lg:text-lg leading-tight text-gray-400 font-medium";
    return (
      <div>
        <div className="max-w-7xl mx-auto pt-14">
          <Titregrille
            title="Nos meilleures voitures de locations au Cameroun"
            subtitle="Une large sélection des véhicule les plus demandées par nos clients."
            titleStyles={titleStyles}
            subtitleStyles={subtitleStyles}
          />
        </div>
        <div className="bg-white max-w-7xl mx-auto pt-14  ">
          <div className=" bg-white rounded-md">
            <div className=" grid grid-cols-4 gap-8  ">
              <ImageVoiture
                imageSrc={to5}
                title="TOYOTA-CAMRY 2009"
                details="Wtydfrst | Saloon | Douala"
                price="40000XAF"
              />
              <ImageVoiture
                imageSrc={to5}
                title="TOYOTA-CAMRY 2009"
                details="Wtydfrst | Saloon | Douala"
                price="40000XAF"
              />
              <ImageVoiture
                imageSrc={to5}
                title="TOYOTA-CAMRY 2009"
                details="Wtydfrst | Saloon | Douala"
                price="40000XAF"
              />
              <ImageVoiture
                imageSrc={to5}
                title="TOYOTA-CAMRY 2009"
                details="Wtydfrst | Saloon | Douala"
                price="40000XAF"
              />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-14 hidden md:block  ">
          <section className=" h-[70px] bg-white rounded-md flex justify-end">
            <Button
              text="Voir tous les voitures"
              onClick={handleClick}
              className="" // Si tu veux ajouter des classes supplémentaires
            />
          </section>
        </div>
      </div>
    );
};

export default Voiture;