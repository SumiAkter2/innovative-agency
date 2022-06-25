import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <div className=' grid items-center justify-center'>
            <h1 className='text-4xl font-bold my-6 text-center text-blue-500'>My Profile</h1>
            <div>
                <div class="card lg:w-96 bg-base-300 shadow-lg mx-12">
                    <figure class="px-10 pt-10">
                        <img src={user.photoURL} alt="man-img" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">{user.displayName}</h2>
                        <p>{user.email}</p>
                        <div class="card-actions">
                            <button class="btn mt-4 btn-primary border-0 bg-blue-500">LOG OUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;