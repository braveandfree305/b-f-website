import React, { useState } from 'react';
import styled from "styled-components"
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios'
const initial = {
    names:"",
    email: "",
    subject: "",
    phone: "",
    message: ""
};

const Contactus =()=> {

	const { push } = useHistory();
const [formVals, setFormVals] = useState(initial)

const handleChange = (e) => {
	setFormVals({
		...formVals,
		[e.target.name]: e.target.value
	});
}

const handleSubmit = (e) => {
	axios.post(`http://localhost:5000/api/movies`, formVals)
	.then(res => {
		// props.setMovies(res.data);
		push('/movies');
	})
	.catch(err=> {
		console.log(err);
	  })
}
const {names, email, subject, phone, message} = formVals
    return (
        <div id="page-wrapper">

			{/* <!-- Header --> */}
				<section id="header">

					{/* <!-- Logo --> */}
						<h1><a href="/">Brave And Free Miami Bus Tours</a></h1>

					{/* <!-- Nav --> */}
						<nav id="nav">
							<ul>
                            <li><a href="/">Home</a></li>
								<li>
									<a href="/Prices">Prices</a>
									<ul>
										<li><a href="/Faqs">Lorem ipsum dolor</a></li>
										<li><a href="/Faqs">Magna phasellus</a></li>
										<li><a href="/Faqs">Etiam dolore nisl</a></li>
										<li>
											<a href="/Faqs">Phasellus consequat</a>
											<ul>
												<li><a href="/Faqs">Magna phasellus</a></li>
												<li><a href="/Faqs">Etiam dolore nisl</a></li>
												<li><a href="/Faqs">Veroeros feugiat</a></li>
												<li><a href="/Faqs">Nisl sed aliquam</a></li>
												<li><a href="/Faqs">Dolore adipiscing</a></li>
											</ul>
										</li>
										<li><a href="/Faqs">Veroeros feugiat</a></li>
									</ul>
								</li>
								<li><a href="/Faqs">FAQ's</a></li>
								<li className="current"><a href="/ContactUs">Contact Us</a></li>
								<li><a href="/BookNow">Book Now</a></li>
							</ul>
						</nav>


						
				</section>
				
		
			{/* <!-- Main --> */}
				<section id="main">
					<div className="container">
						
									<section className="box" id='special'>
										<FormContainer onSubmit={handleSubmit}>
										<h3>Contact Us</h3>

										<h4 className="modal-title">Leave Us A Message<strong>{formVals.names}</strong></h4>
				<div className="modal-header">			
				</div>
				<div className="modal-body">					
					<div className="form-group">
						<label>Name</label>
						<input value={names} onChange={handleChange} name="names" type="text" className="form-control"/>
					</div>
					<div className="form-group">
						<label>email</label>
						<input value={email} onChange={handleChange} name="email" type="text" className="form-control"/>
					</div>
					<div className="form-group">
						<label>Subject</label>
						<input value={subject} onChange={handleChange} name="subject" type="text" className="form-control"/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input value={phone} onChange={handleChange} name="phone" type="text" className="form-control"/>
					</div>		
					<div className="form-group">
						<label>Message</label>
						<textarea value={message} onChange={handleChange} name="message" className="form-control"></textarea>
					</div>		
				</div>
				<div className="modal-footer">			    
					<input type="submit" className="btn btn-info" value="Save"/>
					<Link to={`/`}><input type="button" className="btn btn-default" value="Cancel"/></Link>
				</div>
			</FormContainer>
		
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
										<li><a className="icon brands fa-dribbble" href="/Faqs"><span className="label">Dribbble</span></a></li>
										<li><a className="icon brands fa-tumblr" href="/Faqs"><span className="label">Tumblr</span></a></li>
										<li><a className="icon brands fa-linkedin-in" href="/Faqs"><span className="label">LinkedIn</span></a></li>
									</ul>
									<ul >
										<li>
											<h3>Address</h3>
											<p>
												Untitled Incorporated<br />
												1234 Somewhere Road Suite<br />
												Nashville, TN 00000-0000
											</p>
										</li>
										<li>
											<h3>Mail</h3>
											<p><a href="/Faqs">someone@untitled.tld</a></p>
										</li>
										<li>
											<h3>Phone</h3>
											<p>(800) 000-0000</p>
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
const FormContainer = styled.form`
    padding: 1em;
    width: 400px;
    background: white;

    label {
        margin-top: 0.5em;
    }

    input {
        padding: 0.5em;
    }
    
    div { 
        margin: 0.5em 0;
    }
`
export default Contactus