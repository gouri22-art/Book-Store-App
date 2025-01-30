import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

const Login = () => {

    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(credentials,navigate);
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
                <input type="password" placeholder="Password" onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
                <button type="submit">Login</button>
            </form>
        </div>

    );
}

export default Login;