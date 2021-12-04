import React, { useState, useEffect } from "react";
import { Image, Row } from "react-bootstrap";
import ChangePassword from "../Components/Profile/ChangePassword";
import ProfileContainer from "../Components/Profile/ProfileContainer";
import UpdateForm from "../Components/Profile/UpdateForm";

const Profile = () => {
    const baseUrl = "https://uat.ordering-boafresh.ekbana.net/";
    const access_token = localStorage.getItem("access-token");
    const [profile, setProfile] = useState([]);

    const fetchProfile = async () => {
        let response = await fetch(baseUrl + "api/v4/profile/show", {
            headers: {
                Authorization: "Bearer " + access_token,
                "Api-key":
                    "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
            },
        });
        let data = await response.json();
        if (response.status === 200) {
            setProfile(data.data);
            console.log(profile);
        }
    };
    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <div>
            <ProfileContainer profile={profile} />
            <Row>
                <UpdateForm />
                <ChangePassword />
            </Row>
            <div className="clear-fix"></div>
        </div>
    );
};

export default Profile;
