import React, { useState } from 'react';
import Slider from 'react-slick';
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/images/607567c8223a2fe5df41c91c_Email Templates.png';
import img2 from '../../assets/images/design1.jpg';
import img3 from '../../assets/images/design2.jpg';

const images = [img1, img2, img3];

const Sliders = () => {
    const NextArrow = ({ onClick }
    ) => {
        return (
            <div className='arrow next' onClick={onClick}>
                left </div>

        );
    };
    const PreArrow = ({ onClick }
    ) => {
        return (
            <div className='arrow pre' onClick={onClick}>
                right </div>

        );
    };
    const [imageIndex, setImageIndex] = useState(0);
    const settings = {
        infinite: true,
        slidesToShow: 3,
        lazyLoad: true,
        speed: 300,
        centerMode: 0,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        preArrow: <PreArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    }
    return (
        <div className='App'>
            <Slider {...settings}>
                {
                    images.map((img, index) => (
                        <div className={index === imageIndex ? 'slide activeSlide' : 'slide'}>
                            <img src={img} alt="{img}" />
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default Sliders;
