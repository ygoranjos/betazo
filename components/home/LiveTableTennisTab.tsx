import Link from "next/link";
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

const LiveTableTennisTab = ({ thead = true }) => {
  return (
    <>
      <div className="section__head b__bottom">
        <div className="left__head">
          <span className="icons">
            <i className="icon-ttennis"></i>
          </span>
          <span>Table Tennis</span>
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
        {thead && (
          <div className="table__items table__pointnone__items">
            <div className="t__items">
              <div className="t__items__left"></div>
            </div>
            <div className="tennis__cart__wrap"></div>
            <div className="tennis__right">
              <div className="mart__point__items">
                <Link href="URL:void(0)" className="twing twing__right opo">
                  <i className="icon-twer"></i>
                </Link>
                <Link href="URL:void(0)" className="mart opo">
                  <i className="icon-pmart"></i>
                </Link>
                <Link href="#0box" className="point__box bg__none">
                  1
                </Link>
                <Link href="#0box" className="point__box bg__none">
                  2
                </Link>
              </div>
              <div className="mart__point__two">
                <div className="mart__point__left">
                  <Link href="URL:void(0)" className="point__box bg__none">
                    1
                  </Link>
                  <Link href="URL:void(0)" className="point__box bg__none">
                    2
                  </Link>
                </div>
              </div>
              <div className="cart__point">
                <span>Points</span>
              </div>
              <div className="mart__point__two">
                <div className="mart__point__left">
                  <Link href="URL:void(0)" className="point__box bg__none">
                    Over
                  </Link>
                  <Link href="URL:void(0)" className="point__box bg__none">
                    Under
                  </Link>
                </div>
                <div className="mart__point__right">
                  <Link href="URL:void(0)" className="point__box bg__none opo">
                    <i className="icon-star star"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="table__items b__bottom">
          <div className="t__items">
            <div className="t__items__left">
              <h6>Grzegorz Felkel POL</h6>
              <span className="text">Karol Wisniewski POL</span>
              <p>
                <Link href="URL:void(0)">Live</Link>
                <span>4rd Set</span>
              </p>
            </div>
          </div>
          <div className="tennis__cart__wrap">
            <div className="cart__point">
              <span>5</span>
              <span>4</span>
            </div>
            <div className="tennis__cart__right">
              <span>2</span>
              <span>1</span>
              <span>Sets</span>
            </div>
          </div>
          <div className="tennis__right">
            <div className="mart__point__items">
              <Link href="URL:void(0)" className="twing twing__right">
                <i className="icon-twer"></i>
              </Link>
              <Link href="URL:void(0)" className="mart opo">
                <i className="icon-pmart"></i>
              </Link>
              <Link href="#0box" className="point__box">
                8.50
              </Link>
              <Link href="#0box" className="point__box">
                1.03
              </Link>
            </div>
            <div className="mart__point__two">
              <div className="mart__point__left">
                <Link href="URL:void(0)" className="point__box">
                  <span className="set">Set 1</span>
                  <span>1.75</span>
                </Link>
                <Link href="URL:void(0)" className="point__box">
                  <span className="set">Set 1</span>
                  <span>1.87</span>
                </Link>
              </div>
            </div>
            <div className="cart__point">
              <span>16,2</span>
            </div>
            <div className="mart__point__two">
              <div className="mart__point__left">
                <Link href="URL:void(0)" className="point__box">
                  2.33
                </Link>
                <Link href="URL:void(0)" className="point__box">
                  4.66
                </Link>
              </div>
              <div className="mart__point__right">
                <Link href="URL:void(0)" className="point__box bg__none">
                  <i className="icon-star star"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="table__items b__bottom">
          <div className="t__items">
            <div className="t__items__left">
              <h6>Denis Hofman CZE</h6>
              <span className="text">Rostyslav Kliuchuk CZE</span>
              <p>
                <Link href="URL:void(0)">Live</Link>
                <span>3rd Set</span>
              </p>
            </div>
          </div>
          <div className="tennis__cart__wrap">
            <div className="cart__point">
              <span>11</span>
              <span>17</span>
            </div>
            <div className="tennis__cart__right">
              <span>2</span>
              <span>1</span>
              <span>Sets</span>
            </div>
          </div>
          <div className="tennis__right">
            <div className="mart__point__items">
              <Link href="URL:void(0)" className="twing twing__right">
                <i className="icon-twer"></i>
              </Link>
              <Link href="URL:void(0)" className="mart">
                <i className="icon-pmart"></i>
              </Link>
              <Link
                href="#0box"
                className="point__box point__box__volly bg__none"
              >
                <i className="icon-lock"></i>
              </Link>
            </div>
            <div className="mart__point__two">
              <div className="mart__point__left">
                <Link
                  href="#0box"
                  className="point__box point__box__volly bg__none"
                >
                  <i className="icon-lock"></i>
                </Link>
              </div>
            </div>
            <div className="cart__point">
              <span>16,2</span>
            </div>
            <div className="mart__point__two">
              <div className="mart__point__left">
                <Link href="URL:void(0)" className="point__box">
                  3.66
                </Link>
                <Link href="URL:void(0)" className="point__box">
                  4.33
                </Link>
              </div>
              <div className="mart__point__right">
                <Link href="URL:void(0)" className="point__box bg__none">
                  <i className="icon-star star"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="table__items b__bottom">
          <div className="t__items">
            <div className="t__items__left">
              <h6>Gold City More Asia</h6>
              <span className="text">Kasetsart VC</span>
              <p>
                <Link href="URL:void(0)">Live</Link>
                <span>3rd Set</span>
              </p>
            </div>
          </div>
          <div className="tennis__cart__wrap">
            <div className="cart__point">
              <span>11</span>
              <span>12</span>
            </div>
            <div className="tennis__cart__right">
              <span>2</span>
              <span>1</span>
              <span>Sets</span>
            </div>
          </div>
          <div className="tennis__right">
            <div className="mart__point__items">
              <Link href="URL:void(0)" className="twing twing__right">
                <i className="icon-twer"></i>
              </Link>
              <Link href="URL:void(0)" className="mart opo">
                <i className="icon-pmart"></i>
              </Link>
              <Link href="#0box" className="point__box">
                1.40
              </Link>
              <Link href="#0box" className="point__box">
                3.22
              </Link>
            </div>
            <div className="mart__point__two">
              <div className="mart__point__left">
                <Link href="URL:void(0)" className="point__box">
                  <span className="set">Set 1</span>
                  <span>1.65</span>
                </Link>
                <Link href="URL:void(0)" className="point__box">
                  <span className="set">Set 1</span>
                  <span>1.83</span>
                </Link>
              </div>
            </div>
            <div className="cart__point">
              <span>16,2</span>
            </div>
            <div className="mart__point__two">
              <div className="mart__point__left">
                <Link href="URL:void(0)" className="point__box">
                  3.90
                </Link>
                <Link href="URL:void(0)" className="point__box">
                  3.50
                </Link>
              </div>
              <div className="mart__point__right">
                <Link href="URL:void(0)" className="point__box bg__none">
                  <i className="icon-star star"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="table__items b__bottom">
          <div className="t__items">
            <div className="t__items__left">
              <h6>Wojciech Gluszek POL</h6>
              <span className="text">Arkadiusz Mugowski POL</span>
              <p>
                <Link href="URL:void(0)" className="text__opa">
                  Starting
                </Link>
                <span className="text__btn">now</span>
              </p>
            </div>
          </div>
          <div className="tennis__cart__wrap">
            <div className="cart__point">
              <span>2</span>
              <span>2</span>
            </div>
            <div className="tennis__cart__right">
              <span>2</span>
              <span>2</span>
              <span>Sets</span>
            </div>
          </div>
          <div className="tennis__right">
            <div className="mart__point__items">
              <Link href="URL:void(0)" className="twing twing__right">
                <i className="icon-twer"></i>
              </Link>
              <Link href="URL:void(0)" className="mart opo">
                <i className="icon-pmart"></i>
              </Link>
              <Link href="#0box" className="point__box">
                2.80
              </Link>
              <Link href="#0box" className="point__box">
                1.36
              </Link>
            </div>
            <div className="mart__point__two">
              <div className="mart__point__left">
                <Link href="URL:void(0)" className="point__box">
                  <span className="set">Set 1</span>
                  <span>2.05</span>
                </Link>
                <Link href="URL:void(0)" className="point__box">
                  <span className="set">Set 1</span>
                  <span>2.70</span>
                </Link>
              </div>
            </div>
            <div className="cart__point">
              <span>16,2</span>
            </div>
            <div className="mart__point__two">
              <div className="mart__point__left">
                <Link href="URL:void(0)" className="point__box">
                  2.05
                </Link>
                <Link href="URL:void(0)" className="point__box">
                  1.50
                </Link>
              </div>
              <div className="mart__point__right">
                <Link href="URL:void(0)" className="point__box bg__none">
                  <i className="icon-star star"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="table__footer">
          <Link href="URL:void(0)" className="lobby text__opa">
            Open <span className="text__btn"> Table Tennis</span> Events
          </Link>
          <Link href="URL:void(0)" className="footerpoing">
            <span>8</span>
            <span>
              <i className="fas fa-angle-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LiveTableTennisTab;
