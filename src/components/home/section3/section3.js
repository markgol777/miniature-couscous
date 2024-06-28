import "./index.css";
import rocket from "../../../assets/rocket.svg";
import Creator from "./creator";
import keepitreal from "../../../assets/keepitreal.svg";
import digilab from '../../../assets/digilab.svg';
import gravityone from '../../../assets/GravityOne.svg';
import juanie from '../../../assets/Juanie.svg';
import bluewhale from '../../../assets/BlueWhale.svg';
import mr_fox from '../../../assets/mr_fox.svg';
import Shroomie from '../../../assets/Shroomie.svg';
import Robotica from '../../../assets/robotica.svg';
import RustyRobot from '../../../assets/RustyRobot.svg';
import Animakid from '../../../assets/animakid.svg';
import Dotgu from '../../../assets/Dotgu.svg';
import Ghiblier from '../../../assets/Ghiblier.svg'

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
        <Creator name="Keepitreal" img={keepitreal} totalSales="34.53 ETH"/>
        <Creator name="DigiLab" img={digilab} totalSales="34.53 ETH"/>
        <Creator name="GravityOne" img={gravityone} totalSales="34.53 ETH"/>
        <Creator name="Juanie" img={juanie} totalSales="34.53 ETH"/>
        <Creator name="BlueWhale" img={bluewhale} totalSales="34.53 ETH"/>
        <Creator name="Mr Fox" img={mr_fox} totalSales="34.53 ETH"/>
        <Creator name="Shroomie" img={Shroomie} totalSales="34.53 ETH"/>
        <Creator name="Robotica" img={Robotica} totalSales="34.53 ETH"/>
        <Creator name="RustyRobot" img={RustyRobot} totalSales="34.53 ETH"/>
        <Creator name="Animakid" img={Animakid} totalSales="34.53 ETH"/>
        <Creator name="Dotgu" img={Dotgu} totalSales="34.53 ETH"/>
        <Creator name="Ghiblier" img={Ghiblier} totalSales="34.53 ETH"/>

      </div>
    </section>
  );
}
