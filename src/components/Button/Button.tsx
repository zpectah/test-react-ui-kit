import React from 'react';

export interface ButtonProps {}

const Button: React.FC<ButtonProps> = ({ children }) => {
    return (
        <button type="button">{children}</button>
    );
};

export default Button;
