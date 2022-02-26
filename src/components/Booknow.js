import styled from "styled-components";

const Booknow =()=> {
    return (
        <div id="page-wrapper">

				<section id="header">

						<h1><a href="index.html">Brave & Free Miami Tour Bus</a></h1>

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
						<h6>(786) 258-8387</h6>
				</section>
				<footer>
								<ul className="actions">									
									<li><a href="https://buy.stripe.com/test_bIYaGn9pOdRi4qA000" className="button large">Individual Add On Tickets for Packages: Click Here
									<h6>Note: This purchase is for any extra guest of a group package purchase.</h6></a>
									</li>									
								</ul>

								<Calendly className="calendly-inline-widget" data-url="https://calendly.com/braveandfree305/group-package?background_color=0fffd7&primary_color=800080" ></Calendly>
								<Calendly className="calendly-inline-widget" data-url="https://calendly.com/braveandfree305/happy-hour?background_color=0fffd7&primary_color=800080"></Calendly>
								<Calendly className="calendly-inline-widget" data-url="https://calendly.com/braveandfree305/individual-add-on-to-group-package?background_color=0fffd7&primary_color=800080" ></Calendly>
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
											<p>(786) 258-8387</p>
										</li>
									</ul>
								</section>
							</div>
							<div className="col-12">
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

const Calendly = styled.div`
min-width:320px;
height:630px;
`
export default Booknow;