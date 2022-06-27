import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import icon from '../../assets/images/idea.png'
import auth from '../../firebase.init';
import Button from '../Button';



const Navbar = ({ children }) => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        // localStorage.removeItem('accessToken');
    };

    return (
        <div>
            <div class="drawer drawer-end ">
                <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex  flex-col">
                    {/* <!-- Navbar --> */}
                    <div class="w-full navbar  lg:px-12   bg-gradient-to-r from-violet-400">
                        <div class="flex-1 px-2 mx-2 font-bold text-xl uppercase ">
                            <img src={icon} style={{ 'width': '60px' }} alt="icon" />
                            Innovative<br />
                            Agency </div>
                        <div class="flex-none lg:hidden">

                            <label for="my-drawer-3" class="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>

                        </div>



                        <div class="flex-none hidden lg:block font-bold  ">
                            <ul class="menu menu-horizontal ">
                                {/* <!-- Navbar menu content here --> */}
                                <li >  <NavLink to='/' className='rounded-lg  mr-4'>Home</NavLink></li>
                                {
                                    user ? <li >  <NavLink to='/addOrder' className='rounded-lg  mr-4'>Order</NavLink></li> : ''
                                }
                                <li >  <NavLink to='/dashboard' className='rounded-lg  mr-4'>Dashboard</NavLink></li>
                                <li > <NavLink className='rounded-lg mr-4' to='/portfolio'>Portfolio</NavLink></li>
                                <li > <NavLink className='rounded-lg mr-4' to='/team'>Our Team</NavLink></li>
                                <li ><NavLink className='rounded-lg mr-4' to='/contact'>Contact Us</NavLink></li>

                                {user ? <NavLink onClick={logout} className='rounded-lg ' to='/login'><Button>Sign Out</Button></NavLink> : <NavLink className='rounded-lg mr-4' to='/login'><Button>Log In</Button></NavLink>}


                            </ul>
                        </div>
                    </div>
                    {children}
                    {/* <!-- Page content here --> */}

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-3" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-40 bg-transparent">

                        <li >  <NavLink className='rounded-lg mb-4' to='/'>Home</NavLink></li>
                        {
                            user ? <li >  <NavLink to='/addOrder' className='rounded-lg  mb-4'>Order</NavLink></li> : ''
                        }
                        <li >  <NavLink to='/dashboard' className='rounded-lg  mb-4'>Dashboard</NavLink></li>
                        <li > <NavLink className='rounded-lg mb-4' to='/portfolio'>Portfolio</NavLink></li>
                        <li > <NavLink className='rounded-lg mb-4' to='/team'>Our Team</NavLink></li>
                        <li ><NavLink className='rounded-lg mb-4' to='/contact'>Contact Us</NavLink></li>
                        {user ? <NavLink onClick={logout} className='rounded-lg ' to='/login'><Button>Sign Out</Button></NavLink> : <NavLink className='rounded-lg mb-4' to='/login'><Button>Log In</Button></NavLink>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Navbar;