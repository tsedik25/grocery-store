import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";

const UpdateForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const baseUrl = "https://uat.ordering-boafresh.ekbana.net/";
    const access_token = localStorage.getItem("access-token");

    const fetchUpdateForm = () => {
        if (validate()) {
            fetch(baseUrl + "api/v4/profile", {
                method: "PATCH",
                headers: {
                    Authorization: "Bearer " + access_token,
                    "Api-key":
                        "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
                },
                body: JSON.stringify({
                    "first-name": firstName,
                    "last-name": lastName,
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
        } else {
            return true;
        }
    };

    return (
        <Col md={6}>
            <div className="w3_login">
                <h3>Update your Profile</h3>
                <div className="w3_login_module">
                    <div className="module form-module">
                        <div className="toggle">
                            <i></i>
                        </div>
                        <div className="form">
                            <Form>
                                <Form.Control
                                    type="text"
                                    name="FirstName"
                                    placeholder="First Name"
                                    required=" "
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                />
                                <Form.Control
                                    type="text"
                                    name="LastName"
                                    placeholder="Last Name"
                                    required=" "
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                />

                                <Form.Control
                                    type="button"
                                    value="Update"
                                    onClick={fetchUpdateForm}
                                />
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default UpdateForm;
