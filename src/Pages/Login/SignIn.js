import React, { useState } from 'react';
import auth from '../../firebase.init'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile, } from 'react-firebase-hooks/auth';

import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
const SignIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    // if (sending) {
    //     return <p>Sending...</p>;
    // }
    let signError;
    if (error || error1) {
        return (
            <div>
                {/* let signError:  <p>Error: {error.message || error1.message}</p> */}
            </div>
        );
    }
    if (loading || loading1) {
        return <p>Loading...</p>;
    }
    if (user || user1) {

        return (
            navigate('/team')
        );

    }
    const onSubmit = data => {
        createUserWithEmailAndPassword(data.email, data.password, data.name);
        updateProfile({ displayName: data.name });
        console.log('update done');
        console.log(data.email, data.password, data.name);
    };
    return (
        <div className='flex-col  justify-center  items-center '>
            <div className='card '>
                <div className='flex  justify-center items-center  h-screen   mt-24 lg:mt-6'>
                    <form onSubmit={handleSubmit(onSubmit)} className='lg:w-96 mx-4  p-4 rounded-lg border-8 shadow-2xl'>
                        <fieldset>
                            <legend className='text-3xl font-bold uppercase text-violet-600 my-6'>Sign Up</legend>
                            {/* name */}
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text font-bold">Name</span>

                                </label>
                                <input

                                    type="text" placeholder="Type Your Name" class="input input-bordered w-full max-w-xs shadow-lg"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            {/* //email */}
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text font-bold">Email</span>

                                </label>
                                <input

                                    type="email" placeholder="Type Email Address" class="input input-bordered w-full max-w-xs shadow-lg"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        }
                                    })} />
                                <label class="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>

                            </div>
                            {/* pass */}
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text font-bold">Password</span>

                                </label>
                                <input

                                    type="password" placeholder="Type Password" class="input input-bordered w-full max-w-xs shadow-lg"
                                    {...register("password", {
                                        required: {
                                            value: 6,
                                            message: 'Password required & Must be 6 characters or longer'
                                        }
                                    })} />
                                <label class="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>
                            {signError}
                            <button className='w-full mt-12 mb-6 btn btn-active bg-gradient-to-r from-violet-400  font-bold text-xl' type='submit'>Sign Up</button>
                            <p>Already have an account?<Link className='text-violet-600' to='/login'>Please log in</Link></p>
                        </fieldset>
                    </form>

                </div>
                <p class="divider lg:w-96 lg:mt-6 mt-24 mx-auto text-violet-600">OR</p>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline lg:w-96 w-64 mx-auto hover:bg-indigo-500'>Google Sign In</button>

            </div>
        </div>



    );
};

export default SignIn;