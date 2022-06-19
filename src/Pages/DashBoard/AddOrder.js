import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import img from '../../assets/images/order2.jpg';
import auth from '../../firebase.init';
const AddOrder = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            {/* <h1 className='text-5xl mt-6 font-bold text-purple-500 text-center'>Add To Cart</h1> */}
            <div class="hero min-h-screen bg-base-100">
                <div className="hero-content  flex-col  lg:flex-row">
                    <img src={img} className="h-full" alt='order-img' />
                    <div>
                        <h1 class="text-5xl mb-6 font-bold text-purple-600">Please Add To Cart!</h1>
                        <form className=''>

                            <input type="text" placeholder="Type here" class="input mt-2 input-primary w-full max-w-xs" />
                            <input type="text" placeholder="Type here" class="input mt-2 input-primary w-full max-w-xs" />
                            <input type="text" placeholder="Type here" class="input mt-2 input-bordered input-primary w-full max-w-xs" />
                            <input type="text" placeholder="Type here" class="input mt-2 input-bordered input-primary w-full max-w-xs" />
                            <input type="text" placeholder="Type here" class="input mt-2 input-bordered input-primary w-full max-w-xs" />
                            <input type="text" placeholder="Type here" class="input mt-2 input-bordered input-primary w-full max-w-xs" />
                        </form>
                        <br />
                        <button class="btn my-2 bg-gradient-to-r from-violet-400  font-bold">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddOrder;