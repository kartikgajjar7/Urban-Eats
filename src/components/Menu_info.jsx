import React, { useEffect, useState } from "react";
import Drop_cont from "./Drop_cont.jsx";
import Upperinfo from "./Upperinfo.js";
import Switch_veg from "./Switch_veg.jsx";
import Coupen from "./Coupen.jsx";
import { useEffect } from "react";
import { Link, json } from "react-router-dom";
import { useParams } from "react-router-dom";
import useResData from "../CustomHooks/res_menu/useResData.js";
import useRestaurantId from "../CustomHooks/res_menu/userestaurantid.js";

export const Menu_info = () => {
  const { resid } = useParams();
  const res_data = useRestaurantId(resid);

  if (res_data === null) return;

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
            <Link className="asdasddds" to="">
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