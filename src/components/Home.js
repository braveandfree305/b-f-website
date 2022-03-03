import styled from "styled-components";
const Home =()=> {
return (
    <div id="page-wrapper">
			{/* <!-- Header --> */}
			
				<section id="header">

					{/* <!-- Logo --> */}

						<h1><a href="/">Brave & Free Miami Tour Bus</a></h1>

					{/* <!-- Nav --> */}
						<nav id="nav">
							<ul>
								<li className="current"><a href="/">Home</a></li>
								<li>
									<a href="/Prices">Prices</a>
								</li>
								<li><a href="/Faqs">FAQ's</a></li>
								<li><a href="/ContactUs">Contact Us</a></li>
								<li><a href="/BookNow">Book Now</a></li>
								
							</ul>
							
						</nav>
						<br></br>
						<h6>(786) 260-3832</h6>
						<br></br>
						
						<BookLink href="/BookNow">Book Now !</BookLink>
						
						<section>
						<CardWrapper>
										
										<header className="major">
											<h2>Come Tour With Us And Explore The Hottest Places In Miami !</h2>
										</header>
												
										<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
						  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
						  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        </div>
                              <div className="carousel-inner">
                                <div className="carousel-item active">
                                  <img src="images/pic16.jpg" className="d-block w-100" alt="" />
                                </div>
                                <div className="carousel-item">
                                  <img src="images/pic14.jpg" className="d-block w-100" alt="" />
                                </div>
                                <div className="carousel-item">
                                  <img src="images/pic15.jpg" className="d-block w-100" alt="" />
                                </div>
								<div className="carousel-item">
                                  <img src="images/pic17.jpg" className="d-block w-100" alt="" />
                                </div>
								<div className="carousel-item">
                                  <img src="images/pic18.jpg" className="d-block w-100" alt="" />
                                </div>
                              </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
</div>						
						</CardWrapper>	
						</section>
						
					{/* <!-- Banner --> */}
						<section id="banner">					
							<header>
								<h2>Come Tour With Us And Explore The Hottest Places In Miami !</h2>
								<p>Open Air party bus. Our buses feature seating for up to 30 guests.</p>
								<p>Equipped with a bar, booming sound system, LED Dance Floor and the best way to experience Miami.</p>
								<p>We can accommodate your tour in any way you wish. Get ready to see and be seen!</p>
								<p>Downtown, Brickell, Wynwood, Little Havana, Doral, Bayside, Coconut Grove and Coral Gables.</p>
							</header>
						</section>

					{/* <!-- Intro --> */}
						<section id="intro" className="container">
							<div className="row">
								<div className="col-4 col-12-medium">
									<section className="middle">
										{/* <i className="icon solid featured alt fa-bolt"></i> */}
										<header>
											<h2>Group Package</h2>
											<h2>(15 Passengers)</h2>
										</header>
										<h3>$525 + FEES</h3>
										<h6>Note: Any Extra Guests Can Be Purchased Seperately</h6>
										<p>2 HOUR TOUR</p>
										<p>BYOB (NO GLASS ALLOWED)</p>
										<p>COOLER + ICE + DJ ON BOARD</p>
										<p>Max Passengers: 30</p>
										<p></p>
										<p>PRIVATE RENTAL</p>
										<ul className="actions">
									<li><a href='https://calendly.com/braveandfree305/group-package?background_color=0fffd7&primary_color=800080' className="button large">Book Now</a></li>									
								</ul>	
									</section>
								</div>
								<div className="col-4 col-12-medium">
									<section className="last">
										{/* <i className="icon solid featured alt2 fa-star"></i> */}
										<header>
											<h2>Happy Hour Package</h2>
											<h2>(15 Passengers)</h2>
										</header>
										<h3>$475 + FEES</h3>
										<h6>Only available Monday thru Thursday</h6>
										<h6>Note: Any Extra Guests Can Be Purchased Seperately</h6>
										<p>2 HOUR TOUR</p>
										<p>BYOB (NO GLASS ALLOWED)</p>
										<p>COOLER + ICE + DJ ON BOARD</p>
										<p>Max Passengers: 30</p>
										<p>PRIVATE RENTAL</p>
										
								<ul className="actions">
									<li><a href="https://calendly.com/braveandfree305/happy-hour?background_color=0fffd7&primary_color=800080" className="button large">Book Now</a></li>									
								</ul>							
									</section>
								</div>
								<div className="col-4 col-12-medium">
									<section className="last">
										{/* <i className="icon solid featured alt2 fa-star"></i> */}
										<header>
											<h2>Add Extra Guest To Package</h2>
											<h2>(Up to 15 Passengers)</h2>
										</header>
										<h3>$35 + FEES</h3>
										<h6>Note: This purchase is for any extra guest you would like to add to your package</h6>
										<p>2 HOUR TOUR</p>
										<p>BYOB (NO GLASS ALLOWED)</p>
										<p>COOLER + ICE + DJ ON BOARD</p>										
										
								<ul className="actions">
									<li><a href="https://buy.stripe.com/6oE8x19Ul87MgIobII" className="button large">Book Now</a></li>									
								</ul>							
									</section>
								</div>
							</div>
							<footer>
								<ul className="actions">									
									<li><a href="/faqs" className="button alt large">Learn More</a></li>
								</ul>
							</footer>
						</section>

				</section>

				<section id="main">
					<div className="container">
						<div className="row">
							<div className="col-12">

									<section>
										<header className="major">
											<h2>Explore Our Bus</h2>
										</header>
										<div className="row">
											<div className="col-4 col-6-medium col-12-small">												
													<a href="/Faqs" className="image featured"><img src="images/pic16.jpg" alt="" /></a>												
											</div>
											<div className="col-4 col-6-medium col-12-small">
												
													<a href="/Faqs" className="image featured"><img src="images/pic14.jpg" alt="" /></a>
													
												
											</div>
											<div className="col-4 col-6-medium col-12-small">											
													<a href="/Faqs" className="image featured"><img src="images/pic15.jpg" alt="" /></a>											
											</div>
										</div>
									</section>
							</div>
							<div className="col-12">

									<section>
										<header className="major">
											<h2>Explore the inside</h2>
										</header>
										<div className="row">
											<div className="col-6 col-12-small">
												<section className="box">
													<a href="/Faqs" className="image featured"><img src="images/pic18.jpg" alt="" /></a>
													<header>
														<h3>Dj Area</h3>
													
													</header>
												
												</section>
											</div>									
											<div className="col-6 col-12-small">
												<section className="box">
													<a href="/Faqs" className="image featured"><img src="images/pic17.jpg" alt="" /></a>
													<header>
														<h3>The Dance Floor</h3>
													</header>
												
												</section>
											</div>
										</div>
									</section>
							</div>
						</div>
					</div>
				</section>
				<section id="footer">
					<div className="container">
								<section>
									<header>
										<h2>Visit Us On Social Media !</h2>
									</header>
									<ul className="social">
										<li><a className="icon brands fa-facebook-f" href="/Faqs"><span className="label">Facebook</span></a></li>
										<li><a className="icon brands fa-twitter" href="/Faqs"><span className="label">Twitter</span></a></li>
										<li><a className="icon brands fa-yelp" href="https://www.yelp.com/biz/brave-and-free-party-bus-tours-miami"><span className="label">Yelp</span></a></li>
										<li><a className="icon brands fa-instagram" href="https://www.instagram.com/braveandfree_miami/?r=nametag"><span className="label">Instagram</span></a></li>
									</ul>
																		
											<h3>Address</h3>
											<p>
												4719 NW 7 ST,<br />
												MIAMI,<br />
												33126
											</p>
																				
											<h3>Mail</h3>
											<p><a href="/Faqs">braveandfree305@gmail.com</a></p>
																			
											<h3>Phone</h3>
											<p>(786) 260-3832</p>										
									
								</section>
							</div>
							<div className="col-12">
									<div id="copyright">
										<ul className="links">
											<li>&copy; All rights reserved.</li>
										</ul>
									</div>	
					</div>
				</section>

		</div>
)
}

const BookLink = styled.a`
text-decoration: none;
color:purple;
border: solid 7px purple;
padding: 15px;
display:inline;
font-size: 20px;
&:hover {
    text-decoration: none;
	color:purple;
}
`
const CardWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
	  margin-top: 50px;
	  display:block;	  
  }
`;



export default Home;