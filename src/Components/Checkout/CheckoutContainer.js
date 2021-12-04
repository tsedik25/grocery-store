import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import CheckoutProducts from "./CheckoutProducts";

const CheckoutContainer = () => {
    const [data, setData] = useState([]);

    const baseUrl = "https://uat.ordering-boafresh.ekbana.net/";
    const warehouseId = 1;
    const authorization = localStorage.getItem("access-token");
    const apiKey =
        "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545";
    const fetchCart = async () => {
        let response = await fetch(baseUrl + "/api/v4/cart", {
            method: "GET",
            headers: {
                Authorization: authorization,
                "Warehouse-Id": warehouseId,
                "Api-key": apiKey,
            },
        });
        let data = await response.json();
        if (response.status === 200) {
            setData(data.data);
            console.log(data.data);
        }
    };
    try {
        fetchCart();
    } catch (err) {
        console.log(err);
    }

    return data.cartProducts != undefined ? (
        <div className="w3l_banner_nav_right">
            <div className="privacy about">
                <h3>
                    Chec<span>kout</span>
                </h3>

                <div className="checkout-right">
                    <h4>
                        Your shopping cart contains: <span>{data.cartProducts.length} Products</span>
                    </h4>
                    <table className="timetable_sub">
                        <thead>
                            <tr>
                                <th>SL No.</th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Product Name</th>
                                <th>Unit Price</th>
                                <th>Price</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.cartProducts.map((cartProduct) => {
                                return (
                                    <CheckoutProducts
                                        cartProduct={cartProduct}
                                    />
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                <div className="checkout-left">
                    <div className="col-md-4 checkout-left-basket">
                        <h4>Continue to basket</h4>
                        <ul>
                            {data.cartProducts.map((cartProduct) => {
                                return (
                                    <li>
                                        {cartProduct.product.title} <i>-</i> <span>Nrs. {cartProduct.price}</span>
                                    </li>
                                );
                            })}
                            <li>
                                Subtotal <i>-</i>{" "}
                                <span>Nrs. {data.subTotal}</span>
                            </li>
                            <li>
                                Delivery Charge <i>-</i>{" "}
                                <span>Nrs. {data.deliveryCharge}</span>
                            </li>
                            <li>
                                Total <i>-</i> <span>NRs. {data.total}</span>
                            </li>
                        </ul>
                    </div>

                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>
    ) : (
        <div>LOADING...</div>
    );
};

export default CheckoutContainer;
