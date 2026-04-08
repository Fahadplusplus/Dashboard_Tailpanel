import React from 'react'

function ProductItem({item}) {
  return (
    <>
     <div className="card product-card shadow-sm p-2 " >

                  <div className="position-relative rounded-0">
                    <img src={item.link}
                      className="card-img-top product-img " />

                    {/* <button className="menu-btn">
                      <i className="bi bi-three-dots-vertical"></i>
                    </button> */}
                  </div>

                  <div className="card-body">
                    <h5 className="card-title fw-semibold mb-1">{item.name}</h5>
                    <p className="text-muted small mb-2">{item.category}</p>

                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="price">{item.price}</div>
                      <span className="stock-badge">{item.stock}</span>
                    </div>

                    <div className="d-flex justify-content-between text-muted">
                      <div>
                        <div>Stock:</div>
                        <div>Sales:</div>
                      </div>
                      <div className="text-end text-dark">
                        <div>{item.quantity}</div>
                        <div>{item.sold}</div>
                      </div>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default ProductItem




