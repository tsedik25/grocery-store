import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const baseUrl = "https://uat.ordering-boafresh.ekbana.net/";
    const auth = "api/v4/auth";
    const clientId = 2;
    const clientSecret = "ZkPYPKRiUsEzVke7Q5sq21DrVvYmNK5w5bZKGzQo";
    const grantType = "password";

    const fetchLogin = async () => {
        if (validate()) {
            let response = await fetch(baseUrl + auth + "/login", {
                method: "POST",
                headers: {
                    "Warehouse-Id": 1,
                    "Api-key":
                        "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    client_id: clientId,
                    client_secret: clientSecret,
                    grant_type: grantType,
                    username: username,
                    password: password,
                }),
            });
            let data = await response.json();
            console.log(response);
            if (response.status == 200) {
                localStorage.setItem("access-token", data.access_token);
                window.location.href = "/";
            }
        }
    };

    const validate = () => {
        if (username === "") {
            alert("Username cannot be left empty!");
            return false;
        } else if (password === "") {
            alert("Password cannot be left empty!");
            return false;
        } else {
            return true;
        }
    };

    return (
        <div className="form">
            <h2>Login to your account</h2>
            <Form>
                <Form.Control
                    type="text"
                    name="Username"
                    placeholder="Username"
                    required=" "
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                    type="button"
                    value="Login"
                    onClick={fetchLogin}
                />
            </Form>
        </div>
    );
};

export default LoginForm;
