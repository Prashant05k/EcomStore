// let intialState = [];

const addRemoveCart = (state = [], action) => {
  // console.log(state)
  const { type, payload } = action;
  if (type === "ADD_TO_CART") {
    // state.push(payload)
    // return [...state, payload];
    return state.concat(payload)
  } else if (type === "REMOVE_FROM_CART") {
    state = state.filter((item) => item.id !== payload.id)
    return state;
  } else {
    return state;
  }
};

export default addRemoveCart;
