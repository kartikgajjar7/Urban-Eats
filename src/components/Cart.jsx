import { useSelector } from "react-redux/es/hooks/useSelector";
import CartItem from "./CartItem";
const Cart = () => {
  const cart_items = useSelector((state) => state.cart.items);
  console.log(cart_items);
  // if (cart_items.length === 0) {
  //   return (
  //     <h1 className="text_item_m">
  //       {" "}
  //       DONT VISIT CART PAGE BEFORE ADDING ANY ITEM{" "}
  //     </h1>
  //   );
  // }
  return (
    <div className="sufhiee">
      <div className="h">
        <svg class="uHGrw" viewBox="0 0 32 32" height="18" width="18">
          <path d="M3.333 14.984l28.667-0v2.097l-0.16 0.006h-28.506l-0.16-0.16v-1.782l0.16-0.16zM1.114 14.986l10.079-10.079 0.121-0.108 1.465 1.467-0.101 0.127-10.079 10.079h-0.226l-1.26-1.26v-0.226zM12.679 25.676l0.108 0.117-1.468 1.484-0.126-0.115-10.079-10.079v-0.226l1.26-1.26h0.226l10.079 10.079zM3.268 12.87l0.272 0.116-0.022 6.125-0.272 0.114-3.245-3.18 0.111-0.112 3.157-3.062z"></path>
        </svg>

        <div className="divS">
          <h1 className="dssa">Foodie's Call</h1>
          <h1 className="dsssaa">2 items | ETC</h1>
        </div>
      </div>
      <div className="s">
        <h1 className="saadww">3 Saved!</h1>
        <h1 className="saadwws">On this order</h1>
      </div>
      <div className="ic">
        <CartItem />
      </div>
      <div className="sugc"></div>
      <div className="ici"></div>
      <div className="ins"></div>
      <div className="otpc"></div>
    </div>
  );
};

export default Cart;
