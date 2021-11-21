import React from "react";
import {Form} from "react-bootstrap";

const SignupForm = () => {
    return (
        <div class="form">
            <h2>Create an account</h2>
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
                <Form.Control
                    type="email"
                    name="Email"
                    placeholder="Email Address"
                    required=" "
                />
                <Form.Control
                    type="text"
                    name="Phone"
                    placeholder="Phone Number"
                    required=" "
                />
                <Form.Control type="submit" value="Register" />
            </Form>
        </div>
    );
};

export default SignupForm;
