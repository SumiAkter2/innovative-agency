import React from 'react';
import ViewReview from '../DashBoard/ViewReview';
import Banner from './Banner';

import Services from './Services';
import WorkShow from './WorkShow';
// import Sliders from './Sliders';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Services></Services>
            <WorkShow></WorkShow>
            <ViewReview></ViewReview>
            {/* <Sliders></Sliders> */}
        </div>
    );
};

export default Home;