import React from 'react';
import Titregrille from './Titregrille';
import ImageHotel from './ImageHotel';
import to7 from "../assets/to7.jpeg";
import Button from './Button';
const Hotels = () => {
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
            title="Profitez des promotions sur notre sélection d'hôtels"
            subtitle="Profitez des promotions sur notre sélection d'hôtels"
            titleStyles={titleStyles}
            subtitleStyles={subtitleStyles}
          />
        </div>
        <div className="bg-white  max-w-7xl mx-auto pt-14 hidden md:block">
          <div className="   rounded-md">
            <div className="grid grid-cols-4 gap-8">
              <div className="bg-white bg-no-repeat shadow-md relative h-[270px] rounded-xl overflow-hidden">
                <ImageHotel
                  ImageSrc={to7}
                  hotelName="STAR LAND HOTEL BASTOS"
                  location="Yaoundé"
                  price="198EUR"
                />
              </div>
              <div className="bg-white bg-no-repeat shadow-md relative h-[270px] rounded-xl overflow-hidden">
                <ImageHotel
                  ImageSrc={to7}
                  hotelName="STAR LAND HOTEL BASTOS"
                  location="Yaoundé"
                  price="198EUR"
                />
              </div>
              <div className="bg-white bg-no-repeat shadow-md relative h-[270px] rounded-xl overflow-hidden">
                <ImageHotel
                  ImageSrc={to7}
                  hotelName="STAR LAND HOTEL BASTOS"
                  location="Yaoundé"
                  price="198EUR"
                />
              </div>
              <div className="bg-white bg-no-repeat shadow-md relative h-[270px] rounded-xl overflow-hidden">
                <ImageHotel
                  ImageSrc={to7}
                  hotelName="STAR LAND HOTEL BASTOS"
                  location="Yaoundé"
                  price="198EUR"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-14 hidden md:block  ">
          <section className=" h-[70px] bg-white rounded-md flex justify-end">
            <Button
              text="Voir tous les Hotels"
              onClick={handleClick}
              className="" // Si tu veux ajouter des classNamees supplémentaires
            />
          </section>
        </div>
        <div className="max-w-7xl mx-auto  bg-white pt-14 block md:hidden">
    <div className="overflow-x-auto scrollbar-hide">
    <div className="flex space-x-4">
      <div className=" flex-none bg-white bg-no-repeat shadow-md relative h-full rounded-xl overflow-hidden">
        <ImageHotel
                  ImageSrc={to7}
                  hotelName="STAR LAND HOTEL BASTOS"
                  location="Yaoundé"
                  price="198EUR"
                /> 
 </div>
  <div className=" flex-none bg-white bg-no-repeat shadow-md relative h-full rounded-xl overflow-hidden">
        <ImageHotel
                  ImageSrc={to7}
                  hotelName="STAR LAND HOTEL BASTOS"
                  location="Yaoundé"
                  price="198EUR"
                /> 
 </div>
  <div className=" flex-none bg-white bg-no-repeat shadow-md relative h-full rounded-xl overflow-hidden">
        <ImageHotel
                  ImageSrc={to7}
                  hotelName="STAR LAND HOTEL BASTOS"
                  location="Yaoundé"
                  price="198EUR"
                /> 
 </div>
  <div className=" flex-none bg-white bg-no-repeat shadow-md relative h-full rounded-xl overflow-hidden">
        <ImageHotel
                  ImageSrc={to7}
                  hotelName="STAR LAND HOTEL BASTOS"
                  location="Yaoundé"
                  price="198EUR"
                /> 
 </div>
      </div>
      </div>
      </div>
           <div class="max-w-7xl mx-auto pt-14 block md:hidden  ">
    <section class=" h-[70px] bg-white rounded-md flex justify-center items-center">
             <Button
                text="Voir tous les hotels"
                onClick={handleClick}
                className="" // Si tu veux ajouter des classes supplémentaires
              />
    </section>
    </div>
      </div>
    );
};

export default Hotels;
