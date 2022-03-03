import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

const Waiver = () =>{

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
        <div>
            <section id="main">
					<div className="container">
									<section className="box" id='special'>		
										<form ref={form} onSubmit={sendEmail}>
											<div className="modal-body">		
											<h3>RELEASE OF LIABILITY, ASSUMPTION OF CONSEQUENCES, WAIVER OF CLAIMS & INDEMNIFICATION AGREEMENT</h3>	
                                            <h5>Notice - By signing this document you may be waiving certain legal rights</h5>		
                                            <h4>Release and Wavier of Claims; Assumption of Consequences; Indemnification Agreement</h4>
                                            <p>Before boarding the bus, EACH RIDER MUST sign this form. The rider will receive an Email Confirmation sent to their email. If you are completing this form for a minor, please forward your Email Confirmation to the minor.

When boarding the rider will have to pull up the PDF confirmation on their phone and show it to the driver as they board. They will not be able to board until they do that.

In consideration of being allowed to use the bus and participate in the affiliated and associated

activities (collectively, the "Activities") provided by EDKA, LLC d/b/a 305Miabus (the "Host"), the

Participant hereby agrees, to the fullest extent permitted by law, as follows:</p>
                                            <p>1. TO WAIVE ALL CLAIMS that he/she has or may have against the Host arising out of the

Participant's participation in the Activities;</p>
                                            <p>2. TO ASSUME ALL CONSEQUENCES of participating in the Activities, even those caused by

the negligent acts or conduct of the Host, its owners, affiliates, operators, employees,

agents, directors, and officers. The Participant understands that there are potential risks

of participating in the Activities, which may be both foreseen and unforeseen and include

serious physical injury, death, and loss or damage of property;

 </p>
                                            <p>3. TO RELEASE the Host, its owners, affiliates, operators, employees, agents, directors, and

officers from all liability for any loss, damage, injury, death, destruction, or loss of

property, or expense that the Participant (or his/her next of kin) may suffer, arising out of

his/her participation in the Activities. The Participant specifically understands that he/she

is releasing any and all claims that arise or may arise from any negligent acts (active

negligence, passive negligence, vicarious negligence, or any type of negligence recognized

now and at the time that a potential claim is brought by the State of Florida) or conduct

of the Host, its owners, affiliates, operators, employees, agents, directors, and officers, to

the fullest extent permitted by law. The Participant fully, unequivocally, and clearly

acknowledges that they are waiving any and all claims of negligence, product liability or

any other cause of action recognized under Florida law, now or at the time a claim is

brought, by signing this document. The Participant fully acknowledges that they have

signed this document voluntarily. The Participant fully acknowledges that they have had

an opportunity to review this document and has chosen of their own volition to execute

this document;</p>
                                            <p>4. TO INDEMNIFY the Host, its owners, affiliates, operators, employees, agents, directors,

and officers, from all liability for any loss, damage, injury, death, or expense that the

Participant (or his/her next of kin) may suffer, arising out of participation in the Activities.</p>
												<div className="form-group">
													<label>Name</label>
													<input name="names" type="text" className="form-control"/>
												</div>
												<div className="form-group">
													<label>Email</label>
													<input name="email" type="email" className="form-control"/>
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
        </div>
    )
}

export default Waiver