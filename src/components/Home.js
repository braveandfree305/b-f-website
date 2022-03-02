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
									<section className="first">
										{/* <i className="icon solid featured fa-cog"></i> */}
										<header>
											<h2>Extra Rider Ticket</h2>
										</header>
										<h3>$35 + FEES</h3>
										<h6>This is an individual seat purchase. Intended for when a group package has been purchased</h6>
										<p>2 HOUR TOUR</p>
										<p>BYOB (NO GLASS ALLOWED)</p>
										<p>COOLER + ICE + DJ ON BOARD</p>
										<p>PRIVATE RENTAL</p>
									</section>
								</div>
								<div className="col-4 col-12-medium">
									<section className="middle">
										{/* <i className="icon solid featured alt fa-bolt"></i> */}
										<header>
											<h2>Group Package</h2>
											<h2>(15 Passengers)</h2>
										</header>
										<h3>$525 + FEES</h3>
										<p>2 HOUR TOUR</p>
										<p>BYOB (NO GLASS ALLOWED)</p>
										<p>COOLER + ICE + DJ ON BOARD</p>
										<p></p>
										<p>PRIVATE RENTAL</p>
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
										<h6>Only available at certain dates and times</h6>
										<p>2 HOUR TOUR</p>
										<p>BYOB (NO GLASS ALLOWED)</p>
										<p>COOLER + ICE + DJ ON BOARD</p>
										<p>PRIVATE RENTAL</p>
									</section>
								</div>
							</div>
							<footer>
								<ul className="actions">
									<li><a href="/BookNow" className="button large">Book Now</a></li>
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
												<section className="box">
													<a href="/Faqs" className="image featured"><img src="images/pic02.jpg" alt="" /></a>
													<header>
														<h3>$35 per extra passenger (Group Package required before buying individual ticket)</h3>
													</header>
													
													<footer>
														<ul className="actions">
															<li><a href="/Faqs" className="button alt">Find out more</a></li>
														</ul>
													</footer>
												</section>
											</div>
											<div className="col-4 col-6-medium col-12-small">
												<section className="box">
													<a href="/Faqs" className="image featured"><img src="images/pic03.jpg" alt="" /></a>
													<header>
														<h3>A minimum of 15 for private parties with a maximum of 30</h3>
													</header>
													
													<footer>
														<ul className="actions">
															<li><a href="/Faqs" className="button alt">Find out more</a></li>
														</ul>
													</footer>
												</section>
											</div>
											<div className="col-4 col-6-medium col-12-small">
												<section className="box">
													<a href="/Faqs" className="image featured"><img src="images/pic04.jpg" alt="" /></a>
													<header>
														<h3>Best Way To Celebrate Special Events</h3>
													</header>
							
													<footer>
														<ul className="actions">
															<li><a href="/Faqs" className="button alt">Find out more</a></li>
														</ul>
													</footer>
												</section>
											</div>
										</div>
									</section>
							</div>
							<div className="col-12">

									<section>
										<header className="major">
											<h2>Locations</h2>
										</header>
										<div className="row">
											<div className="col-6 col-12-small">
												<section className="box">
													<a href="/Faqs" className="image featured"><img src="images/pic08.jpg" alt="" /></a>
													<header>
														<h3>Brickell Area</h3>
													
													</header>
												
												</section>
											</div>
											<div className="col-6 col-12-small">
												<section className="box">
													<a href="/Faqs" className="image featured"><img src="images/pic09.jpg" alt="" /></a>
													<header>
														<h3>Wynwood Area</h3>
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
									<ul >
										<li>
											<h3>Address</h3>
											<p>
												4719 NW 7 ST,<br />
												MIAMI,<br />
												33126
											</p>
										</li>
										<li>
											<h3>Mail</h3>
											<p><a href="/Faqs">braveandfree305@gmail.com</a></p>
										</li>
										<li>
											<h3>Phone</h3>
											<p>(786) 260-3832</p>
										</li>
									</ul>
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
font-size: 25px;
&:hover {
    text-decoration: none;
	color:purple;
}
`

export default Home;