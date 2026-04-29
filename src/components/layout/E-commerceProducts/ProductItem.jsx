import React from 'react'

function ProductItem({ item ,setSelectedProduct,setMode ,setIsOpen}) {
 
    const handleView = () => {
  setSelectedProduct(item);
  setMode("view");
  setIsOpen(true);
};

const handleEdit = () => {
  setSelectedProduct(item);
  setMode("edit");
  setIsOpen(true);
};
  return (
    <>
      <div className="Order   p-2 " >

        <div className="">
          <img src={item.image}
            className="card-img-t product-img " />


        </div>

        <div className="">
          <div className='d-flex'>
            <div>
              <h5 className=" fw-semibold mb-1">{item.name}</h5>
              <p className=" small mb-2">{item.category}</p>
            </div>
            <div className='ms-auto'>

              <button
                className="btn btn-primary"
                onClick={handleView}
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
              >
                View
              </button>

              <button
                className="btn btn-warning ms-2"
                onClick={handleEdit}
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
              >
                Edit
              </button>
            </div>
          </div>



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




