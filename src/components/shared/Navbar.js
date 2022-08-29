import React from 'react';


//styles
import styles from './Navbar.module.css';

//images
import logo from '../../assets/images/logo.png';

//components
import BtnXBgWhite from './BtnXBgWhite';
import QuickCart from './QuickCart';

//icons
import { BsBasket2 } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";



const Navbar = () => {
    return (
        <nav className="navbar bg-transparent position-relative">
            <div className="container align-items-center">
                <div className={styles.btnToggle}><button><HiMenu /></button></div>
                <div className={`${styles.menu}`}>
                    <div className={`${styles.titleMenu} align-items-center justify-content-between`}>
                        <p className='fw-bold mb-0'>Menu</p>
                        <BtnXBgWhite />
                    </div>
                    <a className={`d-flex navbar-brand ${styles.logo}`} href="#">
                        <img src={logo} className="img-fluid" alt="logo" />
                    </a>
                    <ul className={`navbar-nav me-auto mb-2 mb-md-0 d-flex flex-row ${styles.menuList}`}>
                        <li className="nav-item">
                            <a className="nav-link mx-3 active" aria-current="page" href="#">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-3" href="#">Cart</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.cartContent}>
                    <span className={`badge rounded-pill bg-danger position-absolute fw-normal start-100 translate-middle ${styles.count}`}>1</span>
                    <span className={styles.basket}><BsBasket2 /></span>
                </div>
            </div>
            <QuickCart />
        </nav>
    );
};

export default Navbar;