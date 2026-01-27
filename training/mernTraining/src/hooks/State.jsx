import React, { useState } from 'react'

const State = () => {
    const [count, setCount]=useState(0)
    const [like, setLike]=useState(0)
    const [dislike,setDislike]=useState(0)
  return (
    <div>
        <h3>UseState Example</h3>

        <h3>Count={count}</h3>
        <button onClick={()=> setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <h3>Like={like}</h3>
        <button onClick={()=>setLike(like+1)}>👍</button>
        <h3>Dislike={dislike}</h3>
        <button onClick={()=>setDislike(dislike+1)}>👎</button>
    </div>
  )
}

export default State