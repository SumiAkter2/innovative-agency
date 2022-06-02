import React from 'react';

const Button = ({ children }) => {
    return (
        <div>
            <button class="btn btn-active bg-gradient-to-r from-violet-400  font-bold text-xl">{children}</button>
        </div>
    );
};

export default Button;