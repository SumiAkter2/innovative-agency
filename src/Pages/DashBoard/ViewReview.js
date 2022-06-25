import React, { useEffect, useState } from 'react';
import ReviewHome from './ReviewHome';

const ViewReview = ({ v }) => {
    const [value, setValue] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setValue(data));
    }, [])
    return (
        <div className='grid my-12 lg:grid-cols-3 md:grid-cols-2 gap-3 px-12'>

            {
                value.map(v => <ReviewHome key={v._id} v={v}></ReviewHome>


                )
            }


        </div>
    );
};

export default ViewReview;