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

const FootballTab = () => {
  return (
    <div
      className="tab-pane mt__30 text-white fade"
      id="mainTab4"
      role="tabpanel"
      tabIndex="0"
    >
      {/* Main Body */}
      <div className="main__body__wrap left__right__space pb-60">
        <div className="live__heightlight">
          <div className="height__table">
            <div className="main__table treanding__table main__table__nextfootball">
              <div className="section__head b__bottom">
                <div className="left__head">
                  <span className="icons">
                    <i className="icon-football"></i>
                  </span>
                  <span>Football</span>
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
                    <div className="t__items__left">
                      <h6>Netherlands</h6>
                      <span className="text">England</span>
                      <p>
                        <Link href="URL:void(0)">Today / 21:00</Link>
                        <Link href="URL:void(0)" className="today">
                          Today / 21:00
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="mart__point__items">
                    <Link href="URL:void(0)" className="twing twing__right">
                      <i className="icon-twer"></i>
                    </Link>
                    <Link href="URL:void(0)" className="mart opo">
                      <i className="icon-pmart"></i>
                    </Link>
                    <Link href="#0box" className="point__box">
                      8.55
                    </Link>
                    <Link href="#0box" className="point__box">
                      2.70
                    </Link>
                    <Link href="#0box" className="point__box">
                      8.50
                    </Link>
                  </div>
                  <div className="cart__point cart__point__two">2,6</div>
                  <div className="mart__point__two">
                    <div className="mart__point__left">
                      <Link href="URL:void(0)" className="point__box">
                        7.05
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        5.50
                      </Link>
                    </div>
                    <div className="mart__point__right">
                      <Link href="URL:void(0)" className="point__box">
                        3.05
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        6.50
                      </Link>
                      <Link href="URL:void(0)" className="point__box bg__none">
                        <i className="icon-star star"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="table__items b__bottom">
                  <div className="t__items">
                    <div className="t__items__left">
                      <h6>USA</h6>
                      <span className="text">Senegal</span>
                      <p>
                        <Link href="URL:void(0)">Today / 21:00</Link>
                        <Link href="URL:void(0)" className="today">
                          Today / 21:00
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="mart__point__items">
                    <Link href="URL:void(0)" className="twing twing__right">
                      <i className="icon-twer"></i>
                    </Link>
                    <Link href="URL:void(0)" className="mart opo">
                      <i className="icon-pmart"></i>
                    </Link>
                    <Link href="#0box" className="point__box">
                      8.55
                    </Link>
                    <Link href="#0box" className="point__box">
                      2.70
                    </Link>
                    <Link href="#0box" className="point__box">
                      8.50
                    </Link>
                  </div>
                  <div className="cart__point cart__point__two">2,6</div>
                  <div className="mart__point__two">
                    <div className="mart__point__left">
                      <Link href="URL:void(0)" className="point__box">
                        7.05
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        5.50
                      </Link>
                    </div>
                    <div className="mart__point__right">
                      <Link href="URL:void(0)" className="point__box">
                        3.05
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        6.50
                      </Link>
                      <Link href="URL:void(0)" className="point__box bg__none">
                        <i className="icon-star star"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="table__items b__bottom">
                  <div className="t__items">
                    <div className="t__items__left">
                      <h6>Prance</h6>
                      <span className="text">Poland</span>
                      <p>
                        <Link href="URL:void(0)">Today / 21:00</Link>
                        <Link href="URL:void(0)" className="today">
                          Today / 21:00
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="mart__point__items">
                    <Link href="URL:void(0)" className="twing twing__right">
                      <i className="icon-twer"></i>
                    </Link>
                    <Link href="URL:void(0)" className="mart opo">
                      <i className="icon-pmart"></i>
                    </Link>
                    <Link href="#0box" className="point__box">
                      8.55
                    </Link>
                    <Link href="#0box" className="point__box">
                      2.70
                    </Link>
                    <Link href="#0box" className="point__box">
                      8.50
                    </Link>
                  </div>
                  <div className="cart__point cart__point__two">2,6</div>
                  <div className="mart__point__two">
                    <div className="mart__point__left">
                      <Link href="URL:void(0)" className="point__box">
                        7.05
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        5.50
                      </Link>
                    </div>
                    <div className="mart__point__right">
                      <Link href="URL:void(0)" className="point__box">
                        3.05
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        6.50
                      </Link>
                      <Link href="URL:void(0)" className="point__box bg__none">
                        <i className="icon-star star"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="table__items b__bottom">
                  <div className="t__items">
                    <div className="t__items__left">
                      <h6>Argentina</h6>
                      <span className="text">Australia</span>
                      <p>
                        <Link href="URL:void(0)">Today / 21:00</Link>
                        <Link href="URL:void(0)" className="today">
                          Today / 21:00
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="mart__point__items">
                    <Link href="URL:void(0)" className="twing twing__right">
                      <i className="icon-twer"></i>
                    </Link>
                    <Link href="URL:void(0)" className="mart opo">
                      <i className="icon-pmart"></i>
                    </Link>
                    <Link href="#0box" className="point__box">
                      8.55
                    </Link>
                    <Link href="#0box" className="point__box">
                      2.70
                    </Link>
                    <Link href="#0box" className="point__box">
                      8.50
                    </Link>
                  </div>
                  <div className="cart__point cart__point__two">2,6</div>
                  <div className="mart__point__two">
                    <div className="mart__point__left">
                      <Link href="URL:void(0)" className="point__box">
                        7.05
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        5.50
                      </Link>
                    </div>
                    <div className="mart__point__right">
                      <Link href="URL:void(0)" className="point__box">
                        3.05
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        6.50
                      </Link>
                      <Link href="URL:void(0)" className="point__box bg__none">
                        <i className="icon-star star"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="table__items b__bottom">
                  <div className="t__items">
                    <div className="t__items__left">
                      <h6>France</h6>
                      <span className="text">Senegal</span>
                      <p>
                        <Link href="URL:void(0)">Today / 21:00</Link>
                        <Link href="URL:void(0)" className="today">
                          Today / 21:00
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="mart__point__items">
                    <Link href="URL:void(0)" className="twing twing__right">
                      <i className="icon-twer"></i>
                    </Link>
                    <Link href="URL:void(0)" className="mart opo">
                      <i className="icon-pmart"></i>
                    </Link>
                    <Link href="#0box" className="point__box">
                      8.55
                    </Link>
                    <Link href="#0box" className="point__box">
                      2.70
                    </Link>
                    <Link href="#0box" className="point__box">
                      8.50
                    </Link>
                  </div>
                  <div className="cart__point cart__point__two">2,6</div>
                  <div className="mart__point__two">
                    <div className="mart__point__left">
                      <Link href="URL:void(0)" className="point__box">
                        7.05
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        5.50
                      </Link>
                    </div>
                    <div className="mart__point__right">
                      <Link href="URL:void(0)" className="point__box">
                        3.05
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        6.50
                      </Link>
                      <Link href="URL:void(0)" className="point__box bg__none">
                        <i className="icon-star star"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="table__items b__bottom">
                  <div className="t__items">
                    <div className="t__items__left">
                      <h6>Japan</h6>
                      <span className="text">Croatia</span>
                      <p>
                        <Link href="URL:void(0)">Today / 21:00</Link>
                        <Link href="URL:void(0)" className="today">
                          Today / 21:00
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="mart__point__items">
                    <Link href="URL:void(0)" className="twing twing__right">
                      <i className="icon-twer"></i>
                    </Link>
                    <Link href="URL:void(0)" className="mart opo">
                      <i className="icon-pmart"></i>
                    </Link>
                    <Link href="#0box" className="point__box">
                      8.55
                    </Link>
                    <Link href="#0box" className="point__box">
                      2.70
                    </Link>
                    <Link href="#0box" className="point__box">
                      8.50
                    </Link>
                  </div>
                  <div className="cart__point cart__point__two">2,6</div>
                  <div className="mart__point__two">
                    <div className="mart__point__left">
                      <Link href="URL:void(0)" className="point__box">
                        7.05
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        5.50
                      </Link>
                    </div>
                    <div className="mart__point__right">
                      <Link href="URL:void(0)" className="point__box">
                        3.05
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        6.50
                      </Link>
                      <Link href="URL:void(0)" className="point__box bg__none">
                        <i className="icon-star star"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="table__items b__bottom">
                  <div className="t__items">
                    <div className="t__items__left">
                      <h6>Brazil</h6>
                      <span className="text">Korea Republic</span>
                      <p>
                        <Link href="URL:void(0)">Today / 21:00</Link>
                        <Link href="URL:void(0)" className="today">
                          Today / 21:00
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="mart__point__items">
                    <Link href="URL:void(0)" className="twing twing__right">
                      <i className="icon-twer"></i>
                    </Link>
                    <Link href="URL:void(0)" className="mart opo">
                      <i className="icon-pmart"></i>
                    </Link>
                    <Link href="#0box" className="point__box">
                      8.55
                    </Link>
                    <Link href="#0box" className="point__box">
                      2.70
                    </Link>
                    <Link href="#0box" className="point__box">
                      8.50
                    </Link>
                  </div>
                  <div className="cart__point cart__point__two">2,6</div>
                  <div className="mart__point__two">
                    <div className="mart__point__left">
                      <Link href="URL:void(0)" className="point__box">
                        7.05
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        5.50
                      </Link>
                    </div>
                    <div className="mart__point__right">
                      <Link href="URL:void(0)" className="point__box">
                        3.05
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        6.50
                      </Link>
                      <Link href="URL:void(0)" className="point__box bg__none">
                        <i className="icon-star star"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="table__items b__bottom">
                  <div className="t__items">
                    <div className="t__items__left">
                      <h6>Real Zaragoza</h6>
                      <span className="text">Casa Pia Lisbon</span>
                      <p>
                        <Link href="URL:void(0)">Today / 21:00</Link>
                        <Link href="URL:void(0)" className="today">
                          Today / 21:00
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="mart__point__items">
                    <Link href="URL:void(0)" className="twing twing__right">
                      <i className="icon-twer"></i>
                    </Link>
                    <Link href="URL:void(0)" className="mart opo">
                      <i className="icon-pmart"></i>
                    </Link>
                    <Link href="#0box" className="point__box">
                      8.55
                    </Link>
                    <Link href="#0box" className="point__box">
                      2.70
                    </Link>
                    <Link href="#0box" className="point__box">
                      8.50
                    </Link>
                  </div>
                  <div className="cart__point cart__point__two">2,6</div>
                  <div className="mart__point__two">
                    <div className="mart__point__left">
                      <Link href="URL:void(0)" className="point__box">
                        7.05
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        5.50
                      </Link>
                    </div>
                    <div className="mart__point__right">
                      <Link href="URL:void(0)" className="point__box">
                        3.05
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        6.50
                      </Link>
                      <Link href="URL:void(0)" className="point__box bg__none">
                        <i className="icon-star star"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="table__items b__bottom">
                  <div className="t__items">
                    <div className="t__items__left">
                      <h6>SC Braga</h6>
                      <span className="text">Real Zaragoza</span>
                      <p>
                        <Link href="URL:void(0)">Today / 21:00</Link>
                        <Link href="URL:void(0)" className="today">
                          Today / 21:00
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="mart__point__items">
                    <Link href="URL:void(0)" className="twing twing__right">
                      <i className="icon-twer"></i>
                    </Link>
                    <Link href="URL:void(0)" className="mart opo">
                      <i className="icon-pmart"></i>
                    </Link>
                    <Link href="#0box" className="point__box">
                      8.55
                    </Link>
                    <Link href="#0box" className="point__box">
                      2.70
                    </Link>
                    <Link href="#0box" className="point__box">
                      8.50
                    </Link>
                  </div>
                  <div className="cart__point cart__point__two">2,6</div>
                  <div className="mart__point__two">
                    <div className="mart__point__left">
                      <Link href="URL:void(0)" className="point__box">
                        7.05
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        5.50
                      </Link>
                    </div>
                    <div className="mart__point__right">
                      <Link href="URL:void(0)" className="point__box">
                        3.05
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        6.50
                      </Link>
                      <Link href="URL:void(0)" className="point__box bg__none">
                        <i className="icon-star star"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="table__items b__bottom">
                  <div className="t__items">
                    <div className="t__items__left t__items__left__nextogo">
                      <div className="t__items__icon">
                        <i className="icon-football"></i>
                      </div>
                      <div className="content">
                        <span className="text">Sunderland</span>
                        <h6>Millwall</h6>
                      </div>
                    </div>
                  </div>
                  <div className="mart__point__two mart__pint__nextgo">
                    <div className="mart__point__left">
                      <Link href="URL:void(0)" className="point__box">
                        <span className="point__1">1</span>
                        <span>2.25</span>
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        <span className="point__1">x</span>
                        <span>3.00</span>
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        <span className="point__1">2</span>
                        <span>2.53</span>
                      </Link>
                    </div>
                    <div className="mart__point__right">
                      <Link
                        href="#min"
                        className="point__box-text point__box__nextto"
                      >
                        <span> Today / 21:00</span>
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
                        <i className="icon-football"></i>
                      </div>
                      <div className="content">
                        <span className="text">World Cup 2022 - Winner</span>
                      </div>
                    </div>
                  </div>
                  <div className="mart__point__two mart__pint__nextgo">
                    <div className="mart__point__left">
                      <Link href="URL:void(0)" className="point__boxbet">
                        <span>Bet now</span>
                      </Link>
                    </div>
                    <div className="mart__point__right">
                      <Link
                        href="#min"
                        className="point__box-text point__box__nextto"
                      >
                        <span> Today / 21:00</span>
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
                        <i className="icon-football"></i>
                      </div>
                      <div className="content">
                        <span className="text">
                          World Cup 2022 - Top Goalscorer
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mart__point__two mart__pint__nextgo">
                    <div className="mart__point__left">
                      <Link href="URL:void(0)" className="point__boxbet">
                        <span>Bet now</span>
                      </Link>
                    </div>
                    <div className="mart__point__right">
                      <Link
                        href="#min"
                        className="point__box-text point__box__nextto"
                      >
                        <span> Today / 21:00</span>
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
                        <i className="icon-football"></i>
                      </div>
                      <div className="content">
                        <span className="text">Netherlands</span>
                        <h6>Millwall</h6>
                      </div>
                    </div>
                  </div>
                  <div className="mart__point__two mart__pint__nextgo">
                    <div className="mart__point__left">
                      <Link href="URL:void(0)" className="point__box">
                        <span className="point__1">1</span>
                        <span>6.22</span>
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        <span className="point__1">X</span>
                        <span>4.53</span>
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        <span className="point__1">2</span>
                        <span>3.53</span>
                      </Link>
                    </div>
                    <div className="mart__point__right">
                      <Link
                        href="#min"
                        className="point__box-text point__box__nextto"
                      >
                        <span> Today / 21:00</span>
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
                        <i className="icon-football"></i>
                      </div>
                      <div className="content">
                        <span className="text">Canada</span>
                        <h6>Belgium</h6>
                      </div>
                    </div>
                  </div>
                  <div className="mart__point__two mart__pint__nextgo">
                    <div className="mart__point__left">
                      <Link href="URL:void(0)" className="point__box">
                        <span className="point__1">1</span>
                        <span>5.22</span>
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        <span className="point__1">X</span>
                        <span>4.53</span>
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        <span className="point__1">2</span>
                        <span>3.53</span>
                      </Link>
                    </div>
                    <div className="mart__point__right">
                      <Link
                        href="#min"
                        className="point__box-text point__box__nextto"
                      >
                        <span> Today / 21:00</span>
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
                        <i className="icon-football"></i>
                      </div>
                      <div className="content">
                        <h6>
                          Luca Van Assche <span>FRA</span>
                        </h6>
                        <h6>
                          Aleksandar Vukic <span>AUS</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="mart__point__two mart__pint__nextgo">
                    <div className="mart__point__left">
                      <Link href="URL:void(0)" className="point__box">
                        <span className="point__1">1</span>
                        <span>3.20</span>
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
                        <span className="text-base"> Starting now</span>
                        <span className="icons">
                          <i className="fas fa-angle-right text-base"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="table__footer">
                  <Link href="URL:void(0)" className="lobby text__opa">
                    Open Football lobby
                  </Link>
                  <Link href="URL:void(0)" className="footerpoing">
                    <span>790</span>
                    <span>
                      <i className="fas fa-angle-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Body */}

      {/* Footer Start */}
      <FooterHome />
      {/* Footer End */}
    </div>
  );
};

export default FootballTab;
