import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginContainer = () => {
    return (
        <div className="w3l_banner_nav_right">
            <div className="w3_login">
                <h3>Sign In & Sign Up</h3>
                <div className="w3_login_module">
                    <div className="module form-module">
                        <div className="toggle">
                            <i className="fa fa-times fa-pencil"></i>
                            <div className="tooltip">Click Me</div>
                        </div>
                        <div className="form">
                            <h2>Login to your account</h2>
                            <Form action="#" method="post">
                                <Form.Control
                                    type="text"
                                    name="Username"
                                    placeholder="Username"
                                    required=" "
                                />
                                <Form.Control
                                    type="password"
                                    name="Password"
                                    placeholder="Password"
                                    required=" "
                                />
                                <Form.Control type="submit" value="Login" />
                            </Form>
                        </div>
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
