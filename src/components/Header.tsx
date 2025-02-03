import React from 'react';
import './Header.css';
import headerImg from '../assets/img.png'

interface HeaderProps {
    title: string;
    className?: string;
}
const Header: React.FC<HeaderProps> = ({title, className}) => {
    return (
        <div className="header-card">
            <div className="header-wrapper">
                <h1 className={'text-4xl'}>Regina's Egg Kitchen</h1>
                <img src={headerImg} alt="Logo do App" className="header-logo"/>
            </div>
            <p className={`header-span ${className}`}>{title}</p>
        </div>
    );
};

export default Header;