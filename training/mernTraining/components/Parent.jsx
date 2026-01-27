import React from 'react'
import Child from './Child'
const Parent = () => {
    const getData=(data)=>{
        console.log("Data Recieved from child:",data)
    }
  return (
    <Child send={getData}/>
  )
}

export default Parent