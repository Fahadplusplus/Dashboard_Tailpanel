import React from 'react'

function ProductItem({item}) {
  return (
    <>
     <div className="Order product-card  p-2 " >

                  <div className="position-relative rounded-0">
                    <img src={item.image}
                      className="card-img-top product-img " />

                    
                  </div>

                  <div className="">
                    <h5 className=" fw-semibold mb-1">{item.name}</h5>
                    <p className=" small mb-2">{item.category}</p>

                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="price">Price: {item.price}$</div>
                      <span className="stock-badge">{item.stock}</span>
                    </div>

                    <div className="d-flex justify-content-between ">
                      <div>
                        <div>Stock:</div>
                        <div>Sales:</div>
                      </div>
                      <div className="text-end ">
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




