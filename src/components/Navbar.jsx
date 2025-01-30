import { Link } from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "../context/AuthContext";
import "../styles/styles.css";


const Navbar = () =>{

    const{isAuthenticated, logout} = useContext(AuthContext);
    return(

        <nav className="navbar">
            <Link to="/">Home</Link>
            {isAuthenticated && <Link to="/books" >Books</Link>}
            {!isAuthenticated ? <Link to="/login" >Login</Link>: <button onClick={logout}>Logout</button>}

        </nav>
    );
};

export default Navbar;