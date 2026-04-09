import React, { useState } from "react";
import axios from "axios"
import { } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


function EaddProducts() {
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);


  const navigate = useNavigate()


  const [product, setProduct] = useState({
    link: "",
    name: "",
    category: "",
    price: "",
    stock: "",
    quantity: "",
    sold: ""
  });


  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

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


  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    let imageUrl = "";

    if (imageFile) {
      imageUrl = await handleImageUpload(imageFile);
    }

    const newProduct = {
      ...product,
      image: imageUrl,
    };
   
     console.log("Sending to DB:", newProduct);

    await axios.post("http://localhost:8000/productsData", newProduct);

    setProduct({
      link: "",
      name: "",
      category: "",
      price: "",
      stock: "",
      quantity: "",
      sold: "",
    });

    navigate("/eproduct");
     
    setLoading(false); 
  

  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //      axios.post("http://localhost:8000/productsData",

  //         {
  //           link: product.link,
  //           name: product.name,
  //           category: product.category,
  //           price: product.price,
  //           stock: product.stock,
  //           quantity: product.quantity,
  //           sold: product.sold


  //         }
  //       );
  //          setProduct({
  //       link: "",
  //       name: "",
  //       category: "",
  //       price: "",
  //       stock: "",
  //       quantity: "",
  //       sold: "",
  //     });



  //      navigate("/eproduct");






  // };



  // const validate = () => {
  //   let result = true;


  //   if (!product.link.startsWith("https://")) {
  //    toast.error("Link must start with https://")
  //     result = false;
  //   }


  //   if (/\s/.test(product.link)) {
  //    toast.error("Link can not have blank spaces")
  //     result = false;
  //   }

  //   return result;
  // };

  return (
    <div className=" mt-5">
      <h2 className="mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-light">
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="file"
            className="form-control"
            name="link"

            onChange={handleImageChange}
            placeholder="https://..."
          />

        </div>

        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Smart Watch"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            name="category"
            value={product.category}
            onChange={handleChange}
            placeholder="Electronics • SW-002"
          />
        </div>

        <div className="mb-3 row">
          <div className="col-md-4">
            <label className="form-label">Price ($)</label>
            <input
              type="number"
              className="form-control"
              name="price"
              value={product.price}
              onChange={handleChange}
              placeholder="100"
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Quantity</label>
            <input
              type="number"
              className="form-control"
              name="quantity"
              value={product.quantity}
              onChange={handleChange}
              placeholder="10"
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Sold</label>
            <input
              type="number"
              className="form-control"
              name="sold"
              value={product.sold}
              onChange={handleChange}
              placeholder="10"
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Stock Status</label>
          <select
            className="form-select"
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

        {/* <button type="submit" className="btn btn-primary w-100">
          Add Product
        </button> */}
        <button
          type="submit"
          className="btn btn-primary w-100"
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
      </form>
    </div>
  );
}



export default EaddProducts