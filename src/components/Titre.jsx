import React from 'react';

const Titre = ({ mainText, highlightText, className = "" }) => {
    return (
      <div>
        
          <div
            className={`flex justify-center lg:mt-10 mt-5 lg:py-10 lg:px-10 ${className}`}
          >
            <h1 className="lg:text-5xl text-2xl font-normal text-[#001F3F] text-center leading-6">
              {mainText}{" "}
              <span style={{ color: "rgb(242, 178, 3)" }}>{highlightText}</span>
            </h1>
          </div>
        </div>
     
    );
};

export default Titre;
