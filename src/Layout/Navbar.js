import M from "materialize-css";
import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {isLoggedIn} from '../utils/auth';

const Navbar = () => {

    const [token, setToken] = useState(localStorage.getItem('token'))
    
    useEffect(() => {
        const modalElems = document.querySelectorAll('.modal');
        M.Modal.init(modalElems, {});

      }, []);
    
    const logout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }
      
    return (
        <nav>
            <div className="nav-wrapper col s12">
                <Link className="brand-logo" to="/home"><i className="material-icons">cloud</i></Link>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <a data-target="!#"  className="modal-trigger material-icons"><i className="material-icons">settings</i></a>
                    </li>
                    <li>
                        {token ? 
                        <Link onClick={logout} to="/Home"><i className="material-icons">logout</i></Link>:
                        <Link to="/login"><i className="material-icons">login</i></Link> }
                    </li>
                </ul>
                <Outlet />
            </div>
        </nav>
    );
}

export default Navbar;
