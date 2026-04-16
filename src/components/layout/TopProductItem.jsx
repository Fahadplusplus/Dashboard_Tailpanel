import React from 'react'

function TopProductItem({product}) {
  return (
     <>
      <div className="d-flex align-items-center mb-3">
        <div>
          <p className="m-0 fw-bold">{product.name}</p>
          <small className="">{product.product}</small>
        </div>

        <div className="ms-auto ">
          <p className="m-0 fw-bold">${product.price}</p>
          <span
            className={`badge ${
              product.status === "Completed"
                ? "bg-success-subtle text-success"
                : "bg-danger-subtle text-danger"
            }`}
          >
            {product.status}
          </span>
        </div>
      </div>
      <hr />
    </>
  )
}

export default TopProductItem