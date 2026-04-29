import React, { useState } from "react";
import axios from "axios"
import { } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import ImageUpload from "../components/layout/ImageUpload";


function EaddProducts() {
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("")


  const navigate = useNavigate()


  const [product, setProduct] = useState({

    name: "",
    category: "",
    price: "",
    stock: "",
    quantity: "",
    sold: "",
    sku: "",
    description: "",
  });



  //  const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (!file) return;

  //   let newErrors = {};


  //   const fileName = file.name.toLowerCase();
  //   const fileExt = fileName.includes(".")
  //     ? fileName.split(".").pop()
  //     : "";

  //   const validExtensions = ["jpg", "jpeg", "png", "gif"];


  //   if (
  //     !file.type.startsWith("image/") &&
  //     !validExtensions.includes(fileExt)
  //   ) {
  //     newErrors.image = "Only image files (JPG, PNG, GIF) are allowed";
  //   }



  //   if (file.size > 5 * 1024 * 1024) {
  //     newErrors.image = "File must be less than 5MB";
  //   }

  //   if (Object.keys(newErrors).length > 0) {
  //     setError((prev) => ({
  //       ...prev,
  //       ...newErrors,
  //     }));
  //     return;
  //   }

  //   setImageFile(file);

  //   // clear error
  //   setError((prev) => ({
  //     ...prev,
  //     image: "",
  //   }));
  // };

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "productimg");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dcbptp5nf/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    console.log("Cloudinary response:", data);

    return data.secure_url;
  };

  const handleCancel = () => {
    setProduct({

      name: "",
      category: "",
      price: " ",
      stock: "",
      quantity: "",
      sold: "",
      sku: "",
      description: "",
    });
    setError("")
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev, [name]: value
    }))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true)

      let imageUrl = "";

      if (imageFile) {
        imageUrl = await handleImageUpload(imageFile);
      }

      const newProduct = {
        ...product,
        image: imageUrl,
      };



      await axios.post("http://localhost:8000/productsData", newProduct);

      setProduct({
        name: "",
        category: "",
        price: " ",
        stock: "",
        quantity: "",
        sold: "",
        sku: "",
        description: "",
      });

      navigate("/eproduct");
      setLoading(false);

    }

  };

  const validate = () => {
    let newError = {}

    if (!product.name.trim()) {
      newError.name = "Product name is required";
    } else if (product.name.length < 3) {
      newError.name = "Minimum 3 characters required";
    } else if (product.name.length > 50) {
      newError.name = "Maximum 50 characters allowed";
    }


    const skuRegex = /^[A-Z0-9-]+$/;
    if (!product.sku.trim()) {
      newError.sku = "SKU is required";
    } else if (!skuRegex.test(product.sku)) {
      newError.sku = "SKU must be uppercase letters, numbers, or dashes";
    }


    if (!product.category.trim()) {
      newError.category = "Category is required";
    } else if (product.category.length < 3) {
      newError.category = "Category must be at least 3 characters";
    }


    if (!product.description.trim()) {
      newError.description = "Description is required";
    } else if (product.description.length < 10) {
      newError.description = "Description must be at least 10 characters";
    } else if (product.description.length > 200) {
      newError.description = "Max 200 characters allowed";
    }


    if (!product.price) {
      newError.price = "Price is required";
    } else if (isNaN(product.price) || Number(product.price) <= 0) {
      newError.price = "Price must be a positive number";
    }


    if (!product.quantity) {
      newError.quantity = "Quantity is required";
    } else if (!Number.isInteger(Number(product.quantity)) || Number(product.quantity) < 0) {
      newError.quantity = "Quantity must be a valid non-negative integer";
    }


    if (product.sold === "") {
      newError.sold = "Sold value is required";
    } else if (!Number.isInteger(Number(product.sold)) || Number(product.sold) < 0) {
      newError.sold = "Sold must be a valid non-negative integer";
    } else if (Number(product.sold) > Number(product.quantity)) {
      newError.sold = "Sold cannot exceed quantity";
    }




    setError(newError)
    return Object.keys(newError).length === 0
  }




  return (

    <div className="Order mt-4">
      <h2 className="mb-4 fw-bold">Add New Product</h2>

      <form onSubmit={handleSubmit}>
        <div className="row g-4">


          <div className="col-lg-8">


            <div className="Order p-4 mb-4">
              <h5 className="mb-3">Product Information</h5>

              <div className="mb-3">
                <label className="form-label">Product Name *</label>
                <input
                  type="text"
                  className={`form-control ${error.name ? "is-invalid" : ""} input-field`}
                  name="name"
                  placeholder="Name"
                  value={product.name}
                  onChange={handleChange}
                />

                {error.name && (
                  <div className="invalid-feedback">{error.name}</div>
                )}
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">SKU *</label>
                  <input
                    type="text"
                    className={`form-control ${error.sku ? "is-invalid" : ""} input-field `}
                    name="sku"
                    value={product.sku}
                    onChange={handleChange}
                    placeholder="PRD-001"
                  />
                  {error.sku && (
                    <div className="invalid-feedback">{error.sku}</div>
                  )}

                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Category *</label>

                  <select
                    className={`form-control ${error.category ? "is-invalid" : ""} input-field`}
                    name="category"
                    value={product.category}
                    onChange={handleChange}

                  >

                    
                    <option value="">Select Category</option>
                    

                  
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Home">Home</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Sports">Sports</option>
                    <option value="Books">Books</option>
                    ```

                  </select>

                  {error.category && (<div className="invalid-feedback">{error.category}</div>
                  )}

                </div>

              </div>

              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className={`form-control ${error.description ? "is-invalid" : ""} input-field `}
                  rows="3"
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  placeholder="Enter product description"
                />
                {error.description && (
                  <div className="invalid-feedback">{error.description}</div>
                )}

              </div>
            </div>


            <div className="Order p-4">
              <h5 className="mb-3">Pricing & Inventory</h5>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Price *</label>
                  <input
                    type="number"
                    className={`form-control ${error.price ? "is-invalid" : ""} input-field  `}
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    placeholder="$ 0.00"
                  />
                  {error.price && (
                    <div className="invalid-feedback">{error.price}</div>
                  )}

                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Stock Quantity *</label>
                  <input
                    type="number"
                    className={`form-control ${error.quantity ? "is-invalid" : ""} input-field `}

                    name="quantity"
                    value={product.quantity}
                    onChange={handleChange}
                    placeholder="0"
                  />
                  {error.quantity && (
                    <div className="invalid-feedback">{error.quantity}</div>
                  )}

                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Sold</label>
                  <input
                    type="number"
                    className={`form-control ${error.sold ? "is-invalid" : ""} input-field `}
                    name="sold"
                    placeholder="0"
                    value={product.sold}
                    onChange={handleChange}
                  />
                  {error.sold && (
                    <div className="invalid-feedback">{error.sold}</div>
                  )}

                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Stock Status</label>
                  <select
                    className="form-select input-field  "

                    name="stock"
                    value={product.stock}
                    onChange={handleChange}
                  >
                    <option value="">Select stock status</option>
                    <option value="In Stock">In Stock</option>
                    <option value="Low Stock">Low Stock</option>
                    <option value="Out of Stock">Out of Stock</option>
                  </select>
                </div>
              </div>
            </div>

          </div>


          <div className="col-lg-4">


            <div className="Order p-4 mb-4 text-center">
              <h5 className="mb-3">Product Image</h5>
              <ImageUpload
                setImageFile={setImageFile}
                setError={setError}
              />

              {/* <input
                type="file"
                 className={`form-control ${error.image ? "is-invalid" : ""} `}
                onChange={handleImageChange}
              />
               {error.image && (
                  <div className="invalid-feedback">{error.image}</div>
                )}

              <small className="text-muted d-block mt-2">
                JPG, PNG, GIF (Max 5MB)
              </small> */}

            </div>

            {/* Actions */}
            <div className="Order p-4">
              <h5 className="mb-3">Actions</h5>

              <button
                type="submit"
                className="btn btn-primary w-100 mb-2"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2"></span>
                    Uploading...
                  </>
                ) : (
                  "Add Product"
                )}
              </button>


              <button
                type="button"
                className="btn btn-outline-secondary w-100"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>

          </div>

        </div>
      </form>


    </div>
  );
}



export default EaddProducts