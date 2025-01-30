import { Children } from "react";
import { createContext,useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export const AuthProvider = ({children}) => {
    const[isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    const login = async(credentials)=>{
        const response = await fetch("https://beryl-ember-havarti.glitch.me/login",{
            method:"POST", 
            headers: { "Content-Type":"application/json"},
            body:JSON.stringify(credentials),
        });

        const data = await response.json();
        if(data.success){
            localStorage.setItem("authToken", data.token);
            setIsAuthenticated(true);
            navigate("/books");

        }else{
            alert("Invalid Credentials");
        }
    };
    const logout = () =>{
        localStorage.removeItem("authToken");
        setIsAuthenticated(false);
        navigate("/login");
    };

    return(
        <AuthContext.Provider value={{isAuthenticated,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
};

