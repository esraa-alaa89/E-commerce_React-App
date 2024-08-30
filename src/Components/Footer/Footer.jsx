import React from 'react'
import FooterStyle from './FooterStyle.module.css';

export default function Footer() {
  return <>
    <footer className={`${FooterStyle.footer} py-5`}>
      <div className="container">
        <div className="row g-4">

        <div className="col">
            <h3>Exclusive</h3>
            <h4>Subscribe</h4>
            <ul>
              <li>Get 10% off your first order</li>
            </ul>
            <div className={FooterStyle.footerSendEmail}>
              <input type="text" placeholder='Enter your email' />
              <i className="fa-solid fa-share"></i>
            </div>
          </div>

          <div className="col">
            <h4>Support</h4>
            <ul>
              <li>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </ul>
          </div>

          <div className="col">
            <h4>Account</h4>
            <ul>
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>

          <div className="col">
            <h4>Quick Link</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>

          
          <div className="col">
            <h4>Download App</h4>
            <ul>
              <li>Save $3 with App New User Only</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
            </ul>
            <ul className={`${FooterStyle.footerIconsList} cursor-pointer`}>
              <li><i className='fa-brands fa-facebook'></i></li>
              <li><i className='fa-brands fa-twitter'></i></li>
              <li><i className='fa-brands fa-instagram'></i></li>
              <li><i className='fa-brands fa-linkedin'></i></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </>
}
