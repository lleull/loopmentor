import React from "react";
import "./Diction.css";
import image1 from "./image-interactive.jpg";
import icon from "./images/icon-facebook.svg";
import { useState } from "react";
import icons2 from "./images/icon-twitter.svg";
import icons from './icon-menu.svg'
import cancel from './icon-menu-close.svg'
import icons3 from "./images/icon-pinterest.svg";
import icons4 from "./images/icon-instagram.svg";
const Landpage = () => {
  const [tooglemenu, settooglemenu] = useState(false);
  return (
    <div className="section1">
      <div className="upperpage">
        <div className="backcolor"></div>
        <div className="headerpage">
        <div className="mobnav">
        <h1 className="navtitles">loop Studio</h1>
        <div className="icon">
          {!tooglemenu ? (
            <img
              onClick={() => settooglemenu(true)}
              className="iconspage"
              src={icons}
              alt="datas"
            />
          ) : (
            ""
          )}
          {tooglemenu ? (
            <div className="toogle">
              <img
                onClick={() => settooglemenu(false)}
                className="iconscancel"
                src={cancel}
                alt="datas"
              />
              <div className="tooglelist">
                <li className="listtoogle"  onClick={() => settooglemenu(false)}>About</li>
                <li className="listtoogle" onClick={() => settooglemenu(false)}>Careers</li>
                <li className="listtoogle" onClick={() => settooglemenu(false)}>Events</li>
                <li className="listtoogle" onClick={() => settooglemenu(false)}>Products</li>
                <li className="listtoogle" onClick={() => settooglemenu(false)}>Support</li>
              </div>
            </div>
          ) : (
            ""
          )}
          </div>
          {/* toogle */}
            </div>
          <div className="nav">
           
            <h6 className="title">loopStudios</h6>

            <ul className="navul">
              <li className="lists">Careers</li>
              <li className="lists">Events</li>
              <li className="lists">About</li>
              <li className="lists">Products</li>
              <li className="lists">Support</li>
            </ul>
          </div>
          <div className="headtext">
            <h6 className="headword">IMMERSIVE EXPRIENCES THAT DELIVER</h6>
          </div>
        </div>
      </div>
      <div className="secondpage">
        <div className="secondsection">
          <img className="img1" src={image1} alt="d" />
          <div className="secondtext">
            <h4>THE LEADER IN INTERACTIVE VR</h4>
            <p className="paras">
              Founded in 2011, Loopstudios has been producing World-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              throught the digital expreinces that bind to their brand
            </p>
          </div>
        </div>
      </div>
      <div className="thirdsection">
        <div className="insidethird">
          <div className="thirdtext">
            <h3 className="react">OUR CREATION</h3>
            <button className="seebtn">SEE ALL</button>
          </div>
          <div className="imagesection">
            <div className="imagebox1">
              <h3>DEEP WATER</h3>
            </div>
            <div className="imagebox2">
              <h3>NIGHT ARCADE</h3>
            </div>
            <div className="imagebox3">
              <h3>SOCCER TEAM VR</h3>
            </div>
            <div className="imagebox4">
              <h3>THE GRID</h3>
            </div>
            <div className="imagebox5">
              <h3>FROM UP ABOVE VR</h3>
            </div>
            <div className="imagebox6">
              <h3>POCKET BOREALS</h3>
            </div>
            <div className="imagebox7">
              <h3>THE CURIOSITY</h3>
            </div>
            <div className="imagebox8">
              <h3>MAKE IT FISHEYE</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="lastpage">
          <h1 className="abouttitle">loopStudios</h1>

          <ul className="aboutul">
            <li className="lists" >About</li>
            <li className="lists">Careers</li>
            <li className="lists">Events</li>
            <li className="lists">Products</li>
            <li className="lists">Support</li>
          </ul>
        </div>

        <div className="aboutpart">
          <div className="icons">
            <img style={{ width: "20px", height: "20px" }} src={icon} alt="s" />
            <img
              style={{ width: "20px", height: "20px" }}
              src={icons2}
              alt="s"
            />
            <img
              style={{ width: "20px", height: "20px" }}
              src={icons3}
              alt="s"
            />
            <img
              style={{ width: "20px", height: "20px" }}
              src={icons4}
              alt="s"
            />
          </div>
          <p className="address">@2022 Loopstudios. All right reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Landpage;
