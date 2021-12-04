import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState("");

    const baseUrl = "https://uat.ordering-boafresh.ekbana.net/";
    const auth = "api/v4/auth";

    const fetchForgotPassword = async () => {
        let response = await fetch(baseUrl + auth + "/forgot-password", {
            method: "POST",
            headers: {
                "Warehouse-Id": 1,
                "Api-key":
                    "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
            }),
        });
        let data = await response.json();
        console.log(response);
        console.log(data);
    };
    return (
        <div className="w3l_banner_nav_right">
            <div className="w3_login">
                <h3>Forgot Password?</h3>
                <div className="w3_login_module">
                    <div className="module form-module">
                        <div className="toggle">
                            <i></i>
                            
                        </div>
                        <div className="form">
                            <h2>Reset your password</h2>
                            <Form>
                                <Form.Control
                                    type="text"
                                    name="Email"
                                    placeholder="Email"
                                    required=" "
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Form.Control
                                    type="button"
                                    value="Send Link"
                                    onClick={fetchForgotPassword}
                                />
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordForm;
