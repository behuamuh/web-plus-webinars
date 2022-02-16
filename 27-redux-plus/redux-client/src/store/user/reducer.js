import { handleActions } from 'redux-actions';
import { cartAddItem } from './actions';

const initialState = {
  tax: 13,
  cart: []
}

const userReducer = handleActions({
  [cartAddItem]: (state, action) => ({ ...state, cart: [...state.cart, action.payload] }),
}, initialState);

export default userReducer
