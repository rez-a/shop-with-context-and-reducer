import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

//components
import Navbar from './Navbar';

//style
import styles from './Header.module.css';

//context
import { FilterProductsContext } from '../../context/FilterProductsContextProvider';

const Header = () => {
    const { pathname } = useLocation();
    const { setFilterCategory } = useContext(FilterProductsContext);
    return (
        <header className={pathname === '/products' ? styles.header : null}>
            <Navbar />
            {
                pathname === '/products' ?
                    <div className="container pt-5">
                        <div className="row pt-5">
                            <div className="col mt-5">
                                <h2 className='mb-3 mt-4 text-center'>Shop</h2>
                                <ul className='ps-0 d-flex align-items-center justify-content-center categories'>
                                    <li className='mx-3'><a onClick={() => setFilterCategory('All')} className={`text-muted ${styles.category}`}>All</a></li>
                                    <li className='mx-3'><a onClick={() => setFilterCategory('Clothes')} className={`text-muted ${styles.category}`}>Clothes</a></li>
                                    <li className='mx-3'><a onClick={() => setFilterCategory('Shoes')} className={`text-muted ${styles.category}`}>Shoes</a></li>
                                    <li className='mx-3'><a onClick={() => setFilterCategory('Furniture')} className={`text-muted ${styles.category}`}>Furniture</a></li>
                                </ul>
                            </div>
                        </div>
                    </div> :
                    <div className={styles.separator}></div>
            }

        </header>
    );
};

export default Header;