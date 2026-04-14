import Link from "next/link";
import FooterHome from "../footer/FooterHome";
import Select from "../select/Select";

const categoris = [
  { id: 1, name: "Result 1X2" },
  { id: 2, name: "Result 1X3" },
  { id: 3, name: "Result 1X4" },
  { id: 4, name: "Result 1X5" },
];
const categoris2 = [
  { id: 1, name: "Over/Under" },
  { id: 2, name: "...." },
  { id: 3, name: "...." },
  { id: 4, name: "...." },
];
const categoris3 = [
  { id: 1, name: "Both teams to score?" },
  { id: 2, name: "...." },
  { id: 3, name: "...." },
  { id: 4, name: "...." },
];

const IceHockeyTab = () => {
  return (
    <div
      className="tab-pane mt__30 text-white fade"
      id="mainTab7"
      role="tabpanel"
      tabIndex="0"
    >
      {/* main Body */}
      <div className="main__body__wrap left__right__space pb-60">
        <div className="live__heightlight">
          <div className="height__table">
            <div className="main__table main__table__nextfootball">
              <div className="section__head b__bottom">
                <div className="left__head">
                  <span className="icons">
                    <i className="icon-icehockey"></i>
                  </span>
                  <span>IceHocky</span>
                </div>
                <div className="right__catagoris">
                  <div className="right__cate__items">
                    {/* select */}
                    <Select data={categoris} />
                  </div>
                  <div className="right__cate__items">
                    {/* select */}
                    <Select data={categoris2} />
                  </div>
                  <div className="right__cate__items">
                    {/* select */}
                    <Select data={categoris3} />
                  </div>
                </div>
              </div>
              <div className="table__wrap">
                <div className="table__items b__bottom">
                  <div className="t__items">
                    <div className="t__items__left t__items__left__nextogo">
                      <div className="t__items__icon">
                        <i className="icon-icehockey"></i>
                      </div>
                      <div className="content">
                        <h6>Löwen Frankfurt</h6>
                        <h6>Eisbären Berlin</h6>
                      </div>
                    </div>
                  </div>
                  <div className="mart__point__two mart__pint__nextgo">
                    <div className="mart__point__left">
                      <Link href="URL:void(0)" className="point__box">
                        <span className="point__1">1</span>
                        <span>1.40</span>
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        <span className="point__1">2</span>
                        <span>2.25</span>
                      </Link>
                    </div>
                    <div className="mart__point__right">
                      <Link
                        href="#min"
                        className="point__box-text point__box__nextto"
                      >
                        <span> Today / 17:30 </span>
                        <span className="icons">
                          <i className="fas fa-angle-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="table__items b__bottom">
                  <div className="t__items">
                    <div className="t__items__left t__items__left__nextogo">
                      <div className="t__items__icon">
                        <i className="icon-icehockey"></i>
                      </div>
                      <div className="content">
                        <h6>Bietigheim Steelers</h6>
                        <h6>Fischtown Pinguins Bremerhaven</h6>
                      </div>
                    </div>
                  </div>
                  <div className="mart__point__two mart__pint__nextgo">
                    <div className="mart__point__left">
                      <Link href="URL:void(0)" className="point__box">
                        <span className="point__1">1</span>
                        <span>1.83</span>
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        <span className="point__1">2</span>
                        <span>1.48</span>
                      </Link>
                    </div>
                    <div className="mart__point__right">
                      <Link
                        href="#min"
                        className="point__box-text point__box__nextto"
                      >
                        <span> Today / 10:30 </span>
                        <span className="icons">
                          <i className="fas fa-angle-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="table__items b__bottom">
                  <div className="t__items">
                    <div className="t__items__left t__items__left__nextogo">
                      <div className="t__items__icon">
                        <i className="icon-icehockey"></i>
                      </div>
                      <div className="content">
                        <h6>Düsseldorfer EG</h6>
                        <h6>Schwenninger Wild Wings</h6>
                      </div>
                    </div>
                  </div>
                  <div className="mart__point__two mart__pint__nextgo">
                    <div className="mart__point__left">
                      <Link href="URL:void(0)" className="point__box">
                        <span className="point__1">1</span>
                        <span>1.67</span>
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        <span className="point__1">2</span>
                        <span>2.40</span>
                      </Link>
                    </div>
                    <div className="mart__point__right">
                      <Link
                        href="#min"
                        className="point__box-text point__box__nextto"
                      >
                        <span> Today / 11:30 </span>
                        <span className="icons">
                          <i className="fas fa-angle-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="table__items b__bottom">
                  <div className="t__items">
                    <div className="t__items__left t__items__left__nextogo">
                      <div className="t__items__icon">
                        <i className="icon-icehockey"></i>
                      </div>
                      <div className="content">
                        <h6>Straubing Tigers</h6>
                        <h6>Grizzlys Wolfsburg</h6>
                      </div>
                    </div>
                  </div>
                  <div className="mart__point__two mart__pint__nextgo">
                    <div className="mart__point__left">
                      <Link href="URL:void(0)" className="point__box">
                        <span className="point__1">1</span>
                        <span>1.53</span>
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        <span className="point__1">2</span>
                        <span>2.10</span>
                      </Link>
                    </div>
                    <div className="mart__point__right">
                      <Link
                        href="#min"
                        className="point__box-text point__box__nextto"
                      >
                        <span> Today / 17:30 </span>
                        <span className="icons">
                          <i className="fas fa-angle-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="table__items b__bottom">
                  <div className="t__items">
                    <div className="t__items__left t__items__left__nextogo">
                      <div className="t__items__icon">
                        <i className="icon-icehockey"></i>
                      </div>
                      <div className="content">
                        <h6>HC Bili Tygri Liberec</h6>
                        <h6>HC Vitkovice Steel</h6>
                      </div>
                    </div>
                  </div>
                  <div className="mart__point__two mart__pint__nextgo">
                    <div className="mart__point__left">
                      <Link href="URL:void(0)" className="point__box">
                        <span className="point__1">1</span>
                        <span>2.55</span>
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        <span className="point__1">2</span>
                        <span>1.91</span>
                      </Link>
                    </div>
                    <div className="mart__point__right">
                      <Link
                        href="#min"
                        className="point__box-text point__box__nextto"
                      >
                        <span> Today / 26:15 </span>
                        <span className="icons">
                          <i className="fas fa-angle-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="table__items b__bottom">
                  <div className="t__items">
                    <div className="t__items__left t__items__left__nextogo">
                      <div className="t__items__icon">
                        <i className="icon-icehockey "></i>
                      </div>
                      <div className="content">
                        <h6>HC Ocelari Trinec</h6>
                        <h6>BK Mlada Boleslav</h6>
                      </div>
                    </div>
                  </div>
                  <div className="mart__point__two mart__pint__nextgo">
                    <div className="mart__point__left">
                      <Link href="URL:void(0)" className="point__box">
                        <span className="point__1">1</span>
                        <span>1.60</span>
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        <span className="point__1">2</span>
                        <span>2.80</span>
                      </Link>
                    </div>
                    <div className="mart__point__right">
                      <Link
                        href="#min"
                        className="point__box-text point__box__nextto"
                      >
                        <span> Today / 15:30 </span>
                        <span className="icons">
                          <i className="fas fa-angle-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="table__footer table__footer__nextgo">
                  <Link href="#show" className="lobby">
                    <span>Show more</span>
                    <span className="icons">
                      <i className="fas fa-chevron-down"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* main Body */}

      {/* Footer Start */}
      <FooterHome />
      {/* Footer End */}
    </div>
  );
};

export default IceHockeyTab;
