import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//style
import styles from './QuickCart.module.css';

//components
import BtnXBgWhite from './BtnXBgWhite';
import BtnDark from './BtnDark';
import ProductInQuickCart from './ProductInQuickCart';

//context
import { CartContext } from '../../context/cart/CartContextProvider';

const QuickCart = ({ setShowQuickCart, showQuickCart }) => {
    const { state } = useContext(CartContext);
    const { cart, total } = state;
    return (
        <div className={showQuickCart ? `${styles.quickCart} ${styles.show}  position-fixed` : `${styles.quickCart}  position-fixed`}>
            <div className={`${styles.quickCartTitle} d-flex align-items-center justify-content-between w-100 p-3`}>
                <p className='mb-0'>Products List</p>
                <span onClick={setShowQuickCart}><BtnXBgWhite /></span>
            </div>
            <div className={styles.quickCartBody}>
                {
                    cart.length > 0 ?
                        <ul className={styles.productItems}>
                            {
                                cart.map(product => <ProductInQuickCart key={product.id} {...product} />)
                            }
                        </ul> :
                        <div className={`text-center p-3 m-2 text-danger ${styles.emptyCart}`}>Your shopping cart is empty</div>
                }
                <div className={`w-100 p-3 d-flex align-items-center justify-content-between ${styles.subTotal}`}>
                    <p className='mb-0 fs-5'>Subtotal</p>
                    <p className='mb-0 fs-5 fw-bold'>${total}</p>
                </div>
                <div className='p-3'>
                    <Link onClick={setShowQuickCart} to='/cart'><BtnDark width='w-100' text='Edit or View' /></Link>
                </div>
            </div>
        </div>
    );
};

export default QuickCart;