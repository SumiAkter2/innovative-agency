import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import OrderDetails from './OrderDetails';

const Order = () => {
    const [user] = useAuthState(auth);
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [user?.email])
    return (
        <div className='w-full px-6'>

            <h1 className='text-3xl font-bold text-violet-500 my-6'>My Orders:</h1>
            <div class="overflow-x-auto shadow-lg ">
                <table class="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Img</th>
                            <th>Course Name</th>
                            <th>Course Fee</th>

                            <th>location</th>
                            <th>Phone No</th>
                            <th>status</th>
                            <th>Action</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            order.map((o, index) => <OrderDetails
                                key={o._id}
                                index={index}
                                o={o}
                            ></OrderDetails>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Order;