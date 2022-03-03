const Prices =()=> {
    return (
        <div id="page-wrapper">

            <section id="header">

                    <h1><a href="/">Brave & Free Miami Tour Bus</a></h1>

                    <nav id="nav">
                        <ul>
                        <li><a href="/">Home</a></li>
                            <li className="current">
                                <a href="/Prices">Prices</a>
                                
                            </li>
                            <li><a href="/Faqs">FAQ's</a></li>
                            <li><a href="/ContactUs">Contact Us</a></li>
                            <li><a href="/BookNow">Book Now</a></li>
                        </ul>
                    </nav>
					<br></br>
					<h6>(786) 260-3832</h6>
            </section>
			<section id="main">
					<div className="container">

							<article className="box post">
								<header>
								<h4><a href="/BookNow">Book Now</a></h4>
									<p>Prices</p>
								</header>
										<h2>Group Package (15 passengers)</h2>
										<h3>$525 + FEES</h3>
										<p>2 HOUR TOUR</p>
										<p>BYOB (NO GLASS ALLOWED)</p>
										<p>COOLER + ICE + DJ ON BOARD</p>
										<p></p>
										<p>
										UP TO 15 PEOPLE
										(Any additional passangers $35)</p>
										<p>PRIVATE RENTAL</p>
										<h2>Happy Hour Package (15 passangers)</h2>
										<h3>$475 + FEES</h3>
										<h6>Only available at certain dates and times</h6>
										<p>2 HOUR TOUR</p>
										<p>BYOB (NO GLASS ALLOWED)</p>
										<p>COOLER + ICE + DJ ON BOARD</p>
										<p></p>
										<p>PRIVATE RENTAL</p>

										<h2>Individual Add On Ticket</h2>
										<h3>$35 + FEES</h3>
										<h6>This is an individual seat purchase. Intended for when a group package has reached its 15 passenger max</h6>
										<p>2 HOUR TOUR</p>
										<p>BYOB (NO GLASS ALLOWED)</p>
										<p>COOLER + ICE + DJ ON BOARD</p>
										<p></p>										
								<section>	
								</section>
							</article>
							<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                              <div className="carousel-inner">
                                <div className="carousel-item active">
                                  <img src="images/pic02.jpg" className="d-block w-100" alt="" />
                                </div>
                                <div className="carousel-item">
                                  <img src="images/pic03.jpg" className="d-block w-100" alt="" />
                                </div>
                                <div className="carousel-item">
                                  <img src="images/pic04.jpg" className="d-block w-100" alt="" />
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

								{/* <!-- Copyright --> */}
									<div id="copyright">
										<ul className="links">
											<li>&copy; Untitled. All rights reserved.</li>
										</ul>
									</div>

							
						
					</div>
				</section>
    </div>
    )
}


export default Prices;