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
import { useSelector } from "react-redux";
import { IsPhone } from "./components/Reduxstore/slices/Device";
import appstore from "./components/Reduxstore/Stores/appstore";
import Headerphone from "./components/Headerphone";
const root = ReactDOM.createRoot(document.getElementsByClassName("root")[0]);

const App = () => {
  const dispatch = useDispatch();
  const Location_data = useSelector((state) => state.location.location);
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

  console.log(
    isMobileDevice(),
    "ddddddddddddddddddddddddddddddddddddddddddddddddddddd"
  );

  dispatch(IsPhone(isMobileDevice()));
  const ismobile = useSelector((state) => state.device.isPhone);
  const [userinput, setuserinput] = useState("");
  const [lat, setlat] = useState(23.022505);
  const [lan, setlan] = useState(72.5713621);

  return (
    <div className="app">
      <ScrollToTop />

      {ismobile ? (
        <Headerphone
          lat={lat}
          lan={lan}
          setlat={setlat}
          setlan={setlan}
          userinput={userinput}
          setuserinput={setuserinput}
        />
      ) : (
        <Header
          lat={lat}
          lan={lan}
          setlat={setlat}
          setlan={setlan}
          userinput={userinput}
          setuserinput={setuserinput}
        />
      )}
      <Outlet />
      {/* {ismobile ? (
        <>
          <div className="tabsa">
            <div className="tabics">
              <svg className="hfg7fg" viewBox="0 0 559 825">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M542.92 388.542C546.805 366.526 542.355 349.598 530.881 340.76C513.621 327.466 487.698 320.236 425.954 320.236C380.271 320.236 331.225 320.286 310.268 320.275C308.322 319.894 301.285 317.604 301.02 309.112L300.734 174.289C300.727 165.779 307.531 158.857 315.943 158.839C324.369 158.825 331.204 165.723 331.211 174.226C331.211 174.226 331.421 247.414 331.441 273.424C331.441 275.936 332.892 281.8 338.549 283.328C375.43 293.267 561.865 285.999 558.967 251.804C543.147 109.96 424.476 0 280.394 0C235.021 0 192.065 10.9162 154.026 30.2754C62.9934 77.5955 -1.65904 173.107 0.0324268 283.43C1.23215 361.622 52.2203 500.605 83.434 521.234C97.8202 530.749 116.765 527.228 201.484 527.228C239.903 527.228 275.679 527.355 293.26 527.436C295.087 527.782 304.671 530.001 304.671 538.907L304.894 641.393C304.915 649.907 298.104 656.826 289.678 656.829C281.266 656.843 274.434 649.953 274.42 641.446C274.42 641.446 275.17 600.322 275.17 584.985C275.17 581.435 275.424 575.339 265.178 570.727C231.432 555.553 121.849 564.712 115.701 581.457C113.347 587.899 125.599 612.801 144.459 644.731C170.102 685.624 211.889 747.245 245.601 792.625C261.047 813.417 268.77 823.813 280.467 824.101C292.165 824.389 300.514 814.236 317.213 793.928C383.012 713.909 516.552 537.663 542.92 388.542Z"
                ></path>
              </svg>
              <span className="aifuheb">Home</span>
            </div>
            <div className="tabics">
              <svg className="sujhwhhr" viewBox="5 -1 12 25">
                <path d="M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478 12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0 20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568 C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669 C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 10.1973467,17.8453568 Z"></path>
              </svg>

              <span className="aifuheb">Search</span>
            </div>
            <div className="tabics">
              <svg
                className="_1GTCsc _2MSid dddfww"
                viewBox="-1 0 37 32"
                height="20"
                width="20"
                fill="#686b78"
              >
                <path
                  d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"
                  stroke-width="2"
                ></path>
              </svg>
              <span className="aifuheb-v">0</span>
              <span className="aifuheb asfffffs">Cart</span>
            </div>
            <div className="tabics">
              <svg
                class="h-5 w-5 fill-defGray group-hover:fill-defBlack"
                viewBox="6 0 12 24"
              >
                <path d="M11.9923172,11.2463768 C8.81761115,11.2463768 6.24400341,8.72878961 6.24400341,5.62318841 C6.24400341,2.5175872 8.81761115,0 11.9923172,0 C15.1670232,0 17.740631,2.5175872 17.740631,5.62318841 C17.740631,8.72878961 15.1670232,11.2463768 11.9923172,11.2463768 Z M11.9923172,9.27536232 C14.0542397,9.27536232 15.7257581,7.64022836 15.7257581,5.62318841 C15.7257581,3.60614845 14.0542397,1.97101449 11.9923172,1.97101449 C9.93039471,1.97101449 8.25887628,3.60614845 8.25887628,5.62318841 C8.25887628,7.64022836 9.93039471,9.27536232 11.9923172,9.27536232 Z M24,24 L0,24 L1.21786143,19.7101449 L2.38352552,15.6939891 C2.85911209,14.0398226 4.59284263,12.7536232 6.3530098,12.7536232 L17.6316246,12.7536232 C19.3874139,12.7536232 21.1256928,14.0404157 21.6011089,15.6939891 L22.9903494,20.5259906 C23.0204168,20.63057 23.0450458,20.7352884 23.0641579,20.8398867 L24,24 Z M21.1127477,21.3339312 L21.0851024,21.2122487 C21.0772161,21.1630075 21.0658093,21.1120821 21.0507301,21.0596341 L19.6614896,16.2276325 C19.4305871,15.4245164 18.4851476,14.7246377 17.6316246,14.7246377 L6.3530098,14.7246377 C5.4959645,14.7246377 4.55444948,15.4231177 4.32314478,16.2276325 L2.75521062,21.6811594 L2.65068631,22.0289855 L21.3185825,22.0289855 L21.1127477,21.3339312 Z"></path>
              </svg>
              <span className="aifuheb asfffffs">SignIn</span>
            </div>
            <div className="tabics"></div>
          </div>
        </>
      ) : (
        ""
      )} */}
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
