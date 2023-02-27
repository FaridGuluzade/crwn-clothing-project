import { CartItemContainer, Name, ItemDetails } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${imageUrl}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {quantity} x {price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
