import React from 'react'

const Profile = ({name, age,games}) => {
  return (
    <div>
      <h1>I am {name} and I am {age} years old</h1>
      <ul>
        {games.map((Game)=>(
          <li>{Game}</li> 
        ))}
      </ul>
    </div>
  )
}

export default Profile