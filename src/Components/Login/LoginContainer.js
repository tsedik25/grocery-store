import { faPencilAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState, useEffect} from "react";
import { Form } from "react-bootstrap";
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

    const [item, setItem] = useState(loginForm);
    const handleitem = () => {
        setLogin(!login);
    };

    useEffect(() => {
        if (login){
            setItem(loginForm);
            setIcon(loginIcon);
        }
        else{
            setItem(signupForm);
            setIcon(signupIcon);
        }
    })
    

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
                        {item}
                        <div className="cta">
                            <Link to="#">Forgot your password?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginContainer;
