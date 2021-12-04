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
        if (validate()) {
            fetch(baseUrl + auth + "/signup", {
                method: "POST",
                headers: {
                    "Warehouse-Id": "1",
                    "Api-key":
                        "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
                    "Content-Type": "application/json",
                },
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
        }
    };

    const validate = () => {
        if (firstName === "") {
            alert("First Name cannot be left empty!");
            return false;
        } else if (lastName === "") {
            alert("Last Name cannot be left empty!");
            return false;
        } else if (email === "") {
            alert("Email cannot be left empty!");
            return false;
        } else if (password === "") {
            alert("Password cannot be left empty!");
            return false;
        } else if (number === "") {
            alert("Mobile Number cannot be left empty!");
            return false;
        } else {
            return true;
        }
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
