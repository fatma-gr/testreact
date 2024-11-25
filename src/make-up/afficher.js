export default function Afficher(props) {
  return (
    <div id="myCard" className="card" style={{ width: '18rem' }}>
      <img
        src={props.products.images[0]}
        className="card-img-top"
        alt={props.products.title}
        style={{ objectFit: 'cover', height: '200px' }}
      />
      <div className="card-body">
        <p className="card-text text-muted">{props.products.brand}</p>
        <p className="card-text text-muted">{props.products.category}</p>
        <p className="card-text text-muted">${props.products.price}</p>
      </div>
    </div>
  );
}