import React from 'react';
import Spinner from '../Home/Spinner';

const Contact = () => {
    return (
        <div>
            <div className='my-48'>
                <h1 className='text-primary text-center font-bold text-2xl mb-24'>Working ...</h1>
                <Spinner />
            </div>
        </div>
    );
};

export default Contact;