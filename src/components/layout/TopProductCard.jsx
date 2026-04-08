import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import TopProductItem from './TopProductItem';

function TopProductCard() {
      const [topProducts, setTopProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8000/topProducts");
        setTopProducts(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  return (
   <div className="card shadow-sm border-0">
      <div className="card-body">
        <h5 className="mb-4">Recent Orders</h5>

        {loading ? (
          <p>Loading...</p>
        ) : (
          topProducts.map((item,index) => (
            <TopProductItem key={index} product={item}/>
          ))
        )}
      </div>
    </div>
  )
}

export default TopProductCard