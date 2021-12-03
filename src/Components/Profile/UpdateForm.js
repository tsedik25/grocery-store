import React, {useState} from 'react';
import { Form } from 'react-bootstrap';

const UpdateForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const baseUrl = "https://uat.ordering-boafresh.ekbana.net/";
    const access_token = localStorage.getItem("access-token");

    const fetchUpdateForm = () => {
        fetch(baseUrl +"api/v4/profile", {
            method: "PATCH",
            headers: {
                "Authorization": "Bearer " + access_token,
                "Api-key": "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
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
    };

    return (
        <div className="form">
            <h2>Update your Profile</h2>
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
                    type="button"
                    value="Update"
                    onClick={fetchUpdateForm}
                />
            </Form>
        </div>
    );
}

export default UpdateForm
