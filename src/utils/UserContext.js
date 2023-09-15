import { createContext, useContext } from "react";
const userContext = createContext({
  loggedUser: "default User",
});

export default userContext;
