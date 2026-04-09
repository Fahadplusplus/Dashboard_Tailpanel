import axios from "axios"
import { useState,useEffect } from "react"
import CardItem from "./CardItem"

const Card = ()=> {
     const [cards, setCards] = useState([])
    useEffect(()=>{
        const fetchCards= async  ()=>{
            try{
                  const res = await axios.get("http://localhost:8000/anayticsData");
                  setCards(res.data)
            }
            catch(e){
                console.error(e)
            }
        };
        fetchCards()
    },[]) 

  return (
    <>  
          {cards.map((item) => (
            <div className="col-12 col-md-6 col-xxl-3 g-3" key={item.id}>
              <CardItem
                 item= {item}
              />
            </div>
          ))}
    </> 

   
  )
}

export default Card


