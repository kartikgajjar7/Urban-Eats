import { useEffect, useState } from "react";
import Header from "./Header";
import Body from "./Body";

const Main = () => {
  // const [resdata, SetResData] = useState([]);

  // useEffect(() => {
  //   async function check() {
  //     try {
  //       const data = await fetch(
  //         "https://swiggy-clone-wjqx.onrender.com/api/v1/restaurant?location=patna&page=0"
  //       );
  //       const share = await data.json();
  //       SetResData(share);
  //     } catch {
  //       console.log("error");
  //     }
  //   }
  //   check();
  // }, []);

  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
