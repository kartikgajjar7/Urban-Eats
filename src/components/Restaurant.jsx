import { dividerClasses } from "@mui/material";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Menu_info from "./Menu_info.jsx";
const Restaurant = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default Restaurant;
