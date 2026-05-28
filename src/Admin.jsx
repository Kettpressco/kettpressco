import { useEffect, useState } from "react";
import { db, auth } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default function Admin() {
  const [orders, setOrders] = useState([]);
  const [allowed, setAllowed] = useState(false);
  const [loading, setLoading] = useState(true);

  const ADMIN_EMAIL = "tinashe.chengeta24@gmail.com";

  const fetchOrders = async () => {
    const querySnapshot = await getDocs(collection(db, "orders"));

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));

    setOrders(data);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.email === ADMIN_EMAIL) {
        setAllowed(true);
        fetchOrders();
      } else {
        setAllowed(false);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <p>Loading admin panel...</p>
      </div>
    );
  }

  if (!allowed) {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial", color: "red" }}>
        <h2>Access Denied ❌</h2>
        <p>You must be logged in as admin to view this page.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Admin Dashboard</h1>

      {orders.length === 0 && <p>No orders yet</p>}

      {orders.map((order) => (
        <div
          key={order.id}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px"
          }}
        >
          <p><strong>Email:</strong> {order.email}</p>
          <p><strong>Product:</strong> {order.product}</p>
          <p><strong>Quantity:</strong> {order.quantity}</p>
          <p><strong>Print Type:</strong> {order.printType}</p>
          <p><strong>Total:</strong> £{order.total}</p>
          <p><strong>File:</strong> {order.fileName}</p>
        </div>
      ))}
    </div>
  );
}