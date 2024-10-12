import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { useNavigate  } from "react-router-dom";

const LoginPage = () => {
    const [user, setUser] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate(); 

    const submit = (e) => {
        e.preventDefault();

        if(!user || !senha)
            return;
        
        let usuario = {};
        usuario.email = user;
        usuario.senha = senha;

        fetch(`https://localhost:7265/api/Usuario/Login`, {
            method:"POST", 
            headers: {'Content-Type': 'application/json', 'Cache-Control': 'no-cache'}, 
            body: JSON.stringify(usuario)
        })
        .then((res) => res.json())
        .then((data) => {
            const token = data.accesstoken;
            console.log(data);
            localStorage.setItem('token', token)
            navigate("/home", { message: "Projeto criado com sucesso!" });
            window.location.reload();
        })
        .catch(e => console.log(e))
    }
   
    return (
        <div style={{ marginTop: "50px" }}>
            <div className="col s12 m6 l4">
                <div className="card">
                    <div className="card-content">
                        <h4 className="center-align" style={{ marginBottom: "30px" }}>Login</h4>
                        <form onSubmit={submit}>
                            <div className="input-field">
                                <i className="material-icons prefix">person</i>
                                <input required id="email" type="email" className="validate" onChange={(e) => setUser(e.target.value)} />
                                <label htmlFor="email">Usuário</label>
                            </div>
                            <div className="input-field">
                                <i className="material-icons prefix">lock</i>
                                <input required id="password" type="password" className="validate" onChange={(e) => setSenha(e.target.value)} />
                                <label htmlFor="password">Senha</label>
                            </div>
                            <div className="center-align" style={{ marginTop: "20px" }}>
                                <button className="btn-large " type="submit" style={{ width: "100%", backgroundColor: "#00796B" }}>
                                Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
