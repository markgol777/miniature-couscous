import './index.css';
import ImgPlaceHolder from '../../../assets/ImgPlaceHolder.png';
import Avatar from '../../../assets/Avatar.svg';
import RocketLaunch from '../../../assets/RocketLaunch.svg'

export default function Section1() {
  return (
    <section className="section1">
      <div className="left-right-container-section1">
        <div className="left">
          <h1 className="section1-title">Discover <br/> digital art & <br/> Collect NFTs</h1>
          <p className="section1-description">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
          <button className="get-started-btn"><img src={RocketLaunch} alt=""/> Get Started</button>
          <div className="info-container">
            <div className="info-1">
              <h3>240k+</h3>
              <p>Total sale</p>
            </div>
            <div className="info-2">
              <h3>100k+</h3>
              <p>Auctions</p>
            </div>
            <div className="info-3">
              <h3>240k+</h3>
              <p>Artists</p>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={ImgPlaceHolder} alt=""/>
          <div className="under-img">
            <h3 className="under-img-title">Space Walking</h3>
            <div className="author">
              <img src={Avatar} alt=""/>
              <p>Animakid</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
