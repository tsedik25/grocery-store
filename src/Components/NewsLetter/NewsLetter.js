import React, {useState} from "react";
import { Form } from "react-bootstrap";

const NewsLetter = () => {
    const [email, setEmail] = useState("");
    return (
        <div className="newsletter">
            <div className="container">
                <div className="w3agile_newsletter_left">
                    <h3>sign up for our newsletter</h3>
                </div>
                <div className="w3agile_newsletter_right">
                    <Form action="#" method="post">
                        <Form.Control
                            type="email"
                            name="Email"
                            placeholder="Email"
                            value={email}
                            required=""
                            onChange= {(e)=> setEmail(e.target.value)}
                        />
                        <input type="submit" value="subscribe now" />
                    </Form>
                </div>
                <div className="clearfix"> </div>
            </div>
        </div>
    );
};

export default NewsLetter;
