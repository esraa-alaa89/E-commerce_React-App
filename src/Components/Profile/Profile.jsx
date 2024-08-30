/* eslint-disable no-unused-vars */
import React, { useContext, useRef } from 'react'
import { UserContext } from '../../Context/UserContext';
import { Sidebar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Profile() {
    const {userToken, setUserToken}= useContext(UserContext);
    function saveUserData() {
     Swal.fire({
        icon:'success',
        title:'Information saved successfully'
     })   
    }

    return <>

        <section className='sideBar pt-5'>
            <div className="container">
                <div className="row">
                    {/* sidebar  */}
                    <section className='col-lg-4'>
                        <dl>
                            <dt className='pb-2'>Manage My Account</dt>
                            <dd className='py-2 pl-5'>
                                <Link to='/profile'>My Profile</Link>
                            </dd>
                            <dd className='py-2 pl-5'>
                                <Link to='/categories/womens-dresses'>Address Book</Link>
                            </dd>
                            <dd className='py-2 pb-4 pl-5'>
                                <Link to='/categories/womens-dresses'>My Payment Options</Link>
                            </dd>

                            <dt className='pb-2'>My Orders</dt>
                            <dd className='py-2 pl-5'>
                            <Link to='/categories/womens-dresses'>My Returns</Link>
                            </dd>
                            <dd className='py-2 pb-4 pl-5'>
                            <Link to='/categories/womens-dresses'>My Cancellations</Link>
                            </dd>
                            <dt className='pb-4'>My WishList</dt>
                        </dl>
                    </section>

                    <section className='col-lg-8'>
                        <span className='block text-lg text-black-700 pb-3'>Edit Your Profile</span>
                        <div className="profileData row gx-3">
                            <div className="col-6">
                                <div className='editProfile my-3'>
                                    <label className='text-lg text-gray-400' htmlFor="">First Name</label>
                                    <input className='form-control py-1 my-2 border border-1 bg-light-subtle ' type="text" />
                                </div>
                            </div>
                           
                            <div className="col-6">
                                <div className='editProfile my-3 '>
                                    <label className='text-lg text-gray-400' htmlFor="">Last Name</label>
                                    <input className='form-control py-1 my-2 border border-1 bg-light-subtle ' type="text" />
                                </div>
                            </div>
                            
                            <div className="col-6">
                                <div className='editProfile my-3'>
                                    <label className='text-lg text-gray-400' htmlFor="">Email</label>
                                    <input className='form-control py-1 my-2 border border-1 bg-light-subtle ' type="email" />
                                </div>
                            </div>

                            <div className="col-6">
                                <div className='editProfile my-3'>
                                    <label className='text-lg text-gray-400' htmlFor="">Address</label>
                                    <input className='form-control py-1 my-2 border border-1 bg-light-subtle ' type="text" />
                                </div>
                            </div>
                            
                            <div className="col">
                                <div className='editProfile my-3'>
                                    <label className='text-lg text-gray-400' htmlFor="">Password Changes<span className='text-danger'>*</span></label>
                                    <input className='form-control py-1 my-3 border border-1 bg-light-subtle ' type="password" placeholder='Current Password' />
                                    <input className='form-control py-1 my-3 border border-1 bg-light-subtle ' type="password" placeholder='New Password' />
                                    <input className='form-control py-1 my-3 border border-1 bg-light-subtle ' type="password" placeholder='Confirm new password' />
                                </div>
                            </div>
                            

                            <div>
                                <button onClick={()=>saveUserData()} className='btn btn-danger px-4 py-2 my-3'>Save Changes</button>
                            </div>
                            
                        </div>
                        
                    </section>
                </div>
            </div>
        </section>
    </>
}
