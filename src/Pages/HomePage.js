import React from 'react';
import Timer from '../Forms/Timer';
import { useState, useEffect } from 'react';
import Atividades from '../Forms/Atividades';

const HomePage = () => {
    const [pomodoro, setPomodoro] = useState(() => {
        return localStorage.getItem('pomodoro') ? Number(localStorage.getItem('pomodoro')) : 25;
    });
    const [descansoCurto, setDescansoCurto] = useState(() => {
        return localStorage.getItem('descansoCurto') ? Number(localStorage.getItem('descansoCurto')) : 5;
    });
    const [descansoLongo, setDescansoLongo] = useState(() => {
        return localStorage.getItem('descansoLongo') ? Number(localStorage.getItem('descansoLongo')) : 10;
    });
    const [intervaloDescansoLongo, setIntervaloDescansoLongo] = useState(() => {
        return localStorage.getItem('intervaloDescansoLongo') ? Number(localStorage.getItem('intervaloDescansoLongo')) : 4;
    });
    
    return (
        <div className="row">
            <Timer pomodoro={pomodoro} descansoCurto={descansoCurto} descansoLongo={descansoLongo}/>
            <Atividades/>
        </div>
        
    );
}

export default HomePage;
