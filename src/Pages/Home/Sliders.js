import React from 'react';
import Carousel from 'carousel-react-rcdev'
import img2 from '../../assets/images/design1.jpg';
import img3 from '../../assets/images/design2.jpg';

const Sliders = () => {

    return (
        <div className='lg:px-96 px-6 mt-24'>
            <h1 className='text-5xl font-bold text-center mb-20  text-violet-500 '>Our work</h1>
            <div >
                <Carousel className='w-full bg-base-300 '>
                    <img className='mx-2' style={{ 'width': '400px' }} src='https://i.ibb.co/PcqxWW0/templete4.jpg' alt='img' />
                    <img className='mx-2' style={{ 'width': '400px' }} src='https://i.ibb.co/d65bqMw/temple3.jpg' alt='img' />
                    <img className='mx-2' style={{ 'width': '400px' }} src='https://i.ibb.co/zfJKmFV/templete2.jpg' alt='img' />
                    <img className='mx-2' style={{ 'width': '400px' }} src='https://i.ibb.co/7GzDjwM/templete1.jpg' alt='imagem' title='imagem' />
                    <img className='mx-2' style={{ 'width': '400px' }} src='https://i.ibb.co/mTfxN5V/templete5.png' alt='imagem' title='imagem' />
                    <img className='mx-2' style={{ 'width': '400px' }} src='https://i.ibb.co/f8QM51w/tem7.jpg' alt='imagem' title='imagem' />
                    <img className='mx-2' style={{ 'width': '400px' }} src={img2} alt='imagem' title='imagem' />
                    <img className='mx-2' style={{ 'width': '400px' }} src={img3} alt='imagem' title='imagem' />
                </Carousel>
            </div>
        </div>

    );
};

export default Sliders;