import React, { useEffect, useState } from 'react';
import Service from './Service';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='lg:my-24'>
            <h1 className='text-5xl font-bold text-center my-12  text-violet-500 '>Our Services</h1>
            <div className='grid lg:grid-cols-4  md:grid-cols-4 mx-auto gap-3  px-24'>
                {
                    services.map(s => <Service
                        key={s.id}
                        s={s}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;