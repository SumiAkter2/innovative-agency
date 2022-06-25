import React from 'react';
import icon2 from '../../assets/images/airbnb.png';
import icon3 from '../../assets/images/google.png';
import icon1 from '../../assets/images/netflix.png';
import icon4 from '../../assets/images/slack.png';
import icon5 from '../../assets/images/uber.png';
const Logo = () => {
    return (
        <div>
            <div className='grid grid-cols-5 lg:gap-12 gap-6 lg:h-0.5   lg:px-48  px-12 items-center lg:my-12  mt-48'>
                <img src={icon4} alt="slack icon" />
                <img src={icon5} alt="uber icon" />
                <img src={icon1} alt="anb icon" />
                <img src={icon3} alt="google icon" />
                <img src={icon2} alt="netflix icon" />

            </div>
        </div>
    );
};

export default Logo;
