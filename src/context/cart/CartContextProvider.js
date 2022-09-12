import React, { createContext, useReducer } from 'react';
import reducer from './reducer';

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
    const initialState = {
        cart: [],
        itemCount: 0,
        total: 0,
        shippingCost: 0
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;