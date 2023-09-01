import { useRouteError } from "react-router-dom";

const Error = () => {
  console.log(useRouteError());
  return (
    <div>
      <h1>OOPS PAGE NOT FOUND</h1>
      <h1>SOMETHING WENT WRONG</h1>
    </div>
  );
};
export default Error;
