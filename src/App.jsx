import React, { useEffect, useState } from "react"
import Card1 from "./components/Card1"
import axios from "axios"

function App() {
const [products, setProducts] = useState([])
useEffect(()=>{
   axios.get(`https://fakestoreapi.com/products/`).then((res)=>{
       setProducts(res.data)
   })
},[])
  return (
    <div className="text-red-500">
    <Card1 name="Revision one"/>
    </div>
  )
}

export default App
