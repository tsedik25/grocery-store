import React from 'react';
import { Image, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image24 from '../../images/24.jpg';
import image29 from '../../images/29.jpg';
import image30 from '../../images/30.jpg';
import image64 from '../../images/64.png';
import image65 from '../../images/65.png';
import image66 from '../../images/66.png';
import image67 from '../../images/67.png';
import image68 from '../../images/68.png';
import image69 from '../../images/69.png';
import image70 from '../../images/70.png';
import image71 from '../../images/71.png';
import image72 from '../../images/72.png';
import image73 from '../../images/73.png';
import image74 from '../../images/74.png';
import image75 from '../../images/75.png';
import tag from '../../images/tag.png';
import offer from '../../images/offer.png';


const FrozenFoods = () => {
    return (
        <div className="w3l_banner_nav_right">
			<div className="w3l_banner_nav_right_banner10">
				<h3>Best Deals For New Products<span className="blink_me"></span></h3>
			</div>
			<div className="w3l_banner_nav_right_banner3_btm">
				<Row><Col md={4} className="w3l_banner_nav_right_banner3_btml">
					<div className="view view-tenth">
						<Image fluid  src={image24} alt=" " className="img-responsive"/>
						<div className="mask">
							<h4>Grocery Store</h4>
							<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
						</div>
					</div>
					<h4>Frozen Meat</h4>
					<ol>
						<li>sunt in culpa qui officia</li>
						<li>commodo consequat</li>
						<li>sed do eiusmod tempor incididunt</li>
					</ol>
				</Col>
				<Col md={4} className="w3l_banner_nav_right_banner3_btml">
					<div className="view view-tenth">
						<Image fluid  src={image29} alt=" " className="img-responsive" />
						<div className="mask">
							<h4>Grocery Store</h4>
							<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
						</div>
					</div>
					<h4>Frozen Chocolate Chips</h4>
					<ol>
						<li>enim ipsam voluptatem officia</li>
						<li>tempora incidunt ut labore et</li>
						<li>vel eum iure reprehenderit</li>
					</ol>
				</Col>
				<Col md={4} className="w3l_banner_nav_right_banner3_btml">
					<div className="view view-tenth">
						<Image fluid  src={image30} alt=" " className="img-responsive" />
						<div className="mask">
							<h4>Grocery Store</h4>
							<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
						</div>
					</div>
					<h4>Frozen Soybean</h4>
					<ol>
						<li>dolorem eum fugiat voluptas</li>
						<li>ut aliquid ex ea commodi</li>
						<li>magnam aliquam quaerat</li>
					</ol>
				</Col>
				</Row><div className="clearfix"> </div>
			</div>
			<div className="w3ls_w3l_banner_nav_right_grid w3ls_w3l_banner_nav_right_grid_veg">
				<h3 className="w3l_fruit">Frozen Food</h3>
				<div className="w3ls_w3l_banner_nav_right_grid1 w3ls_w3l_banner_nav_right_grid1_veg">
					<Row><Col md={3} className="w3ls_w3l_banner_left w3ls_w3l_banner_left_asdfdfd">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="tag"><Image fluid  src={tag} alt=" " className="img-responsive"/></div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><Image fluid  src={image64} alt=" " className="img-responsive" /></Link>
											<p>pepper salami (250 gm)</p>
											<h4>$10.00 <span>$12.00</span></h4>
										</div>
										<div className="snipcart-details">
											<Form action="#" method="post">
												<fieldset>
													<Form.Control type="hidden" name="cmd" value="_cart" />
													<Form.Control type="hidden" name="add" value="1" />
													<Form.Control type="hidden" name="business" value=" " />
													<Form.Control type="hidden" name="item_name" value="pepper salami" />
													<Form.Control type="hidden" name="amount" value="10.00" />
													<Form.Control type="hidden" name="discount_amount" value="1.00" />
													<Form.Control type="hidden" name="currency_code" value="USD" />
													<Form.Control type="hidden" name="return" value=" " />
													<Form.Control type="hidden" name="cancel_return" value=" " />
													<Form.Control type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</Form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</Col>
					<Col md={3} className="w3ls_w3l_banner_left">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<Image fluid  src={offer} alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><Image fluid  src={image65} alt=" " className="img-responsive" /></Link>
											<p>sumeru green pees (500 gm)</p>
											<h4>$9.00 <span>$11.00</span></h4>
										</div>
										<div className="snipcart-details">
											<Form action="#" method="post">
												<fieldset>
													<Form.Control type="hidden" name="cmd" value="_cart" />
													<Form.Control type="hidden" name="add" value="1" />
													<Form.Control type="hidden" name="business" value=" " />
													<Form.Control type="hidden" name="item_name" value="sumeru green pees" />
													<Form.Control type="hidden" name="amount" value="9.00" />
													<Form.Control type="hidden" name="discount_amount" value="1.00" />
													<Form.Control type="hidden" name="currency_code" value="USD" />
													<Form.Control type="hidden" name="return" value=" " />
													<Form.Control type="hidden" name="cancel_return" value=" " />
													<Form.Control type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</Form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</Col>
					<Col md={3} className="w3ls_w3l_banner_left w3ls_w3l_banner_left_asd">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<Image fluid  src={offer} alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><Image fluid  src={image66} alt=" " className="img-responsive" /></Link>
											<p>tikka chicken (300 gm)</p>
											<h4>$6.00 <span>$8.00</span></h4>
										</div>
										<div className="snipcart-details">
											<Form action="#" method="post">
												<fieldset>
													<Form.Control type="hidden" name="cmd" value="_cart" />
													<Form.Control type="hidden" name="add" value="1" />
													<Form.Control type="hidden" name="business" value=" " />
													<Form.Control type="hidden" name="item_name" value="tikka chicken" />
													<Form.Control type="hidden" name="amount" value="6.00" />
													<Form.Control type="hidden" name="discount_amount" value="1.00" />
													<Form.Control type="hidden" name="currency_code" value="USD" />
													<Form.Control type="hidden" name="return" value=" " />
													<Form.Control type="hidden" name="cancel_return" value=" " />
													<Form.Control type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</Form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</Col>
					<Col md={3} className="w3ls_w3l_banner_left">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<Image fluid  src={offer} alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><Image fluid  src={image67} alt=" " className="img-responsive" /></Link>
											<p>mixed vegetables (500 gm)</p>
											<h4>$6.00 <span>$7.00</span></h4>
										</div>
										<div className="snipcart-details">
											<Form action="#" method="post">
												<fieldset>
													<Form.Control type="hidden" name="cmd" value="_cart" />
													<Form.Control type="hidden" name="add" value="1" />
													<Form.Control type="hidden" name="business" value=" " />
													<Form.Control type="hidden" name="item_name" value="mixed vegetables" />
													<Form.Control type="hidden" name="amount" value="6.00" />
													<Form.Control type="hidden" name="discount_amount" value="1.00" />
													<Form.Control type="hidden" name="currency_code" value="USD" />
													<Form.Control type="hidden" name="return" value=" " />
													<Form.Control type="hidden" name="cancel_return" value=" " />
													<Form.Control type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</Form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</Col>
					</Row><div className="clearfix"> </div>
				</div>
				<div className="w3ls_w3l_banner_nav_right_grid1 w3ls_w3l_banner_nav_right_grid1_veg">
					<Row><Col md={3} className="w3ls_w3l_banner_left w3ls_w3l_banner_left_asdfdfd">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<Image fluid  src={offer} alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><Image fluid  src={image68} alt=" " className="img-responsive" /></Link>
											<p>mango pulp (800 gm)</p>
											<h4>$9.00 <span>$11.00</span></h4>
										</div>
										<div className="snipcart-details">
											<Form action="#" method="post">
												<fieldset>
													<Form.Control type="hidden" name="cmd" value="_cart" />
													<Form.Control type="hidden" name="add" value="1" />
													<Form.Control type="hidden" name="business" value=" " />
													<Form.Control type="hidden" name="item_name" value="mango pulp" />
													<Form.Control type="hidden" name="amount" value="9.00" />
													<Form.Control type="hidden" name="discount_amount" value="1.00" />
													<Form.Control type="hidden" name="currency_code" value="USD" />
													<Form.Control type="hidden" name="return" value=" " />
													<Form.Control type="hidden" name="cancel_return" value=" " />
													<Form.Control type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</Form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</Col>
					<Col md={3} className="w3ls_w3l_banner_left">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<Image fluid  src={offer} alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><Image fluid  src={image69} alt=" " className="img-responsive" /></Link>
											<p>kesar mango pulp (800 gm)</p>
											<h4>$5.00 <span>$8.00</span></h4>
										</div>
										<div className="snipcart-details">
											<Form action="#" method="post">
												<fieldset>
													<Form.Control type="hidden" name="cmd" value="_cart" />
													<Form.Control type="hidden" name="add" value="1" />
													<Form.Control type="hidden" name="business" value=" " />
													<Form.Control type="hidden" name="item_name" value="kesar mango pulp" />
													<Form.Control type="hidden" name="amount" value="5.00" />
													<Form.Control type="hidden" name="discount_amount" value="1.00" />
													<Form.Control type="hidden" name="currency_code" value="USD" />
													<Form.Control type="hidden" name="return" value=" " />
													<Form.Control type="hidden" name="cancel_return" value=" " />
													<Form.Control type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</Form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</Col>
					<Col md={3} className="w3ls_w3l_banner_left w3ls_w3l_banner_left_asd">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="tag"><Image fluid  src={tag} alt=" " className="img-responsive" /></div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><Image fluid  src={image70} alt=" " className="img-responsive" /></Link>
											<p>frozen sweet corn (250 gm)</p>
											<h4>$6.00 <span>$8.00</span></h4>
										</div>
										<div className="snipcart-details">
											<Form action="#" method="post">
												<fieldset>
													<Form.Control type="hidden" name="cmd" value="_cart" />
													<Form.Control type="hidden" name="add" value="1" />
													<Form.Control type="hidden" name="business" value=" " />
													<Form.Control type="hidden" name="item_name" value="frozen sweet corn" />
													<Form.Control type="hidden" name="amount" value="6.00" />
													<Form.Control type="hidden" name="discount_amount" value="1.00" />
													<Form.Control type="hidden" name="currency_code" value="USD" />
													<Form.Control type="hidden" name="return" value=" " />
													<Form.Control type="hidden" name="cancel_return" value=" " />
													<Form.Control type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</Form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</Col>
					<Col md={3} className="w3ls_w3l_banner_left">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<Image fluid  src={offer} alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><Image fluid  src={image71} alt=" " className="img-responsive" /></Link>
											<p>chicken nuggets (1 kg)</p>
											<h4>$4.00 <span>$6.00</span></h4>
										</div>
										<div className="snipcart-details">
											<Form action="#" method="post">
												<fieldset>
													<Form.Control type="hidden" name="cmd" value="_cart" />
													<Form.Control type="hidden" name="add" value="1" />
													<Form.Control type="hidden" name="business" value=" " />
													<Form.Control type="hidden" name="item_name" value="chicken nuggets" />
													<Form.Control type="hidden" name="amount" value="4.00" />
													<Form.Control type="hidden" name="discount_amount" value="1.00" />
													<Form.Control type="hidden" name="currency_code" value="USD" />
													<Form.Control type="hidden" name="return" value=" " />
													<Form.Control type="hidden" name="cancel_return" value=" " />
													<Form.Control type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</Form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</Col>
					</Row><div className="clearfix"> </div>
				</div>
				<div className="w3ls_w3l_banner_nav_right_grid1 w3ls_w3l_banner_nav_right_grid1_veg">
					<Row><Col md={3} className="w3ls_w3l_banner_left w3ls_w3l_banner_left_asdfdfd">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<Image fluid  src={offer} alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><Image fluid  src={image72} alt=" " className="img-responsive" /></Link>
											<p>garlic fingers (400 gm)</p>
											<h4>$5.00 <span>$7.00</span></h4>
										</div>
										<div className="snipcart-details">
											<Form action="#" method="post">
												<fieldset>
													<Form.Control type="hidden" name="cmd" value="_cart" />
													<Form.Control type="hidden" name="add" value="1" />
													<Form.Control type="hidden" name="business" value=" " />
													<Form.Control type="hidden" name="item_name" value="garlic fingers" />
													<Form.Control type="hidden" name="amount" value="5.00" />
													<Form.Control type="hidden" name="discount_amount" value="1.00" />
													<Form.Control type="hidden" name="currency_code" value="USD" />
													<Form.Control type="hidden" name="return" value=" " />
													<Form.Control type="hidden" name="cancel_return" value=" " />
													<Form.Control type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</Form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</Col>
					<Col md={3} className="w3ls_w3l_banner_left">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<Image fluid  src={offer} alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><Image fluid  src={image73} alt=" " className="img-responsive" /></Link>
											<p>catch fish finger (200 gm)</p>
											<h4>$8.00 <span>$10.00</span></h4>
										</div>
										<div className="snipcart-details">
											<Form action="#" method="post">
												<fieldset>
													<Form.Control type="hidden" name="cmd" value="_cart" />
													<Form.Control type="hidden" name="add" value="1" />
													<Form.Control type="hidden" name="business" value=" " />
													<Form.Control type="hidden" name="item_name" value="catch fish finger" />
													<Form.Control type="hidden" name="amount" value="8.00" />
													<Form.Control type="hidden" name="discount_amount" value="1.00" />
													<Form.Control type="hidden" name="currency_code" value="USD" />
													<Form.Control type="hidden" name="return" value=" " />
													<Form.Control type="hidden" name="cancel_return" value=" " />
													<Form.Control type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</Form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</Col>
					<Col md={3} className="w3ls_w3l_banner_left w3ls_w3l_banner_left_asd">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="tag"><Image fluid  src={tag} alt=" " className="img-responsive" /></div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><Image fluid  src={image74} alt=" " className="img-responsive" /></Link>
											<p>sumeru chicken (500 ml)</p>
											<h4>$11.00 <span>$15.00</span></h4>
										</div>
										<div className="snipcart-details">
											<Form action="#" method="post">
												<fieldset>
													<Form.Control type="hidden" name="cmd" value="_cart" />
													<Form.Control type="hidden" name="add" value="1" />
													<Form.Control type="hidden" name="business" value=" " />
													<Form.Control type="hidden" name="item_name" value="sumeru chicken" />
													<Form.Control type="hidden" name="amount" value="11.00" />
													<Form.Control type="hidden" name="discount_amount" value="1.00" />
													<Form.Control type="hidden" name="currency_code" value="USD" />
													<Form.Control type="hidden" name="return" value=" " />
													<Form.Control type="hidden" name="cancel_return" value=" " />
													<Form.Control type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</Form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</Col>
					<Col md={3} className="w3ls_w3l_banner_left">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<Image fluid  src={offer} alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><Image fluid  src={image75} alt=" " className="img-responsive" /></Link>
											<p>veggie fingers (400 gm)</p>
											<h4>$7.00 <span>$9.00</span></h4>
										</div>
										<div className="snipcart-details">
											<Form action="#" method="post">
												<fieldset>
													<Form.Control type="hidden" name="cmd" value="_cart" />
													<Form.Control type="hidden" name="add" value="1" />
													<Form.Control type="hidden" name="business" value=" " />
													<Form.Control type="hidden" name="item_name" value="veggie fingers" />
													<Form.Control type="hidden" name="amount" value="7.00" />
													<Form.Control type="hidden" name="discount_amount" value="1.00" />
													<Form.Control type="hidden" name="currency_code" value="USD" />
													<Form.Control type="hidden" name="return" value=" " />
													<Form.Control type="hidden" name="cancel_return" value=" " />
													<Form.Control type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</Form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</Col>
					</Row><div className="clearfix"> </div>
				</div>
			</div>
		</div>
    )
}

export default FrozenFoods
