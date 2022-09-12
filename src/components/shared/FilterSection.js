import React, { useState, useContext } from 'react';

//icons
import col6 from '../../assets/images/col-6.png';
import col4 from '../../assets/images/col-4.png';
import col3 from '../../assets/images/col-3.png';
import { CgMenuRight } from "react-icons/cg";

//styles
import styles from './FilterSection.module.css';

//components
import RangeSlider from './RangeSlider';

//context
import { FilterProductsContext } from '../../context/FilterProductsContextProvider';

const FilterSection = ({ setGrid }) => {
    const [showFilters, setShowFilters] = useState(false);
    const { setFilterCategory, setSortPrice } = useContext(FilterProductsContext);
    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className={`col d-flex align-items-center justify-content-end py-2 ${styles.filterSection}`}>
                        <div className={` ${styles.filtersItem}`}>
                            <a className="text-dark d-flex" onClick={() => setShowFilters(!showFilters)}>
                                <span className='fs-4 d-inline-flex me-2'><CgMenuRight /></span>
                                Filters
                            </a>
                        </div>
                        <div className={` ${styles.filtersItem}`}>
                            <select defaultValue='defult' name="filterPrice" className={styles.filterPrice} onChange={(event) => setSortPrice(event.target.value)}>
                                <option value="defult">Defult</option>
                                <option value="hight">Hight price</option>
                                <option value="low">Low price</option>
                            </select>
                        </div>
                        <div className={`${styles.changeGrid} d-flex  ${styles.filtersItem}`}>
                            <button onClick={() => setGrid("col-lg-3 col-md-4 col-sm-6 col-12")}><img src={col3} className='img-fluid' alt='grid' /></button>
                            <button onClick={() => setGrid("col-md-4 col-sm-6 col-12")} className='mx-2'><img src={col4} className='img-fluid' alt='grid' /></button>
                            <button onClick={() => setGrid("col-sm-6 col-12")}><img src={col6} className='img-fluid' alt='grid' /></button>
                        </div>
                    </div>

                </div>
            </div>
            <div className={`${showFilters ? styles.filterBox : styles.filterBoxHide} border-bottom`}>
                <div className="container py-4" >
                    <div className="row align-items-center">
                        <div className="col-md-8 col-12 mb-5 mb-md-0">
                            <p className='fw-bold'>Choose Categories</p>
                            <div className='row flex-wrap'>
                                <a onClick={() => setFilterCategory('All')} className='btn btn-link text-dark col-4 text-start'>All</a>
                                <a onClick={() => setFilterCategory('Shoes')} className='btn btn-link text-dark col-4 text-start'>Shoes</a>
                                <a onClick={() => setFilterCategory('Clothes')} className='btn btn-link text-dark col-4 text-start'>Clothes</a>
                                <a onClick={() => setFilterCategory('Electronics')} className='btn btn-link text-dark col-4 text-start'>Electronics</a>
                                <a onClick={() => setFilterCategory('Furniture')} className='btn btn-link text-dark col-4 text-start'>Furniture</a>
                                <a onClick={() => setFilterCategory('Others')} className='btn btn-link text-dark col-4 text-start'>Others</a>
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