import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from "react-i18next";
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
	const { t } = useTranslation();
    return (		
        <div id="page-wrapper">
				<section id="header">
						<h1><a href="/">Brave & Free Miami Tour Bus</a></h1>
						<nav id="nav">
							<ul>
                            <li><a href="/">{t('Nav1.1')}</a></li>
								<li>
									<a href="/Prices">{t('Nav2.1')}</a>
								</li>
								<li><a href="/Faqs">{t('Nav3.1')}</a></li>
								<li className="current"><a href="/ContactUs">{t('Nav4.1')}</a></li>
								<li><a href="/BookNow">{t('Nav5.1')}</a></li>
							</ul>
						</nav>
						<br></br>
						<h6>(786) 332-9320</h6>
				</section>

				<section id="main">
					<div className="container">
									<section className="box" id='special'>		
										<form ref={form} onSubmit={sendEmail}>
											<div className="modal-body">		
											<h3>{t('message.1')}</h3>			
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
											<li>&copy; Untitled. All rights reserved.</li>
										</ul>
									</div>

							
						
					</div>
				</section>

		</div>
    )
}
export default Contactus