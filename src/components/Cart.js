import React, { useContext } from 'react';
import cartEmptyIcon from '../assets/images/empty-cart.png';
import { checkout, cartEmpty } from '../context/cart/actionCreators';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

//components
import ProductInCart from './shared/ProductInCart';
import BtnOutlineDark from './shared/BtnOutlineDark';
import BtnDark from './shared/BtnDark';

//style
import styles from './Cart.module.css';

//context
import { CartContext } from '../context/cart/CartContextProvider';

const Cart = () => {
    const { state, dispatch } = useContext(CartContext);
    const { cart, itemCount, total, shippingCost } = state;

    const handleChekcout = () => {
        dispatch(checkout());
        Swal.fire(
            'Payment was successful!',
            'Thank you for your choice!',
            'success'
        )
    }
    const handleEmptyCart = () => {
        dispatch(cartEmpty());
        Swal.fire({
            icon: 'info',
            title: 'The shopping cart is empty!'
        })
    }
    return (
        <div className='container mb-5'>

            {
                cart.length > 0 ?
                    <div className="row justify-content-between align-items-start">
                        <div className="col-12">
                            <h1 className='text-center mb-5'>Shopping Cart</h1>
                        </div>
                        <div className={`col-lg-7 ${styles.allProducts}`}>
                            {
                                cart.map(product => <ProductInCart key={product.id} {...product} />)
                            }
                        </div>
                        <div className="col-lg-4 my-3 my-lg-0">
                            <div className={`card p-3 ${styles.bgGrey} mb-3`}>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex align-items-center justify-content-between py-3 bg-transparent"><span>Number of products</span><span className='fw-bold'>{itemCount}</span></li>
                                    <li className="list-group-item d-flex align-items-center justify-content-between py-3 bg-transparent"><span>Subtotal</span><span className='fw-bold'>${total}</span></li>
                                    <li className="list-group-item d-flex align-items-center justify-content-between py-3 bg-transparent"><span>shipping cost</span><span className='fw-bold'>${shippingCost}</span></li>
                                    <li className="list-group-item d-flex align-items-center justify-content-between py-3 bg-transparent"><span>Total</span><span className='fw-bold'>${total + shippingCost}</span></li>
                                </ul>
                                <small className='text-muted text-center mt-3'>Shipping is free for purchases over $1500</small>
                            </div>
                            <div onClick={handleChekcout}><BtnDark text='Checkout' width='w-100' /></div>
                            <div className='mt-3' onClick={handleEmptyCart}><BtnOutlineDark text='Empty the shopping cart' width='w-100' /></div>
                        </div>
                    </div> :
                    <div className="row text-center mb-5">
                        <div className="col-lg-2 col-md-4 col-6 mx-auto">
                            <img src={cartEmptyIcon} alt="cartEmpty" className='img-fluid' />
                        </div>
                        <h5 className='text-center my-3'>Your shopping cart is empty. Select a product!!!</h5>
                        <div>
                            <Link to='/products'>
                                <BtnDark text="back to Shop" width="w-auto" />
                            </Link>
                        </div>
                    </div>
            }


        </div>
    );
};

export default Cart;