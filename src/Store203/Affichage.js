export default function Affichage(props) {
  return (
    <div className="col-3">
    <div className="card" style={{width:"250px"}}>
    <img src={props.product.image} className="card-img-top" alt={props.product.title} />
    <div className="card-body">
    <h5 className="card-title">{props.product.title}</h5>
    <p className="card-text"><p>{props.product.price}</p>{props.product.description}</p>
    <a href="#" className="btn btn-primary">buy</a>
    </div>
    </div>
    </div>
  )
}
