import './index.css';

export default function Creator(props) {
  return (
    <div className="creator">
      <img src={props.img} alt=""/>
      <p>{props.name}</p>
      <p>Total sales: {props.totalSales}</p>
    </div>
  )
}