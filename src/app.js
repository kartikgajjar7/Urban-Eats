import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
const root = ReactDOM.createRoot(document.getElementsByClassName("root")[0])
const App = () => {
    return (
        <Body />
    )
}
root.render(<App />);




