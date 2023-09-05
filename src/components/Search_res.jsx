import React, { useState } from "react";
import stringSimilarity from "string-similarity";
import { Link, useLocation, useParams } from "react-router-dom";
import Dis_box from "./Dish_box";
import Search_cards from "./search_cards";

export const Search_res = () => {
  const [inputx, setinputx] = useState("");
  const [result, setresult] = useState("");
  const { resname } = useParams();
  const ALL_PASSED_DATA = useLocation();
  const search_in = ALL_PASSED_DATA.state.ITEMS;
  const [filtered, Setfiltered] = useState([]);
  const handle_chutiyapa = () => {
    alert("WE ARE WORKING ON UI , THODA DHIRAJ RAKHIYE");
  };
  const handle_e = (e) => {
    // console.log(e.target.value);
    const inputValue = e.target.value;
    setinputx(e.target.value);

    //via usual comparision

    const set_data_normall = search_in.filter((items) =>
      items?.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    Setfiltered(set_data_normall);
    // console.log(set_data_normall);

    if (set_data_normall.length < 1) {
      console.log("condition library");
      const set_it = search_in.filter((items) => {
        if (typeof inputValue === "string" && typeof items?.name === "string") {
          const percentage = stringSimilarity.compareTwoStrings(
            inputValue.toLowerCase(),
            items?.name.toLowerCase()
          );
          return percentage > 0.4;
        }
      });
      Setfiltered((prevdata) => [...prevdata, ...set_it]);
    }

    if (e.target.value === "") {
      Setfiltered([]);
    }
  };
  return (
    <div className="search_cont">
      <div className="search_bar">
        <button className="sahua">
          <Link to="..">
            <svg
              className="Back_backIcon__1LhL_"
              viewBox="0 0 32 32"
              height="18"
              width="18"
            >
              <path d="M3.333 14.984l28.667-0v2.097l-0.16 0.006h-28.506l-0.16-0.16v-1.782l0.16-0.16zM1.114 14.986l10.079-10.079 0.121-0.108 1.465 1.467-0.101 0.127-10.079 10.079h-0.226l-1.26-1.26v-0.226zM12.679 25.676l0.108 0.117-1.468 1.484-0.126-0.115-10.079-10.079v-0.226l1.26-1.26h0.226l10.079 10.079zM3.268 12.87l0.272 0.116-0.022 6.125-0.272 0.114-3.245-3.18 0.111-0.112 3.157-3.062z"></path>
            </svg>
          </Link>
        </button>

        <input
          value={inputx}
          placeholder={`Search in ${resname}`}
          type="text"
          onInput={handle_e}
          name="Search_cusine"
          className="Search_item_res"
        />
      </div>
      <div className="results">
        {console.log(filtered, "this is filtered")}
        {filtered.map((take_data, index) => (
          <div className="ppeerr">
            <div className="dis_box_cont">
              <div className="disrh">
                <img
                  onClick={() => {}}
                  className="vegl"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png"
                  alt=""
                />
                <p className="text_item_m">{take_data?.name}</p>
                <p className="text_item_p">₹{take_data?.price / 100}</p>
                <p className="text_item_d">{take_data?.description}</p>
              </div>
              <div className="disll">
                {/* <div className="btnnnnn">Add</div> */}
                {take_data?.imageId ? (
                  <img
                    className="ehs"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${take_data?.imageId}`}
                    alt=""
                  />
                ) : (
                  ""
                )}

                {/* <div className="btnnnnn">
              <p>Add</p>
            </div> */}
                <p className="asdasdasd">Add</p>
              </div>
            </div>
            <div className="dividessss"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Search_res;
