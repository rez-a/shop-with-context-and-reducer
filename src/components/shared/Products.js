import React, { useState, useContext, useEffect } from 'react';
import { useQuery } from 'react-query';
import { getAllProducts } from '../../services/api';
import loader from '../../assets/images/spinner.gif';
import { Toast } from '../../helper/helper';

//components
import ProductInShop from './ProductInShop';
import BtnOutlineDark from './BtnOutlineDark';

//icon
import { TbRefresh } from "react-icons/tb";
import { TbFaceIdError } from "react-icons/tb";

//context
import { FilterProductsContext } from '../../context/FilterProductsContextProvider';

const Products = ({ grid }) => {
    const [products, setProducts] = useState([]);
    const [productsInPage, setProductsInPage] = useState([]);
    const [productsByFilter, setProductsByFilter] = useState([]);
    const { filterCategory, sortPrice, valueRange } = useContext(FilterProductsContext);
    const [page, setPage] = useState(1)
    const { error, isLoading } = useQuery('products', getAllProducts, {
        onSuccess: (response) => {
            setProducts([...response.data]);
            setProductsInPage([...response.data.filter(product => product.id >= (page - 1) * 20 && product.id <= page * 20)])
        },
        onError: () => Toast.fire({
            icon: 'error',
            title: 'Something went wrong'
        })
    })
    useEffect(() => {
        let newProductsList = [...productsInPage, ...products.filter(product => product.id >= (page - 1) * 20 && product.id <= page * 20)];

        setProductsInPage(newProductsList);
    }, [page])

    useEffect(() => {
        let newProductsList = filterCategory !== 'All' ? productsInPage.filter(product => product.category.name === filterCategory) : [...productsInPage];
        if (sortPrice === 'low') {
            newProductsList.sort((a, b) => a.price - b.price)
        } else if (sortPrice === 'hight') {
            newProductsList.sort((a, b) => b.price - a.price)
        }
        newProductsList = newProductsList.filter(product => product.price >= valueRange[0] && product.price <= valueRange[1])
        setProductsByFilter(newProductsList);
    }, [filterCategory, sortPrice, valueRange, productsInPage, products])

    const handleLoadMoreProducts = () => {
        setPage(prevPage => prevPage + 1);
        window.document.documentElement.scrollTop += (600 * (page + 1));
    }

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
        <div className='container my-5'>
            <div className="row g-3">
                {
                    productsByFilter.length > 0 ?
                        productsByFilter.map((product, index) => <ProductInShop key={index} grid={grid} product={product} />) :
                        <p className='text-center'><TbFaceIdError /> <span className='ms-2'>Among the available products, no products with this category were found. Use the load more button</span></p>
                }
            </div>
            {
                productsInPage.length !== products.length ?
                    <div className="row">
                        <div className="col-12 text-center mt-5">
                            <span onClick={handleLoadMoreProducts}><BtnOutlineDark width={'w-auto'} text={<div className='d-flex align-items-center justify-content-center'><TbRefresh /><span className='ms-2'>Load More</span></div>} /></span>
                        </div>
                    </div> :
                    null
            }
        </div>
    );
};

export default Products;