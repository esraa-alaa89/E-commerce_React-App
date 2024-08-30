/* eslint-disable no-unused-vars */
import React from 'react'
import aboutImg from '../../../Assets/Images/aboutImg.jpeg';
import aboutManager1 from '../../../Assets/Images/about-manager1.png';
import aboutManager2 from '../../../Assets/Images/about-manager2.png';
import aboutManager3 from '../../../Assets/Images/about-manager3.png';
import AboutStyle from './About.module.css'

export default function About() {
    return <>
      {/* section 1 */}
      <section className='about-rate mt-5'>
        <div className="row gx-md-5">
          <div className="col-md-6">
            <div className={AboutStyle.aboutStory}>
              <h2>Our Story</h2>
              <p>
                Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
              </p>
              <p>
                Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img className='img-fluid' src={aboutImg} alt="" />
          </div>
        </div>
    </section>

      {/* section 2 */}
      <section className='about-rate mt-5'>
        <div className="row gx-md-5">
          <div className="col-md-4 col-lg-3">
            <div className={AboutStyle.aboutRate}>
              <div className={AboutStyle.aboutIcon}>
                <i className="fa-solid fa-store"></i>
              </div>
              <h3>10.5k</h3>
              <span>Sallers active our site</span>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className={AboutStyle.aboutRate}>
              <div className={AboutStyle.aboutIcon}>
                <i className="fa-solid fa-dollar-sign"></i>
              </div>
              <h3>33k</h3>
              <span>Sallers active our site</span>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className={AboutStyle.aboutRate}>
              <div className={AboutStyle.aboutIcon}>
                <i className="fa-solid fa-shop"></i>
              </div>
              <h3>45.5k</h3>
              <span>Customer active in our site</span>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 m-auto">
            <div className={AboutStyle.aboutRate}>
              <div className={AboutStyle.aboutIcon}>
                <i className="fa-solid fa-sack-dollar"></i>
              </div>
              <h3>25k</h3>
              <span>Anual gross sale in our site</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* section 3 */}
      <section className='about-examples mt-5'>
        <div className="row gx-md-4">
          <div className="col-lg-4">
            <div className={AboutStyle.aboutExamples}>
              <img className='img-fluid' src={aboutManager1} alt="" />
              <div className={AboutStyle.aboutExamplesText}>
                <h4>Tom Cruise</h4>
                <span>Founder & Chairman</span>
                <div className={AboutStyle.aboutSocialIcons}>
                  <div><i className="fa-brands fa-linkedin"></i></div>
                  <div><i className="fa-brands fa-twitter"></i></div>
                  <div><i className="fa-brands fa-instagram"></i></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className={AboutStyle.aboutExamples}>
              <img className='img-fluid' src={aboutManager2} alt="" />
              <div className={AboutStyle.aboutExamplesText}>
                <h4>Emma Watson</h4>
                <span>Managing Director</span>
                <div className={AboutStyle.aboutSocialIcons}>
                  <div><i className="fa-brands fa-linkedin"></i></div>
                  <div><i className="fa-brands fa-twitter"></i></div>
                  <div><i className="fa-brands fa-instagram"></i></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className={AboutStyle.aboutExamples}>
              <img className='img-fluid' src={aboutManager3} alt="" />
              <div className={AboutStyle.aboutExamplesText}>
                <h4>Will Smith</h4>
                <span>Product Designer</span>
                <div className={AboutStyle.aboutSocialIcons}>
                  <div><i className="fa-brands fa-linkedin"></i></div>
                  <div><i className="fa-brands fa-twitter"></i></div>
                  <div><i className="fa-brands fa-instagram"></i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 4 */}
      <section className='about-features my-5'>
        <div className="row gx-md-4">
          <div className="col-lg-3 m-auto">
            <div className={AboutStyle.aboutFeatures}>
              <div className={AboutStyle.aboutIcon}>
                <i className="fa-solid fa-motorcycle"></i>
              </div>
              <h4>FREE AND FAST DELIVERY</h4>
              <span>Free delivery for all orders over $140</span>
            </div>
          </div>
          <div className="col-lg-3 m-auto">
            <div className={AboutStyle.aboutFeatures}>
              <div className={AboutStyle.aboutIcon}>
                <i className="fa-solid fa-headphones"></i>
              </div>
              <h4>24/7 CUSTOMER SERVICE</h4>
              <span>Friendly 24/7 customer support</span>
            </div>
          </div>
          <div className="col-lg-3 m-auto">
            <div className={AboutStyle.aboutFeatures}>
              <div className={AboutStyle.aboutIcon}>
              <i className="fa-solid fa-award"></i>
              </div>
              <h4>MONEY BACK GUARANTEE</h4>
              <span>We reurn money within 30 days</span>
            </div>
          </div>
        </div>
      </section>
    </>
}
