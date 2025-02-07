import React from 'react';

const Boutton = ({ text, onClick, className }) => {
    return (
        <div>
                <button 
            className={ className} 
            onClick={onClick}
        >
            {text}
            </button>
        </div>
    );
};

export default Boutton;