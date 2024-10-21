import M from "materialize-css";
import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import FormSettingsModal from './FormSettingsModal';
import Styles from '../Css/Navbar.module.css';
import AtividadeForm from './AtividadeForm';


const Navbar = () => {
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
        localStorage.setItem('descansoCurto', descansoCurto);
        localStorage.setItem('descansoLongo', descansoLongo);
        localStorage.setItem('intervaloDescansoLongo', intervaloDescansoLongo);
    }, [pomodoro, descansoCurto, descansoLongo, intervaloDescansoLongo]);

    const [token, setToken] = useState(localStorage.getItem('token'))
    
    const logout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    useEffect(() => {
        const modals = document.querySelectorAll('.modal');
        M.Modal.init(modals, {});
    }, []);
    
    return (
        <nav className={Styles.navbar}>
            <div className={`nav-wrapper col s12`}>
                <Link className="brand-logo left" to="/home">Pomodoro</Link>
                <ul className="right">
                    <li>
                        <a data-target="atividadeForm"  className="modal-trigger material-icons"><i className="material-icons">add</i></a>
                    </li>
                    <li>
                        <a data-target="modal1"  className="modal-trigger material-icons"><i className="material-icons">settings</i></a>
                    </li>
                    <li>
                        {token ? 
                        <Link onClick={logout} to="/Home"><i className="material-icons">logout</i></Link>:
                        <Link to="/login"><i className="material-icons">login</i></Link> }
                    </li>
                </ul>
                <Outlet />
            </div>
            <AtividadeForm/>
            <FormSettingsModal 
                pomodoro={pomodoro} 
                descansoCurto={descansoCurto} 
                descansoLongo={descansoLongo} 
                intervaloDescansoLongo={intervaloDescansoLongo} 
                setPomodoro={setPomodoro} 
                setDescansoCurto={setDescansoCurto} 
                setDescansoLongo={setDescansoLongo} 
                setIntervaloDescansoLongo={setIntervaloDescansoLongo}/>
        </nav>
    );
}

export default Navbar;
