import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Services from './Services';


const Service = ({ s }) => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handleButton = (id) => {
        console.log('allah');
        console.log(id, s);
        navigate(`services/${id}`);
    }

    return (
        <div>
            <div class="card card-compact rounded-sm shadow-xl  selection:bg-fuchsia-300 selection:text-fuchsia-900 mb-12" style={{ 'height': '700px' }}>
                <figure ><img src={s.img} alt="{s.img}" style={{ 'height': '200px' }} className='rounded-tr-lg rounded-bl-lg' /></figure>
                <div class="card-body lg:text-lg bg-slate-100">
                    <div class="divider"></div>

                    <div class=" rating rating-sm rating-half">
                        <input type="radio" name="rating-10" class="rating-hidden" />
                        <input type="radio" name="rating-10" class="bg-orange-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating-10" class="bg-orange-500 mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating-10" class="bg-orange-500 mask mask-star-2 mask-half-1" checked />
                        <input type="radio" name="rating-10" class="bg-orange-500 mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating-10" class="bg-orange-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating-10" class="bg-orange-500 mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating-10" class="bg-orange-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating-10" class="bg-orange-500 mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating-10" class="bg-orange-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating-10" class="bg-orange-500 mask mask-star-2 mask-half-2" />
                    </div>
                    <h2 class="card-title font-bold">{s.name}</h2>
                    <h2 className='lg:text-2xl font-bold'>Course Fee: {s.price}</h2>


                    <p className='lg:mt-6'>{s.des} .</p>
                    <div class="divider"></div>
                    <Link to='/addOrder'
                    >
                        <button onClick={() => handleButton(s._id)} className='  text-black
                         btn bg-gradient-to-r from-violet-400 border-0 bg-gray-400 py-2
                          rounded-sm font-bold rounded-tr-lg rounded-bl-lg'>Order Now</button></Link>


                </div>
            </div>
        </div>
    );
};

export default Service;