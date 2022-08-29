import React from 'react';
import test from '../../assets/images/test.jpg';
//styles
import styles from './ProductInQuickCart.module.css';

//components
import BtnXBgGrey from './BtnXBgGrey';

const ProductInQuickCart = () => {
    return (
        <li className={`${styles.product} d-flex align-items-center justify-content-between p-3`}>
            <div className='d-flex align-items-center w-100'>
                <div className={styles.productImage}>
                    <img src={test} className='img-fluid' alt="test" />
                </div>
                <div className='ms-2'>
                    <p className={`mb-1 ${styles.title}`}>Women Striped Shirt Dress</p>
                    <p className={`mb-0 fs-5 fw-bold ${styles.price}`}>$129</p>
                </div>
            </div>
            <BtnXBgGrey />
        </li>
    );
};

export default ProductInQuickCart;