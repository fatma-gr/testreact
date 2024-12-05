import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Modifier from "./Modifier";
import Home from "./Home";
import Ajouter from "./Ajouter";
export default function App() {
  return (
    <BrowserRouter>
    <Link className="btn btn-primary" to={"/"} >home</Link>
    <Link className="btn btn-primary" to={"/ajouter"} >ajouter</Link>
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/ajouter"} element={<Ajouter />} />
            <Route path={"/modifier/:id"} element={<Modifier />} />
        </Routes>
    </BrowserRouter>
  )
}
