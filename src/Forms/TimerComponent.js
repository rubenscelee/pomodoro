import React, { useState } from 'react';
import Input from '../FormComponents/Input';
import Button from '../FormComponents/Button';
import Label from '../FormComponents/Label';

const PrincipalForm = () => {

    const [time, setTime] = useState(25);
    const [timerIniciado, setTimerIniciado] = useState(false);
    const [timerPausado, setTimerPausado] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    const submit = (e) => {
        debugger;
        e.preventDefault();

        pausarTimer();
        iniciarTimer();
    }

    function iniciarTimer(){
        setTimerIniciado(true);

        if(timerPausado){
            setTimerIniciado(true);
            setTimerPausado(false);
        }

        if (intervalId) {
            clearInterval(intervalId);
        }

        let id = setInterval(() => {
            setTime(prevTime => {
                if(timerPausado){
                    clearInterval(intervalId);
                    setTimerIniciado(false);
                    return prevTime;
                }

                if (prevTime === 0) {
                    setTimerPausado(false)
                    setTimerIniciado(false)
                    clearInterval(id);
                    return 25;
                }

                return prevTime - 1;
            });
            
        }, 1000);

        setIntervalId(id);
    }

    function pausarTimer(){
        setTimerPausado(true);
        setTimerIniciado(false);
    }

    return (
        <form onSubmit={submit}>
            <Label text={time}/>
            {timerIniciado ? <Button handleChange={pausarTimer} text={"Pausar"}/> : <Button handleChange={iniciarTimer} text={"Iniciar"}/>}
        </form>
    );
}

export default PrincipalForm;
