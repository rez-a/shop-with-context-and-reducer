import { ADD_TO_CART, CART_EMPTY, CHECKOUT, DECREASE_PRODUCT, INCREASE_PRODUCT, REMOVE_FROM_CART } from "./actionTypes"

const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }
}
const increaseProduct = (id) => {
    return {
        type: INCREASE_PRODUCT,
        payload: id
    }
}
const decreaseProduct = (id) => {
    return {
        type: DECREASE_PRODUCT,
        payload: id
    }
}
const cartEmpty = () => {
    return {
        type: CART_EMPTY
    }
}
const checkout = () => {
    return {
        type: CHECKOUT
    }
}

export {
    addToCart,
    removeFromCart,
    increaseProduct,
    decreaseProduct,
    cartEmpty,
    checkout
}