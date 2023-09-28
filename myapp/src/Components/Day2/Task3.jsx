import {useEffect, useState} from 'react'
import axios from "axios"
import './Task3.css'
const Task3 = () => {
  const[userlist, setUserlist]= useState([]);
  const[isError, setIsError]= useState("");
  const getData=async()=>{
    try{
      const res= await axios.get("https://jsonplaceholder.typicode.com/posts")
      setUserlist(res.data)
    }catch(error){
      setIsError(error.message)
    }
  }
  useEffect(()=>{
    getData();
  },[])
  const deleteUser=(index)=>{
    const updatedUser = userlist.filter((elem)=>{
      return index!=elem.id
    })
    setUserlist(updatedUser)
  }
  return (
    <div className='main'>
      <h1>User List</h1>
      {isError!=""&&<h2>{isError}</h2>}
      <div className='grid'>
        {userlist.slice(0,24).map((post)=>{
          const{id,title,body}=post;
          return(
          <div className='card' key={id}>
            <h2>{title.slice(0,24)}</h2>
            <p>{body.slice(0,24)}</p>
            <i class="fas fa-edit" onClick={()=>deleteUser(id)}></i>
          </div>
          )
        })}

      </div>
    </div>
  )
}

export default Task3