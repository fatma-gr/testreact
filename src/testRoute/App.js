import axios from "axios";
import { useState,useEffect } from "react";
import Home from "./Home";
import Jewlery from "./Jewlery";
import Women from "./women";
import Men from "./Men";
import Nav from "./Nav";
import Notfound from "./Notfound";
import product from "./product";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App(){
    const [products,setproducts]=useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>setproducts(res.data))
    },[])
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home products={products} />}/>
            <Route path='/jewelery' element={<Jewlery products={products} />}/>
            <Route path='/Women' element={<Women products={products} />}/>
            <Route path='/Men' element={<Men products={products} />}/>
            <Route path='/Nav' element={<nav products={products} />}/>
            <Route path='/Notfound' element={<Notfound products={products} />}/>

        </Routes>
       
        </BrowserRouter>
    )

}