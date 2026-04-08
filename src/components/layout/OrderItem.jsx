const OrderItem = ({ order }) => {
  return (
    <>
      <div className="d-flex align-items-center mb-3">
        <div>
          <p className="m-0 fw-bold">{order.name}</p>
          <small className="text-secondary">{order.product}</small>
        </div>

        <div className="ms-auto text-end">
          <p className="m-0 fw-bold">${order.price}</p>
          <span
            className={`badge ${
              order.status === "Completed"
                ? "bg-success-subtle text-success"
                : "bg-danger-subtle text-danger"
            }`}
          >
            {order.status}
          </span>
        </div>
      </div>
      <hr />
    </>
  );
};

export default OrderItem;