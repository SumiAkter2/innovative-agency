import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Review = () => {
    const [user] = useAuthState(auth);
    const [value, setValue] = useState('');
    const handleReview = e => {
        e.preventDefault();
        const review = {
            name: user?.displayName,
            Address: e.target.address.value,
            rating: e.target.option.value,
            comment: e.target.area.value,
        }
        setValue('')
        console.log(review);
    }
    return (
        <div class="hero min-h-screen " style={{ "background-image": "url(https://i.ibb.co/dM4J166/review.png)" }} >
            <div class="hero-overlay bg-opacity-50"></div>
            <div class="hero-content text-center ">
                <div class="max-w-md ">
                    <h1 class=" text-5xl font-bold text-white">Give Your Review </h1>
                    <h1 class="text-center mb-4 text-white font-bold text-5xl">..........</h1>
                    <form onSubmit={handleReview} className='grid mx-6'>

                        <input type="text" value={user?.email} placeholder="Type here" class="input input-primary mt-2  text-black font-bold bg-gradient-to-r from-violet-700 w-full max-w-xs " />
                        <input type="text" value={user?.displayName} placeholder="Type Name" class="input input-primary mt-2  text-black font-bold bg-gradient-to-r from-violet-700 w-full max-w-xs" />

                        <input type="text" name='address' placeholder="Type address" class="input input-primary mt-2 input-bordered text-black font-bold bg-gradient-to-r from-violet-700 w-full max-w-xs" />
                        <select name='option' class="select  input mt-2 input-bordered text-violet-800 font-bold bg-gradient-to-r from-violet-700 w-full max-w-xs">

                            <option selected >1/5</option>
                            <option >1.5/5</option>
                            <option>2/5</option>
                            <option>2.5/5</option>
                            <option>3/5</option>
                            <option>3.5/5</option>
                            <option>4/5</option>
                            <option>4.5/5</option>
                            <option>5/5</option>
                        </select>
                        <textarea type="text" name='area' placeholder="Type phone" class="textarea input-primary mt-2 input-bordered text-black font-bold bg-gradient-to-r from-violet-700  w-full h-36 max-w-xs" />
                        <button type='submit' className='btn  btn-primary  max-w-xs text-white  bg-gradient-to-r from-violet-700 font-bold mt-6 w-48'>Submit</button>
                    </form>

                </div>
            </div>
        </div>

    );
};

export default Review;