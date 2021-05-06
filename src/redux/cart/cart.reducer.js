import CartActionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.util";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_ICON:
      return {
        ...currentState,
        hidden: !currentState.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...currentState,
        cartItems: addItemToCart(currentState.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...currentState,
        cartItems: removeItemFromCart(currentState.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_ITEM:
      return {
        ...currentState,
        cartItems: currentState.cartItems.filter((item) => {
          return item.id !== action.payload.id;
        }),
      };

    default:
      return currentState;
  }
};

export default cartReducer;
