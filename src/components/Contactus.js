import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

const Contactus =()=> {

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('gmail', 'template_rebe3wx', e.target, 'user_aEgqVhocTMQyiKQUA5Edy')
		.then((result) => {
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});
		e.target.reset()
	};

    return (		
        <div id="page-wrapper">
				<section id="header">
						<h1><a href="/">Brave & Free Miami Tour Bus</a></h1>
						<nav id="nav">
							<ul>
                            <li><a href="/">Home</a></li>
								<li>
									<a href="/Prices">Prices</a>
			
								</li>
								<li><a href="/Faqs">FAQ's</a></li>
								<li className="current"><a href="/ContactUs">Contact Us</a></li>
								<li><a href="/BookNow">Book Now</a></li>
							</ul>
						</nav>
						<br></br>
						<h6>(786) 260-3832</h6>
				</section>

				<section id="main">
					<div className="container">
									<section className="box" id='special'>		
										<form ref={form} onSubmit={sendEmail}>
											<div className="modal-body">		
											<h3>Leave Us A Message</h3>			
												<div className="form-group">
													<label>Name</label>
													<input name="names" type="text" className="form-control"/>
												</div>
												<div className="form-group">
													<label>Email</label>
													<input name="email" type="email" className="form-control"/>
												</div>
												<div className="form-group">
													<label>Subject</label>
													<input name="subject" type="text" className="form-control"/>
												</div>
												<div className="form-group">
													<label>Phone</label>
													<input name="phone" type="text" className="form-control"/>
												</div>		
												<div className="form-group">
													<label>Message</label>
													<textarea name="message" className="form-control"></textarea>
												</div>		
											</div>
											<div className="modal-footer">			    
											<input type="submit" value="Send" />
											</div>
										</form>
									</section>
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
											<p><a href="/Faqs">braveandfree1@gmail.com</a></p>
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
export default Contactus