import React, { useState, useEffect } from 'react';
import M from 'materialize-css';
import Styles from '../Css/Atividade.module.css';

const Atividades = () => {
    const [items, setItems] = useState([]); // State to store items
    const [loading, setLoading] = useState(true); // Loading state to show a loader or message while data is being fetched
    const [error, setError] = useState(null); // State to handle errors

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
        <div>
            <ul className='collapsible popout'>
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
                        <div className="collapsible-body">
                            <p>Descrição: {item.descricao}</p> 
                            <p>Quantidade de Pomodoros: {item.qntPomodoros}</p>
                            <p>Data: {new Date(item.dataAtividade).toLocaleDateString()}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Atividades;
