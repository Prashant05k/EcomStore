export const addToCart = (cartData) => {
    // console.log(cartData)
    return {
        type: 'ADD_TO_CART',
        payload: cartData
    }
}

export const removeFromCart = (cartData) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: cartData
    }
}