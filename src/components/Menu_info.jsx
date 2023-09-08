import React, { useEffect, useState } from "react";
import Drop_cont from "./Drop_cont.jsx";
import Upperinfo from "./Upperinfo.js";
import Switch_veg from "./Switch_veg.jsx";
import Coupen from "./Coupen.jsx";
import { useEffect } from "react";
import Shimmer_cont from "./simmer_cont.jsx";
import Coupen_card from "./Coupen_card.jsx";
import { Link, json } from "react-router-dom";
import { useParams } from "react-router-dom";
import Shimmer_FOR_DETAIL from "./Shimmer_FOR_DETAIL.JSX";
import useResData from "../CustomHooks/res_menu/useResData.js";
import useRestaurantId from "../CustomHooks/res_menu/userestaurantid.js";
import Res_Acc from "./Res_Acc.jsx";
export const Menu_info = () => {
  const [veg, setveg] = useState(false);
  const [switchveg, setswitchveg] = useState(false);
  const { resid } = useParams();
  const res_data = useRestaurantId(resid);
  if (res_data === null) return <Shimmer_FOR_DETAIL />;
  const offers =
    res_data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers.map(
      (data) => data.info
    );
  console.log(offers);
  const cat_data =
    res_data.data.cards[2].groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (data) => data.card.card?.["@type"].includes("ItemCategory")
    );
  const Search_Data = cat_data.map((data) =>
    data.card.card.itemCards?.map((data) => data.card.info)
  );

  const handlevagswitch = () => {
    console.log("switch was", switchveg);
    setswitchveg(!switchveg);
  };

  const ITEMS_SEARCHED = Search_Data.flat();

  const obj_upperinfo = useResData(res_data);
  return (
    <div className="perent_div">
      <div className="child_cont">
        <div className="top_bar_small">
          <div className="res_name_rh">
            {" "}
            {`Home / ${obj_upperinfo.city} / ${obj_upperinfo.name}`}
          </div>
          <div className="search_rh center">
            <Link
              state={{ ITEMS: ITEMS_SEARCHED }}
              key="unique-key"
              className="asdasddds"
              to="search"
            >
              <svg
                className="svg_mag"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none" />
                <circle
                  cx="116"
                  cy="116"
                  r="84"
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="8"
                />
                <line
                  x1="175.4"
                  y1="175.4"
                  x2="224"
                  y2="224"
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="8"
                />
              </svg>
            </Link>
          </div>
        </div>
        <Upperinfo data={obj_upperinfo} />
        <div className="coupen_cont">
          {offers.map((item) => (
            <Coupen_card
              couponCode={item.couponCode}
              description={item.description}
              descriptionTextColor={item.descriptionTextColor}
              header={item.header}
              offerLogo={item.offerLogo}
            />
          ))}
        </div>

        <div className="veg">
          <p className="vegonly">Veg Only</p>
          <input
            value={switchveg}
            onChange={handlevagswitch}
            type="checkbox"
            id="check"
            className="toggle"
          />
          <label htmlFor="check"></label>
        </div>
        <div className="asmod"></div>
        {cat_data.map((cat_data_app, index) => (
          <Res_Acc
            veg={switchveg}
            setveg={setveg}
            key={index}
            cat_data={cat_data_app.card.card}
          />
        ))}
      </div>
    </div>
  );
};
export default Menu_info;
