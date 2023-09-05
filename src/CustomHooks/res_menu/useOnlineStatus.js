const { useState } = require("react");
const { useEffect } = require("react");

const useOnlineStatus = () => {
  const [status, setstatus] = useState("true");
  useEffect(() => {
    window.addEventListener("online", (event) => {
      setstatus(true);
      document.location.reload();
    });

    window.addEventListener("offline", () => {
      setstatus(false);
    });
  });

  return status;
};
export default useOnlineStatus;
