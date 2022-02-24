const Booknow =()=> {
    return (
        <div id="page-wrapper">

			{/* <!-- Header --> */}
				<section id="header">

					{/* <!-- Logo --> */}
						<h1><a href="index.html">Brave & Free Miami Tour Bus</a></h1>

					{/* <!-- Nav --> */}
						<nav id="nav">
							<ul>
                            <li><a href="/">Home</a></li>
								<li>
									<a href="/Prices">Prices</a>
								
								</li>
								<li><a href="/Faqs">FAQ's</a></li>
								<li><a href="/ContactUs">Contact Us</a></li>
								<li className="current"><a href="/BookNow">Book Now</a></li>
							</ul>
						</nav>
						<br></br>
						<h6>(786) 260-3832</h6>
				</section>
				<footer>
								<ul className="actions">
									<li><a href="/Checkout" className="button large">Individual Ticket: $55</a></li>
									<li><a href="/groupCheckout" className="button large">Group Purchase: $525</a></li>
									<li><a href="/addOnCheckout" className="button large">Individual add on for group(15 people) Ticket: $35</a></li>
									<li><a href="/ContactUs" className="button large">Please Contact Us For Happy Hour</a></li>
								</ul>
							</footer>


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

export default Booknow;