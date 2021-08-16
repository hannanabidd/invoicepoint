import React from 'react';
import Buttons from '../Common/Buttons';
import Ticks from '../Common/Ticks';

function Banner(){
    return(
        <section className="banner-freelancers sp-60 height-70 flex-center-align flex-column" style={{backgroundImage:"url(/images/freelancers-bg.png)"}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                   <h1 className="h-1 h-bold pb-20">INVOICING APP FOR <br/><span className="span-color">FREELANCERS</span> </h1>
                   <p className="paragraph pb-20">Save Time and Stay Oraganized</p>
                       <Buttons/>
                      <Ticks/>
                 </div>
                <div className="col-lg-6">
                </div>
            </div>
        </div>
    </section>
    )
}

export default Banner;