
import { useEffect, useState } from "react";
import { getNotifications } from "./services/notificationService";
import { Log } from "./logging_middleware/logger";

function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
  try {
    const data = await getNotifications();

    console.log(data);

    if (Array.isArray(data)) {
      setNotifications(data);
    } else if (Array.isArray(data.notifications)) {
      setNotifications(data.notifications);
    } else {
      console.log("Unexpected format:", data);
      setNotifications([]);
    }

    Log("info", "api", "Notifications fetched");
  } catch (error) {
    console.log(error);

    Log("error", "api", "Failed to fetch notifications");
  }
};

      


  return (
    <div style={{ padding: "20px" }}>
      <h1>Priority Notifications</h1>

      {notifications.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid gray",
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{item.Type}</h3>

    <p>
      <strong>Message:</strong> {item.Message}
    </p>

    <p>
      <strong>Timestamp:</strong> {item.Timestamp}
    </p>

    <p>
      <strong>ID:</strong> {item.ID}
    </p>
  </div>
))}
    </div>
  );
}

export default App;