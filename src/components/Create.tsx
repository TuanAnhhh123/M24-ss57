import axios from "axios"
import { useEffect } from "react"


export default function Create() {
    useEffect(()=>{
        let newUser={
            name:"thu",
            email:"thu@gmail.com"
        }
        axios.post("http://localhost:3000/users",newUser)
    },[])
  return (
    <div>Create</div>
  )
}
