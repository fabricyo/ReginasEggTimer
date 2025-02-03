import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import './Home.css'
import ovoCozido from "../assets/ovo-cozido.png";
import panqueca from "../assets/panqueca.png";
import ovoFrito from "../assets/ovo-frito.png";
const Home: React.FC = () => {
    return (
        <div className="phone-screen">
            <Header title={'O que iremos fazer hoje'} />
            <div className={'home-container grid grid-cols-4'}>
                <Button to="/timer" className={'col-span-2'} timer={(8*60)}
                        msg='Cozinhando ovo'>
                    <img src={ovoCozido} className="ovo-button" alt='ovo cozido' />
                    Ovo cozido
                </Button>
                <Button to="/timer" className={'col-span-2'} timer={(6*60)}
                        msg={'Panquecas!!!'}>
                    <img src={panqueca} className="panqueca-button" alt='panqueca' />
                    Panqueca
                </Button>
                <Button to="/timer" className={'col-span-2 col-start-2'} timer={(6*60)}
                        msg={'Fritando ovo!!!'}>
                    <img src={ovoFrito} className="frito-button" alt='ovo frito' />
                    Ovo frito
                </Button>
            </div>
        </div>
    );
};

export default Home;