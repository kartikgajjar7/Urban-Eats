Reconciliation alogrithm (React Fiber)
seperation of concerns
single resposibility principalGridController\_\_Arrow-sc-4swl2a-1 eQnmto

# useeffect

-if no dependancy array it means useeffect will be called in every render
-if there is a empty dependacy array use effect is called at initial render only once
-if we put something in dependacy array then it will called only at dependacy changes

onClick={
("click",
(e) => {
const slider =
document.getElementsByClassName("slider")[0];
const sliderIndex = parseInt(
getComputedStyle(slider).getPropertyValue(
"--slider-index"
)
);
if (

(e.target.matches(".left_slide_btn") ||
e.target.closest(".left_slide_btn")) &&
count > 0
) {
count--;
console.log("count after left clicked: " + count);
console.log(e.target);
console.log("left clicked");
slider.style.setProperty(
"--slider-index",
sliderIndex - 1
);
}

                      if (
                        (e.target.matches(".right_slide_btn") ||
                          e.target.closest(".right_slide_btn")) &&
                        count < 27
                      ) {
                        count++;
                        console.log("count after right clicked: " + count);
                        console.log("right clicked");
                        slider.style.setProperty(
                          "--slider-index",
                          sliderIndex + 1
                        );
                      }
                    })
                  }

onClick={
("click",
(e) => {
const slider =
document.getElementsByClassName("slider")[0];
const sliderIndex = parseInt(
getComputedStyle(slider).getPropertyValue(
"--slider-index"
)
);
if (
(e.target.matches(".left_slide_btn") ||
e.target.closest(".left_slide_btn")) &&
count > 0
) {
count--;
console.log("count after left clicked: " + count);
console.log(e.target);
console.log("left clicked");
slider.style.setProperty(
"--slider-index",
sliderIndex - 1
);
}

                      if (
                        (e.target.matches(".right_slide_btn") ||
                          e.target.closest(".right_slide_btn")) &&
                        count < 27
                      ) {
                        count++;
                        console.log("count after right clicked: " + count);
                        console.log("right clicked");
                        slider.style.setProperty(
                          "--slider-index",
                          sliderIndex + 1
                        );
                      }
                    })
                  }

// <div className="app">
// <Header />
// <Outlet />
// </div>

// const Myrouter = createBrowserRouter([{
// path: "/",
// element: <App />,
// children: [{
// path: "/",
// element: <Body />,
// },
// {
// path: "/cart",
// element: <Cart />,
// }, {
// path: "/restaurant/:resid",
// element: <Restaurant />,
// children: [{
// path: "/",
// element: <Menu_info />,
// }]
// }]
// }])

# app.js

import React, { Children, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Error from "./components/Error";
import Cart from "./components/Cart";
import Body from "./components/Body";
import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Menu_info from "./components/Menu_info";

import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import Search_res from "./components/Search_res";
import { Routes } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementsByClassName("root")[0])
const App = () => {
return (

        <Router>
            <Routes>
                <Route path="/" element={App}>
                    <Route index element={Body} />
                    <Route path="cart" element={Cart} />
                    <Route path="restaurant/:resid" element={Restaurant}>
                        <Route path="/" element={Menu_info} />
                        <Route path="search" element={Search_res} />
                    </Route>
                </Route>
            </Routes>
        </Router>

    )

}

root.render(<React.StrictMode>
<App />
</React.StrictMode>, document.getElementById('root'));

# working app js

```
import React, { Children, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Error from "./components/Error";
import Cart from "./components/Cart";
import Body from "./components/Body";
import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementsByClassName("root")[0])
const App = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}
const Myrouter = createBrowserRouter([{
    path: "/",
    element: <App />,
    children: [{
        path: "/",
        element: <Body />,
    },
    {
        path: "/cart",
        element: <Cart />,
    }, {
        path: "/restaurant/:resid",
        element: <Restaurant />
    }]
}])
root.render(<RouterProvider router={Myrouter} />);

```

## menu info

