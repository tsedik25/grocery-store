import React from 'react';
import offer from '../../images/offer.png';
import tag from '../../images/tag.png';
import image13 from '../../images/13.png';
import image14 from '../../images/14.png';
import image15 from '../../images/15.png';
import image16 from '../../images/16.png';
import image49 from '../../images/49.png';
import image50 from '../../images/50.png';
import image51 from '../../images/51.png';
import image52 from '../../images/52.png';
import image53 from '../../images/53.png';
import image54 from '../../images/54.png';
import image55 from '../../images/55.png';
import image56 from '../../images/56.png';
import { Row, Col, Image, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Beverages = () => {
    return (
        <div className="w3l_banner_nav_right">
			<div className="w3l_banner_nav_right_banner7">
				<h3>Best Deals For New Products<span className="blink_me"></span></h3>
			</div>
			<div className="w3ls_w3l_banner_nav_right_grid w3ls_w3l_banner_nav_right_grid_sub">
				<h3>Beverages</h3>
				<div className="w3ls_w3l_banner_nav_right_grid1">
					<h6>soft drinks</h6>
					<Row><Col md={3} className="w3ls_w3l_banner_left">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<Image fluid src={offer} alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><Image fluid src={image49} alt=" " className="img-responsive" /></Link>
											<p>orange soft drink (250 ml)</p>
											<h4>$5.00 <span>$7.00</span></h4>
										</div>
										<div className="snipcart-details">
											<Form action="#" method="post">
												<fieldset>
													<Form.Control type="hidden" name="cmd" value="_cart" />
													<Form.Control type="hidden" name="add" value="1" />
													<Form.Control type="hidden" name="business" value=" " />
													<Form.Control type="hidden" name="item_name" value="orange soft drink" />
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
								<Image fluid src={offer} alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><Image fluid src={image14} alt=" " className="img-responsive" /></Link>
											<p>prune juice - sunsweet (1 ltr)</p>
											<h4>$4.00 <span>$5.00</span></h4>
										</div>
										<div className="snipcart-details">
											<Form action="#" method="post">
												<fieldset>
													<Form.Control type="hidden" name="cmd" value="_cart" />
													<Form.Control type="hidden" name="add" value="1" />
													<Form.Control type="hidden" name="business" value=" " />
													<Form.Control type="hidden" name="item_name" value="prune juice - sunsweet" />
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
					<Col md={3} className="w3ls_w3l_banner_left">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="tag"><Image fluid src={tag} alt=" " className="img-responsive" /></div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><Image fluid src={image15} alt=" " className="img-responsive" /></Link>
											<p>coco cola zero can (330 ml)</p>
											<h4>$3.00 <span>$5.00</span></h4>
										</div>
										<div className="snipcart-details">
											<Form action="#" method="post">
												<fieldset>
													<Form.Control type="hidden" name="cmd" value="_cart" />
													<Form.Control type="hidden" name="add" value="1" />
													<Form.Control type="hidden" name="business" value=" " />
													<Form.Control type="hidden" name="item_name" value="coco cola zero can" />
													<Form.Control type="hidden" name="amount" value="3.00" />
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
								<Image fluid src={offer} alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><Image fluid src={image16} alt=" " className="img-responsive" /></Link>
											<p>sprite bottle (2 ltr)</p>
											<h4>$3.00 <span>$4.00</span></h4>
										</div>
										<div className="snipcart-details">
											<Form action="#" method="post">
												<fieldset>
													<Form.Control type="hidden" name="cmd" value="_cart" />
													<Form.Control type="hidden" name="add" value="1" />
													<Form.Control type="hidden" name="business" value=" " />
													<Form.Control type="hidden" name="item_name" value="sprite bottle" />
													<Form.Control type="hidden" name="amount" value="3.00" />
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
				<div className="w3ls_w3l_banner_nav_right_grid1">
					<h6>Juices</h6>
					<Row><Col md={3} className="w3ls_w3l_banner_left">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<Image fluid src={offer} alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><Image fluid src={image13} alt=" " className="img-responsive" /></Link>
											<p>mixed fruit juice (1 ltr)</p>
											<h4>$3.00 <span>$4.00</span></h4>
										</div>
										<div className="snipcart-details">
											<Form action="#" method="post">
												<fieldset>
													<Form.Control type="hidden" name="cmd" value="_cart" />
													<Form.Control type="hidden" name="add" value="1" />
													<Form.Control type="hidden" name="business" value=" " />
													<Form.Control type="hidden" name="item_name" value="mixed fruit juice" />
													<Form.Control type="hidden" name="amount" value="3.00" />
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
								<Image fluid src={offer} alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><Image fluid src={image50} alt=" " className="img-responsive" /></Link>
											<p>aamras juice (250 ml)</p>
											<h4>$4.00 <span>$5.00</span></h4>
										</div>
										<div className="snipcart-details">
											<Form action="#" method="post">
												<fieldset>
													<Form.Control type="hidden" name="cmd" value="_cart" />
													<Form.Control type="hidden" name="add" value="1" />
													<Form.Control type="hidden" name="business" value=" " />
													<Form.Control type="hidden" name="item_name" value="aamras juice" />
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
					<Col md={3} className="w3ls_w3l_banner_left">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="tag"><Image fluid src={tag} alt=" " className="img-responsive" /></div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><Image fluid src={image51} alt=" " className="img-responsive" /></Link>
											<p>coconut water (1000 ml)</p>
											<h4>$6.00 <span>$8.00</span></h4>
										</div>
										<div className="snipcart-details">
											<Form action="#" method="post">
												<fieldset>
													<Form.Control type="hidden" name="cmd" value="_cart" />
													<Form.Control type="hidden" name="add" value="1" />
													<Form.Control type="hidden" name="business" value=" " />
													<Form.Control type="hidden" name="item_name" value="coconut water" />
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
								<Image fluid src={offer} alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><Image fluid src={image52} alt=" " className="img-responsive" /></Link>
											<p>ceres orange juice (1 ltr)</p>
											<h4>$6.00 <span>$8.00</span></h4>
										</div>
										<div className="snipcart-details">
											<Form action="#" method="post">
												<fieldset>
													<Form.Control type="hidden" name="cmd" value="_cart" />
													<Form.Control type="hidden" name="add" value="1" />
													<Form.Control type="hidden" name="business" value=" " />
													<Form.Control type="hidden" name="item_name" value="ceres orange juice" />
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
				<div className="w3ls_w3l_banner_nav_right_grid1">
					<h6>Energy Drinks</h6>
					<Row><Col md={3} className="w3ls_w3l_banner_left">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<Image fluid src={offer} alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><Image fluid src={image53} alt=" " className="img-responsive" /></Link>
											<p>dabur glucose D (250 gm)</p>
											<h4>$10.00 <span>$12.00</span></h4>
										</div>
										<div className="snipcart-details">
											<Form action="#" method="post">
												<fieldset>
													<Form.Control type="hidden" name="cmd" value="_cart" />
													<Form.Control type="hidden" name="add" value="1" />
													<Form.Control type="hidden" name="business" value=" " />
													<Form.Control type="hidden" name="item_name" value="dabur glucose D" />
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
								<Image fluid src={offer} alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><Image fluid src={image54} alt=" " className="img-responsive" /></Link>
											<p>mix lemon flavour (50 gm)</p>
											<h4>$8.00 <span>$10.00</span></h4>
										</div>
										<div className="snipcart-details">
											<Form action="#" method="post">
												<fieldset>
													<Form.Control type="hidden" name="cmd" value="_cart" />
													<Form.Control type="hidden" name="add" value="1" />
													<Form.Control type="hidden" name="business" value=" " />
													<Form.Control type="hidden" name="item_name" value="mix lemon flavour" />
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
					<Col md={3} className="w3ls_w3l_banner_left">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="tag"><Image fluid src={tag} alt=" " className="img-responsive" /></div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><Image fluid src={image55} alt=" " className="img-responsive" /></Link>
											<p>schweppes water (250 ltr)</p>
											<h4>$6.00 <span>$7.00</span></h4>
										</div>
										<div className="snipcart-details">
											<Form action="#" method="post">
												<fieldset>
													<Form.Control type="hidden" name="cmd" value="_cart" />
													<Form.Control type="hidden" name="add" value="1" />
													<Form.Control type="hidden" name="business" value=" " />
													<Form.Control type="hidden" name="item_name" value="schweppes water" />
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
								<Image fluid src={offer} alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><Image fluid src={image56} alt=" " className="img-responsive" /></Link>
											<p>red bull energy drink (250 ml)</p>
											<h4>$7.00 <span>$9.00</span></h4>
										</div>
										<div className="snipcart-details">
											<Form action="#" method="post">
												<fieldset>
													<Form.Control type="hidden" name="cmd" value="_cart" />
													<Form.Control type="hidden" name="add" value="1" />
													<Form.Control type="hidden" name="business" value=" " />
													<Form.Control type="hidden" name="item_name" value="red bull energy drink" />
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

export default Beverages;
