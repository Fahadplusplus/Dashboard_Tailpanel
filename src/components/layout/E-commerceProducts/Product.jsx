import axios from "axios"
import { useState,useEffect } from "react"
import ProductItem from "./ProductItem"

const Product = ()=> {
     const [products, setProducts] = useState([])
    useEffect(()=>{
        const fetchProducts= async  ()=>{
            try{
                  const res = await axios.get("http://localhost:8000/productsData");
                  setProducts(res.data)
            }
            catch(e){
                console.error(e)
            }
        };
        fetchProducts()
    },[]) 

  return (
    
    <>  

    <div className="row g-3">
        {products.map((item) => (
            <div className="col-12 col-md-6 col-xl-3" key={item.id}>
              <ProductItem
                 item= {item}
              />
            </div>
          ))}
    </div>
          
    </> 

   
  )
}

export default Product


