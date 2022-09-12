import React, { useContext } from 'react';
import { addToCart, decreaseProduct, increaseProduct, removeFromCart } from '../../context/cart/actionCreators';
import { Link } from 'react-router-dom';

//style
import styles from './QuickViewProduct.module.css';

//components
import BtnDark from './BtnDark';
import BtnXBgGrey from './BtnXBgGrey';
import Category from './Category';
import { Carousel } from 'react-responsive-carousel';

//icons
import { BsBasket2 } from "react-icons/bs";
import { BiPlus, BiMinus, BiTrash } from "react-icons/bi";
import { FaTwitter, FaFacebookF, FaPinterestP } from "react-icons/fa";

//context
import { ModalContext } from '../../context/ModalContextProvider';
import { CartContext } from '../../context/cart/CartContextProvider';


const QuickViewProduct = ({ product }) => {
    const { images, title, description, price, category, id } = product;
    const { showModal, setShowModal } = useContext(ModalContext);
    const { state, dispatch } = useContext(CartContext);
    const { cart } = state;
    const isProductInCart = cart.find(product => product.id === id);
    return (
        <div className={`card mb-3 w-75 p-3 ${styles.modal} ${showModal ? styles.show : null}`} >
            <div className="row g-3 align-items-center">
                <div className="col-xl-4 text-center">
                    <Carousel showThumbs={false} showIndicators={false} showStatus={false} interval={3000} infiniteLoop={true} autoPlay>
                        {
                            images && images.map((image, index) => <img key={index} src={image} className="img-fluid " alt={title} />)
                        }
                    </Carousel>
                </div>
                <div className="col-xl-8 col-12">
                    <div className="card-body p-0 p-lg-3">
                        <div className='mb-3 d-flex align-items-center justify-content-between'>
                            <Category category={category?.name} />
                            <span onClick={() => setShowModal(false)}><BtnXBgGrey /></span>
                        </div>
                        <Link onClick={() => setShowModal(false)} className='text-dark' to={`product-details/${id}`}><h5 className="card-title">{title}</h5></Link>
                        <h4 className='text-danger fw-bold'>${price}</h4>
                        <p className="card-text text-muted">{description}</p>
                        <div className='d-flex mb-3'>
                            {
                                isProductInCart ?
                                    <>
                                        {
                                            isProductInCart.qty > 1 ?
                                                <span onClick={() => dispatch(decreaseProduct(id))}><BtnDark width='w-auto' text={<BiMinus />} /></span> :
                                                <span onClick={() => dispatch(removeFromCart(id))}><BtnDark width='w-auto' text={<BiTrash />} /></span>
                                        }
                                        <div className={styles.qty}>{isProductInCart.qty}</div>
                                        <span onClick={() => dispatch(increaseProduct(id))}><BtnDark width='w-auto' text={<BiPlus />} /></span>
                                    </> :
                                    <span onClick={() => dispatch(addToCart(product))}><BtnDark width='w-100' text={<><BsBasket2 /><span className='ms-2'>Add to Cart</span></>} /></span>
                            }
                        </div>
                        <div className="card-text d-flex align-items-center">
                            <small className="text-muted">Share:</small>
                            <ul className='d-flex'>
                                <li><a className={styles.shareItem} href="https://twitter.com/"><FaTwitter /></a></li>
                                <li><a className={styles.shareItem} href="https://www.facebook.com/"><FaFacebookF /></a></li>
                                <li><a className={styles.shareItem} href="https://pinterest.com/"><FaPinterestP /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickViewProduct;