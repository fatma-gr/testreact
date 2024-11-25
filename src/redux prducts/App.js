import { BrowserRouter,Routes,Route, Link } from "react-router-dom"
import Products from "./Products"
import Ajouter from "./Ajouter"
import Modifier from "./Modifier"
export default function App() {
  return (
    <BrowserRouter>
    <Link className="btn btn-info" to={'/'}>Home</Link>
    <Link className="btn btn-info" to={'/ajouter'}>ajouter</Link>

        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/ajouter" element={<Ajouter />} />
            <Route path="/modifier/:id" element={<Modifier />} />
            <Route path="*" element={<p>not found</p>} />
        </Routes>
    </BrowserRouter>
  )
}
