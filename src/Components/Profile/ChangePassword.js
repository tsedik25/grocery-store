import React, { useEffect, useState } from "react";
import { Col, Form } from "react-bootstrap";

const ChangePassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const baseUrl = "https://uat.ordering-boafresh.ekbana.net/";
    const access_token = localStorage.getItem("access-token");

    const fetchChangePassword = () => {
        fetch(baseUrl + "api/v4/profile/change-password", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + access_token,
                "Api-key":
                    "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
            },
            body: JSON.stringify({
                "new-password": newPassword,
                "old-password": oldPassword,
                "confirm-password": confirmPassword,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });
    };

    return (
        <Col md = {6}>
            <div className="w3_login">
                <h3>Change your Password</h3>
                <div className="w3_login_module">
                    <div className="module form-module">
                        <div className="toggle">
                            <i></i>
                        </div>
                        <div className="form">
                            <Form>
                                <Form.Control
                                    type="text"
                                    name="OldPassword"
                                    placeholder="Old Password"
                                    required=" "
                                    value={oldPassword}
                                    onChange={(e) =>
                                        setOldPassword(e.target.value)
                                    }
                                />
                                <Form.Control
                                    type="text"
                                    name="NewPassword"
                                    placeholder="New Password"
                                    required=" "
                                    value={newPassword}
                                    onChange={(e) =>
                                        setNewPassword(e.target.value)
                                    }
                                />
                                <Form.Control
                                    type="text"
                                    name="ConfirmPassword"
                                    placeholder="Confirm Password"
                                    required=" "
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                />

                                <Form.Control
                                    type="button"
                                    value="Update"
                                    onClick={fetchChangePassword}
                                />
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default ChangePassword;
