import React from 'react';
import Header from "../components/Header.tsx";
import img1 from '../assets/img_1.png'
import './FinishScreen.css'
import {Link} from "react-router-dom";

const FinishScreen: React.FC = () => {
    return (
        <div className="phone-screen">
            <Header title={'Acabou!'}/>
            <img src={img1} alt="Rainha" className={'finish-logo'}/>
            <h1 className={'text-xl finish-msg'}>Me sirva antes de você se servir!</h1>
            <Link to="/" className={'finish-button'}>
                Home
            </Link>
        </div>
    );
};

export default FinishScreen;