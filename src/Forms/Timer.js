import React, { useRef, useEffect, useState } from 'react';
import Input from '../FormComponents/Input';
import Button from '../FormComponents/Button';
import Label from '../FormComponents/Label';
import M from 'materialize-css';

/**
 * 
 * @param {number} pomodoro Tempo padrão do pomodoro
 * @param {number} descansoCurto Tempo de descanso curto
 * @param {number} descansoLongo Tempo de descanso longo
 */

const Timer = ({pomodoro, descansoCurto, descansoLongo}) => {
    const tabsRef = useRef(null);

    useEffect(() => {
        if (tabsRef.current) {
            M.Tabs.init(tabsRef.current, {});
        }
    }, []);

    const [minutos, setMinutos] = useState(pomodoro);
    const [segundos, setSegundos] = useState(60);
    const [timerIniciado, setTimerIniciado] = useState(false);
    const [timerIniciadoPrimeiraVez, setTimerIniciadoPrimeiraVez] = useState(false)
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        if (!timerIniciado) { 
            setMinutos(pomodoro); 
        }
    }, [pomodoro, descansoCurto, descansoLongo]);

    useEffect(() => {
        if (timerIniciado) {
            const id = setInterval(() => {
                setSegundos((prevSegundos) => {
                    if (prevSegundos === 0) {
                        if (minutos > 0) {
                            setMinutos((prevMinutos) => prevMinutos - 1);
                            return 59;
                        }
                        
                        if(minutos === 0){
                            clearInterval(id);
                            setTimerIniciado(false);
                            return 0;
                        }
                            
                    }
                    return prevSegundos - 1;
                });
            }, 1000);

            setIntervalId(id);

            return () => clearInterval(id);
        }
    }, [timerIniciado]);

    const iniciarPomodoro = () => {
        setTimerIniciado(true);

        if(minutos == pomodoro)
            setSegundos(0);

        if(!timerIniciadoPrimeiraVez)
            setTimerIniciadoPrimeiraVez(true);
    };

    const pararPomodoro = () => {
        setTimerIniciado(false);
        clearInterval(intervalId);
    };

    const iniciarDescansoCurto = () => {};
    const pararDescansoCurto = () => {};

    const iniciarDescansoLongo = () => {};
    const pararDescansoLongo = () => {};

    const submit = (e) => {
        e.preventDefault();
        if (timerIniciado) {
            pararPomodoro();
        } else {
            iniciarPomodoro();
        }
    };

    return (
        <div>
            <div className="col s6 m5 center-align">
                <div className="card blue-grey darken-1">
                    <ul ref={tabsRef} className="tabs tabs-fixed-width blue-grey darken-1">
                        <li className="tab col s4"><a href="#pomodoro">Pomodoro</a></li>
                        <li className="tab col s4"><a href="#descansoCurto">Descanso Curto</a></li>
                        <li className="tab col s4"><a href="#descansoLongo">Descanso Longo</a></li>
                    </ul>

                    <div id="pomodoro" className="card-content white-text">
                        <h1>
                            {minutos < 10 ? "0" + minutos : minutos}:
                            {segundos < 10 ? "0" + segundos : !timerIniciadoPrimeiraVez ? "00" : segundos}
                        </h1>
                        <div className="card-action">
                            {timerIniciado ? (
                                <Button text={"Pausar"} handleOnclick={pararPomodoro} />
                            ) : (
                                <Button handleOnclick={iniciarPomodoro} text={"Iniciar"} />
                            )}
                        </div>
                    </div>

                    <div id="descansoCurto" className="card-content white-text">
                        <h1>
                            {descansoCurto < 10 ? "0" + descansoCurto : descansoCurto}:
                            {segundos < 10 ? "0" + segundos : !timerIniciadoPrimeiraVez ? "00" : segundos}
                        </h1>
                        <div className="card-action">
                            {timerIniciado ? (
                                <Button text={"Pausar"} handleOnclick={pararDescansoCurto} />
                            ) : (
                                <Button handleOnclick={iniciarDescansoCurto} text={"Iniciar"} />
                            )}
                        </div>
                    </div>

                    <div id="descansoLongo" className="card-content white-text">
                        <h1>
                            {descansoLongo < 10 ? "0" + descansoLongo : descansoLongo}:
                            {segundos < 10 ? "0" + segundos : !timerIniciadoPrimeiraVez ? "00" : segundos}
                        </h1>
                        <div className="card-action">
                            {timerIniciado ? (
                                <Button text={"Pausar"} handleOnclick={pararDescansoLongo} />
                            ) : (
                                <Button handleOnclick={iniciarDescansoLongo} text={"Iniciar"} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
    </div>
    );
}

export default Timer;
