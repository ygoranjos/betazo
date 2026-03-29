"use client";

import arjentina from "/public/img/matchfixing/arjentina.png";
import aus from "/public/img/matchfixing/aus.png";
import denmark from "/public/img/matchfixing/denmark.png";
import farense from "/public/img/matchfixing/farense.png";
import france from "/public/img/matchfixing/france.png";
import maxico from "/public/img/matchfixing/maxico.png";
import oviedo from "/public/img/matchfixing/oviedo.png";
import poland from "/public/img/matchfixing/poland.png";
import tenerif from "/public/img/matchfixing/tenerif.png";
import tunisia from "/public/img/matchfixing/tunisia.png";

import Image from "next/image";
import Slider from "react-slick";

const MatchFixingSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1243,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="match__fixing__wrap top__bottom__space left__right__space owl-theme owl-carousel">
      <Slider {...settings}>
        <div className="match__fixing__items">
          <div className="match__head">
            <div className="match__head__left">
              <span className="icons">
                <i className="icon-football"></i>
              </span>
              <span>World Cup 2022</span>
            </div>
            <span className="today">Today / 22:00</span>
          </div>
          <div className="match__vs">
            <div className="match__vs__left">
              <span>Argentina</span>
              <span className="flag">
                <Image src={arjentina} alt="flag" />
              </span>
            </div>
            <span className="vs">Vs</span>
            <div className="match__vs__left">
              <span className="flag">
                <Image src={france} alt="flag" />
              </span>
              <span>France</span>
            </div>
          </div>
          <div className="match__result">
            <span className="matchborder"></span>
            <span className="match__text">Match Reult</span>
          </div>
          <ul className="match__point">
            <li>
              <span>1</span>
              <span>8.55</span>
            </li>
            <li>
              <span>X</span>
              <span>6.50</span>
            </li>
            <li>
              <span>2</span>
              <span>3.20</span>
            </li>
          </ul>
        </div>
        <div className="match__fixing__items">
          <div className="match__head">
            <div className="match__head__left">
              <span className="icons">
                <i className="icon-football"></i>
              </span>
              <span>World Cup 2022</span>
            </div>
            <span className="today">Today / 2:00</span>
          </div>
          <div className="match__vs">
            <div className="match__vs__left">
              <span>Poland</span>
              <span className="flag">
                <Image src={poland} alt="flag" />
              </span>
            </div>
            <span className="vs">Vs</span>
            <div className="match__vs__left">
              <span className="flag">
                <Image src={denmark} alt="flag" />
              </span>
              <span>Denmark</span>
            </div>
          </div>
          <div className="match__result">
            <span className="matchborder"></span>
            <span className="match__text">Match Reult</span>
          </div>
          <ul className="match__point">
            <li>
              <span>1</span>
              <span>3.55</span>
            </li>
            <li>
              <span>X</span>
              <span>4.50</span>
            </li>
            <li>
              <span>2</span>
              <span>2.20</span>
            </li>
          </ul>
        </div>
        <div className="match__fixing__items">
          <div className="match__head">
            <div className="match__head__left">
              <span className="icons">
                <i className="icon-football"></i>
              </span>
              <span>World Cup 2022</span>
            </div>
            <span className="today">Today / 22:00</span>
          </div>
          <div className="match__vs">
            <div className="match__vs__left">
              <span>Mexico</span>
              <span className="flag">
                <Image src={maxico} alt="flag" />
              </span>
            </div>
            <span className="vs">Vs</span>
            <div className="match__vs__left">
              <span className="flag">
                <Image src={poland} alt="flag" />
              </span>
              <span>Poland</span>
            </div>
          </div>
          <div className="match__result">
            <span className="matchborder"></span>
            <span className="match__text">Match Reult</span>
          </div>
          <ul className="match__point">
            <li>
              <span>1</span>
              <span>8.55</span>
            </li>
            <li>
              <span>X</span>
              <span>9.50</span>
            </li>
            <li>
              <span>2</span>
              <span>5.20</span>
            </li>
          </ul>
        </div>
        <div className="match__fixing__items">
          <div className="match__head">
            <div className="match__head__left">
              <span className="icons">
                <i className="icon-football"></i>
              </span>
              <span>WEFA</span>
            </div>
            <span className="today">Tomorrow / 01:00</span>
          </div>
          <div className="match__vs">
            <div className="match__vs__left">
              <span>Farense</span>
              <span className="flag">
                <Image src={farense} alt="flag" />
              </span>
            </div>
            <span className="vs">Vs</span>
            <div className="match__vs__left">
              <span className="flag">
                <Image src={tenerif} alt="flag" />
              </span>
              <span>Tenerife</span>
            </div>
          </div>
          <div className="match__result">
            <span className="matchborder"></span>
            <span className="match__text">Match Reult</span>
          </div>
          <ul className="match__point">
            <li>
              <span>1</span>
              <span>1.55</span>
            </li>
            <li>
              <span>X</span>
              <span>8.50</span>
            </li>
            <li>
              <span>2</span>
              <span>3.20</span>
            </li>
          </ul>
        </div>
        <div className="match__fixing__items">
          <div className="match__head">
            <div className="match__head__left">
              <span className="icons">
                <i className="icon-football"></i>
              </span>
              <span>EFL Trophy</span>
            </div>
            <span className="today">Tomorrow / 01:00</span>
          </div>
          <div className="match__vs">
            <div className="match__vs__left">
              <span>Tenerife</span>
              <span className="flag">
                <Image src={tenerif} alt="flag" />
              </span>
            </div>
            <span className="vs">Vs</span>
            <div className="match__vs__left">
              <span className="flag">
                <Image src={oviedo} alt="flag" />
              </span>
              <span>Real Oviedo</span>
            </div>
          </div>
          <div className="match__result">
            <span className="matchborder"></span>
            <span className="match__text">Match Reult</span>
          </div>
          <ul className="match__point">
            <li>
              <span>1</span>
              <span>3.55</span>
            </li>
            <li>
              <span>X</span>
              <span>9.50</span>
            </li>
            <li>
              <span>2</span>
              <span>6.20</span>
            </li>
          </ul>
        </div>
        <div className="match__fixing__items">
          <div className="match__head">
            <div className="match__head__left">
              <span className="icons">
                <i className="icon-football"></i>
              </span>
              <span>World Cup 2022</span>
            </div>
            <span className="today">Today / 22:00</span>
          </div>
          <div className="match__vs">
            <div className="match__vs__left">
              <span>Australia</span>
              <span className="flag">
                <Image src={aus} alt="flag" />
              </span>
            </div>
            <span className="vs">Vs</span>
            <div className="match__vs__left">
              <span className="flag">
                <Image src={tunisia} alt="flag" />
              </span>
              <span>Tunisia</span>
            </div>
          </div>
          <div className="match__result">
            <span className="matchborder"></span>
            <span className="match__text">Match Reult</span>
          </div>
          <ul className="match__point">
            <li>
              <span>1</span>
              <span>3.55</span>
            </li>
            <li>
              <span>X</span>
              <span>4.50</span>
            </li>
            <li>
              <span>2</span>
              <span>2.20</span>
            </li>
          </ul>
        </div>
      </Slider>
    </div>
  );
};

export default MatchFixingSlider;
