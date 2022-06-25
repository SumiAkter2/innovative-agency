import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddProducts = () => {
    const [user] = useAuthState(auth);
    const handleAddService = e => {
        e.preventDefault();
    }
    return (
        <div>

            <h1 class=" text-5xl font-bold text-white">Add Services </h1>
            <h1 class="text-center mb-4 text-white font-bold text-5xl">..........</h1>
            <form onSubmit={handleAddService} className='grid mx-6'>

                <input type="text" value={user?.email} placeholder="Type here" class="input input-primary mt-2  text-black font-bold bg-gradient-to-r from-violet-700 w-full max-w-xs " />
                <input type="text" value={user?.displayName} placeholder="Type Name" class="input input-primary mt-2  text-black font-bold bg-gradient-to-r from-violet-700 w-full max-w-xs" />

                <input type="text" name='address' placeholder="Type address" class="input input-primary mt-2 input-bordered text-black font-bold bg-gradient-to-r from-violet-700 w-96 max-w-xs" />
                <select name='option' class="select  mt-2 input-bordered text-violet-800 font-bold bg-gradient-to-r w-full max-w-xs">

                    <option selected >1/5</option>
                    <option >1.5/5</option>
                    <option>2/5</option>
                    <option>2.5/5</option>
                    <option>3/5</option>
                    <option>3.5/5</option>
                    <option>4/5</option>
                    <option>4.5/5</option>
                    <option>5/5</option>
                </select>
                <select name='imgOption' class="select  input mt-2 input-bordered input-primary w-full max-w-xs">

                    <option selected> https://i.ibb.co/LY9tW3s/man1.jpg</option>
                    <option> https://i.ibb.co/QjDNCG1/man2.jpg</option>
                    <option>https://i.ibb.co/9hf9pYK/man4.png</option>
                    <option> https://i.ibb.co/kDcXCSs/man5.png</option>
                    <option> https://i.ibb.co/KhtfYz6/women1.jpg</option>
                    <option>https://i.ibb.co/rHHJGXH/women2.jpg</option>
                    <option>  https://i.ibb.co/3RKWRYz/women3.jpg</option>
                </select>
                <textarea type="text" name='area' placeholder="Type phone" class="textarea input-primary mt-2 input-bordered text-black font-bold bg-gradient-to-r from-violet-700  w-full h-36 max-w-xs" />
                <button type='submit' className='btn  btn-primary  max-w-xs text-white  bg-gradient-to-r from-violet-700 font-bold mt-6 w-48'>Submit</button>
            </form>

        </div>

    );
};

export default AddProducts;