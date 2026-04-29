import axios from "axios"
import { useState, useEffect } from "react"
import ProductItem from "./ProductItem"
import { toast } from 'react-toastify';

const Product = ({ selectedCategory }) => {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mode, setMode] = useState("view");
  const [deleteModal, setdeleteModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8000/productsData");
        setProducts(res.data)
      }
      catch (e) {
        console.error(e)
      }
    };
    fetchProducts()
  }, [])
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const openDeleteModal = () => {
    setdeleteModal(true)
  }

  const handleDelete = async () => {

    console.log('Cicked');


    try {
      await axios.delete(`http://localhost:8000/productsData/${selectedProduct.id}`);

      setProducts(prev => prev.filter(p => p.id !== selectedProduct.id));
      toast.success("Product Deleted",{
        autoClose:1000
      })
      setdeleteModal(false)
      setIsOpen(false)



    } catch (e) {
      console.error(e);
    }
  };
  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:8000/productsData/${selectedProduct.id}`,
        selectedProduct
      );

      setProducts(prev =>
        prev.map(p => (p.id === selectedProduct.id ? selectedProduct : p)),
         setIsOpen(false),
         toast.success("Product Updated",{
          autoClose:1000
         }

         )
      );

      setMode("view");

    } catch (e) {
      console.error(e);
    }
  };


  return (

    <>


      <div className="row g-3">
        {filteredProducts.map((product) => (
          <div className="col-12 col-md-6 col-xl-3" key={product.id}>
            <ProductItem
              item={product}
              setSelectedProduct={setSelectedProduct}
              setMode={setMode}
              setIsOpen={setIsOpen}
            />
          </div>
        ))}
      </div>


      {isOpen && (
        <>

          <div className="custom-overlay" onClick={() => setIsOpen(false)}></div>


          <div className="custom-offcanvas">

            <div className="offcanvas-header">
              <h5>Product Details</h5>
              <button className="btn btn-primary ms-auto" onClick={() => setIsOpen(false)}>✕</button>
            </div>

            <div className="offcanvas-body mt-3">

              {selectedProduct && mode === "view" && (
                <>
                  <h4 className="">{selectedProduct.name}</h4>

                  <div className="">
                    <img src={selectedProduct.image}
                      className="card-img-t product-img " />


                  </div>

                  <p>{selectedProduct.description}</p>
                  <p>Category: {selectedProduct.category}</p>
                  <p>Price: {selectedProduct.price}$</p>

                  <button className="btn btn-danger mt-3" onClick={openDeleteModal}>
                    Delete
                  </button>
                </>
              )}

              {selectedProduct && mode === "edit" && (
                <>
                <div className="d-flex flex-column">
                   <div className="">
                    <img src={selectedProduct.image}
                      className="card-img-t product-img " />


                  </div>
                    <input
                    className="Order mb-2"
                    value={selectedProduct.name}
                    onChange={(e) =>
                      setSelectedProduct({ ...selectedProduct, name: e.target.value })
                    }
                  />
                   <input
                    className="Order mb-2"
                    value={selectedProduct.description}
                    onChange={(e) =>
                      setSelectedProduct({ ...selectedProduct, name: e.target.value })
                    }
                  />
                   <input
                    className="Order mb-2"
                    value={selectedProduct.sku}
                    onChange={(e) =>
                      setSelectedProduct({ ...selectedProduct, name: e.target.value })
                    }
                  />

                  <input
                    className="Order mb-2"
                    value={selectedProduct.price}
                    onChange={(e) =>
                      setSelectedProduct({ ...selectedProduct, price: e.target.value })
                    }
                  />

                  <button className="btn btn-success" onClick={handleUpdate}>
                    Update
                  </button>

                </div>
                
                </>
              )}

            </div>
          </div>
        </>
      )}
      {
        deleteModal && (<>
          <div className="modal-backdrop" />

          <div className="modal-wrapper">
            <div className="modal-box">

              <div className="modal-header  d-flex justify-content-center">
                <h5 className="modal-title">Confirm Delete</h5>

              </div>

              <div className="modal-body">


                <div className=''>
                  <div>
                    <p className='text-center'>Are you Sure</p>
                  </div>
                  <div className='d-flex justify-content-around mt-5 '>
                    <button className='btn btn-primary px-4 ' onClick={() => { handleDelete() }} >yes</button>
                    <button className=' px-4 btn btn-danger' onClick={() => { setdeleteModal(false) }}  >Cancle</button>
                  </div>


                </div>




              </div>


            </div>
          </div>
        </>)

      }



    </>


  )
}

export default Product


