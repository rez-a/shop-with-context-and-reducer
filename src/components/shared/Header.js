import React from 'react';
import Navbar from './Navbar';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col mt-5">
                        <h2 className='mb-3 mt-4 text-center'>Shop</h2>
                        <ul className='ps-0 d-flex align-items-center justify-content-center categories'>
                            <li className='mx-3'><a href='#' className={`text-muted ${styles.category}`}>Electronics</a></li>
                            <li className='mx-3'><a href='#' className={`text-muted ${styles.category}`}>Clothes</a></li>
                            <li className='mx-3'><a href='#' className={`text-muted ${styles.category}`}>Shoes</a></li>
                            <li className='mx-3'><a href='#' className={`text-muted ${styles.category}`}>Furniture</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;