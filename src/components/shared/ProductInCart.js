import React, { useContext } from 'react';
import { increaseProduct, decreaseProduct, removeFromCart } from '../../context/cart/actionCreators';

//components
import BtnDark from './BtnDark';
import BtnXBgGrey from './BtnXBgGrey';

//icons
import { BiPlus, BiMinus, BiTrash } from "react-icons/bi";

//style
import styles from './ProductInCart.module.css';

//context
import { CartContext } from '../../context/cart/CartContextProvider';

const ProductInCart = ({ images, title, price, qty, id }) => {
    const { dispatch } = useContext(CartContext);

    return (
        <div className='d-flex align-items-sm-center align-items-start justify-content-between py-3 border-bottom'>
            <div className='d-flex alin-items-start flex-sm-row flex-column'>
                <img src={images[0]} className={`img-fluid ${styles.image}`} alt="title" />
                <div className="desc ms-sm-3 mt-3 mt-sm-0">
                    <h5>{title}</h5>
                    <h5 className='my-3'>${price}</h5>
                    <div className='d-flex mb-3'>
                        {
                            qty > 1 ?
                                <span onClick={() => dispatch(decreaseProduct(id))}><BtnDark width='w-auto' text={<BiMinus />} /></span> :
                                <span onClick={() => dispatch(removeFromCart(id))}><BtnDark width='w-auto' text={<BiTrash />} /></span>
                        }
                        <div className={styles.qty}>{qty}</div>
                        <span onClick={() => dispatch(increaseProduct(id))}><BtnDark width='w-auto' text={<BiPlus />} /></span>
                    </div>
                </div>
            </div>
            <span onClick={() => dispatch(removeFromCart(id))}><BtnXBgGrey /></span>
        </div>
    );
};

export default ProductInCart;