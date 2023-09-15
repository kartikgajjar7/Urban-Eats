import { useSelector } from "react-redux/es/hooks/useSelector";

const Cart = () => {
  const cart_items = useSelector((state) => state.cart.items);
  console.log(cart_items);
  return <div>cart_items.map()</div>;
};
export default Cart;
