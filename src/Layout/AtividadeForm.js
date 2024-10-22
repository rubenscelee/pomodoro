import React from 'react';
import M from "materialize-css";
import { useEffect, useState } from 'react';
import Styles from '../Css/AtividadeForm.module.css';

const AtividadeForm = () => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [qntPomodoros, setQntPomodoros] = useState(1);
    const [concluido, setConcluido] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token'))

    const submit = (e) => {
        debugger;
        e.preventDefault();
        
        let atividade = {};
        atividade.Titulo = titulo;
        atividade.Descricao = descricao;
        atividade.QntPomodoros = qntPomodoros;
        atividade.Concluido = concluido;

        fetch(`https://localhost:7265/api/Atividade/CriarAtividade`, {
            method:"POST", 
            headers: {'Content-Type': 'application/json', 'Cache-Control': 'no-cache', 'Authorization': `Bearer ${token}`}, 
            body: JSON.stringify(atividade)
        })
        .then(window.location.reload())
        .catch(e => console.log(e))
    };

    return (
        <div>
            <div id="atividadeForm" className={`${Styles.div_form} row modal hoverable z-depth-5 `}>
                <form class="col s12" onSubmit={submit}>
                    <div className="col s12">
                        <h6 className="center-align">Adicionar Atividade</h6>
                    </div>
                    <div className=" col s8">
                        <input placeholder="Título" onChange={(e) => setTitulo(e.target.value)} id="titulo" type="text"   />
                    </div>
                    <div className=" col s8">
                        <input placeholder="Pomodoros" onChange={(e) => setQntPomodoros(e.target.value)} id="qntPomodoros" type="number" className="validate" />
                    </div>
                    <div className=" col s8">
                        <textarea placeholder="Descrição" onChange={(e) => setDescricao(e.target.value)} id="descricao" type="text"  />
                    </div>
                    <div className=" col s12">
                        <label htmlFor="concluido">
                        <input type="checkbox" 
                        className="filled-in" 
                        checked={concluido} 
                        onChange={(e) => setConcluido(e.target.checked)} 
                        id="concluido" />
                        <span>Concluído?</span>
                        </label>
                    </div>
                    <div className="col s12 right-align">
                        <button type="submit" className={`modal-close btn ${Styles.button_salvar}`}>
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default AtividadeForm;
