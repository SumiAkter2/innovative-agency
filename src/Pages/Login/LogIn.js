import React from 'react';
import auth from '../../firebase.init'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
// import Button from '../Button';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
const LogIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useSignInWithEmailAndPassword(auth);
    if (error || error1) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading || loading1) {
        return <p>Loading...</p>;
    }
    if (user || user1) {
        console.log(user);
        return (
            navigate('/team')
        );
    }
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password, data.displayName)
        console.log(data.email, data.password, data.displayName, user1);

    };
    console.log(user);

    return (
        <div className='flex-col  justify-center  items-center '>
            <div className='card  mt-6'>
                <div className='flex  justify-center items-center  h-screen  mb-0 '>
                    <form onSubmit={handleSubmit(onSubmit)} className='lg:w-96  p-4 rounded-lg border-8 shadow-2xl'>
                        <fieldset>
                            <legend className='text-3xl font-bold uppercase text-violet-600 my-6'>Log In</legend>

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
                            <button className='w-full mt-12 mb-6 btn btn-active bg-gradient-to-r from-violet-400  font-bold text-xl' type='submit'>LOG IN</button>
                            <p>New Here?<Link className='text-violet-600' to='/signup'>Create an new account</Link></p>
                        </fieldset>
                    </form>

                </div>
                <p class="divider mt-0  lg:w-96 mx-auto text-violet-600">OR</p>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline lg:w-96 w-64 mx-auto hover:bg-indigo-500'>Google</button>

            </div>
        </div>



    );
};

export default LogIn;