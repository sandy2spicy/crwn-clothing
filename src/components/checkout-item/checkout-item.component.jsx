import { connect } from 'react-redux';
import { addItem, clearItem, removeItem } from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss'


const CheckoutItem = ({ item, clearItem, addItem, removeItem}) => {
  const { name, imageUrl, quantity, price } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <div className="arrow" onClick={() => {removeItem(item)}}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => {addItem(item)}}>&#10095;</div>
      </div>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => {
        clearItem(item)
      }}>&#10005;</div>
    </div>
  );
};

const mapDispatchToStates = (dispatch) => {
  return {
    clearItem: (item) => {
      dispatch(clearItem(item))
    },
    removeItem: (item) => {
      dispatch(removeItem(item))
    },
    addItem: (item) => {
      dispatch(addItem(item))
    },
  }
}

export default connect(null, mapDispatchToStates)(CheckoutItem);
