import "./index.css";
import primaryPhotoPlaceholder from "../../../assets/primary_photo_placeholder.png";
import secondaryPhotoPlaceholder from "../../../assets/secondary_photo_placeholder.png";
import bear from "../../../assets/bear.png";
import magicBig from "../../../assets/magic_big.png";
import magicSmall from "../../../assets/magic_small.png";
import robotBig from "../../../assets/robot_big.png";
import robotSmall from "../../../assets/robot_small.png";
import avatarDog from "../../../assets/avatar_dog.png";
import avatarGuy from "../../../assets/avatar_guy.svg"
import avatarRobot from "../../../assets/avatarRobot.svg"

export default function Section2() {
  return (
    <section className="section2">
      <div className="section2-info">
        <h2>Trending Collection</h2>
        <p>Checkout our weekly updated trending collection.</p>
      </div>

      <div className="nft-collection">
        <div className="collection1">
          <img className="prim-img" src={primaryPhotoPlaceholder} alt="" />
          <div className="bottom">
            <img src={secondaryPhotoPlaceholder} alt="" />
            <img src={bear} alt="" />
            <div className="more-nfts">
              <p>1025+</p>
            </div>
          </div>
          <div className="nft-collection-author">
            <h3>DSGN Animals</h3>
            <div className="author">
              <img src={avatarDog} alt="" />
              <p>MrFox</p>
            </div>
          </div>
        </div>

        <div className="collection1">
          <img className="prim-img" src={magicBig} alt="" />
          <div className="bottom">
            <img src={magicSmall} alt="" />
            <img src={magicSmall} alt="" />
            <div className="more-nfts">
              <p>1025+</p>
            </div>
          </div>
          <div className="nft-collection-author">
            <h3>Magic Mushrooms</h3>
            <div className="author">
              <img src={avatarGuy} alt="" />
              <p>Shroomie</p>
            </div>
          </div>
        </div>

        <div className="collection1">
          <img className="prim-img" src={robotBig} alt="" />
          <div className="bottom">
            <img src={robotSmall} alt="" />
            <img src={robotSmall} alt="" />
            <div className="more-nfts">
              <p>1025+</p>
            </div>
          </div>
          <div className="nft-collection-author">
            <h3>Disco Machines</h3>
            <div className="author">
              <img src={avatarRobot} alt="" />
              <p>BeKind2Robots</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
