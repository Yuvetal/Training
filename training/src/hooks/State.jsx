import React from 'react'
import {useState} from 'react'
const States = () => {
    const [count,setCount]=useState(0);
    const [like,setLike]=useState(0);
    const [dislike,setDislike]=useState(0);
  return (
    <div>UseState Example
    <h2>Count:{count}</h2>
    <button onClick={()=>setLike(like+1)}>👍{like}</button><br/>
    <button onClick={()=>setDislike(dislike+1)}>👎{dislike}</button><br/>
    <button onClick={()=>setCount(count+1)}>Increase</button><br/>
    </div>
  )
}

export default States