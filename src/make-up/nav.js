import {Link} from "react-router-dom";
export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-danger">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="/">My Store</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/fragrances">Fragrances</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  text-white" to="/beauty">Beauty</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/furniture">Furniture</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/groceries">Groceries</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/panier">Cart</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
