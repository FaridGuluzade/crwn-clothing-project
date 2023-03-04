import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { ProductCardContainer, Footer } from "./product-card.styles";

const ProductCard = ({ product }) => {
  const dispacth = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, imageUrl, price } = product;

  const addProductToCart = () => dispacth(addItemToCart(cartItems, product));
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
