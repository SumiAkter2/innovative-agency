import React from 'react';
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
            {/* <Sliders></Sliders> */}
        </div>
    );
};

export default Home;