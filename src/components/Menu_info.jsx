import React, { useEffect, useState } from "react";
import Drop_cont from "./Drop_cont.jsx";
import Upperinfo from "./Upperinfo.js";
import Coupen from "./Coupen.jsx";
import { useEffect } from "react";
import Shimmer_cont from "./simmer_cont.jsx";
import Coupen_card from "./Coupen_card.jsx";
import { Link, json } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Shimmer_FOR_DETAIL from "./Shimmer_FOR_DETAIL.JSX";
import useResData from "../CustomHooks/res_menu/useResData.js";
import useRestaurantId from "../CustomHooks/res_menu/userestaurantid.js";
import Res_Acc from "./Res_Acc.jsx";
export const Menu_info = () => {
  const ismobile = useSelector((state) => state.device.isPhone);
  const [veg, setveg] = useState(false);
  const [switchveg, setswitchveg] = useState(false);
  const { resid } = useParams();
  const [showmenu, setshowmenu] = useState(false);
  const res_data = useRestaurantId(resid);

  if (res_data === null) return <Shimmer_FOR_DETAIL />;
  const offers =
    res_data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers?.map(
      (data) => data.info
    );
  console.log(res_data);

  let cat_data_2 = null;
  if (ismobile) {
    cat_data_2 =
      res_data.data.cards[3].groupedCard?.cardGroupMap?.REGULAR.cards.filter(
        (data) => data.card.card?.["@type"].includes("ItemCategory")
      );
  }
  if (!ismobile) {
    cat_data_2 =
      res_data.data.cards[2].groupedCard?.cardGroupMap?.REGULAR.cards.filter(
        (data) => data.card.card?.["@type"].includes("ItemCategory")
      );
  }
  // const cat_data =
  //   res_data.data.cards[2].groupedCard?.cardGroupMap?.REGULAR.cards.filter(
  //     (data) => data.card.card?.["@type"].includes("ItemCategory")
  //   );

  const Search_Data = cat_data_2?.map((data) =>
    data.card.card.itemCards?.map((data) => data.card.info)
  );

  const handlevagswitch = () => {
    setswitchveg(!switchveg);
  };

  const ITEMS_SEARCHED = Search_Data.flat();

  const obj_upperinfo = useResData(res_data);
  return (
    <div className="perent_div">
      {showmenu ? null : (
        <button onClick={() => setshowmenu(true)} className="showmenubtn">
          <span
            className="MenuFabButton_btnIcon__2AJv2 icon-menu"
            aria-hidden="true"
          >
            BROWSE MENU
          </span>
        </button>
      )}
      {showmenu ? (
        <div onClick={() => setshowmenu(false)} className="peretnaddon2">
          <div onClick={(e) => e.stopPropagation()} className="showmenudiv">
            {cat_data_2?.map((mapover) => (
              <div className="eachmenui">
                <p className="dsad">{mapover.card?.card?.title}</p>
                {console.log(
                  mapover.card?.card?.title,
                  " ",
                  mapover?.card?.card
                )}
                <p className="dsad">
                  {mapover?.card?.card?.itemCards?.length}
                  {(() => {
                    let len = 0;
                    mapover?.card?.card?.categories?.map((cata) => {
                      len += cata.itemCards.length;
                    });
                    if (len === 0) return "";
                    return len;
                  })()}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
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

        {res_data.data.cards[0].card.card.info.veg ? (
          <div className="sfs">
            <img
              className="asdwowo"
              src="https://images.vexels.com/media/users/3/207162/isolated/preview/9894de52e0b497e8df290cef44d2aded-health-green-leaf-icon.png"
              alt="veg leaf"
            />
            <p className="adassaa">PURE VEG</p>
          </div>
        ) : (
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
        )}
        <div className="asmod"></div>
        {cat_data_2.map((cat_data_app, index) => (
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
