import React, { useEffect, useState } from "react";
import Drop_cont from "./Drop_cont.jsx";
import Upperinfo from "./Upperinfo.js";
import Switch_veg from "./Switch_veg.jsx";
import Coupen from "./Coupen.jsx";
import { useEffect } from "react";
import { Link, json } from "react-router-dom";
import { useParams } from "react-router-dom";
export const Menu_info = () => {
  [jsonn, setmjson] = useState(null);
  const { resid } = useParams();
  console.log(resid);
  const getresdata = async () => {
    // console.log("function set called");
    const menu = await fetch(
      `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.033863&lng=72.585022&restaurantId=${resid}`
    );
    const output = await menu.json();
    setmjson(output);
    // console.log(mjson);
  };
  useEffect(() => {
    // console.log("use effect colled");
    getresdata();
  }, []);

  if (jsonn === null) return;
  console.log(jsonn);
  const obj_upperinfo = {
    name: `${jsonn?.data?.cards[0]?.card?.card?.info?.name}`,
    cusines: `${jsonn.data.cards[0].card.card.info.cuisines}`,
    diliverytime: `${jsonn.data.cards[0].card.card.info.sla.deliveryTime}`,
    rating_num: `${jsonn.data.cards[0].card.card.info.avgRating}`,
    locality: `${jsonn.data.cards[0].card.card.info.locality} ${jsonn.data.cards[0].card.card.info.sla.lastMileTravelString}`,
    cost_for_two: `${jsonn.data.cards[0].card.card.info.costForTwoMessage}`,
  };

  // const name = `${json.data.cards[1].card.card.info.name}`;
  // const cusines = `${json.data.cards[1].card.card.info.cuisines}`;
  // const diliverytime = `${json.data.cards[1].card.card.info.sla.deliveryTime}`;
  // const rating_num = `${json.data.cards[1].card.card.info.avgRating}`;
  // const cost_for_two = `${json.data.cards[1].card.card.info.costForTwoMessage}`;

  return (
    <div className="perent_div">
      <div className="child_cont">
        <div className="top_bar_small">
          <div className="res_name_rh">Home / Ahmedabad / McDonald's</div>
          <div className="search_rh center">
            <Link to="">
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="8"
                />
                <line
                  x1="175.4"
                  y1="175.4"
                  x2="224"
                  y2="224"
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="8"
                />
              </svg>
            </Link>
          </div>
        </div>
        <Upperinfo data={obj_upperinfo} />
        <Coupen />
        <div className="veg">
          <p className="vegonly">Veg Only</p>
          <Switch_veg />
        </div>
        <div className="asmod"></div>
        <Drop_cont title="asdasd" />
        <Drop_cont title="cvcgawd" />
        <Drop_cont title="adawsd" />
      </div>
    </div>
  );
};
export default Menu_info;

// data = { obj_upperinfo };
