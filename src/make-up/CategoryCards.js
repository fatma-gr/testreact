import { Link } from "react-router-dom";

export default function CategoryCard({ categoryName, imageSrc, link }){
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 category-card" id={`card-${categoryName}`}>
        <img
          src={imageSrc}
          alt={categoryName}
          className="card-img-top"
          style={{ objectFit: 'contain', height: '150px', width: '40%', display: 'block', margin: '0 auto' 
          }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{categoryName}</h5>
          <p className="card-text">Explore our {categoryName} products.</p>
          <Link to={link} className="btn btn-primary w-100">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}
