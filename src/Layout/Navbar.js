
const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper col s12">
                <a href="#!" className="brand-logo"><i className="material-icons">cloud</i>Logo</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="collapsible.html"><i className="material-icons">settings</i></a></li>
                    <li><a href="mobile.html"><i className="material-icons">login</i></a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
