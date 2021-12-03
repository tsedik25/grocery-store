import React, {useState} from 'react';
import { Row, Col, Image, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductsByCategories = (props) => {
    const [data, setData] = useState([]);
    const baseUrl = "https://uat.ordering-boafresh.ekbana.net/";
    const warehouseId = 1;
    const apiKey =
        "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545";
    const fetchProducts = () => {
        fetch(baseUrl + "/api/v4/product?categoryId="+ props.categoryId, {
            method: "GET",
            headers: {
                "Warehouse-Id": warehouseId,
                "Api-key": apiKey,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setData(data.data);
            });
    };

    fetchProducts();
    return (
        <div className="w3l_banner_nav_right">
            <div className="w3ls_w3l_banner_nav_right_grid">
            {data !== undefined ? (
                <>
                {/* <h3>{data[0].categoryTitle}</h3> */}
                <div className="w3ls_w3l_banner_nav_right_grid1">
                    <Row>
                        
                            {data.map((item) => {
                                return (
                                    <Col
                                        md={3}
                                        className="mb-3 w3ls_w3l_banner_left"
                                    >
                                        <div className="hover14 column">
                                            <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                                                <div className="agile_top_brand_left_grid1">
                                                    <figure>
                                                        <div className="snipcart-item block">
                                                            <div className="snipcart-thumb">
                                                                <Link to="single.html">
                                                                    <Image
                                                                        src={
                                                                            item
                                                                                .images[0]
                                                                                .imageName
                                                                        }
                                                                        alt=" "
                                                                        className="img-responsive productsImage"
                                                                    />
                                                                </Link>
                                                                <p>
                                                                    {item.title}
                                                                </p>
                                                                <h4>
                                                                    NRs.{" "}
                                                                    {
                                                                        item
                                                                            .unitPrice[0]
                                                                            .sellingPrice
                                                                    }
                                                                </h4>
                                                            </div>
                                                            <div className="snipcart-details">
                                                                <form
                                                                    action="#"
                                                                    method="post"
                                                                >
                                                                    <Form.Control
                                                                        type="submit"
                                                                        name="submit"
                                                                        value="Add to cart"
                                                                        className="button"
                                                                    />
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                );
                            })}
                        
                    </Row>
                    <div className="clearfix"> </div>
                </div>
                </>
                        ) : (
                    <div>LOADING...</div>
                )}
            </div>
        </div>
    );
}

export default ProductsByCategories
