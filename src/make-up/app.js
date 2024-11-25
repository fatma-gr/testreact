import axios from "axios";
import './style.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Acceuil from "./acceuil.js";
import Nav from "./nav.js";
import Fragrances from "./fragrances.js";
import Beauty from "./beauty.js";
import Furniture from "./furniture.js";
import Groceries from "./groceries.js";
import Footer from "./footer.js";
export default function App2() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products`)
            .then(res => setProducts(res.data.products))
            .catch(err => console.error("Error fetching data", err));
    },[]);

    return (
        <BrowserRouter>
        <Nav/>
            <Routes>
                <Route path="/" element={<Acceuil products={products} />} />
                <Route path="/fragrances" element={<Fragrances products={products} />} />
                <Route path="/beauty" element={<Beauty products={products} />} />
                <Route path="/furniture" element={<Furniture products={products} />} />
                <Route path="/Groceries" element={<Groceries products={products} />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}