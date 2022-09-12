import React, { useContext } from 'react';
import { removeFromCart } from '../../context/cart/actionCreators';

//styles
import styles from './ProductInQuickCart.module.css';

//icon
import { CgClose } from "react-icons/cg";

//components
import BtnXBgGrey from './BtnXBgGrey';

//context
import { CartContext } from '../../context/cart/CartContextProvider';

const ProductInQuickCart = ({ images, title, price, qty, id }) => {
    const { dispatch } = useContext(CartContext);
    return (
        <li className={`${styles.product} d-flex align-items-center justify-content-between p-3`}>
            <div className='d-flex align-items-center w-100'>
                <div className={styles.productImage}>
                    <img src={images[0]} className='img-fluid' alt="test" />
                </div>
                <div className='ms-2'>
                    <p className={`mb-1 ${styles.title}`}>{title}</p>
                    <p className={`mb-0 ${styles.price}`}><span className='me-2'>{qty}</span><CgClose /><span className='ms-2'>${price}</span></p>
                </div>
            </div>
            <span onClick={() => dispatch(removeFromCart(id))}><BtnXBgGrey /></span>
        </li>
    );
};

export default ProductInQuickCart;