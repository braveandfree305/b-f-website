import { useTranslation } from "react-i18next";

const Home =()=> {

	const { t } = useTranslation();

return (
    <div id="page-wrapper">
			{/* <!-- Header --> */}
				<section id="header">

					{/* <!-- Logo --> */}
						<h1><a href="/">Brave & Free Miami Tour Bus</a></h1>

					{/* <!-- Nav --> */}
						<nav id="nav">
							<ul>
								<li className="current"><a href="/">{t('Nav1.1')}</a></li>
								<li>
									<a href="/Prices">{t('Nav2.1')}</a>
								</li>
								<li><a href="/Faqs">{t('Nav3.1')}</a></li>
								<li><a href="/ContactUs">{t('Nav4.1')}</a></li>
								<li><a href="/BookNow">{t('Nav5.1')}</a></li>
								
							</ul>
							
						</nav>
						<br></br>
						<h6>(786) 332-9320</h6>
					{/* <!-- Banner --> */}
						<section id="banner">
							<header>
								<h2>{t('Paragraph.1')}</h2>
								<p>{t('p1.1')}</p>
								<p>{t('p2.1')}</p>
								<p>{t('p3.1')}</p>
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
											<h2>{t('single.1')}</h2>
										</header>
										<h3>$55 + FEES</h3>
										<h6>{t('s1.1')}</h6>
										<p>2 HOUR TOUR</p>
										<p>{t('byob.1')}</p>
										<p>COOLER + ICE + DJ ON BOARD</p>
										<p></p>
										<p>
										UP TO 15 PAX
										(Any additional pax $35)</p>
									</section>
								</div>
								<div className="col-4 col-12-medium">
									<section className="middle">
										{/* <i className="icon solid featured alt fa-bolt"></i> */}
										<header>
											<h2>{t('group.1')}</h2>
										</header>
										<h3>$525 + FEES</h3>
										<p>2 HOUR TOUR</p>
										<p>{t('byob.1')}</p>
										<p>COOLER + ICE + DJ ON BOARD</p>
										<p></p>
										<p>
										UP TO 15 PAX
										(Any additional pax $35)</p>
										<p>PRIVATE RENTAL</p>
									</section>
								</div>
								<div className="col-4 col-12-medium">
									<section className="last">
										{/* <i className="icon solid featured alt2 fa-star"></i> */}
										<header>
											<h2>Happy Hour</h2>
										</header>
										<h3>$475 + FEES</h3>
										<h6>{t('h1.1')}</h6>
										<p>2 HOUR TOUR</p>
										<p>{t('byob.1')}</p>
										<p>COOLER + ICE + DJ ON BOARD</p>
										<p></p>
										<p>
										UP TO 15 PAX
										(Any additional pax $35)</p>
										<p>PRIVATE RENTAL</p>
									</section>
								</div>
							</div>
							<footer>
								<ul className="actions">
									<li><a href="/BookNow" className="button large">{t('Nav5.1')}</a></li>
									<li><a href="/faqs" className="button alt large">{t('learn.1')}</a></li>
								</ul>
							</footer>
						</section>

				</section>

			{/* <!-- Main --> */}
				<section id="main">
					<div className="container">
						<div className="row">
							<div className="col-12">

								{/* <!-- Portfolio --> */}
									<section>
										<header className="major">
											<h2>Explore Our Bus</h2>
										</header>
										<div className="row">
											<div className="col-4 col-6-medium col-12-small">
												<section className="box">
													<a href="/Faqs" className="image featured"><img src="images/pic02.jpg" alt="" /></a>
													<header>
														<h3>$35 per passenger (Groups of 15 Minimum 30 Max)</h3>
													</header>
													
													<footer>
														<ul className="actions">
															<li><a href="/Faqs" className="button alt">{t('learn.1')}</a></li>
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
															<li><a href="/Faqs" className="button alt">{t('learn.1')}</a></li>
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
															<li><a href="/Faqs" className="button alt">{t('learn.1')}</a></li>
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

			{/* <!-- Footer --> */}
				<section id="footer">
					<div className="container">
								<section>
									<header>
										<h2>{t('visit.1')}</h2>
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
											<p><a href="/ContactUs">braveandfree305@gmail.com</a></p>
										</li>
										<li>
											<h3>Phone</h3>
											<p>(786) 332-9320</p>
										</li>
									</ul>
								</section>
							</div>
							<div className="col-12">

								{/* <!-- Copyright --> */}
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

export default Home;