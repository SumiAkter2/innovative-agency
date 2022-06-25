
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import swal from 'sweetalert';
import auth from '../../firebase.init';
// import OrderDetails from './OrderDetails';

const Order = () => {
    const [user] = useAuthState(auth);
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [user?.email]);
    const handleDelete = (id) => {

        alert('Sure to delete?')

        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },
            // body: JSON.stringify(order),
        }).then(res => res.json())
            .then(data => {
                const restData = order.filter(o => o._id !== id)
                setOrder(restData);
                // swal('Are you sure to Delete your order??')
                console.log(data);
            })
    }



    return (
        <div className='w-full px-6 ' style={{ 'marginTop': '0px' }}>

            <h1 className='text-3xl font-bold text-violet-500 my-6'>My Orders:</h1>
            <div class="overflow-x-auto shadow-lg  top-24">
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
                            order.map((o, index,) => <tr>
                                <th>{index + 1}</th>
                                <div class="avatar">
                                    <div class="mask mask-squire w-12 h-12">
                                        <img src={o.img} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <td>{o.name}</td>
                                <td>{o.price}</td>
                                <td>{o.Address}</td>
                                <td>{o.Phone}</td>
                                <td>Pending</td>
                                <td><button onClick={() => handleDelete(o._id)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width='20px' style={{ color: 'red' }}><path d="M160 400C160 408.8 152.8 416 144 416C135.2 416 128 408.8 128 400V192C128 183.2 135.2 176 144 176C152.8 176 160 183.2 160 192V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V400zM320 400C320 408.8 312.8 416 304 416C295.2 416 288 408.8 288 400V192C288 183.2 295.2 176 304 176C312.8 176 320 183.2 320 192V400zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z" /></svg></button></td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Order;