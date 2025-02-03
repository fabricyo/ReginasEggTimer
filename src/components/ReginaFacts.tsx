import React, {useEffect, useState} from 'react';
import './ReginaFacts.css';

const facts = [
    'Ela está com fome', 'Ela está com muita fome',
    'Já alimentou ela nos últimos 3 minutos?'];
const images = ['img.png', 'img_1.png', 'img_2.png', 'img_3.png', 'img_4.png', 'img_5.png'];

const fact = facts[Math.floor(Math.random() * facts.length)];
const image =  'factsImages/'+images[Math.floor(Math.random() * images.length)];
const ReginaFacts: React.FC = () => {
    const [currentFact, setFact] = useState<string>(fact);
    const [currentImg, setImg] = useState<string>(image);

    useEffect(() => {
        const interval = setInterval(() => {
            setFact(facts[Math.floor(Math.random() * facts.length)])
            setImg( 'factsImages/'+images[Math.floor(Math.random() * images.length)]);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fact-card">
            <div className="fact-wrapper">
                <h1 className={'text-3xl elementToFadeInAndOut'}
                    style={{maxWidth: '70%'}}>{currentFact}</h1>
                <img src={currentImg} alt="Rainha" className={'fact-logo elementToFadeInAndOut'}/>
            </div>
        </div>
    );
};

export default ReginaFacts;