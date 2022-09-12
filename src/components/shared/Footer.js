import React from 'react';

//styles
import styles from './Footer.module.css';

//logo
import logoLight from '../../assets/images/logo-light.png';

//icons
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedin, FaLongArrowAltRight, FaHeart } from "react-icons/fa";

//images
import paymentMethod from '../../assets/images/payment.png';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-3 col-md-12 mb-3">
                        <div className={styles.logo}>
                            <img src={logoLight} className="img-fluid" alt='logo' />
                        </div>
                        <p className='text-muted mt-3 mb-lg-0 '>3298 Grant Street Longview, TX
                            United Kingdom 75601</p>

                        <p className='mb-0 text-muted'>1-202-555-0106</p>
                        <p className='text-muted'>help@shopper.com</p>
                        <ul className='social d-flex'>
                            <li className='me-3'><a className={styles.socialIcons} href="#"><FaFacebookF /></a></li>
                            <li className='me-3'><a className={styles.socialIcons} href="#"><FaTwitter /></a></li>
                            <li className='me-3'><a className={styles.socialIcons} href="#"><FaYoutube /></a></li>
                            <li className='me-3'><a className={styles.socialIcons} href="#"><FaInstagram /></a></li>
                            <li className='me-3'><a className={styles.socialIcons} href="#"><FaLinkedin /></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 mb-lg-0 mb-3">
                        <h6 className='text-white'>SUPPORTS</h6>
                        <ul className='social'>
                            <li className='mb-2'><a href="#">Contact Us</a></li>
                            <li className='mb-2'><a href="#">About Page</a></li>
                            <li className='mb-2'><a href="#">Size Guide</a></li>
                            <li className='mb-2'><a href="#">Shipping & Returns</a></li>
                            <li className='mb-2'><a href="#">FAQ's Page</a></li>
                            <li className='mb-2'><a href="#">Privacy</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 mb-lg-0 mb-3">
                        <h6 className='text-white'>SHOP</h6>
                        <ul className='social'>
                            <li className='mb-2'><a href="#">Men's Shopping</a></li>
                            <li className='mb-2'><a href="#">Women's Shopping</a></li>
                            <li className='mb-2'><a href="#">Kids's Shopping</a></li>
                            <li className='mb-2'><a href="#">Furniture</a></li>
                            <li className='mb-2'><a href="#">FAQ's Page</a></li>
                            <li className='mb-2'><a href="#">Discounts</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 mb-lg-0 mb-3">
                        <h6 className='text-white'>COMPANY</h6>
                        <ul className='social'>
                            <li className='mb-2'><a href="#">About</a></li>
                            <li className='mb-2'><a href="#">Blog</a></li>
                            <li className='mb-2'><a href="#">Affiliate</a></li>
                            <li className='mb-2'><a href="#">Login</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-12">
                        <h6 className='text-white'>SUBSCRIBE</h6>
                        <p className='text-muted'>Receive updates, hot deals, discounts sent straignt in your inbox daily</p>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Email Address" />
                            <span className="input-group-text bg-transparent border-0 p-0" id="basic-addon1"><button className={`btn ${styles.btnSubscribe}`}><FaLongArrowAltRight /></button></span>
                        </div>
                        <div>
                            <p className='text-white mb-0'>Secure Payments</p>
                            <div>
                                <img src={paymentMethod} className='img-fluid' alt="payment" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`p-3 ${styles.miniFooter}`}>
                <p className='text-muted mb-0 text-center'>Designed with <span className='text-danger'><FaHeart /></span> By <span className='text-white'>reza hasani</span>.</p>
            </div>
        </footer>
    );
};

export default Footer;