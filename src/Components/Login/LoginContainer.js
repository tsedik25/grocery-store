import { faPencilAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Login from "../../Pages/Login";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const LoginContainer = () => {
    const loginForm = <LoginForm />;
    const loginIcon = <FontAwesomeIcon icon = {faPencilAlt}/>;

    const signupForm = <SignupForm />;
    const signupIcon = <FontAwesomeIcon icon = {faTimes}/>;

    const [icon, setIcon] = useState(loginIcon);

    const [login, setLogin] = useState(true);

    const [form, setForm] = useState(loginForm);

    const handleitem = () => {
        setLogin(!login);
        if (login){
            setForm(loginForm);
            setIcon(loginIcon);
        }
        else{
            setForm(signupForm);
            setIcon(signupIcon);
        }
    };

    // useEffect(() => {
    //     if (login){
    //         setForm(loginForm);
    //         setIcon(loginIcon);
    //     }
    //     else{
    //         setForm(signupForm);
    //         setIcon(signupIcon);
    //     }
    // })
    

    return (
        <div className="w3l_banner_nav_right">
            <div className="w3_login">
                <h3>Sign In & Sign Up</h3>
                <div className="w3_login_module">
                    <div className="module form-module">
                        <div className="toggle">
                            <i onClick={handleitem}>
                                {icon}
                            </i>
                            <div className="tooltip">Click Me</div>
                        </div>
                        {form} 
                        <div className="cta">
                            <Link to="/forgotPassword">Forgot your password?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginContainer;
