/* eslint-disable no-unused-vars */
import React from 'react'

export default function Contact() {
    return <>
      <section className='contact pt-5'>
                <div className="row gx-lg-5">
                    {/* left contact  */}
                    <section className='col-lg-4 mb-5'>
                       <div className='shadow-xl p-4'>
                        <div className="left-contact">
                          <div className="flex items-center pb-3">
                            <div className='w-1/10 h-1/10 p-3 border rounded-full bg-red-600 text-light-lg flex justify-center items-center me-3'>
                              <i className="fa-solid fa-phone text-light"></i>
                            </div>
                            <span className='text-xl text-black-600'>Call To Us</span>
                          </div>

                          <div className='pb-2'>
                            <span className='text-md text-black-400'>We are available 24/7, 7 days a week.</span>
                          </div>
                          <div className='pb-3'>
                            <span className='text-md text-black-400'>Phone: +8801611112222</span>
                          </div>

                        </div>

                        <div className="left-contact">
                          <div className="flex items-center pb-3">
                            <div className='w-1/10 h-1/10 p-3 border rounded-full bg-red-600 text-light-lg flex justify-center items-center me-3'>
                              <i className="fa-solid fa-message text-red-700 text-light"></i>
                            </div>
                            <span className='text-xl text-black-600'>Write To US</span>
                          </div>

                          <div className='pb-2'>
                            <span className='text-md text-black-400'>
                              Fill out our form and we will contact you within 24 hours.
                            </span>
                          </div>
                          <div className='pb-2'>
                            <span className='text-md text-black-400'>Emails: customer@exclusive.com</span>
                          </div>
                          <div className='pb-2'>
                            <span className='text-md text-black-400'>Emails: support@exclusive.com</span>
                          </div>

                        </div>
                       </div>
                    </section>

                    {/* right contact */}
                    <section className='col-lg-8 mb-5'>
                      <div className='shadow-xl p-3'>
                        <div className="profileData row gx-3">
                            <div className="col-md-6 col-lg-4">
                                <div className='editProfile my-3'>
                                    <input className='form-control py-1 my-2 border border-1 bg-light-subtle ' type="text" placeholder='Your Name' />
                                </div>
                            </div>
                           
                            <div className="col-md-6 col-lg-4">
                                <div className='editProfile my-3 '>
                                    <input className='form-control py-1 my-2 border border-1 bg-light-subtle ' type="email" placeholder='Your Email' />
                                </div>
                            </div>
                            
                            <div className="col-md-6 col-lg-4">
                                <div className='editProfile my-3'>
                                    <input className='form-control py-1 my-2 border border-1 bg-light-subtle ' type="text" placeholder='Your Address' />
                                </div>
                            </div>

                            <div className="col">
                              <textarea className='form-control py-1 my-2 border border-1 bg-light-subtle' rows={5} cols={5} name="" id="">Your Message</textarea>
                            </div>
                            

                            <div>
                                <button className='btn btn-danger px-4 py-2 my-3'>Send Messages</button>
                            </div>
                            
                        </div>
                      </div>
                    </section>
                </div>
        </section>
    </>
}
