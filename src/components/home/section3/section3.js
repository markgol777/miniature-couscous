import "./index.css";
import rocket from "../../../assets/rocket.svg";
import Creator from "./creator";

export default function Section3() {
  return (
    <section className="section3">
      <div className="section3-info">
        <div className="left">
          <h2>Top creators</h2>
          <p>Checkout Top Rated Creators on the NFT Marketplace</p>
        </div>
        <div className="right">
          <button className="view-rankings-btn">
            <img src={rocket} alt="" /> View Rankings
          </button>
        </div>
      </div>

      <div className="creators">
        <Creator name="d" totalSales="asdf"/>
        <Creator name="d" totalSales="asdf"/>
        <Creator name="d" totalSales="asdf"/>
        <Creator name="d" totalSales="asdf"/>

      </div>
    </section>
  );
}
