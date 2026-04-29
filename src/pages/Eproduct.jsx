import { useState } from "react";
import Product from "../components/layout/E-commerceProducts/Product";
import { NavLink } from "react-router-dom";

export default function Eproduct() {
  const [category, setCategory] = useState("");
  

  return (
    <>
      <div className="d-flex">
        <div className="fw-bold">Product</div>
        <div className="ms-auto">
          <NavLink to="/eaddProducts">
            <button className="btn btn-primary">Add Product</button>
          </NavLink>
        </div>
      </div>

      <select
        className="Order my-4 w-100"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All / Search</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Shoes">Shoes</option>
        <option value="Accessories">Accessories</option>
        <option value="Home">Home</option>
        <option value="Beauty">Beauty</option>
        <option value="Sports">Sports</option>
        <option value="Books">Books</option>
      </select>

      <Product selectedCategory={category} />
    </>
  );
}