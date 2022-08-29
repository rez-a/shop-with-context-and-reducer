import React from 'react';

//icons
import col12 from '../../assets/images/col-12.png';
import col4 from '../../assets/images/col-4.png';
import col3 from '../../assets/images/col-3.png';
import { CgMenuRight } from "react-icons/cg";

//styles
import styles from './FilterSection.module.css';
import RangeSlider from './RangeSlider';

const FilterSection = () => {
    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className={`col d-flex align-items-center justify-content-end py-2 ${styles.filterSection}`}>
                        <div className={` ${styles.filtersItem}`}>
                            <a className="text-dark d-flex" data-bs-toggle="collapse" href="#collapseFilter">
                                <span className='fs-4 d-inline-flex me-2'><CgMenuRight /></span>
                                Filters
                            </a>
                        </div>
                        <div className={` ${styles.filtersItem}`}>
                            <select name="filterPrice" className={styles.filterPrice}>
                                <option value="hight">Hight price</option>
                                <option value="low">Low price</option>
                            </select>
                        </div>
                        <div className={`${styles.changeGrid} d-flex  ${styles.filtersItem}`}>
                            <button className=''><img src={col3} className='img-fluid' alt='grid' /></button>
                            <button className='mx-2'><img src={col4} className='img-fluid' alt='grid' /></button>
                            <button className=''><img src={col12} className='img-fluid' alt='grid' /></button>
                        </div>
                    </div>

                </div>
            </div>
            <div className='border-bottom'>
                <div className="collapse container py-4" id="collapseFilter">
                    <div className="row align-items-center">
                        <div className="col-md-8 col-12 mb-5 mb-md-0">
                            <p className='fw-bold'>Choose Categories</p>
                            <div className='row flex-wrap'>
                                <a className='btn btn-link text-dark col-4 text-start'>Shoes</a>
                                <a className='btn btn-link text-dark col-4 text-start'>Clothes</a>
                                <a className='btn btn-link text-dark col-4 text-start'>Electronics</a>
                                <a className='btn btn-link text-dark col-4 text-start'>Furniture</a>
                                <a className='btn btn-link text-dark col-4 text-start'>Others</a>
                            </div>
                        </div>
                        <div className="col">
                            <p className='fw-bold'>Filter By Price</p>
                            <RangeSlider />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FilterSection;