import { useState } from "react";
import LOGO_URL from "../utils/constant";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import appstore from "../components/Reduxstore/Stores/appstore";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { changeLocation } from "./Reduxstore/slices/Location";
const Headerphone = ({ userinput, setuserinput }) => {
  console.log("wtf");
  const nevigate = useNavigate();
  const Selector = useSelector((state) => state.cart.items);
  const Location_data = useSelector((state) => state.location.location);
  const dispatch = useDispatch();

  const [lat, setlat] = useState(23.022505);
  const [lan, setlan] = useState(72.5713621);
  const [list, setlist] = useState([]);
  const [input, setinput] = useState("");
  const [placeholder, setplace] = useState("Search Other Cites");
  const HandleCityClick = async (place_id) => {
    setlist([]);
    const resbox = document.getElementsByClassName("serchsug")[0];
    resbox.style.display = "none";
    const JSON_CITY = await fetch(
      `https://corsproxy.io/?https://www.swiggy.com/dapi/misc/address-recommend?place_id=${place_id}`
    );
    setinput("");
    const city_lan = await JSON_CITY.json();
    const updatedLat = city_lan?.data[0]?.geometry?.location.lat;
    const updatedLan = city_lan?.data[0]?.geometry?.location.lng;
    dispatch(
      changeLocation({
        lat: city_lan?.data[0]?.geometry?.location.lat,
        lan: city_lan?.data[0]?.geometry?.location.lng,
        name: city_lan?.data[0].address_components[0].short_name,
      })
    );
    setlat(city_lan?.data[0]?.geometry?.location.lat);
    setlan(city_lan?.data[0]?.geometry?.location.lng);

    setplace(city_lan?.data[0].address_components[0].short_name);
    console.log("now nevigatiing", "lat: ", lat, "lan: ", lan);
    nevigate("/");
  };

  const handle_click_on_home_link = () => {
    nevigate("/", {
      state: {
        lat: lat,
        lan: lan,
        city_name: city_lan?.data[0].address_components[0].short_name,
      },
    });
  };
  const handlecityclick = () => {
    toast("🚀 WE ARE WORKING ON THIS ! TAKE IT EASY");
  };
  const handleinput = async (e) => {
    setinput(e.target.value);
    const resbox = document.getElementsByClassName("serchsug")[0];
    resbox.style.display = "block";
    const value = e.target.value;
    if (value === "") {
      setlist([]);
      const resbox = document.getElementsByClassName("serchsug")[0];

      resbox.style.display = "none";
      return;
    }
    const json_suggetion = await fetch(
      `https://corsproxy.io/?https://www.swiggy.com/dapi/misc/place-autocomplete?input=${value}&types=`
    );
    const suggetion = await json_suggetion.json();

    setlist(suggetion?.data);
  };
  return (
    <div className="header">
      <div className="rigt">
        <div className="up">
          <svg
            width="14"
            height="20"
            viewBox="0 0 14 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.89429 18.3846H12.0643"
              stroke="#282C3F"
              stroke-opacity="0.9"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M6.98989 1C3.9613 1 1.5 3.45532 1.5 6.47656C1.5 10.584 6.98989 15.2057 6.98989 15.2057C6.98989 15.2057 12.4798 10.584 12.4798 6.47656C12.4798 3.45532 10.0185 1 6.98989 1Z"
              stroke="#282C3F"
              stroke-opacity="0.9"
              stroke-width="1.7"
              stroke-linejoin="round"
            ></path>
            <path
              d="M6.98955 3.73492C8.36202 3.73492 9.48495 4.82084 9.48495 6.14807C9.48495 7.4753 8.3745 8.56121 6.98955 8.56121C5.61707 8.56121 4.49414 7.4753 4.49414 6.14807C4.49414 4.82084 5.61707 3.73492 6.98955 3.73492Z"
              fill="#E46D47"
            ></path>
          </svg>
          <span className="rgpof">Other</span>
        </div>
        <div className="down">
          <p class="_9v2Jj">Ahmedabad, Gujarat, India</p>
        </div>
      </div>
      <div className="loft"></div>
    </div>
  );
};
export default Headerphone;
