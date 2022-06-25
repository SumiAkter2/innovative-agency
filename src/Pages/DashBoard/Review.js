import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import swal from 'sweetalert';
import auth from '../../firebase.init';


const Review = () => {

    const [user] = useAuthState(auth);

    const handleReview = e => {
        e.preventDefault();
        const review = {
            name: user?.displayName,
            Address: e.target.address.value,
            rating: e.target.option.value,
            img: e.target.imgOption.value,
            comment: e.target.area.value,
        }
        fetch(`http://localhost:5000/review`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review),
        }).then(res => res.json())
            .then(data => {
                swal({
                    text: 'Success to add review !!',
                    icon: 'success'
                })
            });
    }

    // setValue('')
    return (
        <div>

            <div class="hero min-h-screen " style={{ "background-image": "url(https://i.ibb.co/dM4J166/review.png)" }} >
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center ">
                    <div class="max-w-md ">
                        <h1 class=" text-5xl font-bold text-white">Give Your Review </h1>
                        <h1 class="text-center mb-4 text-white font-bold text-3xl">......</h1>
                        <form onSubmit={handleReview} className='grid mx-6'>

                            <input type="text" value={user?.email} placeholder="Type here" class="input input-primary mt-2  text-black font-bold bg-base-200 w-full max-w-xs " />
                            <input type="text" value={user?.displayName} placeholder="Type Name" class="input input-primary mt-2  text-black font-bold bg-base-200 w-full max-w-xs" />

                            <input type="text" name='address' placeholder="Type address" class="input input-primary mt-2 input-bordered text-black font-bold bg-base-200 w-full max-w-xs" required />
                            <select name='option' class="select  mt-2 input-bordered text-violet-800 font-bold bg-gradient-to-r w-full max-w-xs">

                                <option  >1/5</option>
                                <option >1.5/5</option>
                                <option>2/5</option>
                                <option>2.5/5</option>
                                <option>3/5</option>
                                <option>3.5/5</option>
                                <option>4/5</option>
                                <option selected>4.5/5</option>
                                <option>5/5</option>
                            </select>
                            <select name='imgOption' class="select  input mt-2 input-bordered input-primary w-full max-w-xs">

                                <option selected> https://i.ibb.co/LY9tW3s/man1.jpg</option>
                                <option> https://i.ibb.co/QjDNCG1/man2.jpg</option>
                                <option>https://i.ibb.co/9hf9pYK/man4.png</option>
                                <option> https://i.ibb.co/kDcXCSs/man5.png</option>
                                <option> https://i.ibb.co/KhtfYz6/women1.jpg</option>
                                <option>https://i.ibb.co/rHHJGXH/women2.jpg</option>
                                <option>  https://i.ibb.co/3RKWRYz/women3.jpg</option>
                            </select>
                            <textarea type="text" name='area' placeholder="Type comment" class="textarea input-primary mt-2 input-bordered text-black font-bold bg-base-200 w-full h-36 max-w-xs" required />
                            <button type='submit' className='btn    max-w-xs text-white  bg-gradient-to-r from-violet-700 font-bold mt-6 w-48' >Submit</button>
                        </form>

                    </div>
                </div>






            </div>
        </div>

    );
};

export default Review;