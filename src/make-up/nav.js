import {Link} from "react-router-dom";
export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor:"pink"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">my store</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/fragrances">fragrances</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/beauty">beauty</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/furniture">furniture</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/groceries">groceries</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
