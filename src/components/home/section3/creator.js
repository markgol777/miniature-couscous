import './index.css';

export default function Creator(props) {
  return (
    <div className="creator">
      <img src={props.img} alt=""/>
      <h3>{props.name}</h3>
      <p className="total-sales"><span className="total-sales-text">Total sales:</span> {props.totalSales}</p>
    </div>
  )
}