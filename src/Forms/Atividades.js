import React, { useState, useEffect } from 'react';
import M from 'materialize-css';
import Styles from '../Css/Atividade.module.css';

const Atividades = () => {
    const [items, setItems] = useState([]); // State to store items
    const [loading, setLoading] = useState(true); // Loading state to show a loader or message while data is being fetched
    const [error, setError] = useState(null); // State to handle errors
    const [descricao, setDescricao] = useState('');
    const [titulo, setTitulo] = useState('');
    const [qntPomodoros, setQntPomodoros] = useState();

    useEffect(() => {
        const fetchData = async () => {
            debugger;
            const token = localStorage.getItem('token'); // Get the token from localStorage or other source
            try {
                const response = await fetch('https://localhost:7265/api/Atividade/ObterAtividades', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` // Add the Authorization header with the Bearer token
                    }
                });

                if (!response.ok || response.status != 200) {
                    throw new Error('Failed to fetch data');
                }
                console.log(response);
                const data = await response.json();
                setItems(data); // Set the items with the fetched data
            } catch (error) {
                setError(error.message); // Handle error
            } finally {
                setLoading(false); // Set loading to false after data is fetched
            }
        };

        fetchData();
    }, []); 

    useEffect(() => {
        const collapsible = document.querySelectorAll('.collapsible');
        M.Collapsible.init(collapsible, {});
    }, [items]);

    const salvarAlteracao = () => {
        console.log("teset")
    };

    const handleCheckboxChange = (id) => {
        
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, concluido: !item.concluido } : item
            )
        );
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className={`${Styles.div_container}  center-align col s6`}>
            <ul className='collapsible popout col s12'>
                {items.map((item) => (
                    <li key={item.id}>
                        <div className={`${Styles.div_header} collapsible-header `}>
                            {item.titulo}
                            <label className={Styles.label_concluido} htmlFor={`concluido-${item.id}`}>
                                <input 
                                    type="checkbox" 
                                    className="filled-in" 
                                    id={`concluido-${item.id}`} 
                                    checked={item.concluido} // Checkbox state for each item
                                    onChange={() => handleCheckboxChange(item.id)} // Handle individual checkbox change
                                />
                                <span>Concluído?</span>
                            </label>
                        </div>
                        <div className={`${Styles.div_body} collapsible-body left-align`}>
                            <label htmlFor="titulo">Título</label>
                            <input
                                    id="titulo"
                                    type="text"
                                    value={item.titulo}
                                    onChange={(e) => setTitulo(e.target.value)} // Track description changes
                            />
                            <label htmlFor="descricao">Descrição</label>
                            <input
                                    id="descricao"
                                    type="text"
                                    value={item.descricao}
                                    onChange={(e) => setDescricao(e.target.value)} // Track description changes
                            />
                            <label htmlFor="qntPomodoros">Pomodoro</label>
                            <input 
                                min={0} 
                                value={qntPomodoros} // Set the current value of qntPomodoros
                                onChange={(e) => setQntPomodoros(e.target.value)} // Update state when the value changes
                                id="qntPomodoros" 
                                type="number" 
                            />
                            <label htmlFor="data">Data</label>
                            <input 
                                id='data'
                                type="date"
                                value={new Date(item.dataAtividade).toISOString().split('T')[0]}
                            />
                            <div className="left-right">
                                <button onClick={salvarAlteracao} type="button" className={`btn`}>
                                    Salvar
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Atividades;
