import React from 'react';
import Header from "../components/Header.tsx";
import "./TimerScreen.css";
import Timer from "../components/Timer.tsx";
import ReginaFacts from "../components/ReginaFacts.tsx";
import { useLocation } from 'react-router-dom'

const TimerScreen: React.FC = () => {
    const location = useLocation()
    const {timer, msg} = location.state
    return (
        <div className="phone-screen">
            <Header title={msg} className={'loading'}/>
            <Timer initialTime={timer}/>
            <div style={{paddingTop: '1rem'}}>
                <ReginaFacts/>
            </div>
        </div>
    );
};

export default TimerScreen;