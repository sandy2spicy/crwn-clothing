import './cart-item.styles.scss'
const CartItem = ({imageUrl, name, price, quantity}) => {
  return (
      <div className="cart-item">
        <img alt="name" src={imageUrl}/>
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="name">
                {
                    `${quantity} x $${price}`
                }
            </span>
        </div>
      </div>
  )
}

export default CartItem;