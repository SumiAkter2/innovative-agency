import React from 'react';
import img1 from '../../assets/images/graphic.jpg'
import img2 from '../../assets/images/web.jpg';
import img3 from '../../assets/images/image1-9.jpeg';
import img4 from '../../assets/images/seo-23789741.jpg';
import img5 from '../../assets/images/Types-of-Digital-Marketing.png';
import Service from './Service';
const Services = () => {
    const services = [{
        id: 1,
        img: 'img2',
        name: 'Web & Mobile Design',
        des: 'lorem dlff lskdfjadh sdgfds '
    },
    {
        id: 2,
        img: 'img3',
        name: 'Web Development',
        des: 'lorem dlff lskdfjadh sdgfds '
    },
    {
        id: 3,
        img: 'img1',
        name: 'Graphic Design',
        des: 'lorem dlff lskdfjadh sdgfds '
    },
    {
        id: 4,
        img: 'img4',
        name: 'Seo',
        des: 'lorem dlff lskdfjadh sdgfds '
    },
    {
        id: 5,
        img: 'img5',
        name: 'Digital Marketing ',
        des: 'lorem dlff lskdfjadh sdgfds '
    },
    ]
    return (
        <div>
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;