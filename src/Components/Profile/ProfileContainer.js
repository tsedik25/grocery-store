import React from "react";
import Profile from "../../Pages/Profile";
import { Image, Card } from "react-bootstrap";

const ProfileContainer = (props) => {
    return (
        <div>
            <Card style={{ width: "18rem", margin: "auto" }}>
                <Card.Img variant="top" src={props.profile.image} />
                <Card.Body>
                    <Card.Title>{props.profile.firstName} {props.profile.lastName}</Card.Title>
                    <Card.Text>
                        Email: {props.profile.email}<br/>
                        Phone Number: {props.profile.mobileNumber}<br/>
                        Created At: {props.profile.createdAt}<br/>
                        Updated At: {props.profile.updatedAt}

                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProfileContainer;
