import React from 'react';

const Titregrille = ({ title, subtitle, titleStyles, subtitleStyles }) => {
    return (
        <div>
             <p className={titleStyles}>
        {title}
      </p>
      <p className={subtitleStyles}>
        {subtitle}
      </p>
        </div>
    );
};

export default Titregrille;