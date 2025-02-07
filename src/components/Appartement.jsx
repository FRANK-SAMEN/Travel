import React from 'react';
import Titregrille from "./Titregrille";
import ImageAppart from './ImageAppart';
import to8 from "../assets/to8.jpeg";
import Button from './Button';
const Appartement = () => {
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
            title="Appartements meublés et Studios"
            subtitle="Découvrez notre sélection d'appartements les plus vendus"
            titleStyles={titleStyles}
            subtitleStyles={subtitleStyles}
          />
        </div>
        <div className="  bg-white max-w-7xl mx-auto pt-14 hidden md:block ">
          <div className="relative  grid grid-cols-4 gap-8 ">
            <ImageAppart
              location="KENYA"
              subtitle="douala"
              title="Belle Villa de 02 chambres pieds dans l'eau"
              price="300 000 FCFA"
              imageUrl={to8} // Remplace par l'URL de ton image
            />
            <ImageAppart
              location="KENYA"
              subtitle="douala"
              title="Belle Villa de 02 chambres pieds dans l'eau"
              price="300 000 FCFA"
              imageUrl={to8} // Remplace par l'URL de ton image
            />
            <ImageAppart
              location="KENYA"
              subtitle="douala"
              title="Belle Villa de 02 chambres pieds dans l'eau"
              price="300 000 FCFA"
              imageUrl={to8} // Remplace par l'URL de ton image
            />
            <ImageAppart
              location="KENYA"
              subtitle="douala"
              title="Belle Villa de 02 chambres pieds dans l'eau"
              price="300 000 FCFA"
              imageUrl={to8} // Remplace par l'URL de ton image
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-14 hidden md:block  ">
          <section className=" h-[70px] bg-white rounded-md flex justify-end">
            <Button
              text="Voir tous les Appartements"
              onClick={handleClick}
              className="" // Si tu veux ajouter des classes supplémentaires
            />
          </section>
        </div>
        <div className="bg-white pt-14 block md:hidden">
         <div className="overflow-x-auto scrollbar-hide">
    <div className="flex space-x-4">
          <ImageAppart
              location="KENYA"
              subtitle="douala"
              title="Belle Villa de 02 chambres pieds dans l'eau"
              price="300 000 FCFA"
              imageUrl={to8} // Remplace par l'URL de ton image
            />
               <ImageAppart
              location="KENYA"
              subtitle="douala"
              title="Belle Villa de 02 chambres pieds dans l'eau"
              price="300 000 FCFA"
              imageUrl={to8} // Remplace par l'URL de ton image
            />
               <ImageAppart
              location="KENYA"
              subtitle="douala"
              title="Belle Villa de 02 chambres pieds dans l'eau"
              price="300 000 FCFA"
              imageUrl={to8} // Remplace par l'URL de ton image
            />
               <ImageAppart
              location="KENYA"
              subtitle="douala"
              title="Belle Villa de 02 chambres pieds dans l'eau"
              price="300 000 FCFA"
              imageUrl={to8} // Remplace par l'URL de ton image
            />
      </div>
      </div>
      </div>
           <div class="max-w-7xl mx-auto pt-14 block md:hidden  ">
    <section class=" h-[70px] bg-white rounded-md flex justify-center items-center">
             <Button
                text="Voir tous les Appartements"
                onClick={handleClick}
                className="" // Si tu veux ajouter des classes supplémentaires
              />
    </section>
    </div>
      </div>
    );
};

export default Appartement;