import React, { useEffect, useState } from "react";
import { Drop_cont } from "./Drop_cont.jsx";
import Upperinfo from "./Upperinfo.js";
import Switch_veg from "./Switch_veg.jsx";
import Coupen from "./Coupen.jsx";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export const Menu_info = () => {
const hotel_name = "";
const restro_cat = "";
const city_distance = "";
const rating_num = "";
const rating_text = "";
const time_dilivery = "";
const offer_text = "";

[mjson, setmjson] = useState(null);

const getresdata = async () => {
// console.log("function set called");
const menu = await fetch(
"https://corsproxy.io/?https://www.swiggy.com/api/seo/getListing?lat=23.2345505&lng=72.73423454"
);
const output = await menu.json();
setmjson(output);
// console.log(mjson);
};
useEffect(() => {
// console.log("use effect colled");
getresdata();
}, []);

return (

<div className="perent_div">
<div className="child_cont">
<div className="top_bar_small">
<div className="res_name_rh">Home / Ahmedabad / McDonald's</div>
<div className="search_rh center">
<Link to="http://localhost:1234/restaurant/123/search">
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
<Upperinfo />
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

##lat lan

The latitude of Ahmedabad, Gujarat, India is 23.033863, and the longitude is 72.585022.

## api detail search

https://www.swiggy.com/dapi/menu/pl/search?lat=23.022505&lng=72.5713621&restaurantId=716440&query=pizza&metaData=%7B%22type%22%3A%22RESTAURANT%22%2C%22data%22%3A%7B%22parentId%22%3A6307%2C%22primaryRestaurantId%22%3A542291%2C%22cloudinaryId%22%3A%22rg4v1fmwuqxclwvbrh6t%22%2C%22brandId%22%3A6307%2C%22dishFamilyId%22%3A%22846689%22%2C%22enabled_flag%22%3A1%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Restaurant%22%7D&submitAction=SUGGESTION

## api search

https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/search/suggest?lat=23.022505&lng=72.5713621&str=${query}&trackingId=undefined

## SEARCH RES FUNCTION

// const Handlesearch = async (query) => {
// const api_result = await fetch(
// `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl/search?lat=23.022505&lng=72.5713621&restaurantId=716440&query=pizza&metaData=%7B%22type%22%3A%22RESTAURANT%22%2C%22data%22%3A%7B%22parentId%22%3A6307%2C%22primaryRestaurantId%22%3A542291%2C%22cloudinaryId%22%3A%22rg4v1fmwuqxclwvbrh6t%22%2C%22brandId%22%3A6307%2C%22dishFamilyId%22%3A%22846689%22%2C%22enabled_flag%22%3A1%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Restaurant%22%7D&submitAction=SUGGESTION`
// );

// const json_data = await api_result.json();
// console.log(json_data);
// };

## compare strings

function isStringSimilar(userInput, targetString) {
if (typeof userInput !== "string" || typeof targetString !== "string") {
// Handle invalid input (e.g., not strings)
return false;
}

if (userInput.trim() === "" || targetString.trim() === "") {
// Handle empty strings
return false;
}

function calculateLevenshteinDistance(s1, s2) {
const m = s1.length;
const n = s2.length;
const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) {
      for (let j = 0; j <= n; j++) {
        if (i === 0) {
          dp[i][j] = j;
        } else if (j === 0) {
          dp[i][j] = i;
        } else if (s1[i - 1] === s2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
        }
      }
    }

    return dp[m][n];

}
const levenshteinDistance = calculateLevenshteinDistance(
userInput,
targetString
);
const maxLength = Math.max(userInput.length, targetString.length);
const similarityPercentage = (
(1 - levenshteinDistance / maxLength) \*
100
).toFixed(2);

return similarityPercentage >= 50;
}

## autpcompletion api

https://www.swiggy.com/dapi/misc/place-autocomplete?input=ahe&types=

## this is the past

{ list.length !=0 : list.map((data) => (

<Link
state={{
                  lat: city_lan?.data[0]?.geometry?.location.lat,
                  lan: city_lan?.data[0]?.geometry?.location.lat,
                }}
to="/" >
<h1
onClick={() => {
HandleCityClick(data?.place_id);
}}
className="namessssas" >
{data.description}
</h1>
</Link>
)) : nu

## relode

{resdata.data?.cards[2]?.card.card.gridElements?.infoWithStyle
.restaurants
? resdata.data.cards[2].card.card.gridElements.infoWithStyle.restaurants.map(
(data, index) => <Card key={index} res_data={data} />
)
: (() => {
console.log("Reloading...");
window.location.reload();
return null; // You can return null or some loading indicator here
})()}
