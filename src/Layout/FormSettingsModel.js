import React from 'react';
import Styles from './FormSettingsModel.module.css';

const FormSettingsModel = ({pomodoro, descansoCurto, descansoLongo, intervaloDescansoLongo, setPomodoro, setDescansoCurto, setDescansoLongo, setIntervaloDescansoLongo}) => {
    return (
        <div>
            <div id="modal1" className={`${Styles.div_form} col s4 modal hoverable z-depth-5`}>
                <form>
                    <div className="col s12">
                        <h6 className="center-align">Configurações</h6>
                    </div>
                    <div className="col s4">
                        <label htmlFor ="pomodoro">Pomodoro</label>
                        <input min={0} value={pomodoro} onChange={(e) => setPomodoro(e.target.value)} id="pomodoro" type="number" className="validate" />
                    </div>
                    <div className="col s4">
                        <label htmlFor ="descanso_curto">Descanso Curto</label>
                        <input min={0} value={descansoCurto} onChange={(e) => setDescansoCurto(e.target.value)} id="descanso_curto" type="number" className="validate" />
                    </div>
                    <div className="col s4">
                        <label htmlFor ="descanso_longo">Descanso Longo</label>
                        <input min={0} value={descansoLongo} onChange={(e) => setDescansoLongo(e.target.value)} id="descanso_longo" type="number" className="validate" />
                    </div>
                    <div className="col s4">
                        <label htmlFor ="intervalo_descanso_longo">Intervalo de Descanso Longo</label>
                        <input min={0} value={intervaloDescansoLongo} onChange={(e) => setIntervaloDescansoLongo(e.target.value)} id="intervalo_descanso_longo" type="number" className="validate" />
                    </div>
                </form>
                <div className="col s12">
                    <a href="#!" class="modal-close btn green">Ok</a>
                </div>
            </div>
        </div>
    );
}

export default FormSettingsModel;
