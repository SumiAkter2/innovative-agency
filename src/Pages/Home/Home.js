import React from 'react';
import { useState } from 'react';
import ViewReview from '../DashBoard/ViewReview';
import Banner from './Banner';
import Services from './Services';
import Spinner from './Spinner';
import WorkShow from './WorkShow';
// import Sliders from './Sliders';

const Home = () => {
    const [loading] = useState(false);
    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <div>

            <Banner></Banner>

            <Services></Services>
            <WorkShow></WorkShow>
            <ViewReview></ViewReview>

        </div>
    );
};

export default Home;