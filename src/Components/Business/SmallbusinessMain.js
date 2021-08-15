import React, { Fragment } from 'react';
import Banner from '../Business/Banner';
import Testimonial from '../Home/Testimonial';
import TryInvoice from '../Home/TryInvoice';
import Trial from '../Home/Trial';
import FeatureBusiness from './FeaturesBusiness';

function SmallbusinessMain(){
    return(
        <Fragment>
                <Banner/>
                <FeatureBusiness/>
                <TryInvoice/>
                <Testimonial/>
                <Trial/>
        </Fragment>
    )
}

export default SmallbusinessMain;