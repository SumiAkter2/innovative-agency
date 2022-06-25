import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button';
import Service from './Service';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className='mt-24 lg:mt-40'>
            <h1 className='text-5xl font-bold text-center mb-20  text-violet-500 '>Our Services</h1>
            <div className='grid lg:grid-cols-4  md:grid-cols-4 mx-auto gap-3 rounded-sm  px-12 lg:px-24 mb-12'>
                {
                    services.map(s => <Service
                        key={s._id}
                        s={s}
                    ></Service>)
                }

            </div>

        </div>
    );
};

export default Services;