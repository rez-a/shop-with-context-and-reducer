import React from 'react';

//style
import styles from './QuickCart.module.css';

//components
import BtnXBgWhite from './BtnXBgWhite';
import BtnDark from './BtnDark';
import ProductInQuickCart from './ProductInQuickCart';

const QuickCart = () => {
    return (
        <div className={`${styles.quickCart}  position-fixed`}>
            <div className={`${styles.quickCartTitle} d-flex align-items-center justify-content-between w-100 p-3`}>
                <p className='mb-0'>Products List</p>
                <BtnXBgWhite />
            </div>
            <div className={styles.quickCartBody}>
                <ul className={styles.productItems}>
                    <ProductInQuickCart />
                    <ProductInQuickCart />
                    <ProductInQuickCart />
                </ul>
                <div className={`w-100 p-3 d-flex align-items-center justify-content-between ${styles.subTotal}`}>
                    <p className='mb-0 fs-5'>Subtotal</p>
                    <p className='mb-0 fs-5 fw-bold'>$1023</p>
                </div>
                <div className='p-3'>
                    <BtnDark width='w-100' text='Edit or View' />
                </div>
            </div>
        </div>
    );
};

export default QuickCart;