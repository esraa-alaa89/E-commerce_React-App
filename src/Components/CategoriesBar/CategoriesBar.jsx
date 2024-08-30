/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import NavbarStyle from '../Navbar/NavbarStyle.module.css';
import sliderImg1 from '../../Assets/Images/slider-img1.jpeg';
import sliderImg2 from '../../Assets/Images/slider-img2.png';
import appleImg from '../../Assets/Images/apple.png';
import Slider from "react-slick";
import { Sidebar } from "flowbite-react";
import { HiDesktopComputer, HiOutlineUserGroup, HiInbox, HiShoppingBag, HiUser } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export default function CategoriesBar() {
    // slider-settings
    let sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return <>

        <section className='sideBar pt-lg-5'>
            <div className="container ms-0 ps-0">
                <div className="row">
                    {/* sidebar  */}
                    <section className='col-md-4'>
                        <Sidebar aria-label="Sidebar with multi-level dropdown example">
                            <Sidebar.Items>
                                <Sidebar.ItemGroup>
                                    <Sidebar.Collapse icon={HiShoppingBag} label="Woman’s Fashion">
                                        <Sidebar.Item>
                                            <Link className='text-red-600' to='/categories/womens-dresses'>Womens Dresses</Link>
                                        </Sidebar.Item>
                                        <Sidebar.Item>
                                            <Link className='text-red-600' to='/categories/womens-jewellery'>
                                                Womens Jewellery
                                            </Link>
                                        </Sidebar.Item>
                                        <Sidebar.Item>
                                            <Link className='text-red-600' to='/categories/womens-bags'>Womens Bags</Link>
                                        </Sidebar.Item>
                                        <Sidebar.Item>
                                            <Link className='text-red-600' to='/categories/womens-shoes'>
                                                Womens Shoes
                                            </Link>
                                        </Sidebar.Item>
                                    </Sidebar.Collapse>

                                    <Sidebar.Collapse icon={HiOutlineUserGroup} label="Men's Fashion">
                                        <Sidebar.Item>
                                            <Link className='text-red-600' to='/categories/mens-shirts'>
                                                Mens Shirts
                                            </Link>
                                        </Sidebar.Item>
                                        <Sidebar.Item>
                                            <Link className='text-red-600' to='/categories/mens-shoes'>
                                                Mens Shoes
                                            </Link>
                                        </Sidebar.Item>
                                        <Sidebar.Item>
                                            <Link className='text-red-600' to='/categories/mens-watches'>
                                                Mens Watches
                                            </Link>
                                            </Sidebar.Item>
                                    </Sidebar.Collapse>
                                    <Sidebar.Collapse icon={HiDesktopComputer} label="Electronics">
                                        <Sidebar.Item>
                                            <Link className='text-red-600' to='/categories/laptops'>
                                                Laptops
                                            </Link>
                                        </Sidebar.Item>
                                        <Sidebar.Item>
                                            <Link className='text-red-600' to='/categories/tablets'>
                                                Tablets
                                            </Link>
                                        </Sidebar.Item>
                                        <Sidebar.Item>
                                            <Link className='text-red-600' to='/categories/smartphones'>
                                                Smart Phones
                                            </Link>
                                        </Sidebar.Item>
                                    </Sidebar.Collapse>
                                    <Sidebar.Item className='text-start'>
                                        <Link className='text-start' to='/categories/home-decoration' icon={HiInbox}>
                                            Home & Lifestyle
                                        </Link>
                                    </Sidebar.Item>
                                    <Sidebar.Item>
                                        <Link to='/categories/skin-care' icon={HiUser}>
                                            Skin care
                                        </Link>
                                    </Sidebar.Item>
                                    <Sidebar.Item>
                                        <Link to='/categories/sports-accessories' icon={HiShoppingBag}>
                                            Sports and Outdoors
                                        </Link>
                                    </Sidebar.Item>
                                </Sidebar.ItemGroup>
                            </Sidebar.Items>
                        </Sidebar>
                    </section>

                    {/* slider-container  */}
                    <div className={`${NavbarStyle.firstSlider} col-md-8`}>
                        <div className="slider-container">
                            <Slider ref={slider => (sliderRef = slider)} {...settings}>
                                <div className={NavbarStyle.slide}>
                                    <div className="row">

                                        <div className="col-6">
                                            <div className={NavbarStyle.textSlider}>
                                                <div className={`${NavbarStyle.brandImg} d-flex align-items-center`}>
                                                    <img className='img-fluid' src={appleImg} alt="" />
                                                    <span>iPhone 14 Series</span>
                                                </div>
                                                <h3>Up to 10% off Voucher</h3>
                                                <Link to='/'>
                                                    Shop Now<i className="fa-solid fa-arrow-right ps-3"></i>
                                                </Link>
                                            </div>
                                        </div>  

                                        <div className={`col-6 ${NavbarStyle.imgSlider}`}>
                                            <img className='img-fluid' src={sliderImg1} alt="" />
                                        </div>
                                    </div> 

                                </div>

                                <div className={NavbarStyle.slide}>
                                    <div className="row">

                                        <div className="col-6">
                                            <div className={NavbarStyle.textSlider}>
                                                <div className={NavbarStyle.brandImg}>
                                                    <span className={NavbarStyle.categorySlide}>Categories</span>
                                                </div>
                                                <h3>Enhance Your Music Experience</h3>
                                                <Link to='/' className={NavbarStyle.categoryLink}>Buy Now!</Link>
                                            </div>
                                        </div>  

                                        <div className={`col-6 ${NavbarStyle.imgSlider}`}>
                                            <img className='img-fluid' src={sliderImg2} alt="" />
                                        </div>
                                    </div> 

                                </div>  
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
