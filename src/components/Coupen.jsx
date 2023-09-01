import { dividerClasses } from "@mui/material";
import Coupen_card from "./Coupen_card";
const Coupen = () => {
  return (
    <div className="coupen_cont">
      <Coupen_card
        offer="FLAT 10% OFF"
        code="USE CITIFOODIE | ABOVE ₹1200"
        icon_img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/Store_Assets/Icons/OfferIconCart"
      />
      <Coupen_card
        offer="40% OFF UPTO ₹120"
        code="USE AXIS40 | ABOVE ₹200 "
        icon_img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/rng/md/ads/production/32b9f8a87957f8c1ca369622f6a1ca77"
      />
      <Coupen_card
        offer="15% OFF UPTO ₹300"
        code="USE CITIFOODIE | ABOVE ₹1200"
        icon_img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/rng/md/ads/production/15fb1cfe885005447dc8375e7970600f"
      />
      <Coupen_card
        offer="20% OFF UPTO ₹80"
        code="USE ONECARD | ABOVE ₹250"
        icon_img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/rng/md/ads/production/6de08393313dbf29b8b4c610c30702ad"
      />
    </div>
  );
};
export default Coupen;
