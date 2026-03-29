import Image from "next/image";
import FooterHome from "../footer/FooterHome";
import aris from "/public/img/matchfixing/aris.png";
import arjentina from "/public/img/matchfixing/arjentina.png";
import denmark from "/public/img/matchfixing/denmark.png";
import france from "/public/img/matchfixing/france.png";
import gs from "/public/img/matchfixing/gs.png";
import maxico from "/public/img/matchfixing/maxico.png";
import poland from "/public/img/matchfixing/poland.png";
import tenerif from "/public/img/matchfixing/tenerif.png";

import Link from "next/link";
import fujian from "/public/img/matchfixing/fujian.png";

const FovatiresTab = () => {
  return (
    <div
      className="tab-pane mt__30 text-white fade"
      id="mainTab14"
      role="tabpanel"
      tabIndex="0"
    >
      {/* main body */}
      <div className="main__body__wrap left__right__space pb-60">
        <div className="favorites__tabs__wrap">
          <div className="favorites__head mb__20">
            <span className="icons">
              <i className="icon-football"></i>
            </span>
            <span>Football</span>
          </div>
          <div className="row g-4 mb__30">
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6">
              <Link href="URL:void(0)" className="match__fixing__items">
                <div className="match__head">
                  <div className="match__head__left">
                    <span className="icons">
                      <i className="icon-football"></i>
                    </span>
                    <span>World Cup 2022</span>
                  </div>
                  <span className="today">
                    <i className="fas fa-star"></i>
                  </span>
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
                    <span>3.55</span>
                  </li>
                  <li>
                    <span>4.50</span>
                  </li>
                  <li>
                    <span>2.20</span>
                  </li>
                </ul>
              </Link>
            </div>
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6">
              <Link href="URL:void(0)" className="match__fixing__items">
                <div className="match__head">
                  <div className="match__head__left">
                    <span className="icons">
                      <i className="icon-football"></i>
                    </span>
                    <span>World Cup 2022</span>
                  </div>
                  <span className="today">
                    <i className="fas fa-star"></i>
                  </span>
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
                    <span>2.55</span>
                  </li>
                  <li>
                    <span>1.25</span>
                  </li>
                  <li>
                    <span>1.20</span>
                  </li>
                </ul>
              </Link>
            </div>
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6">
              <Link href="URL:void(0)" className="match__fixing__items">
                <div className="match__head">
                  <div className="match__head__left">
                    <span className="icons">
                      <i className="icon-football"></i>
                    </span>
                    <span>World Cup 2022</span>
                  </div>
                  <span className="today">
                    <i className="fas fa-star"></i>
                  </span>
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
                    <span>4.58</span>
                  </li>
                  <li>
                    <span>3.51</span>
                  </li>
                  <li>
                    <span>2.22</span>
                  </li>
                </ul>
              </Link>
            </div>
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6">
              <Link href="URL:void(0)" className="match__fixing__items">
                <div className="match__head">
                  <div className="match__head__left">
                    <span className="icons">
                      <i className="icon-football"></i>
                    </span>
                    <span>WEFA</span>
                  </div>
                  <span className="today">
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <div className="match__vs">
                  <div className="match__vs__left">
                    <span>Farense</span>
                    <span className="flag">
                      <Image src={france} alt="flag" />
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
                    <span>3.55</span>
                  </li>
                  <li>
                    <span>4.50</span>
                  </li>
                  <li>
                    <span>2.20</span>
                  </li>
                </ul>
              </Link>
            </div>
          </div>
          <div className="favorites__head mb__20">
            <span className="icons">
              <i className="icon-basketball"></i>
            </span>
            <span>Basketball</span>
          </div>
          <div className="row g-4">
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6">
              <Link href="URL:void(0)" className="match__fixing__items">
                <div className="match__head">
                  <div className="match__head__left">
                    <span className="icons">
                      <i className="icon-football"></i>
                    </span>
                    <span>World Cup 2022</span>
                  </div>
                  <span className="today">
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <div className="match__vs">
                  <div className="match__vs__left">
                    <span>Aris</span>
                    <span className="flag">
                      <Image src={aris} alt="flag" />
                    </span>
                  </div>
                  <span className="vs">Vs</span>
                  <div className="match__vs__left">
                    <span className="flag">
                      <Image src={gs} alt="flag" />
                    </span>
                    <span>GS Lavriou</span>
                  </div>
                </div>
                <div className="match__result">
                  <span className="matchborder"></span>
                  <span className="match__text">Match Reult</span>
                </div>
                <ul className="match__point">
                  <li>
                    <span>3.55</span>
                  </li>
                  <li>
                    <span>4.50</span>
                  </li>
                  <li>
                    <span>2.20</span>
                  </li>
                </ul>
              </Link>
            </div>
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6">
              <Link href="URL:void(0)" className="match__fixing__items">
                <div className="match__head">
                  <div className="match__head__left">
                    <span className="icons">
                      <i className="icon-football"></i>
                    </span>
                    <span>World Cup 2022</span>
                  </div>
                  <span className="today">
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <div className="match__vs">
                  <div className="match__vs__left">
                    <span>Aris</span>
                    <span className="flag">
                      <Image src={aris} alt="flag" />
                    </span>
                  </div>
                  <span className="vs">Vs</span>
                  <div className="match__vs__left">
                    <span className="flag">
                      <Image src={fujian} alt="flag" />
                    </span>
                    <span>Fujian</span>
                  </div>
                </div>
                <div className="match__result">
                  <span className="matchborder"></span>
                  <span className="match__text">Match Reult</span>
                </div>
                <ul className="match__point">
                  <li>
                    <span>3.55</span>
                  </li>
                  <li>
                    <span>4.50</span>
                  </li>
                  <li>
                    <span>2.20</span>
                  </li>
                </ul>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* main body */}

      {/* Footer Start */}
      <FooterHome />
      {/* Footer End */}
    </div>
  );
};

export default FovatiresTab;
