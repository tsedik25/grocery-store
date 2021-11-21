import React from "react";
import { Form } from "react-bootstrap";

const LoginForm = () => {
    return (
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
    );
};

export default LoginForm;
