import React from 'react';
import swal from 'sweetalert';
const AddProducts = () => {

    const handleAddService = e => {
        e.preventDefault();
        const addServices = {
            name: e.target.name.value,
            price: e.target.price.value,
            img: e.target.imgOption.value,
            des: e.target.area.value,
        }
        console.log(addServices);
        fetch('https://warm-refuge-78132.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(addServices),
        }).then(res => res.json())
            .then(data => {
                swal({
                    text: 'Success To Add New Product !!',
                    icon: 'success'
                })
            })
    }
    return (
        <div className='lg:px-12 '>

            <h1 class=" text-5xl font-bold text-violet-500 my-6">Add Services </h1>
            <div class="divider w-full"></div>
            <form onSubmit={handleAddService} className='grid mx-6 w-full'>

                <input name='name' className='input font-bold mt-2 input-bordered' placeholder='Type Service Name' required></input>

                <input name='price' className='input font-bold mt-2 input-bordered' placeholder='Type Service Price' required></input>

                <select name='imgOption' class="select   input mt-2 input-bordered  ">

                    <option selected>https://i.ibb.co/pjXCS7v/seo-23789741.jpg</option>
                    <option>https://i.ibb.co/vVhTC9W/mobile-app.jpg</option>
                    <option>https://i.ibb.co/TwctN4z/cyber.png</option>
                    <option>https://i.ibb.co/7ndfYxd/ethical.jpg</option>

                </select>
                <textarea type="text" name='area' placeholder="Type Description" class="textarea  mt-2 input-bordered text-black font-bold h-36 " required />
                <button type='submit' className='btn text-white  bg-gradient-to-r from-violet-700 font-bold mt-6 '>Submit</button>
            </form>

        </div>

    );
};

export default AddProducts;