import { useEffect, useState } from "react";

function NotificationPanel() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Notification service started");

    const intervalId = setInterval(() => {
      console.log("Fetching notifications...");
      setCount((prev) => prev + 1);
    }, 3000);

    return () => {
      console.log("Notification service stopped");
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h3>Notifications fetched: {count}</h3>
        <button onClick={() => setShowNoti(!showNoti)}>
        {showNoti ? "Hide Notifications" : "Show Notifications"}
      </button>

      <br />
      <br />

      {showNoti && <NotificationPanel />}

      <hr />
    </div>
  );
}

export default NotificationPanel;