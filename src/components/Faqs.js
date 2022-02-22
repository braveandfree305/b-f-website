import { useTranslation } from "react-i18next";
import './Faqs.css'
const Faqs =(props)=> {
  const { t } = useTranslation();
    return (
        <div id="page-wrapper">

			{/* <!-- Header --> */}
				<section id="header">
        <nav>
          <button onClick={()=>props.handleClick('en')}>
            English
          </button>
          <button onClick={()=>props.handleClick('sp')}>
            Espanol
          </button>
        </nav>
        <br></br>
        <br></br>
					{/* <!-- Logo --> */}
						<h1><a href="/">Brave & Free Miami Tour Bus</a></h1>

					{/* <!-- Nav --> */}
						<nav id="nav">
							<ul>
              <li><a href="/">{t('Nav1.1')}</a></li>
								<li>
									<a href="/Prices">{t('Nav2.1')}</a>
								</li>
								<li className="current"><a href="/Faqs">{t('Nav3.1')}</a></li>
								<li><a href="/ContactUs">{t('Nav4.1')}</a></li>
								<li><a href="/BookNow">{t('Nav5.1')}</a></li>
							</ul>
						</nav>
            <br></br>
						<h6>(786) 332-9320</h6>
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
        <div className="letters">{t('q1.1')}</div>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      {t('q1a.1')}
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <div className="letters">{t('q2.1')}</div>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      {t('q2a.1')}
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <div className="letters">{t('q3.1')}</div>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      {t('q3a.1')}
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      <div className="letters">{t('q4.1')}</div>
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      {t('q4a.1')}
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      <div className="letters">{t('q5.1')}</div>
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      {t('q5a.1')}
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingSix">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
      <div className="letters">{t('q6.1')}</div>
      </button>
    </h2>
    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      {t('q6a.1')}
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingSeven">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
      <div className="letters">{t('q7.1')}</div>
      </button>
    </h2>
    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      {t('q7a.1')}
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingEight">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
      <div className="letters">{t('q8.1')}</div>
      </button>
    </h2>
    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      {t('q8a.1')}
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingNine">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
      <div className="letters">{t('q9.1')}</div>
      </button>
    </h2>
    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      {t('q9a.1')}
      </div>
    </div>
  </div>
</div>
									<img src="images/pic01.jpg" alt="" />
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
											<li>&copy; Untitled. All rights reserved.</li>
										</ul>
									</div>

							
						
					</div>
				</section>
		</div>
    )
}

export default Faqs;