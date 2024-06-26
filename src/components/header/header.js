import "./index.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import User from '../../assets/User.svg';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="menu">
        <p>
          <Link className="link" to="">Marketplace</Link>
        </p>
        <p>
          <Link className="link" to="">Rankings</Link>
        </p>
        <p>
          <Link className="link" to="">Connect a wallet</Link>
        </p>

        <button className="sign-up-btn"><img src={User} alt=""/> Sign up</button>
      </div>
    </header>
  );
}
