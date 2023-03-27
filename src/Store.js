import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  cart: []
};

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = product => ({
  type: ADD_TO_CART,
  product
});

export const removeFromCart = index => ({
  type: REMOVE_FROM_CART,
  index
});

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.product];
    case REMOVE_FROM_CART:
      return state.filter((_, i) => i !== action.index);
    default:
      return state;
  }
};

const reducer = {
  cart: cartReducer
};

const store = configureStore({
  reducer
});

export default store;

