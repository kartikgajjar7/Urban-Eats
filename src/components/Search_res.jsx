import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
export const Search_res = () => {
  [inputx, setinputx] = useState("");
  [result, setresult] = useState("");
  const { resname } = useParams();
  console.log(resname);
  const Handlesearch = async (query) => {
    // const api_result = await fetch(
    //   ``
    // );
    const api_result = await fetch(
      `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/search/suggest?lat=23.022505&lng=72.5713621&str=${query}&trackingId=undefined`
    );

    const json_data = await api_result.json();
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
          onChange={(e) => {
            setinputx(e.target.value);
            Handlesearch(inputx);
          }}
          name="Search_cusine"
          className="Search_item_res"
        />
      </div>
    </div>
  );
};
export default Search_res;
