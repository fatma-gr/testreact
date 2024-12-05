import { useParams } from 'react-router-dom';
import NotFound from './notfound';

export default function Product(props) {
  const { id } = useParams();
  const products = props.products.find((p) => p.id === parseInt(id));

  return (
    <div className="container mt-4">
      {products ? (
        <div className="row">
          {/* Image Section */}
          <div className="col-md-4">
            <img src={products.images} alt={products.name} className="img-fluid" style={{ width: '100%' }} />
          </div>

          {/* Product Information Section */}
          <div className="col-md-8">
            <h3>{products.name}</h3>
            <p><strong>Fragrance:</strong> {products.fragrances}</p>
            <p><strong>Beauty Type:</strong> {products.beauty}</p>
            <p><strong>Category:</strong> {products.category}</p>
            <p><strong>Price:</strong> ${products.price}</p>
            <p><strong>Description:</strong> {products.description}</p>
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
}
