import React from 'react';
import img1 from '../../images/1.png';
import img2 from '../../images/2.png';
import img3 from '../../images/3.png';
import img4 from '../../images/4.png';
import offer from '../../images/offer.png';
import tag from '../../images/tag.png';
import { Link } from 'react-router-dom';
import { Container, Form } from 'react-bootstrap';

const TopBrands = () => {
    return (
        <div className="top-brands">
		<Container>
			<h3>Hot Offers</h3>
			<div className="agile_top_brands_grids d-flex">
				<div className="col-md-3 top_brand_left">
					<div className="hover14 column">
						<div className="agile_top_brand_left_grid">
							<div className="tag"><img src={tag} alt=" " className="img-responsive" /></div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block" >
										<div className="snipcart-thumb">
											<Link to="single.html"><img title=" " alt=" " src={img1} /></Link>		
											<p>fortune sunflower oil</p>
											<h4>$7.99 <span>$10.00</span></h4>
										</div>
										<div className="snipcart-details top_brand_home_details">
											<Form action="checkout.html" method="post">
												<fieldset>
													<Form.Control type="hidden" name="cmd" value="_cart" />
													<Form.Control type="hidden" name="add" value="1" />
													<Form.Control type="hidden" name="business" value=" " />
													<Form.Control type="hidden" name="item_name" value="Fortune Sunflower Oil" />
													<Form.Control type="hidden" name="amount" value="7.99" />
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
				</div>
				<div className="col-md-3 top_brand_left">
					<div className="hover14 column">
						<div className="agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block" >
										<div className="snipcart-thumb">
											<Link to="single.html"><img title=" " alt=" " src={img3} /></Link>		
											<p>basmati rise (5 Kg)</p>
											<h4>$11.99 <span>$15.00</span></h4>
										</div>
										<div className="snipcart-details top_brand_home_details">
											<Form action="#" method="post">
												<fieldset>
													<Form.Control type="hidden" name="cmd" value="_cart" />
													<Form.Control type="hidden" name="add" value="1" />
													<Form.Control type="hidden" name="business" value=" " />
													<Form.Control type="hidden" name="item_name" value="basmati rise" />
													<Form.Control type="hidden" name="amount" value="11.99" />
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
				</div>
				<div className="col-md-3 top_brand_left">
					<div className="hover14 column">
						<div className="agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<img src={offer} alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><img src={img2} alt=" " className="img-responsive" /></Link>
											<p>Pepsi soft drink (2 Ltr)</p>
											<h4>$8.00 <span>$10.00</span></h4>
										</div>
										<div className="snipcart-details top_brand_home_details">
											<Form action="#" method="post">
												<fieldset>
													<Form.Control type="hidden" name="cmd" value="_cart" />
													<Form.Control type="hidden" name="add" value="1" />
													<Form.Control type="hidden" name="business" value=" " />
													<Form.Control type="hidden" name="item_name" value="Pepsi soft drink" />
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
				</div>
				<div className="col-md-3 top_brand_left">
					<div className="hover14 column">
						<div className="agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<img src={offer} alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><img src={img4} alt=" " className="img-responsive" /></Link>
											<p>dogs food (4 Kg)</p>
											<h4>$9.00 <span>$11.00</span></h4>
										</div>
										<div className="snipcart-details top_brand_home_details">
											<Form action="#" method="post">
												<fieldset>
													<Form.Control type="hidden" name="cmd" value="_cart" />
													<Form.Control type="hidden" name="add" value="1" />
													<Form.Control type="hidden" name="business" value=" " />
													<Form.Control type="hidden" name="item_name" value="dogs food" />
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
				</div>
				<div className="clearfix"> </div>
			</div>
		</Container>
	</div>
    )
}

export default TopBrands;
