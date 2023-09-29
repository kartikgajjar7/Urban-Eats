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
const root = ReactDOM.createRoot(document.getElementsByClassName("root")[0]);
const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const Myrouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resid",
        element: <Restaurant />,
      },
    ],
  },
]);
root.render(<RouterProvider router={Myrouter} />);
