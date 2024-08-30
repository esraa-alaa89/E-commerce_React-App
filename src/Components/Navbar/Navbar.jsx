/* eslint-disable no-unused-vars */
import React, { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { CartContext } from '../../Context/CartContext';
import NavbarStyle from './NavbarStyle.module.css';
import { WishListContext } from '../../Context/WishListContextProvider';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function NavTailwind() {
    const {userToken, setUserToken}= useContext(UserContext);
    const {counter}= useContext(CartContext);
    const {wishListCounter}= useContext(WishListContext);
    
    const logoutNavigate= useNavigate();
    function logout() {
        localStorage.removeItem('userToken');
        setUserToken(null);
        logoutNavigate('/login');
    }

    return <>
        {userToken !== null ? <nav className={NavbarStyle.firstNav}>
                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <Link className='cursor-pointer'>Shop Now</Link>
            </nav>
            :''
        }
        
        <Navbar expand="lg" className="bg-body-tertiary text-center">
            <Container>
                <Navbar.Brand as={Link} to="/" className='text-black-900 text-2xl'>Exclusive</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {userToken !== null ? <>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link className='text-black-600 text-lg px-lg-5' as={Link} to="/">Home</Nav.Link>
                            <Nav.Link className='text-black-600 text-lg px-lg-5' as={Link} to="/about">About</Nav.Link>
                            <Nav.Link className='text-black-600 text-lg px-lg-5' as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>

                        <Nav className="ms-auto">
                            <Nav.Link>
                                <input className="form-control me-2" type="search" placeholder="What are you looking for" aria-label="Search"/>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/wishlist">
                                <i className="fa-regular fa-heart"></i>
                                <sup className='text-danger fs-6'>{wishListCounter}</sup>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/cart">
                                <i className="fa-solid fa-bag-shopping"></i>
                                <sup className='text-danger fs-6'>{counter}</sup>
                            </Nav.Link>

                            <NavDropdown className='text-black-600 text-lg' as={Link} to="/profile" title="Account Info" id="basic-nav-dropdown">
                                <NavDropdown.Item className='text-black-600 text-lg' as={Link} to="/profile">My Account</NavDropdown.Item>
                                <NavDropdown.Item className='text-black-600 text-lg' as={Link} to="/signup">SignUp</NavDropdown.Item>
                                <NavDropdown.Item className='text-black-600 text-lg' as={Link} to="/login">Login</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className='text-black-600 text-lg'>
                                    <button onClick={()=>logout()}>Logout</button>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </> :   <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/signup">SignUp</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        </Nav>
                }
            </Container>
        </Navbar>
    </>
}
