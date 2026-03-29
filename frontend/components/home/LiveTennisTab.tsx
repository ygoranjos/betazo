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

const LiveTennisTab = ({ thead = true }) => {
  return (
    <>
      <div className="section__head b__bottom">
        <div className="left__head">
          <span className="icons">
            <i className="icon-tennis"></i>
          </span>
          <span>Tennis</span>
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
              <div className="mart__point__two">
                <div className="mart__point__left">
                  <Link href="URL:void(0)" className="point__box bg__none">
                    1
                  </Link>
                  <Link href="URL:void(0)" className="point__box bg__none">
                    2
                  </Link>
                </div>
                <div className="mart__point__right">
                  <Link href="URL:void(0)" className="point__box opo">
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
              <h6>Ilya Snitari MDA</h6>
              <span className="text">Alex Marti Pujolras ESP</span>
              <p>
                <Link href="URL:void(0)">Live</Link>
                <span>3rd Set</span>
              </p>
            </div>
          </div>
          <div className="tennis__cart__wrap">
            <div className="cart__point">
              <span>0 4</span>
              <span>0 2</span>
              <span>P G</span>
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
              <Link href="URL:void(0)" className="mart">
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
                  8.55
                </Link>
                <Link href="URL:void(0)" className="point__box">
                  2.70
                </Link>
              </div>
            </div>
            <div className="mart__point__two">
              <div className="mart__point__left">
                <Link href="URL:void(0)" className="point__box">
                  8.55
                </Link>
                <Link href="URL:void(0)" className="point__box">
                  2.70
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
              <h6>Daniel Rincon SUI</h6>
              <span className="text">Clara Vlasselaer BEL</span>
              <p>
                <Link href="URL:void(0)">Live</Link>
                <span>1st Set</span>
              </p>
            </div>
          </div>
          <div className="tennis__cart__wrap">
            <div className="cart__point">
              <span>0 4</span>
              <span>0 2</span>
              <span>P G</span>
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
              <Link href="URL:void(0)" className="mart">
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
                  8.55
                </Link>
                <Link href="URL:void(0)" className="point__box">
                  2.70
                </Link>
              </div>
            </div>
            <div className="mart__point__two">
              <div className="mart__point__left">
                <Link href="URL:void(0)" className="point__box">
                  8.55
                </Link>
                <Link href="URL:void(0)" className="point__box">
                  2.70
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
              <h6>Steven Diez CAN</h6>
              <span className="text">Oriol Roca Batalla ESP</span>
              <p>
                <Link href="URL:void(0)">Live</Link>
                <span>2rd Set</span>
              </p>
            </div>
          </div>
          <div className="tennis__cart__wrap">
            <div className="cart__point">
              <span>0 4</span>
              <span>0 2</span>
              <span>P G</span>
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
              <Link href="URL:void(0)" className="mart">
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
                  8.55
                </Link>
                <Link href="URL:void(0)" className="point__box">
                  2.70
                </Link>
              </div>
            </div>
            <div className="mart__point__two">
              <div className="mart__point__left">
                <Link href="URL:void(0)" className="point__box">
                  8.55
                </Link>
                <Link href="URL:void(0)" className="point__box">
                  2.70
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
              <h6>Victoria Kan RUS</h6>
              <span className="text">Denisa Hindova CZE</span>
              <p>
                <Link href="URL:void(0)">Live</Link>
                <span>4rd Set</span>
              </p>
            </div>
          </div>
          <div className="tennis__cart__wrap">
            <div className="cart__point">
              <span>0 4</span>
              <span>0 2</span>
              <span>P G</span>
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
              <Link href="URL:void(0)" className="mart">
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
                  8.55
                </Link>
                <Link href="URL:void(0)" className="point__box">
                  2.70
                </Link>
              </div>
            </div>
            <div className="mart__point__two">
              <div className="mart__point__left">
                <Link href="URL:void(0)" className="point__box">
                  8.55
                </Link>
                <Link href="URL:void(0)" className="point__box">
                  2.70
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
              <h6>Steven Diez CAN</h6>
              <span className="text">Alex Marti Pujolras ESP</span>
              <p>
                <Link href="URL:void(0)">Live</Link>
                <span>6rd Set</span>
              </p>
            </div>
          </div>
          <div className="tennis__cart__wrap">
            <div className="cart__point">
              <span>0 4</span>
              <span>0 2</span>
              <span>P G</span>
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
              <Link href="URL:void(0)" className="mart">
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
                  8.55
                </Link>
                <Link href="URL:void(0)" className="point__box">
                  2.70
                </Link>
              </div>
            </div>
            <div className="mart__point__two">
              <div className="mart__point__left">
                <Link href="URL:void(0)" className="point__box">
                  8.55
                </Link>
                <Link href="URL:void(0)" className="point__box">
                  2.70
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
              <h6>Clara Vlasselaer BEL</h6>
              <span className="text">Oriol Roca Batalla ESP</span>
              <p>
                <Link href="URL:void(0)">Live</Link>
                <span>9rd Set</span>
              </p>
            </div>
          </div>
          <div className="tennis__cart__wrap">
            <div className="cart__point">
              <span>0 4</span>
              <span>0 2</span>
              <span>P G</span>
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
              <Link href="URL:void(0)" className="mart">
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
                  8.55
                </Link>
                <Link href="URL:void(0)" className="point__box">
                  2.70
                </Link>
              </div>
            </div>
            <div className="mart__point__two">
              <div className="mart__point__left">
                <Link href="URL:void(0)" className="point__box">
                  8.55
                </Link>
                <Link href="URL:void(0)" className="point__box">
                  2.70
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
          <Link href="URL:void(0)" className="lobby">
            All <span className="text__btn">Tennis Live</span>
          </Link>
          <Link href="URL:void(0)" className="footerpoing">
            <span>322</span>
            <span>
              <i className="fas fa-angle-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LiveTennisTab;
