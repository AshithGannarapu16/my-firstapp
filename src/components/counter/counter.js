

import React, {useState} from 'react'

function Counter(){
    const [counter,setCounter]=useState(0);
    return(
        <>
        <div className='counter-container'>
            <button onClick={()=>setCounter(counter+1)}>Increment</button>
            <button onClick={()=>setCounter(counter-1)}>Decrement</button>
            <button>Reset</button>
           
            <p>count:{counter}</p>

        </div>
        
        </>
    )
}
export default Counter;