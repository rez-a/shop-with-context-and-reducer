import React, { useState, useContext } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getProduct } from '../services/api';
import loader from '../assets/images/spinner.gif';
import { Toast } from '../helper/helper';
import { addToCart, removeFromCart, increaseProduct, decreaseProduct } from '../context/cart/actionCreators';

//components
import Category from './shared/Category';
import BtnDark from './shared/BtnDark';

//icons
import { BsBasket2 } from "react-icons/bs";
import { BiPlus, BiMinus, BiTrash } from "react-icons/bi";
import { FaTwitter, FaFacebookF, FaPinterestP } from "react-icons/fa";

//style
import styles from './ProductDetails.module.css';

//context
import { CartContext } from '../context/cart/CartContextProvider';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { error, isLoading } = useQuery(['product', id], getProduct, {
        onSuccess: (response) => setProduct(response.data),
        onError: () => Toast.fire({
            icon: 'error',
            title: 'Something went wrong'
        })
    })
    const { state, dispatch } = useContext(CartContext);
    const { cart } = state;
    const isProductInCart = cart.find(product => product.id === Number(id));


    if (isLoading || error) return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-2 mx-auto">
                    <img src={loader} className='img-fluid' alt="loader" />
                </div>
            </div>
        </div>
    )
    return (
        <div className="container mb-5">
            <div className="row g-3 align-items-start">
                <div className="col-xl-6 col-lg-4 text-center">
                    <Carousel showIndicators={false} showStatus={false} interval={3000} infiniteLoop={true} autoPlay>
                        {
                            product.images.map((img, index) => <img key={index} src={img} className="img-fluid " alt={product.title} />)
                        }
                    </Carousel>
                </div>
                <div className="col-xl-6 col-lg-8 col-12">
                    <div className="p-0 p-lg-3">
                        <Category category={product.category.name} />
                        <h5 className="title mt-3">{product.title}</h5>
                        <h4 className='text-danger fw-bold price'>${product.price}</h4>
                        <p className="desc text-muted">{product.description}</p>
                        <p className='category text-muted'>Category : <span className='text-dark'>{product.category.name}</span></p>
                        <div className='d-flex mb-3'>
                            {
                                isProductInCart ?
                                    <>
                                        {
                                            isProductInCart.qty > 1 ?
                                                <span onClick={() => dispatch(decreaseProduct(Number(id)))}><BtnDark width='w-auto' text={<BiMinus />} /></span> :
                                                <span onClick={() => dispatch(removeFromCart(Number(id)))}><BtnDark width='w-auto' text={<BiTrash />} /></span>
                                        }
                                        <div className={styles.qty}>{isProductInCart.qty}</div>
                                        <span onClick={() => dispatch(increaseProduct(Number(id)))}><BtnDark width='w-auto' text={<BiPlus />} /></span>
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

export default ProductDetails;