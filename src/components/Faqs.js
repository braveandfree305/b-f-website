import './Faqs.css'
const Faqs =()=> {
    return (
        <div id="page-wrapper">

			{/* <!-- Header --> */}
				<section id="header">

					{/* <!-- Logo --> */}
						<h1><a href="/">Brave & Free Miami Tour Bus</a></h1>

					{/* <!-- Nav --> */}
						<nav id="nav">
							<ul>
                            <li><a href="/">Home</a></li>
								<li>
									<a href="/Prices">Prices</a>
									
								</li>
								<li className="current"><a href="/Faqs">FAQ's</a></li>
								<li><a href="/ContactUs">Contact Us</a></li>
								<li><a href="/BookNow">Book Now</a></li>
							</ul>
						</nav>
            <br></br>
						<h6>(786) 258-8387</h6>
				</section>

			{/* <!-- Main --> */}
				<section id="main">
					<div className="container">
						<div className="row">
							

								{/* <!-- Content --> */}
								<h1 className = 'title'>FAQS</h1>
            <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <div className="letters">Are we permitted to have alcoholic beverages on the bus?</div>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
	  Certainly! Given that you and all of your guests are of legal drinking age.
The bus is strictly BYOB or (Bring Your Own Beverage). We do not sell any beverages of any kind on the bus. You’ll need to bring the beverages you plan to consume before your tour departs.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <div className="letters">How many people fit on the Bus?</div>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
	  A minimum of 15 for private parties with a maximum of 30
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <div className="letters">Where is the pick up location?</div>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
	  We can pick up anywhere within the areas of Downtown Miami, Brickell, South Beach, Wynwood, Little Havana or Coral Gables. Perhaps you’d like to be picked up after your birthday meal or right outside your front door - that’s not a problem. For pick-ups outside of these areas, an additional charge will be added.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      <div className="letters">How much is a party tour?</div>
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
	  $35 per passenger (Groups of 15 Minimum 30 Max)
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      <div className="letters">Are there age restrictions?</div>
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div className="accordion-body">
	  Yes, you must be of legal drinking age (21). Younger riders are also welcome but they must be accompanied by a legal guardian.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingSix">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
      <div className="letters">Do we mainly party on the bus or we stop at different bars?</div>
      </button>
    </h2>
    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div className="accordion-body">
	  Our bus is made to have fun on it. Other than making a stop for a bathroom break and a quick drink in a bar, the party is on the bus.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingSeven">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
      <div className="letters">Do we mainly party on the bus or we stop at different bars?</div>
      </button>
    </h2>
    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
      <div className="accordion-body">
	  Our bus is made to have fun on it. Other than making a stop for a bathroom break and a quick drink in a bar, the party is on the bus.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingEight">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
      <div className="letters">Is full payment required to book?</div>
      </button>
    </h2>
    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
      <div className="accordion-body">
	  You can book in two ways. The faster option is booking directly through our website and pay everything upfront. Or, you can call our offices where we take a $200 deposit to secure the date and the final payment on the day of the event.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingNine">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
      <div className="letters">What is the cancellation policy?</div>
      </button>
    </h2>
    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
      <div className="accordion-body">
	  If the requested service is no longer needed, the written notice (email to braveandfree305@gmail.com) is to be given 45 business days or more before the event date for the full deposit to be refunded. If less than 45 days’ notice is given the customer is responsible for half of the estimated total due. If less than 14 days’ notice is given the customer is responsible for 2/3rd of the total, if less than 3 days written notice is given the customer is responsible for the total estimated cost.
      </div>
    </div>
  </div>
</div>
									
                  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                              <div class="carousel-inner">
                                <div class="carousel-item active">
                                  <img src="images/pic02.jpg" class="d-block w-100" alt="" />
                                </div>
                                <div class="carousel-item">
                                  <img src="images/pic03.jpg" class="d-block w-100" alt="" />
                                </div>
                                <div class="carousel-item">
                                  <img src="images/pic04.jpg" class="d-block w-100" alt="" />
                                </div>
                              </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
</div>
						</div>
					</div>
				</section>

			{/* <!-- Footer --> */}
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

export default Faqs;