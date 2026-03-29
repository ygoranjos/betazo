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

const LiveVollyballTab = ({ thead = true }) => {
  return (
    <>
      <div className="section__head b__bottom">
        <div className="left__head">
          <span className="icons">
            <i className="icon-volly"></i>
          </span>
          <span>Vollyball</span>
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
              <div className="cart__point bg__none">
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
              <h6>Tokyo Great Bears</h6>
              <span className="text">JT Thunders</span>
              <p>
                <Link href="URL:void(0)">Live</Link>
                <span>3rd Set</span>
              </p>
            </div>
          </div>
          <div className="tennis__cart__wrap">
            <div className="cart__point">
              <span>15</span>
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
                2.70
              </Link>
              <Link href="#0box" className="point__box">
                8.50
              </Link>
            </div>
            <div className="mart__point__two">
              <div className="mart__point__left">
                <Link href="URL:void(0)" className="point__box">
                  7.05
                </Link>
                <Link href="URL:void(0)" className="point__box">
                  5.50
                </Link>
              </div>
            </div>
            <div className="cart__point">
              <span>220,6</span>
            </div>
            <div className="mart__point__two">
              <div className="mart__point__left">
                <Link href="URL:void(0)" className="point__box">
                  3.05
                </Link>
                <Link href="URL:void(0)" className="point__box">
                  6.50
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
              <h6>Sichuan</h6>
              <span className="text">Zhejiang</span>
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
              <span>220,6</span>
            </div>
            <div className="mart__point__two">
              <div className="mart__point__left">
                <Link href="URL:void(0)" className="point__box">
                  6.32
                </Link>
                <Link href="URL:void(0)" className="point__box">
                  5.55
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
              <h6>Ben Tre</h6>
              <span className="text">Zhejiang</span>
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
              <span>220,6</span>
            </div>
            <div className="mart__point__two">
              <div className="mart__point__left">
                <Link href="URL:void(0)" className="point__box">
                  5.36
                </Link>
                <Link href="URL:void(0)" className="point__box">
                  9.36
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
              <span>15</span>
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
                2.70
              </Link>
              <Link href="#0box" className="point__box">
                8.50
              </Link>
            </div>
            <div className="mart__point__two">
              <div className="mart__point__left">
                <Link href="URL:void(0)" className="point__box">
                  7.05
                </Link>
                <Link href="URL:void(0)" className="point__box">
                  5.50
                </Link>
              </div>
            </div>
            <div className="cart__point">
              <span>220,6</span>
            </div>
            <div className="mart__point__two">
              <div className="mart__point__left">
                <Link href="URL:void(0)" className="point__box">
                  3.05
                </Link>
                <Link href="URL:void(0)" className="point__box">
                  6.50
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
              <h6>Mizuno</h6>
              <span className="text">Taipower</span>
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
              <span>15</span>
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
                2.70
              </Link>
              <Link href="#0box" className="point__box">
                8.50
              </Link>
            </div>
            <div className="mart__point__two">
              <div className="mart__point__left">
                <Link href="URL:void(0)" className="point__box">
                  7.05
                </Link>
                <Link href="URL:void(0)" className="point__box">
                  5.50
                </Link>
              </div>
            </div>
            <div className="cart__point">
              <span>220,6</span>
            </div>
            <div className="mart__point__two">
              <div className="mart__point__left">
                <Link href="URL:void(0)" className="point__box">
                  3.05
                </Link>
                <Link href="URL:void(0)" className="point__box">
                  6.50
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
            Open <span className="text__btn"> Volleyball Live</span> Events
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

export default LiveVollyballTab;
