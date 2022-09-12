import React, { useState, useEffect, useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';


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

//context
import { CartContext } from '../../context/cart/CartContextProvider';



const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showQuickCart, setShowQuickCart] = useState(false);
    const { pathname } = useLocation();
    const [scroll, setScroll] = useState(0);
    useEffect(() => {
        window.document.addEventListener('scroll', () => setScroll(document.documentElement.scrollTop))
    }, [])
    const { state } = useContext(CartContext);
    const { itemCount } = state;

    return (
        <nav className={`navbar position-fixed w-100 top-0 ${styles.navbar} ${pathname === '/products' && scroll < 60 ? 'bg-transparent' : 'bg-white '}`}>
            <div className="container align-items-center">
                <div className={styles.btnToggle}><button onClick={() => setShowMenu(true)}><HiMenu /></button></div>
                <div className={showMenu ? `${styles.menu} ${styles.show}` : `${styles.menu}`}>
                    <div className={`${styles.titleMenu} align-items-center justify-content-between`}>
                        <p className='fw-bold mb-0'>Menu</p>
                        <span onClick={() => setShowMenu(false)}><BtnXBgWhite /></span>
                    </div>
                    <Link className={`d-flex navbar-brand ${styles.logo}`} to="/products">
                        <img src={logo} className="img-fluid" alt="logo" />
                    </Link>
                    <ul className={`navbar-nav me-auto mb-2 mb-md-0 d-flex flex-row ${styles.menuList}`}>
                        <li className="nav-item">
                            <Link onClick={() => setShowMenu(false)} className="nav-link mx-3" to="/products">Shop</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={() => setShowMenu(false)} className="nav-link mx-3" to="/cart">Cart</Link>
                        </li>
                    </ul>
                </div>
                <div onClick={() => setShowQuickCart(true)} className={styles.cartContent}>
                    <span className={`badge rounded-pill bg-danger position-absolute fw-normal start-100 translate-middle ${styles.count}`}>{itemCount}</span>
                    <span className={styles.basket}><BsBasket2 /></span>
                </div>
            </div>
            <QuickCart showQuickCart={showQuickCart} setShowQuickCart={() => setShowQuickCart(false)} />
        </nav>
    );
};

export default Navbar;