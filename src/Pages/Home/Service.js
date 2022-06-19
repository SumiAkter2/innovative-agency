import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


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
            <div class="card card-compact  shadow-xl" style={{ 'height': '600px' }}>
                <figure ><img src={s.img} alt="{s.img}" style={{ 'height': '200px' }} /></figure>
                <div class="card-body text-lg ">
                    <h2 class="card-title font-bold">{s.name}</h2>
                    <p className='text-2xl font-bold'>Course Fee: {s.price}</p>
                    <div class="rating rating-sm rating-half">
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

                    <p>{s.des}</p>
                    <button onClick={() => handleButton(s._id)} className=' py-2 btn border-0  bg-gradient-to-r from-violet-400  font-bold text-xl'>Details</button>
                </div>
            </div>
        </div>
    );
};

export default Service;