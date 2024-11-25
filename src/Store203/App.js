import  { useEffect, useState } from 'react'
import Acceuil from './Acceuil'
import Electrinics from './Electrinics'
import Men from './Men'
import axios from "axios"
import Jewlery from './Jewlery'
import Women from './Women'
import Nav from './Nav'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Notfound from './Notfound'
export default function App() {
    const [products,setproducts]=useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>setproducts(res.data))
    })
  return (
    <>
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route index path='/' element={<Acceuil products={products} />} />
                <Route path='/electronics' element={<Electrinics products={products} />} />
                <Route path='/jewlery' element={<Jewlery products={products} />} />
                <Route path='/men' element={<Men products={products} />}/>
                <Route path='/women' element={<Women products={products} />}/>
                <Route path='*' element={<Notfound />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}
