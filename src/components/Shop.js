import React, { useState } from 'react';
import ModalElm from './ModalElm';

//components
import FilterSection from './shared/FilterSection';
import Products from './shared/Products';

const Shop = () => {
    const [grid, setGrid] = useState("col-lg-3 col-md-4 col-sm-6 col-12");

    return (
        <>
            <FilterSection setGrid={setGrid} />
            <Products grid={grid} />
            <ModalElm />
        </>
    );
};

export default Shop;