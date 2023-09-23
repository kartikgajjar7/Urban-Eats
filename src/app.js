import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Cart from "./components/Cart";
import Body from "./components/Body";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import Restaurant from "./components/Restaurant";
import Menu_info from "./components/Menu_info";
import Search_res from "./components/Search_res";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import Sign_in_page from "./components/Sign_in_page";
import ScrollToTop from "./components/ScrollToTop";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { IsPhone } from "./components/Reduxstore/slices/Device";
import appstore from "./components/Reduxstore/Stores/appstore";
const root = ReactDOM.createRoot(document.getElementsByClassName("root")[0]);

const App = () => {
  const dispatch = useDispatch();
  function isMobileDevice() {
    const userAgent = navigator.userAgent;
    const mobileKeywords = [
      "Android",
      "iPhone",
      "iPad",
      "iPod",
      "Windows Phone",
      "BlackBerry",
      "Mobile",
    ];

    // Check if any mobile keyword is present in the user agent string
    return mobileKeywords.some((keyword) => userAgent.includes(keyword));
  }

  dispatch(IsPhone(isMobileDevice()));

  const [userinput, setuserinput] = useState("");
  const [lat, setlat] = useState(23.022505);
  const [lan, setlan] = useState(72.5713621);

  return (
    <div className="app">
      <ScrollToTop />
      <Header
        lat={lat}
        lan={lan}
        setlat={setlat}
        setlan={setlan}
        userinput={userinput}
        setuserinput={setuserinput}
      />
      <Outlet />
    </div>
  );
};
const Root = () => {
  return (
    <Provider store={appstore}>
      <Router>
        <Routes>
          <Route path="" element={<App />}>
            <Route index element={<Body />} />
            <Route path="cart" element={<Cart />} />
            <Route
              path="signin"
              element={
                <Sign_in_page
                  head="working on this page"
                  body="We're diligently working on enhancing our sign-in page to make your experience even better. Stay tuned for updates and improvements coming soon! Thank you for your patience."
                  path="true"
                />
              }
            />

            <Route
              path="restaurant/:areaname/:resname/:resid"
              element={<Restaurant />}
            >
              <Route index element={<Menu_info />} />
              <Route index path="search" element={<Search_res />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
