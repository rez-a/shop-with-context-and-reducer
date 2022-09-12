import React, { createContext, useState } from 'react';

export const FilterProductsContext = createContext();

const FilterProductsContextProvider = ({ children }) => {
    const [filterCategory, setFilterCategory] = useState('All');
    const [sortPrice, setSortPrice] = useState('defult');
    const [valueRange, setValueRange] = useState([0, 1000]);
    return (
        <FilterProductsContext.Provider value={{ filterCategory, setFilterCategory, sortPrice, setSortPrice, valueRange, setValueRange }}>
            {children}
        </FilterProductsContext.Provider>
    );
};

export default FilterProductsContextProvider;