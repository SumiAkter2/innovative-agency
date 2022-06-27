import React, { useEffect, useState } from 'react';
import ReviewHome from './ReviewHome';

const ViewReview = ({ v }) => {
    const [value, setValue] = useState([]);
    useEffect(() => {
        fetch('https://warm-refuge-78132.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setValue(data));
    }, [])
    return (
        <div>
            <h1 className='text-xl font-bold  mt-16 text-center text-blue-500'>We Are The Best</h1>
            <h1 className='text-4xl font-bold  text-center text-blue-500'>Our Client Review</h1>
            <div className='grid my-12 lg:grid-cols-3 md:grid-cols-2 gap-3 px-12'>

                {
                    value.map(v => <ReviewHome key={v._id} v={v}></ReviewHome>


                    )
                }


            </div>
        </div>
    );
};

export default ViewReview;