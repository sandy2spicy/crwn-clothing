import { createSelector } from "reselect";

const selectCart = (state) => {
  return state.cart;
};

export const selectCartItems = createSelector([selectCart], (cart) => {
  return cart.cartItems;
});

export const selectCartHidden = createSelector([selectCart], (cart) => {
  return cart.hidden;
});


export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity;
    }, 0);
  }
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity * cartItem.price;
    }, 0);
  }
);
