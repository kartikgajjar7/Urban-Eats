import { useEffect, useState } from "react";
import Header from "./Header";
import Body from "./Body";
import { useSelector } from "react-redux";
import Headerphone from "./Headerphone";
const Main = () => {
  console.log(ismobile);
  return (
    <div className="app">
      {ismobile ? <Header /> : <Headerphone />}

      <Body />
    </div>
  );
};
