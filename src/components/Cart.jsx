import { useSelector } from "react-redux/es/hooks/useSelector";

const Cart = () => {
  const cart_items = useSelector((state) => state.cart.items);
  console.log(cart_items);
  if (cart_items.length === 0) {
    return (
      <h1 className="text_item_m">
        {" "}
        DONT VISIT CART PAGE BEFORE ADDING ANY ITEM{" "}
      </h1>
    );
  }
  return (
    <div>
      {cart_items.map((item) => (
        <div className="wrapeitup">
          <h1 className="text_item_m">
            {item.Main_item.card.info.name} ₹
            {item.Main_item.card.info.price / 100}
          </h1>
          <ul>
            {item.addons.length === 0 ? (
              <li className="text_item_d sufhhd"> WITH NO ADDONS </li>
            ) : null}
            {item.addons?.map((items) => (
              <li className="text_item_d sufhhd">
                <strong>{items.name}</strong>{" "}
                {items?.price ? `₹${items.price / 100}` : "Free"}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Cart;
