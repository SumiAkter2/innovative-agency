import React from 'react';
import { NavLink } from 'react-router-dom';
import icon from '../../assets/images/idea.png'



const Navbar = ({ children }) => {
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
                                <li > <NavLink className='rounded-lg mr-4' to='/portfolio'>Portfolio</NavLink></li>
                                <li > <NavLink className='rounded-lg mr-4' to='/team'>Our Team</NavLink></li>
                                <li ><NavLink className='rounded-lg mr-4' to='/contact'>Contact Us</NavLink></li>
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
                        <li > <NavLink className='rounded-lg mb-4' to='/portfolio'>Portfolio</NavLink></li>
                        <li > <NavLink className='rounded-lg mb-4' to='/team'>Our Team</NavLink></li>
                        <li ><NavLink className='rounded-lg mb-4' to='/contact'>Contact Us</NavLink></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Navbar;