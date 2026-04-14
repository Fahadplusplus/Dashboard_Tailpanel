import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import UserCarditem from './UserCarditem';

function UsersCard() {
     const [cards, setCards] = useState([])
    useEffect(()=>{
        const fetchCards= async  ()=>{
            try{
                  const res = await axios.get("http://localhost:8000/employcardData");
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
              <UserCarditem
                 item= {item}
              />
            </div>
          ))}
    </> 

   
  )
}

export default UsersCard