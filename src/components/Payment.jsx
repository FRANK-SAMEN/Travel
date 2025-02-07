import React from 'react';
import orangemoney  from "../assets/orangemoney.png";
import Momomtn  from "../assets/Momomtn.jpg";
import visa from "../assets/visa.jpg";
import mastercard from "../assets/mastercard.jpg";
const Payment = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto hidden md:block">
 <div className=" mb-4 p-4 bg-blue-200   from-primary-700 to-primary-800 lg:p-10 py-4 lg:my-10 my-8 lg:rounded-2xl rounded-xl ">
    <div className="uk-container px-6">
      <div className="grid md:grid-cols-3 md:gap-x-6 lg:gap-y-0 gap-y-28">
      <div className="flex flex-col lg:flex-row items-center lg:justify-start lg:space-x-10 lg:space-y-0 space-y-10">
        <div className="relative z-0"><div className="relative h-24  w-24 -mt-6 z-0">
         <div className="absolute bg-black opacity-20 rounded-xl left-3 top-3 -bottom-3 -right-3 rotate-[15deg] "></div>
            <div className="absolute left-0 top-0 bottom-0 right-0 bg-white rounded-xl">
              <div className="bg-blue-100 flex items-center justify-center absolute inset-0 rounded-xl z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current stroke-current text-sm text-primary-900 w-10 h-10" viewBox="0 0 41 41"><path d="M18 0c9.936 0 18 8.064 18 18s-8.064 18-18 18S0 27.936 0 18 8.064 0 18 0Zm0 32c7.734 0 14-6.266 14-14 0-7.736-6.266-14-14-14-7.736 0-14 6.264-14 14 0 7.734 6.264 14 14 14Zm16.97.142 5.658 5.656-2.83 2.83-5.656-5.658 2.828-2.828Z"></path></svg></div></div></div></div><div className="space-y-2 lg:pb-6">
                  <div className="text-primary-900 font-medium text-center lg:text-left">Recherche</div>
                  <div className="text-[#001F3F] text-center lg:text-left">Simplifiée pour une prise en main évidente</div>
                  </div></div><div className="flex flex-col lg:flex-row items-center lg:justify-center lg:space-x-10 lg:space-y-0 space-y-10">
                    <div>
                      <div className="relative h-24 w-24 -mt-6 z-0">
                        <div className="absolute bg-black opacity-20 rounded-xl left-3 top-3 -bottom-3 -right-3 rotate-[15deg]">
                          </div><div className="absolute left-0 top-0 bottom-0 right-0 bg-white rounded-xl">
                            <div className="bg-blue-100 flex items-center justify-center absolute inset-0 rounded-xl z-10">
                              <svg xmlns="http://www.w3.org/2000/svg" className="fill-current stroke-current text-sm text-primary-900 w-10 h-10" viewBox="0 0 38 40">
                                <path d="m16 0 14.596 4.56A2 2 0 0 1 32 6.47V10h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2l-6.44.002a11.975 11.975 0 0 1-2.8 2.66L16 40 5.24 32.664A12 12 0 0 1 0 22.748V6.47a2 2 0 0 1 1.404-1.908L16 0Zm0 4.188L4 7.94v14.808a8 8 0 0 0 3.116 6.338l.378.272L16 35.16 23.564 30H14a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2h14V7.94L16 4.188ZM16 20v6h18v-6H16Zm0-4h18v-2H16v2Z"></path>
                                </svg></div></div></div></div><div className="space-y-2 w-full lg:w-auto"><div className="text-primary-900 font-medium text-center lg:text-left">Moyens de paiement</div>
                                <div className="grid lg:grid-cols-2 grid-cols-4 gap-2 lg:w-4/5 w-full">
                                  <div className="h-8 relative">
                                    <img alt="Orange money" className="h-8 w-auto" src={orangemoney}/></div>
                                    <div className="h-8 relative"><img alt="MTN mobile money" className="h-8 W-auto" src={Momomtn}/></div>
                                    <div className="h-8 relative"><img alt="Visa" className="h-8 w-auto" src={visa}/></div>
                                    <div className="h-8 relative"><img alt="Mastercard" className="h-8 w-auto" src={mastercard}/></div></div></div></div>
                                    <div className="flex flex-col lg:flex-row items-center lg:justify-end lg:space-x-10 lg:space-y-0 space-y-10"><div>
                                      <div className="relative h-24 w-24 -mt-6 z-0">
                                        <div className="absolute bg-black opacity-20 rounded-xl left-3 top-3 -bottom-3 -right-3 rotate-[15deg]"></div>
                                        <div className="absolute left-0 top-0 bottom-0 right-0 bg-white rounded-xl">
                                          <div className="bg-blue-100 flex items-center justify-center absolute inset-0 rounded-xl z-10">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="fill-current stroke-current text-sm text-primary-900 w-10 h-10" viewBox="0 0 44 44"><path d="M37.876 14H40a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-2.124A16.002 16.002 0 0 1 22 44v-4a12 12 0 0 0 12-12V16a12 12 0 0 0-24 0v14H4a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4h2.124a16.002 16.002 0 0 1 31.752 0ZM4 18v8h2v-8H4Zm34 0v8h2v-8h-2ZM13.52 29.57l2.12-3.392A11.944 11.944 0 0 0 22 28c2.25.004 4.454-.628 6.36-1.822l2.12 3.392A15.926 15.926 0 0 1 22 32c-3 .005-5.939-.838-8.48-2.43Z"></path></svg></div></div></div></div><div className="lg:space-y-2 space-y-0 lg:pb-6">
                                    <div className="text-primary-900 font-medium text-center lg:text-left">Service client</div>
                                  <div className="space-x-1"><div className="text-[#001F3F] text-center lg:text-left inline-block md:block">
                                    <a href="tel:+237652947060">+237 652 94 70 60</a></div><div className="inline-block md:hidden">/</div>
                                    <div className="text-[#001F3F] text-center lg:text-left inline-block md:block">
                                      <a href="mailto:contact@ease.travel">contact@ease.travel</a></div></div></div></div></div></div></div></div>
        </div>
    );
};

export default Payment;