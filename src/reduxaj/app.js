import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Products from './Products'
import Ajouter from './Ajouter'
export default function App(){
    return(
        <BrowserRouter>
        <Link className="btn btn-info" to={'/'}>home</Link>
        <Link className="btn btn-info" to={'/ajouter'}>ajouter</Link>
             <Routes>
                <Route path="/" element={<Products/>}/>
                <Route path="/ajouter" element={<Ajouter/>}/>
                <Route path="*" element={<p>not found</p>}/>
             </Routes>
        </BrowserRouter>
    )
}