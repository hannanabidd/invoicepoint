import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () =>{
    return(
        <Fragment>
            <section className="banner sp-60">
                <div className="container ">
                    <div class="row">
                        <div className="col-lg-6">
                           <h1 className="h-1 h-bold pb-20">Control your <span className="span-color">Business</span> <br/>with our invoicing app </h1>
                           <p className="paragraph pb-20">Invoice Point will balance transactions and client relationships<br/> for you, so you can have the time you need to focus on your<br/> business.</p>
                           <div className="google-buttons pb-20">
                               <button className="s-btn br-8 "><img src="/images/Icon awesome-apple.png"></img> <div>Get it Now<br/>Google Play</div></button>
                               <button className="s-btn br-8 ml-20">Get it Now<br/>Google Play</button>
                           </div>
                           <p className="paragraph pb-20">By continuing, you agree to the <span className="span-color">Terms of Services</span> and <br/><span className="span-color">Privacy Policy</span></p>
                           <div className="ticks flex">
                               <img src="/images/Group65.png" className="mr-10"></img>
                               <p>Money back gurantee</p>                   
                               <img src="/images/Group65.png" className="ml-50 mr-10"></img>
                               <p>Cancel Anytime</p>
                           </div>
                         </div>

                        <div className="col-lg-6">
                            <img src="/images/animation-1.PNG"></img>
                        </div>
                    </div>
                </div>
            </section>
            <section className="paymentMethod sp-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="box flex-center-align">
                                <img src="/images/Icon awesome-paypal.png"></img>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="box flex-center-align">
                                <img src="/images/Icon awesome-stripe.png"></img>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="box flex-center-align">
                                <img src="/images/Icon simple-xero.png"></img>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="box flex-center-align">
                                <img src="/images/Icon awesome-apple-pay.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="features sp-90">
                <h1 className="h-1 h-bold text-center">Our Features Support Your Business</h1>
                <div className="container sp-60">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="/images/Group10.png"></img>
                        </div>
                        <div className="col-lg-6 flex-align-items flex-column  ">
                            <h3 className="h-3 pb-20 pl-10">Getting <span className="span-color">Paid</span> Made Easy</h3>
                            <p className="paragraph pb-20 pl-10">Create, customize, and send professional looking invoices in <br/> mere seconds. Send your invoice straight after the job is done<br/> and get paid faster!</p>
                            <div className="pl-10">
                            <button className="l-btn br-8 ">Learn More</button>
                            </div>                           
                        </div>
                    </div>
                    <div className="row reverse">
                        <div className="col-lg-6">
                            <img src="/images/Group11.png"></img>
                        </div>
                        <div className="col-lg-6 flex-align-items flex-column  ">
                            <h3 className="h-3 pb-20 ">App That <span className="span-color">Saves</span> Your Time</h3>
                            <p className="paragraph pb-20 ">We make invoicing on the go so easy, you’ll be surprised how<br/> much valuable time you’ll have to focus on doing what you<br/> love. After all, time is of the essence when it comes to running<br/> a successful business.</p>
                            <div className="">
                            <button className="l-btn br-8 ">Learn More</button>
                            </div>                           
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="/images/Group12.png"></img>
                        </div>
                        <div className="col-lg-6 flex-align-items flex-column  ">
                            <h3 className="h-3 pb-20 pl-10"><span className="span-color">Convenient</span> Payment Method</h3>
                            <p className="paragraph pb-20 pl-10">No more waiting in line at the bank to get paid.Send<br/> your invoices with instant payment options, including<br/> PayPal, credit card, or debit card. It’s secure, fast, and<br/> easy. Your clients will be impressed by the convenience<br/> of your services!</p>
                            <div className="pl-10">
                            <button className="l-btn br-8 ">Learn More</button>
                            </div>                           
                        </div>
                    </div>
                    <div className="row reverse">
                        <div className="col-lg-6">
                            <img src="/images/Group13.png"></img>
                        </div>
                        <div className="col-lg-6 flex-align-items flex-column  ">
                            <h3 className="h-3 pb-20 "><span className="span-color">Automate</span> Your Business</h3>
                            <p className="paragraph pb-20 ">No need to chase clients for overdue payments. Take<br/> advantage of the opportunity to focus your time on what<br/> matters most and enjoy the freedom that only automation<br/> can offer.<br/>
                            Payments are recorded and invoice status updated<br/> automatically in your account. Set up reminders to notify<br/> your clients about overdue or upcoming payments. Let us<br/> take care of the rest.
                            </p>
                            <div className="">
                            <button className="l-btn br-8 ">Learn More</button>
                            </div>                           
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="/images/Group14.png"></img>
                        </div>
                        <div className="col-lg-6 flex-align-items flex-column  ">
                            <h3 className="h-3 pb-20 pl-10"><span className="span-color">Instantly</span> Check How Your <br/> Business is Performing</h3>
                            <p className="paragraph pb-20 pl-10">No more waiting in line at the bank to get paid.<br/>Send your invoices with instant payment options, including<br/> PayPal, credit card, or debit card. It’s secure, fast, and easy.<br/> Your clients will be impressed by the convenience of your<br/> services!</p>
                            <div className="pl-10">
                            <button className="l-btn br-8 ">Learn More</button>
                            </div>                           
                        </div>
                    </div>
                </div>
            </section>
            <section className="tryInvoice sp-90">
                <div className="container">
                    <div className="row ">
                        <div className="flex-center-align flex-column">
                        <h1 className="h_1 pb-10">Try InvoicePoint</h1>
                        <p className="paragraph pb-50">lorem porem loren poere lorek okeds okeay lorem operem </p>
                            <div className="google-buttons ">
                               <button className="s-btn br-8 "><div>Get it Now<br/>Google Play</div></button>
                               <button className="s-btn br-8 ml-20">Get it Now<br/>Google Play</button>
                             </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Benefits sp-90">
            <h1 className="h-1 h-bold text-center">Benefits of using Invoice Point</h1>
            <div className="container sp-60">
                <div className="row">
                    <div className="col-lg-4">
                    <div className=" benefit-box pt-20">
                          <div className="image flex-center-align">
                              <img src="/images/Group 80.png" className="flex-align-item"></img>                              
                          </div>
                          <h3 className="h-3 h-bold pt-20">Online Payments</h3>
                          <p className="paragraph">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
                    </div>
                    </div>
                    <div className="col-lg-4">                  
                    <div className="benefit-box pt-20">
                          <div className="image flex-center-align">
                              <img src="/images/Group 81.png" className="flex-align-item"></img>                              
                          </div>
                          <h3 className="h-3 h-bold pt-20">Sign Your Invoive</h3>
                          <p className="paragraph">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
                    </div>
                    </div>
                    <div className="col-lg-4">
                    <div className=" benefit-box pt-20">
                          <div className="image flex-center-align">
                              <img src="/images/Group 82.png" className="flex-align-item"></img>                              
                          </div>
                          <h3 className="h-3 h-bold pt-20">Payment Method</h3>
                          <p className="paragraph">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren. </p>
                    </div>
                    </div>               
                </div>
                
                <div className="row pt-30 ">
                    <div className="col-lg-4">
                    <div className=" benefit-box pt-20">
                          <div className="image flex-center-align">
                              <img src="/images/Group 83.png" className="flex-align-item"></img>                              
                          </div>
                          <h3 className="h-3 h-bold pt-20">Subscriptions</h3>
                          <p className="paragraph">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
                    </div>
                    </div>
                   <div className="col-lg-4">
                   <div className=" benefit-box pt-20">
                          <div className="image flex-center-align">
                              <img src="/images/Group 84.png" className="flex-align-item"></img>                              
                          </div>
                          <h3 className="h-3 h-bold pt-20">Time Tracking</h3>
                          <p className="paragraph">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
                    </div>
                   </div>
                   <div className="col-lg-4">
                    <div className=" benefit-box pt-20 ">
                          <div className="image flex-center-align">
                              <img src="/images/Group 125.png" className="flex-align-item"></img>                              
                          </div>
                          <h3 className="h-3 h-bold pt-20">Heading</h3>
                          <p className="paragraph">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
                      </div>
                   </div>
                    
                </div>
            </div>
            </section>
            <section className="Testimonial sp-90">
            <h1 className="h-1 h-bold text-center">Freelancers,small businesses and<br/>  independent contractors love Invoive Point</h1>
            <p className="paragraph text-center pt-10">lorem Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
                <div className="container">
                    <div className="test mt-90">
                        <img src="/images/Ellipse 4.png" className="testImg"></img>
                    </div>

                </div>
            </section>
            <section className="plans sp-90">
            <h1 className="h-1 h-bold text-center">Plans</h1>
            <p className="paragraph text-center pt-10">lorem Lorem ipsum dolor sit amet, consetetur.</p>
                <div className="container flex-column">
                    <div className="row sp-60">
                    <div className="col-lg-3">
                        <div className="planBox br-8 pl-20">
                                <h6 className="h-6 pt-15">Intro</h6>
                                <h3 className="h-3 h-bold pt-15 pr- 20">$30 <span className="planMonth">/month</span></h3>
                                <p className="planPara pt-15">orem ipsum dolor sit amet, consetetur sadipscing <br/> diam nonumy eirmod tempor invidunt ut labore.</p>
                                <div className="para-10 mt-10 pt-10">
                                    <img src="/images/Group65.png"></img> <span>Lorem ipsum dolor sit amet, miaamore </span>
                                </div>
                                <div className="para-10 mt-10 ">
                                    <img src="/images/Group65.png"></img> <span>Lorem ipsum dolor sit amet, miaamore </span>
                                </div>
                                <div className="para-10 mt-10 ">
                                    <img src="/images/Group65.png"></img> <span>Lorem ipsum dolor sit amet, miaamore </span>
                                </div>
                                <div className="para-10 mt-10 ">
                                    <img src="/images/Group65.png"></img> <span>Lorem ipsum dolor sit amet, miaamore </span>
                                </div>
                                <div className="para-10 mt-10 ">
                                    <img src="/images/Group65.png"></img> <span>Lorem ipsum dolor sit amet, miaamore </span>
                                </div>
                                <button className="l-btn br-8 mt-20">Choose Plan</button>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="planBox br-8 pl-20">
                                <h6 className="h-6 pt-15">Intro</h6>
                                <h3 className="h-3 h-bold pt-15 pr- 20">$30 <span className="planMonth">/month</span></h3>
                                <p className="planPara pt-15">orem ipsum dolor sit amet, consetetur sadipscing <br/> diam nonumy eirmod tempor invidunt ut labore.</p>
                                <div className="para-10 mt-10 pt-10">
                                    <img src="/images/Group65.png"></img> <span>Lorem ipsum dolor sit amet, miaamore </span>
                                </div>
                                <div className="para-10 mt-10 ">
                                    <img src="/images/Group65.png"></img> <span>Lorem ipsum dolor sit amet, miaamore </span>
                                </div>
                                <div className="para-10 mt-10 ">
                                    <img src="/images/Group65.png"></img> <span>Lorem ipsum dolor sit amet, miaamore </span>
                                </div>
                                <div className="para-10 mt-10 ">
                                    <img src="/images/Group65.png"></img> <span>Lorem ipsum dolor sit amet, miaamore </span>
                                </div>
                                <div className="para-10 mt-10 ">
                                    <img src="/images/Group65.png"></img> <span>Lorem ipsum dolor sit amet, miaamore </span>
                                </div>
                                <button className="l-btn br-8 mt-20">Choose Plan</button>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="planBox br-8 pl-20">
                                <h6 className="h-6 pt-15">Intro</h6>
                                <h3 className="h-3 h-bold pt-15 pr- 20">$30 <span className="planMonth">/month</span></h3>
                                <p className="planPara pt-15">orem ipsum dolor sit amet, consetetur sadipscing <br/> diam nonumy eirmod tempor invidunt ut labore.</p>
                                <div className="para-10 mt-10 pt-10">
                                    <img src="/images/Group65.png"></img> <span>Lorem ipsum dolor sit amet, miaamore </span>
                                </div>
                                <div className="para-10 mt-10 ">
                                    <img src="/images/Group65.png"></img> <span>Lorem ipsum dolor sit amet, miaamore </span>
                                </div>
                                <div className="para-10 mt-10 ">
                                    <img src="/images/Group65.png"></img> <span>Lorem ipsum dolor sit amet, miaamore </span>
                                </div>
                                <div className="para-10 mt-10 ">
                                    <img src="/images/Group65.png"></img> <span>Lorem ipsum dolor sit amet, miaamore </span>
                                </div>
                                <div className="para-10 mt-10 ">
                                    <img src="/images/Group65.png"></img> <span>Lorem ipsum dolor sit amet, miaamore </span>
                                </div>
                                <button className="l-btn br-8 mt-20">Choose Plan</button>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="planBox br-8 pl-20">
                                <h6 className="h-6 pt-15">Intro</h6>
                                <h3 className="h-3 h-bold pt-15 pr- 20">$30 <span className="planMonth">/month</span></h3>
                                <p className="planPara pt-15">orem ipsum dolor sit amet, consetetur sadipscing <br/> diam nonumy eirmod tempor invidunt ut labore.</p>
                                <div className="para-10 mt-10 pt-10">
                                    <img src="/images/Group65.png"></img> <span>Lorem ipsum dolor sit amet, miaamore </span>
                                </div>
                                <div className="para-10 mt-10 ">
                                    <img src="/images/Group65.png"></img> <span>Lorem ipsum dolor sit amet, miaamore </span>
                                </div>
                                <div className="para-10 mt-10 ">
                                    <img src="/images/Group65.png"></img> <span>Lorem ipsum dolor sit amet, miaamore </span>
                                </div>
                                <div className="para-10 mt-10 ">
                                    <img src="/images/Group65.png"></img> <span>Lorem ipsum dolor sit amet, miaamore </span>
                                </div>
                                <div className="para-10 mt-10 ">
                                    <img src="/images/Group65.png"></img> <span>Lorem ipsum dolor sit amet, miaamore </span>
                                </div>
                                <button className="l-btn br-8 mt-20">Choose Plan</button>
                        </div>
                    </div>

                    </div>
                </div>
            </section>
        <section className="freeTrial sp-90">
            <div className="container">
                <div className="row ">
                    <div className="col-lg-6 mt-90">
                        <h1 className="h_1 h-bold">Get Started For<br/>Free Today</h1>
                        <p className="paragraph pt-10">Download the App for Free</p>
                        <div className="google-buttons mt-50">
                               <button className="s-btn br-8 "> Get it Now<br/>Google Play</button>
                               <button className="s-btn br-8 ml-20">Get it Now<br/>Google Play</button>
                           </div>
                           
                           <div className="ticks flex mt-50">
                               <img src="/images/Group65.png" className="mr-10"></img>
                               <p>Money back gurantee</p>                   
                               <img src="/images/Group65.png" className="ml-50 mr-10"></img>
                               <p>Cancel Anytime</p>
                           </div>
                    </div>

                    <div className="col-lg-6">
                        <img src="/images/Mask Group 10.png" className="freeimg"></img>
                    </div>
                </div>
            </div>
        </section>
        
        </Fragment>
    )   
}

ReactDOM.render(<App />,document.querySelector('#root'));