import React from 'react';
import to1 from "../assets/to1.jpeg";
import Button from './Button'
import Titregrille from './Titregrille'
import ImageTourisme from './ImageTourisme';
const Tourisme = () => {
    const handleClick = () => {
        // Action à réaliser lors du clic sur le bouton
        console.log('Bouton cliqué !');
    }
  const titleStyles = "mb-2 p-2 mb-3 inline-block lg:text-4xl text-2xl font-bold lg:!leading-tight !leading-9 text-primary-700 text-[#001F3F]";
  const subtitleStyles = "mb-2 p-2 lg:text-lg leading-tight text-gray-400 font-medium";
    return (
      <div>
        <div className="max-w-7xl mx-auto pt-14">
          <Titregrille
            title="Nos Séjours touristiques pour 2024"
            subtitle="Visitez le monde avec ces séjours vers des destinations exotiques"
            titleStyles={titleStyles}
            subtitleStyles={subtitleStyles}
          />
        </div>
        <div className="  bg-white max-w-7xl mx-auto pt-14 hidden md:block ">
          <div className="relative  grid grid-cols-4 gap-8 ">
              <ImageTourisme
                imageUrl={to1}
                destination="KENYA"
                subtitle="-douala"
                daysText="7 jours à partir de:"
                price="1 456 789"
              />
              <ImageTourisme
                imageUrl={to1}
                destination="KENYA"
                subtitle="-douala"
                daysText="7 jours à partir de:"
                price="1 456 789"
              />
              <ImageTourisme
                imageUrl={to1}
                destination="KENYA"
                subtitle="-douala"
                daysText="7 jours à partir de:"
                price="1 456 789"
              />
              <ImageTourisme
                imageUrl={to1}
                destination="KENYA"
                subtitle="-douala"
                daysText="7 jours à partir de:"
                price="1 456 789"
              />
          </div>
          <div className="max-w-7xl mx-auto pt-14 hidden md:block  ">
            <section className=" h-[70px] bg-white rounded-md flex justify-end">
              <Button
                text="Voir tous les séjours touristiques"
                onClick={handleClick}
                className="" // Si tu veux ajouter des classes supplémentaires
              />
            </section>
          </div>
        </div>
      </div>
    );
};

export default Tourisme;