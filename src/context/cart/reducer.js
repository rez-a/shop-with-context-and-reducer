import { ADD_TO_CART, CART_EMPTY, CHECKOUT, DECREASE_PRODUCT, INCREASE_PRODUCT, REMOVE_FROM_CART } from "./actionTypes";


const total = (cart) => {
    let total = cart.reduce((total, product) => total + (product.price * product.qty), 0);
    return total;
}

const reducer = (state, action) => {
    let newCart = [];
    switch (action.type) {
        case ADD_TO_CART:
            newCart = [...state.cart, { ...action.payload, qty: 1 }];
            break;
        case REMOVE_FROM_CART:
            newCart = state.cart.filter(product => product.id !== action.payload);
            break;
        case INCREASE_PRODUCT:
            newCart = state.cart.map(product => product.id === action.payload ? { ...product, qty: product.qty + 1 } : product);
            break;
        case DECREASE_PRODUCT:
            newCart = state.cart.map(product => product.id === action.payload ? { ...product, qty: product.qty - 1 } : product);
            break;
        case CHECKOUT:
        case CART_EMPTY:
            newCart = [];
            break;
        default:
            newCart = state.cart
    }
    return {
        cart: newCart,
        itemCount: newCart.length,
        total: total(newCart),
        shippingCost: total(newCart) > 1500 ? 0 : 5
    }
}

export default reducer;