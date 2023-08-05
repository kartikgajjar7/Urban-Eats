const heading = React.createElement("h1", {}, "hello world from react");
const root = ReactDOM.createRoot(
    document.getElementsByClassName("root")[0]
);
console.log(typeof (heading))
root.render(heading);