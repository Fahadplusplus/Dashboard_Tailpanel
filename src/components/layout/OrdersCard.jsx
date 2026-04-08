import { useEffect, useState } from "react";
import axios from "axios";
import OrderItem from "./OrderItem";

const OrdersCard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:8000/orders");
        setOrders(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <h5 className="mb-4">Recent Orders</h5>

        {loading ? (
          <p>Loading...</p>
        ) : (
          orders.map((order,index) => (
            <OrderItem key={index} order={order} />
          ))
        )}
      </div>
    </div>
  );
};

export default OrdersCard;