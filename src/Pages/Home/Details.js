import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Details = () => {
    const { servicesId } = useParams();
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/services/${servicesId}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (

        <div className=''>
            <div class="hero min-h-screen bg-base-300 my-0">
                <div class="hero-content flex-col lg:flex-row my-0 bg-slate-400 shadow-lg  rounded-lg ">
                    <img src={services.img} className='w-2/4  rounded-lg ' alt="{s.img}" />
                    <div className='px-12'>
                        <h1 class="text-4xl font-bold">{services.name}</h1>
                        <p class="py-2 text-2xl font-bold " >Course Fee: {services.price}</p>
                        <div class="rating rating-md rating-half">
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
                        <p class="py-6 text-2xl">   {services.des}</p>
                        <Link to='/addOrder'> <button className=' py-2 btn border-0  bg-gradient-to-r from-violet-400  font-bold text-xl'>Order Now</button></Link>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Details;