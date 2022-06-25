import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import img from '../../assets/images/order2.jpg';
import swal from 'sweetalert';

const AddOrder = () => {
    const [user] = useAuthState(auth);


    const handleOrder = (e) => {
        e.preventDefault();

        const order = {
            name: e.target.option.value,
            price: '3999tk',
            email: user?.email,
            userName: user?.displayName,
            Address: e.target.address.value,
            Phone: e.target.phone.value,
            img: e.target.imgOption.value,

        }


        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(order),
        })
            .then(res => res.json())
            .then(data => {
                swal({
                    text: 'Wow!!! Successfully Added !',
                    icon: 'success'
                });
                // setServices(data);

            })

    }
    return (
        <div>

            <div class="hero min-h-screen bg-base-100">
                <div className="hero-content  flex-col  lg:flex-row">
                    <img src={img} className="h-full" alt='order-img' />
                    <div>
                        <h1 class="text-5xl mb-6 font-bold text-purple-600"> Add Services</h1>
                        <form onSubmit={handleOrder} >

                            <input type="text" value={user?.email} placeholder="Type here" class="input mt-2 input-primary w-full max-w-xs" />
                            <input type="text" value={user?.displayName} placeholder="Type Name" class="input mt-2 input-primary w-full max-w-xs" />
                            <input type="text" name='address' placeholder="Type address" class="input mt-2 input-bordered input-primary w-full max-w-xs" />
                            <input type="text" name='phone' placeholder="Type phone" class="input mt-2 input-bordered input-primary w-full max-w-xs" />
                            <select name='option' class="select  input mt-2 input-bordered input-primary w-full max-w-xs">

                                <option selected>Web Development</option>
                                <option>Graphic Design</option>
                                <option>Digital Marketing</option>
                                <option>Web & Mobile Design</option>
                            </select>
                            <select name='imgOption' class="select  input mt-2 input-bordered input-primary w-full max-w-xs">

                                <option selected>https://i.ibb.co/rxy2gXR/web-development-coding-programming-internet-technology-business-concept-web-development-coding-progr.jpg</option>
                                <option>https://i.ibb.co/L9pMwfm/graphic.jpg</option>
                                <option>https://i.ibb.co/8g1QTGB/Types-of-Digital-Marketing.png</option>
                                <option>https://i.ibb.co/JkxcFxZ/image1-9.jpg</option>
                            </select>
                            <br />
                            <button type='submit' class="btn my-2 bg-gradient-to-r from-violet-400 w-full max-w-xs  font-bold">Add Services</button>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddOrder;