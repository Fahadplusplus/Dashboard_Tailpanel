import { useState } from "react"



export default function Count(){
 
    let [counter, setCounter] = useState(0)

    const addVal= ()=>{
         
        if (counter < 20){
              setCounter(counter + 1)
        }
      
   
       
        
    }
    const removeVal= ()=>{
        if(counter > 0){
             setCounter(counter - 1)
        }
        
      
    }
return(

<>
 <div>counter: {counter}</div>
 <button onClick={addVal}> ADD {counter} </button>
 <button onClick={removeVal}> Remove {counter}</button>
</>
   

)
}