import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

const CheckoutProducts = ({cartProduct}) => {
    const [quantity, setQuantity] = useState(cartProduct.quantity);
    const baseUrl = "https://uat.ordering-boafresh.ekbana.net/";
    const warehouseId = 1;
    const apiKey =
        "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545";
    const remove = async () => {
        let response = await fetch(baseUrl + "api/v4/cart", {
            method: "DELETE",
            headers: {
                "Warehouse-Id": warehouseId,
                "Authorization": "Bearer " + localStorage.getItem("access-token"),
                "Api-key": apiKey,
                "cartProductId": cartProduct.id,
            }
        })
        let data = response.json();
        if (response.status === 200){
            console.log(data);
        }
    }
    return (
        
            <tr className="rem1">
                <td className="invert">1</td>
                <td className="invert-image">
                    <Link to="single.html">
                        <Image
                            src={cartProduct.product.images[0].imageName}
                            alt=" "
                            className="img-responsive"
                        />
                    </Link>
                </td>
                <td className="invert">
                    <div className="quantity">
                        <div className="quantity-select">
                            <div className="entry value-minus" onClick= {() => quantity > 0 ? (setQuantity(quantity - 1)) : console.log("Can't reduce")}>&nbsp;</div>
                            <div className="entry value">
                                <span>{quantity}</span>
                            </div>
                            <div className="entry value-plus active" onClick= {() => setQuantity(quantity + 1)}>
                                &nbsp;
                            </div>
                        </div>
                    </div>
                </td>
                <td className="invert">{cartProduct.product.title}</td>
                <td className="invert">
                    {cartProduct.product.unitPrice[0].sellingPrice}
                </td>
                <td className="invert">{cartProduct.price}</td>
                <td className="invert">
                    <div className="rem" onClick= {remove}>
                        <div className="close1"> </div>
                    </div>
                </td>
            </tr>
        
    );
};

export default CheckoutProducts;
