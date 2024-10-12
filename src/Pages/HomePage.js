import React from 'react';
import Timer from '../Forms/Timer';
import FormSettingsModel from '../Layout/FormSettingsModel';
import { useState, useEffect } from 'react';
import Navbar from '../Layout/Navbar';

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

    useEffect(() => {
        localStorage.setItem('pomodoro', pomodoro);
    }, [pomodoro]);

    useEffect(() => {
        localStorage.setItem('descansoCurto', descansoCurto);
    }, [descansoCurto]);

    useEffect(() => {
        localStorage.setItem('descansoLongo', descansoLongo);
    }, [descansoLongo]);

    useEffect(() => {
        localStorage.setItem('intervaloDescansoLongo', intervaloDescansoLongo);
    }, [intervaloDescansoLongo]);

    return (
        <div className="row">
            <Timer pomodoro={pomodoro} descansoCurto={descansoCurto} descansoLongo={descansoLongo}/>
            <FormSettingsModel 
                pomodoro={pomodoro} 
                descansoCurto={descansoCurto} 
                descansoLongo={descansoLongo} 
                intervaloDescansoLongo={intervaloDescansoLongo} 
                setPomodoro={setPomodoro} 
                setDescansoCurto={setDescansoCurto} 
                setDescansoLongo={setDescansoLongo} 
                setIntervaloDescansoLongo={setIntervaloDescansoLongo}/>
        </div>
        
    );
}

export default HomePage;
