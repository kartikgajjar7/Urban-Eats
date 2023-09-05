import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Cart from "./components/Cart";
import Body from "./components/Body";
import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import Menu_info from "./components/Menu_info";
import Search_res from "./components/Search_res";
import Sign_in_page from "./components/Sign_in_page";
import { Outlet } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementsByClassName("root")[0]);

const App = () => {
  const [mobile, setmobile] = useState(false);
  useEffect(() => {
    function detectMob() {
      console.log(
        "inner width: ",
        window.innerWidth,
        "||",
        "innerheight",
        window.innerHeight
      );
      const check = window.innerWidth <= 1000;
      console.log("cheking phone");
      if (check) {
        console.log("yesphone");
        setmobile(true);
      }
      if (!check) {
        console.log("yesphone");
        setmobile(false);
      }
    }
    detectMob();
  }, []);
  if (mobile)
    return (
      <Sign_in_page
        head="Kindly open in Laptop"
        body="We apologize for the inconvenience, but our website is currently available for mobile devices. Please open it on a desktop device or Laptop for the best experience. Thank you for your understanding"
        path="false"
      />
    );
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<App />}>
          <Route index element={<Body />} />
          <Route path="cart" element={<Restaurant />} />
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
  );
};

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
