import axios from "axios"
import { useEffect } from "react"


export default function Delete() {
    useEffect(()=>{
        axios.delete("http://localhost:3000/users/2")
    },[])
  return (
    <div>Delete</div>
  )
}
