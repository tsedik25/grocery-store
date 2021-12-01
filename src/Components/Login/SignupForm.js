import React, { useState } from "react";
import { Form } from "react-bootstrap";

const SignupForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [number, setNumber] = useState("");
    const baseUrl = "https://uat.ordering-boafresh.ekbana.net/";
    const auth = "api/v4/auth";

    const fetchSignup = () => {
        fetch(baseUrl + auth + "/signup", {
            method: "POST",
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password,
                mobile_number: number,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });
    };

    return (
        <div className="form">
            <h2>Create an account</h2>
            <Form>
                <Form.Control
                    type="text"
                    name="FirstName"
                    placeholder="First Name"
                    required=" "
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <Form.Control
                    type="text"
                    name="LastName"
                    placeholder="Last Name"
                    required=" "
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />

                <Form.Control
                    type="email"
                    name="Email"
                    placeholder="Email Address"
                    required=" "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Control
                    type="password"
                    name="Password"
                    placeholder="Password"
                    required=" "
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Control
                    type="text"
                    name="mobile"
                    placeholder="Mobile Number"
                    required=" "
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
                <Form.Control
                    type="button"
                    value="Register"
                    onClick={fetchSignup}
                />
            </Form>
        </div>
    );
};

export default SignupForm;
