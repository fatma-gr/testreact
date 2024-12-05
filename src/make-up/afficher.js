import { Link } from "react-router-dom";

export default function Afficher(props) {
  return (
    <div className="col-md-4 col-lg-3 mb-4">
      <div className="card h-100" style={{ backgroundColor: '#FBE0E6' }}>
        <img
          src={props.products.images[0]}
          className="card-img-top"
          alt={props.products.title}
          style={{ objectFit: 'cover', height: '200px' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{props.products.title}</h5>
          <p className="card-text text-muted">{props.products.brand}</p>
          <p className="card-text text-muted">{props.products.category}</p>
          <p className="card-text text-muted">${props.products.price}</p>
          <div className="mt-auto">
            <Link
              to={`/Product/${props.products.id}`}
              className="btn btn-primary btn-sm w-100"
              style={{ textDecoration: 'none' }}
            >
              More Information
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
