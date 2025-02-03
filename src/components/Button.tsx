import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css'
interface ButtonProps {
    to: string;
    children: React.ReactNode;
    className: string;
    timer?: number,
    msg?: string
}

const Button: React.FC<ButtonProps> = ({ to, children ,
                                           className, timer = 10, msg = ''}) => {
    return (
        <Link to={to} className={`button ${className}`} state={{ timer: timer, msg: msg }}>
            {children}
        </Link>
    );
};

export default Button;