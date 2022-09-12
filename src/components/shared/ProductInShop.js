import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import BtnDark from './BtnDark';

//styles
import styles from './ProductInShop.module.css';

//icon
import { FaEye } from "react-icons/fa";

//context
import { ModalContext } from '../../context/ModalContextProvider';


const ProductInShop = ({ grid, product }) => {
    const { title, price, images, id } = product;
    const { setShowModal } = useContext(ModalContext);
    return (
        <div className={grid}>
            <div className={`card border-0 bg-transparent ${styles.card}`}>
                <div className={`w-100 ${styles.imgContent}`}>
                    <img src={images[0]} className={`card-img-top img-fluid h-100 ${styles.imgProduct}`} alt={title} />
                    <div onClick={() => setShowModal(product)} className={styles.btnQuickView}>
                        <BtnDark width='w-100' text={<div className='d-flex align-items-center justify-content-center'><FaEye /><span className='ms-2'>Quick View</span></div>} />
                    </div>
                </div>
                <div className="card-body text-center">
                    <Link to={`./product-details/${id}`} className={styles.title}>{title}</Link>
                    <h5 className="card-text text-center mt-2">${price}</h5>
                </div>
            </div>
        </div>
    );
};

export default ProductInShop;