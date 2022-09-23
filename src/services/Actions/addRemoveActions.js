import * as types from "../../constants/ActionTypes";

export const addToCart = (cartData) => {
  // console.log(cartData)
  return {
    type: types.ADD_TO_CART,
    payload: cartData,
  };
};

export const removeFromCart = (cartData) => {
  return {
    type: types.REMOVE_FROM_CART,
    payload: cartData,
  };
};
