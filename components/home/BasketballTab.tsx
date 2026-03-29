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

const BasketballTab = () => {
  return (
    <div
      className="tab-pane mt__30 text-white fade"
      id="mainTab6"
      role="tabpanel"
      tabIndex="0"
    >
      {/* Main Body */}
      <div className="main__body__wrap left__right__space pb-60">
        <div className="live__heightlight">
          <div className="height__table">
            <div className="main__table main__table__tennis main__table__basketball">
              <div className="section__head b__bottom">
                <div className="left__head">
                  <span className="icons">
                    <i className="icon-basketball"></i>
                  </span>
                  <span>Basketball</span>
                </div>
                <div className="right__catagoris">
                  <div className="right__cate__items">
                    {/* Select */}
                    <Select data={categoris} />
                  </div>
                  <div className="right__cate__items">
                    {/* Select */}
                    <Select data={categoris2} />
                  </div>
                  <div className="right__cate__items">
                    {/* Select */}
                    <Select data={categoris3} />
                  </div>
                </div>
              </div>
              <div className="table__wrap">
                <div className="table__items mb__10 paddingbnone">
                  <div className="t__items t__items__basket">
                    <div className="t__items__left">
                      <h6>Niigata Albirex BB</h6>
                      <span className="text">Sendai 89ERS</span>
                      <p>
                        <Link href="URL:void(0)">Live</Link>
                        <span>2H 11:15</span>
                      </p>
                    </div>
                  </div>
                  <div className="cart__point">
                    <span>21</span>
                  </div>

                  <div className="tennis__right">
                    <div className="mart__point__items">
                      <Link href="URL:void(0)" className="twing twing__right">
                        <i className="icon-twer"></i>
                      </Link>
                      <Link href="URL:void(0)" className="mart">
                        <i className="icon-pmart"></i>
                      </Link>
                      <Link href="#0box" className="point__box">
                        <span className="tov">+6,5</span>
                        <span>2.70</span>
                      </Link>
                      <Link href="#0box" className="point__box">
                        <span className="tov">o 109,5</span>
                        <span>8.50</span>
                      </Link>
                      <Link href="#0box" className="point__box">
                        7.50
                      </Link>
                    </div>
                    <div className="mart__point__two">
                      <div className="mart__point__left">
                        <Link
                          href="URL:void(0)"
                          className="point__box bg__none spacing__lock"
                        >
                          <i className="icon-lock"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="mart__point__two">
                      <div className="mart__point__left">
                        <Link href="URL:void(0)" className="point__box">
                          <span className="tov">o 79,5</span>
                          <span>8.50</span>
                        </Link>
                        <Link href="URL:void(0)" className="point__box">
                          2.25
                        </Link>
                      </div>
                      <div className="mart__point__right">
                        <Link
                          href="URL:void(0)"
                          className="point__box bg__none spacing__lock"
                        >
                          <i className="icon-star star"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table__items paddingtnone b__bottom">
                  <div className="t__items"></div>
                  <div className="cart__point">
                    <span>26</span>
                  </div>
                  <div className="tennis__right">
                    <div className="mart__point__items">
                      <Link href="URL:void(0)" className="twing twing__right">
                        <i className="icon-twer"></i>
                      </Link>
                      <Link href="URL:void(0)" className="mart">
                        <i className="icon-pmart"></i>
                      </Link>
                      <Link href="#0box" className="point__box">
                        <span className="tov">+6,5</span>
                        <span>2.70</span>
                      </Link>
                      <Link href="#0box" className="point__box">
                        <span className="tov">o 109,5</span>
                        <span>8.50</span>
                      </Link>
                      <Link href="#0box" className="point__box">
                        7.50
                      </Link>
                    </div>
                    <div className="mart__point__two">
                      <div className="mart__point__left">
                        <Link
                          href="URL:void(0)"
                          className="point__box bg__none opo"
                        >
                          <i className="icon-lock"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="mart__point__two">
                      <div className="mart__point__left">
                        <Link href="URL:void(0)" className="point__box">
                          <span className="tov">o 79,5</span>
                          <span>8.50</span>
                        </Link>
                        <Link href="URL:void(0)" className="point__box">
                          2.25
                        </Link>
                      </div>
                      <div className="mart__point__right">
                        <Link
                          href="URL:void(0)"
                          className="point__box bg__none opo"
                        >
                          <i className="icon-star star"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table__items mb__10 paddingbnone">
                  <div className="t__items t__items__basket">
                    <div className="t__items__left">
                      <h6>Tokyo United BC</h6>
                      <span className="text">Rizing Fukuoka</span>
                      <p>
                        <Link href="URL:void(0)">Live</Link>
                        <span>2min</span>
                      </p>
                    </div>
                  </div>
                  <div className="cart__point">
                    <span>11</span>
                  </div>

                  <div className="tennis__right">
                    <div className="mart__point__items">
                      <Link href="URL:void(0)" className="twing twing__right">
                        <i className="icon-twer"></i>
                      </Link>
                      <Link href="URL:void(0)" className="mart">
                        <i className="icon-pmart"></i>
                      </Link>
                      <Link href="#0box" className="point__box">
                        <span className="tov">+6,5</span>
                        <span>2.70</span>
                      </Link>
                      <Link href="#0box" className="point__box">
                        <span className="tov">o 109,5</span>
                        <span>8.50</span>
                      </Link>
                      <Link href="#0box" className="point__box">
                        7.50
                      </Link>
                    </div>
                    <div className="mart__point__two">
                      <div className="mart__point__left">
                        <Link
                          href="URL:void(0)"
                          className="point__box bg__none spacing__lock"
                        >
                          <i className="icon-lock"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="mart__point__two">
                      <div className="mart__point__left">
                        <Link href="URL:void(0)" className="point__box">
                          <span className="tov">o 79,5</span>
                          <span>8.50</span>
                        </Link>
                        <Link href="URL:void(0)" className="point__box">
                          2.25
                        </Link>
                      </div>
                      <div className="mart__point__right">
                        <Link
                          href="URL:void(0)"
                          className="point__box bg__none spacing__lock"
                        >
                          <i className="icon-star star"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table__items paddingtnone b__bottom">
                  <div className="t__items"></div>
                  <div className="cart__point">
                    <span>12</span>
                  </div>
                  <div className="tennis__right">
                    <div className="mart__point__items">
                      <Link href="URL:void(0)" className="twing twing__right">
                        <i className="icon-twer"></i>
                      </Link>
                      <Link href="URL:void(0)" className="mart">
                        <i className="icon-pmart"></i>
                      </Link>
                      <Link href="#0box" className="point__box">
                        <span className="tov">+6,5</span>
                        <span>2.70</span>
                      </Link>
                      <Link href="#0box" className="point__box">
                        <span className="tov">o 109,5</span>
                        <span>8.50</span>
                      </Link>
                      <Link href="#0box" className="point__box">
                        7.50
                      </Link>
                    </div>
                    <div className="mart__point__two">
                      <div className="mart__point__left">
                        <Link
                          href="URL:void(0)"
                          className="point__box bg__none opo"
                        >
                          <i className="icon-lock"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="mart__point__two">
                      <div className="mart__point__left">
                        <Link href="URL:void(0)" className="point__box">
                          <span className="tov">o 79,5</span>
                          <span>8.50</span>
                        </Link>
                        <Link href="URL:void(0)" className="point__box">
                          2.25
                        </Link>
                      </div>
                      <div className="mart__point__right">
                        <Link
                          href="URL:void(0)"
                          className="point__box bg__none opo"
                        >
                          <i className="icon-star star"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table__items mb__10 paddingbnone">
                  <div className="t__items t__items__basket">
                    <div className="t__items__left">
                      <h6>Fukushima Firebonds</h6>
                      <span className="text">Earth Friends Tokyo Z</span>
                      <p>
                        <Link href="URL:void(0)">Live</Link>
                        <span>2min</span>
                      </p>
                    </div>
                  </div>
                  <div className="cart__point">
                    <span>30</span>
                  </div>

                  <div className="tennis__right">
                    <div className="mart__point__items">
                      <Link href="URL:void(0)" className="twing twing__right">
                        <i className="icon-twer"></i>
                      </Link>
                      <Link href="URL:void(0)" className="mart">
                        <i className="icon-pmart"></i>
                      </Link>
                      <Link href="#0box" className="point__box">
                        <span className="tov">+6,5</span>
                        <span>2.70</span>
                      </Link>
                      <Link href="#0box" className="point__box">
                        <span className="tov">o 109,5</span>
                        <span>8.50</span>
                      </Link>
                      <Link href="#0box" className="point__box">
                        7.50
                      </Link>
                    </div>
                    <div className="mart__point__two">
                      <div className="mart__point__left">
                        <Link
                          href="URL:void(0)"
                          className="point__box bg__none opo"
                        >
                          <i className="icon-lock"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="mart__point__two">
                      <div className="mart__point__left">
                        <Link
                          href="URL:void(0)"
                          className="point__box bg__none spacing__lock"
                        >
                          <i className="icon-lock"></i>
                        </Link>
                        <Link href="URL:void(0)" className="point__box opo">
                          2.25
                        </Link>
                      </div>
                      <div className="mart__point__right">
                        <Link
                          href="URL:void(0)"
                          className="point__box bg__none spacing__lock"
                        >
                          <i className="icon-star star"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table__items paddingtnone b__bottom">
                  <div className="t__items"></div>
                  <div className="cart__point">
                    <span>16</span>
                  </div>
                  <div className="tennis__right">
                    <div className="mart__point__items">
                      <Link href="URL:void(0)" className="twing twing__right">
                        <i className="icon-twer"></i>
                      </Link>
                      <Link href="URL:void(0)" className="mart">
                        <i className="icon-pmart"></i>
                      </Link>
                      <Link href="#0box" className="point__box">
                        <span className="tov">+6,5</span>
                        <span>2.70</span>
                      </Link>
                      <Link href="#0box" className="point__box">
                        <span className="tov">o 109,5</span>
                        <span>8.50</span>
                      </Link>
                      <Link href="#0box" className="point__box">
                        7.50
                      </Link>
                    </div>
                    <div className="mart__point__two">
                      <div className="mart__point__left">
                        <Link
                          href="URL:void(0)"
                          className="point__box bg__none opo"
                        >
                          <i className="icon-lock"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="mart__point__two">
                      <div className="mart__point__left">
                        <Link
                          href="URL:void(0)"
                          className="point__box bg__none opo"
                        >
                          <i className="icon-lock"></i>
                        </Link>
                        <Link href="URL:void(0)" className="point__box opo">
                          2.25
                        </Link>
                      </div>
                      <div className="mart__point__right">
                        <Link
                          href="URL:void(0)"
                          className="point__box bg__none opo"
                        >
                          <i className="icon-star star"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table__items mb__10 paddingbnone">
                  <div className="t__items t__items__basket">
                    <div className="t__items__left">
                      <h6>Saitama Broncos</h6>
                      <span className="text">Kagawa Five Arrows</span>
                      <p>
                        <Link href="URL:void(0)">Live</Link>
                        <span>2min</span>
                      </p>
                    </div>
                  </div>
                  <div className="cart__point">
                    <span>10</span>
                  </div>

                  <div className="tennis__right">
                    <div className="mart__point__items">
                      <Link href="URL:void(0)" className="twing twing__right">
                        <i className="icon-twer"></i>
                      </Link>
                      <Link href="URL:void(0)" className="mart">
                        <i className="icon-pmart"></i>
                      </Link>
                      <Link href="#0box" className="point__box">
                        <span className="tov">+6,5</span>
                        <span>2.70</span>
                      </Link>
                      <Link href="#0box" className="point__box">
                        <span className="tov">o 109,5</span>
                        <span>8.50</span>
                      </Link>
                      <Link href="#0box" className="point__box">
                        7.50
                      </Link>
                    </div>
                    <div className="mart__point__two">
                      <div className="mart__point__left">
                        <Link
                          href="URL:void(0)"
                          className="point__box bg__none spacing__lock"
                        >
                          <i className="icon-lock"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="mart__point__two">
                      <div className="mart__point__left">
                        <Link href="URL:void(0)" className="point__box">
                          <span className="tov">o 79,5</span>
                          <span>8.50</span>
                        </Link>
                        <Link href="URL:void(0)" className="point__box">
                          2.25
                        </Link>
                      </div>
                      <div className="mart__point__right">
                        <Link
                          href="URL:void(0)"
                          className="point__box bg__none spacing__lock"
                        >
                          <i className="icon-star star"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table__items paddingtnone b__bottom">
                  <div className="t__items"></div>
                  <div className="cart__point">
                    <span>16</span>
                  </div>
                  <div className="tennis__right">
                    <div className="mart__point__items">
                      <Link href="URL:void(0)" className="twing twing__right">
                        <i className="icon-twer"></i>
                      </Link>
                      <Link href="URL:void(0)" className="mart">
                        <i className="icon-pmart"></i>
                      </Link>
                      <Link href="#0box" className="point__box">
                        <span className="tov">+6,5</span>
                        <span>2.70</span>
                      </Link>
                      <Link href="#0box" className="point__box">
                        <span className="tov">o 109,5</span>
                        <span>8.50</span>
                      </Link>
                      <Link href="#0box" className="point__box">
                        7.50
                      </Link>
                    </div>
                    <div className="mart__point__two">
                      <div className="mart__point__left">
                        <Link
                          href="URL:void(0)"
                          className="point__box bg__none opo"
                        >
                          <i className="icon-lock"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="mart__point__two">
                      <div className="mart__point__left">
                        <Link href="URL:void(0)" className="point__box">
                          <span className="tov">o 79,5</span>
                          <span>8.50</span>
                        </Link>
                        <Link href="URL:void(0)" className="point__box">
                          2.25
                        </Link>
                      </div>
                      <div className="mart__point__right">
                        <Link
                          href="URL:void(0)"
                          className="point__box bg__none opo"
                        >
                          <i className="icon-star star"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table__items mb__10 paddingbnone">
                  <div className="t__items t__items__basket">
                    <div className="t__items__left">
                      <h6>Saitama Broncos</h6>
                      <span className="text">Kumamoto Volters</span>
                      <p>
                        <Link href="URL:void(0)">Live</Link>
                        <span>2min</span>
                      </p>
                    </div>
                  </div>
                  <div className="cart__point">
                    <span>30</span>
                  </div>

                  <div className="tennis__right">
                    <div className="mart__point__items">
                      <Link href="URL:void(0)" className="twing twing__right">
                        <i className="icon-twer"></i>
                      </Link>
                      <Link href="URL:void(0)" className="mart">
                        <i className="icon-pmart"></i>
                      </Link>
                      <Link href="#0box" className="point__box">
                        <span className="tov">+6,5</span>
                        <span>2.70</span>
                      </Link>
                      <Link href="#0box" className="point__box">
                        <span className="tov">o 109,5</span>
                        <span>8.50</span>
                      </Link>
                      <Link href="#0box" className="point__box">
                        7.50
                      </Link>
                    </div>
                    <div className="mart__point__two">
                      <div className="mart__point__left">
                        <Link
                          href="URL:void(0)"
                          className="point__box bg__none opo"
                        >
                          <i className="icon-lock"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="mart__point__two">
                      <div className="mart__point__left">
                        <Link
                          href="URL:void(0)"
                          className="point__box bg__none spacing__lock"
                        >
                          <i className="icon-lock"></i>
                        </Link>
                        <Link href="URL:void(0)" className="point__box opo">
                          2.25
                        </Link>
                      </div>
                      <div className="mart__point__right">
                        <Link
                          href="URL:void(0)"
                          className="point__box bg__none spacing__lock"
                        >
                          <i className="icon-star star"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table__items paddingtnone">
                  <div className="t__items"></div>
                  <div className="cart__point">
                    <span>33</span>
                  </div>
                  <div className="tennis__right">
                    <div className="mart__point__items">
                      <Link href="URL:void(0)" className="twing twing__right">
                        <i className="icon-twer"></i>
                      </Link>
                      <Link href="URL:void(0)" className="mart">
                        <i className="icon-pmart"></i>
                      </Link>
                      <Link href="#0box" className="point__box">
                        <span className="tov">+6,5</span>
                        <span>2.70</span>
                      </Link>
                      <Link href="#0box" className="point__box">
                        <span className="tov">o 109,5</span>
                        <span>8.50</span>
                      </Link>
                      <Link href="#0box" className="point__box">
                        7.50
                      </Link>
                    </div>
                    <div className="mart__point__two">
                      <div className="mart__point__left">
                        <Link
                          href="URL:void(0)"
                          className="point__box bg__none opo"
                        >
                          <i className="icon-lock"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="mart__point__two">
                      <div className="mart__point__left">
                        <Link
                          href="URL:void(0)"
                          className="point__box bg__none opo"
                        >
                          <i className="icon-lock"></i>
                        </Link>
                        <Link href="URL:void(0)" className="point__box opo">
                          2.25
                        </Link>
                      </div>
                      <div className="mart__point__right">
                        <Link
                          href="URL:void(0)"
                          className="point__box bg__none opo"
                        >
                          <i className="icon-star star"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
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

export default BasketballTab;
