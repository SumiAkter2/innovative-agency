import React from 'react';
import img1 from '../../assets/images/607567c8223a2fe5df41c91c_Email Templates.png';
import img2 from '../../assets/images/design1.jpg';
import img3 from '../../assets/images/design2.jpg';

const WorkShow = () => {
    return (
        <div className='bg-base-300 mx-12 rounded-md'>
            <h1 className='text-5xl font-bold text-center my-12  text-violet-500 '>Our work</h1>
            <div class="h-96 carousel carousel-vertical rounded-box lg:mx-96">
                <div class="carousel-item h-full">
                    <img src={img3} alt='img' />
                </div>
                <div class="carousel-item  h-full">
                    <img src={img1} alt='img' />
                </div>
                <div class="carousel-item h-full">
                    <img src={img2} alt='img' />
                </div>

            </div>
        </div>
    );
};

export default WorkShow;