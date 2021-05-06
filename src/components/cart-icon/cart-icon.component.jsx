import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartDropDown } from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selector";
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleHidden: () => {
      dispatch(toggleCartDropDown());
    },
  };
};

const mapStateToProps = createStructuredSelector({
    itemCount:selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
