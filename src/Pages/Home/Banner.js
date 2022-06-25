import React from 'react';
import banner from '../../assets/images/news2.jpg'
import Button from '../Button';
// import icon1 from '../../assets/images/airbnb.png';
// import icon2 from '../../assets/images/google.png';
// import icon3 from '../../assets/images/netflix.png';
// import icon4 from '../../assets/images/slack.png';
// import icon5 from '../../assets/images/uber.png';
import './Banner.css';
import Logo from './Logo';


const Banner = () => {
    return (
        <div >
            <div className="hero h-screen ">
                <div className="hero-content  flex-col  lg:flex-row-reverse">
                    <img src={banner} className="h-full" alt='banner-img' />
                    <div>
                        <h1 className="text-5xl font-bold text-purple-500">Lets Your Brand Growth With Us</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Button >Get Started</Button>

                    </div>
                </div>
            </div>
            <Logo></Logo>
            {/* <div className='grid grid-cols-5 lg:gap-12 gap-6 lg:h-0.5   lg:px-48  px-12 items-center lg:my-12  my-24'>
                <img src={icon4} alt="slack icon" />
                <img src={icon5} alt="uber icon" />
                <img src={icon1} alt="anb icon" />
                <img src={icon2} alt="google icon" />
                <img src={icon3} alt="netflix icon" />

            </div> */}
        </div>
    );
};

export default Banner;