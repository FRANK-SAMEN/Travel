import React from 'react';

const Button = ({ text, onClick, className }) => {
    return (
        <div>
                <button 
            className={`bg-[#ffffff] text-[#001F3F] text-center px-7 py-6 w-auto h-auto border-solid border-2 rounded-lg border border-[#001F3F] ${className}`} 
            onClick={onClick}
        >
            {text}
            </button>
        </div>
    );
};

export default Button;