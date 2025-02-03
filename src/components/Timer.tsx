import React, { useState, useEffect } from 'react';
import './Timer.css';
import reginaToRotate from "../assets/regina-to-rotate.png";
import {Link, useLocation} from "react-router-dom";

interface TimerProps {
    initialTime: number;
    className?: string
}
const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};
const Timer: React.FC<TimerProps> = ({initialTime, className}) => {
    const [seconds, setSeconds] = useState<number>(initialTime);
    const [isRunning, setIsRunning] = useState<boolean>(true);

    useEffect(() => {
        let interval: number | ReturnType<typeof setTimeout>;

        if (isRunning) {
            interval = setInterval(() => {
                setSeconds((prevSeconds) => {
                    if(prevSeconds <= 2) {
                        window.location.href = "/finish"
                    }
                    return prevSeconds - 1
                });
            }, 1000);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isRunning]);

    const toggleRunning = () => {
        setIsRunning(!isRunning);
    }
    const resetTimer = () => {
        setIsRunning(false);
        setSeconds(initialTime);
    };

    const location = useLocation()
    const {msg} = location.state

    const flipAlert = () => {
        if (msg == 'Cozinhando ovo')
            return (<h3>Só esperar</h3>)

        if(seconds > (initialTime / 2))
            return (<h3>Primeiro lado</h3>)

        return (<h3>Segundo lado</h3>)
    }

    return (
        <div className={`timer ${className}`}>
            <img src={reginaToRotate} onClick={toggleRunning}
                 className={`regina-to-rotate mx-auto ${isRunning ? 'animate-rotation' : ''}`} alt='Regina'/>
            <h2>{formatTime(seconds)}</h2>
            {flipAlert()}
            <div className="timer-controls">
                <button onClick={resetTimer}>Resetar</button>
                <Link to="/">
                    <button>Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Timer;