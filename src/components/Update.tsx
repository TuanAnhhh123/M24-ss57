import axios from "axios"
import { useEffect } from "react"

export default function Update() {
    useEffect(()=>{
        axios.patch("http://localhost:3000/users/4",{name:"huyền"})
    },[])
  return (
    <div>Update</div>
  )
}
