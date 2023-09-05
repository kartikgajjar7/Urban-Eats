import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Cart from "./components/Cart";
import Body from "./components/Body";
import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import Menu_info from "./components/Menu_info";
import Search_res from "./components/Search_res";
import { Outlet } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementsByClassName("root")[0]);
const App = () => {
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
