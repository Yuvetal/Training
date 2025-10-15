const User =(props)=>{
    return(
        <div>
            <h1>Hi I am {props.name}, I am from {props.department} Department. I excel in 
                <ol>
                    {props.skills.map((skill)=>(
                        <li>{skill}</li>
                    ))}
                </ol>
            </h1>
        </div>
    )
}
export default User;