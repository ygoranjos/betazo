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

const TrendingBasketballTab = () => {
  return (
    <>
      <div className="section__head b__bottom">
        <div className="left__head">
          <span className="icons">
            <i className="icon-basketball"></i>
          </span>
          <span>Basketball</span>
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
        <div className="table__items table__pointnone__items">
          <div className="t__items">
            <div className="t__items__left"></div>
          </div>
          <div className="tablebasket__main__wrap">
            <div className="tablebasket__martpoin__wrap">
              <div className="mart__point__items">
                <Link href="URL:void(0)" className="twing twing__right opo">
                  <i className="icon-twer"></i>
                </Link>
                <Link href="URL:void(0)" className="mart opo">
                  <i className="icon-pmart"></i>
                </Link>
              </div>
              <div className="tablemartbasket__colum">
                <div className="mart__point__items mb__10">
                  <Link href="#0box" className="point__box bg__none">
                    1
                  </Link>
                  <Link href="#0box" className="point__box bg__none">
                    X
                  </Link>
                  <Link href="#0box" className="point__box bg__none">
                    2
                  </Link>
                </div>
              </div>
            </div>
            <div className="mart__point__items pl__40 pr__40">
              <Link href="#0box" className="point__box bg__none">
                Goals
              </Link>
            </div>
            <div className="mart__point__items">
              <div className="martbas__pointlast">
                <div className="mart__point__left mb__10">
                  <Link href="URL:void(0)" className="point__box bg__none">
                    Over
                  </Link>
                  <Link href="URL:void(0)" className="point__box bg__none">
                    Under
                  </Link>
                </div>
              </div>
              <div className="mart__point__right">
                <Link
                  href="URL:void(0)"
                  className="point__box point__boxpadding bg__none"
                >
                  No
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="table__items b__bottom">
          <div className="t__items">
            <div className="t__items__left">
              <h6>Memphis Grizzlies @</h6>
              <span className="text">Detroit Pistons</span>
              <p>
                <Link href="URL:void(0)">Tomorrow / 05:10</Link>
                <Link href="URL:void(0)" className="today">
                  BUILD A BET
                </Link>
              </p>
            </div>
          </div>
          <div className="tablebasket__main__wrap">
            <div className="tablebasket__martpoin__wrap">
              <div className="mart__point__items">
                <Link href="URL:void(0)" className="twing twing__right">
                  <i className="icon-twer"></i>
                </Link>
                <Link href="URL:void(0)" className="mart">
                  <i className="icon-pmart"></i>
                </Link>
              </div>
              <div className="tablemartbasket__colum">
                <div className="mart__point__items mb__10">
                  <Link href="#0box" className="point__box">
                    <span className="spoint">+6,5</span>
                    <span>2.70</span>
                  </Link>
                  <Link href="#0box" className="point__box">
                    <span className="spoint">O 109,5</span>
                    <span>8.50</span>
                  </Link>
                  <Link href="#0box" className="point__box">
                    7.50
                  </Link>
                </div>
                <div className="mart__point__items">
                  <Link href="#0box" className="point__box">
                    <span className="spoint">-6,5</span>
                    <span>3.25</span>
                  </Link>
                  <Link href="#0box" className="point__box">
                    <span className="spoint">U 109,5</span>
                    <span>1.87</span>
                  </Link>
                  <Link href="#0box" className="point__box">
                    1.55
                  </Link>
                </div>
              </div>
            </div>
            <div className="mart__point__items pl__40 pr__40">
              <Link href="#0box" className="point__box bg__none">
                <i className="icon-lock lock"></i>
              </Link>
            </div>
            <div className="mart__point__items">
              <div className="martbas__pointlast">
                <div className="mart__point__left mb__10">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">O 79,5</span>
                    <span>8.50</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    2.25
                  </Link>
                </div>
                <div className="mart__point__left">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">U 79,5</span>
                    <span>8.50</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    1.60
                  </Link>
                </div>
              </div>
              <div className="mart__point__right">
                <Link
                  href="URL:void(0)"
                  className="point__box point__boxpadding bg__none"
                >
                  <i className="icon-star star"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="table__items b__bottom">
          <div className="t__items">
            <div className="t__items__left">
              <h6>Boston Celtics @</h6>
              <span className="text">Brooklyn Nets</span>
              <p>
                <Link href="URL:void(0)">Tomorrow / 05:10</Link>
                <Link href="URL:void(0)" className="today">
                  BUILD A BET
                </Link>
              </p>
            </div>
          </div>
          <div className="tablebasket__main__wrap">
            <div className="tablebasket__martpoin__wrap">
              <div className="mart__point__items">
                <Link href="URL:void(0)" className="twing twing__right">
                  <i className="icon-twer"></i>
                </Link>
                <Link href="URL:void(0)" className="mart">
                  <i className="icon-pmart"></i>
                </Link>
              </div>
              <div className="tablemartbasket__colum">
                <div className="mart__point__items mb__10">
                  <Link href="#0box" className="point__box">
                    <span className="spoint">+6,5</span>
                    <span>3.25</span>
                  </Link>
                  <Link href="#0box" className="point__box">
                    <span className="spoint">O 109,5</span>
                    <span>6.33</span>
                  </Link>
                  <Link href="#0box" className="point__box">
                    7.50
                  </Link>
                </div>
                <div className="mart__point__items">
                  <Link href="#0box" className="point__box">
                    <span className="spoint">-6,5</span>
                    <span>1.80</span>
                  </Link>
                  <Link href="#0box" className="point__box">
                    <span className="spoint">U 109,5</span>
                    <span>1.87</span>
                  </Link>
                  <Link href="#0box" className="point__box">
                    1.55
                  </Link>
                </div>
              </div>
            </div>
            <div className="mart__point__items pl__40 pr__40">
              <Link href="#0box" className="point__box bg__none">
                <i className="icon-lock lock"></i>
              </Link>
            </div>
            <div className="mart__point__items">
              <div className="martbas__pointlast">
                <div className="mart__point__left mb__10">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">O 79,5</span>
                    <span>9.36</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    3.25
                  </Link>
                </div>
                <div className="mart__point__left">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">U 79,5</span>
                    <span>6.35</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    1.60
                  </Link>
                </div>
              </div>
              <div className="mart__point__right">
                <Link
                  href="URL:void(0)"
                  className="point__box point__boxpadding bg__none"
                >
                  <i className="icon-star star"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="table__items b__bottom">
          <div className="t__items">
            <div className="t__items__left">
              <h6>Los Angeles Lakers @</h6>
              <span className="text">Washington Wizards</span>
              <p>
                <Link href="URL:void(0)">Tomorrow / 05:10</Link>
                <Link href="URL:void(0)" className="today">
                  BUILD A BET
                </Link>
              </p>
            </div>
          </div>
          <div className="tablebasket__main__wrap">
            <div className="tablebasket__martpoin__wrap">
              <div className="mart__point__items">
                <Link href="URL:void(0)" className="twing twing__right">
                  <i className="icon-twer"></i>
                </Link>
                <Link href="URL:void(0)" className="mart">
                  <i className="icon-pmart"></i>
                </Link>
              </div>
              <div className="tablemartbasket__colum">
                <div className="mart__point__items mb__10">
                  <Link href="#0box" className="point__box">
                    <span className="spoint">+6,5</span>
                    <span>2.70</span>
                  </Link>
                  <Link href="#0box" className="point__box">
                    <span className="spoint">O 109,5</span>
                    <span>8.50</span>
                  </Link>
                  <Link href="#0box" className="point__box">
                    7.50
                  </Link>
                </div>
                <div className="mart__point__items">
                  <Link href="#0box" className="point__box">
                    <span className="spoint">-6,5</span>
                    <span>1.80</span>
                  </Link>
                  <Link href="#0box" className="point__box">
                    <span className="spoint">U 109,5</span>
                    <span>1.87</span>
                  </Link>
                  <Link href="#0box" className="point__box">
                    1.55
                  </Link>
                </div>
              </div>
            </div>
            <div className="mart__point__items pl__40 pr__40">
              <Link href="#0box" className="point__box bg__none"></Link>
            </div>
            <div className="mart__point__items">
              <div className="martbas__pointlast martbas__pointlast__width">
                <div className="mart__point__left mb__10">
                  <Link href="URL:void(0)" className="point__box bg__none">
                    <i className="icon-lock lock"></i>
                  </Link>
                </div>
              </div>
              <div className="mart__point__right">
                <Link
                  href="URL:void(0)"
                  className="point__box point__boxpadding bg__none"
                >
                  <i className="icon-star star"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="table__items b__bottom">
          <div className="t__items">
            <div className="t__items__left">
              <h6>Phoenix Suns @</h6>
              <span className="text">San Antonio Spurs</span>
              <p>
                <Link href="URL:void(0)">Today / 21:00</Link>
                <Link href="URL:void(0)" className="today">
                  BUILD A BET
                </Link>
              </p>
            </div>
          </div>
          <div className="tablebasket__main__wrap">
            <div className="tablebasket__martpoin__wrap">
              <div className="mart__point__items">
                <Link href="URL:void(0)" className="twing twing__right">
                  <i className="icon-twer"></i>
                </Link>
                <Link href="URL:void(0)" className="mart">
                  <i className="icon-pmart"></i>
                </Link>
              </div>
              <div className="tablemartbasket__colum">
                <div className="mart__point__items mb__10">
                  <Link href="#0box" className="point__box">
                    <span className="spoint">+6,5</span>
                    <span>2.70</span>
                  </Link>
                  <Link href="#0box" className="point__box">
                    <span className="spoint">O 109,5</span>
                    <span>8.50</span>
                  </Link>
                  <Link href="#0box" className="point__box">
                    7.50
                  </Link>
                </div>
                <div className="mart__point__items">
                  <Link href="#0box" className="point__box">
                    <span className="spoint">-6,5</span>
                    <span>1.80</span>
                  </Link>
                  <Link href="#0box" className="point__box">
                    <span className="spoint">U 109,5</span>
                    <span>1.87</span>
                  </Link>
                  <Link href="#0box" className="point__box">
                    1.55
                  </Link>
                </div>
              </div>
            </div>
            <div className="mart__point__items pl__40 pr__40">
              <Link href="#0box" className="point__box bg__none"></Link>
            </div>
            <div className="mart__point__items">
              <div className="martbas__pointlast martbas__pointlast__width">
                <div className="mart__point__left mb__10">
                  <Link href="URL:void(0)" className="point__box bg__none">
                    <i className="icon-lock lock"></i>
                  </Link>
                </div>
              </div>
              <div className="mart__point__right">
                <Link
                  href="URL:void(0)"
                  className="point__box point__boxpadding bg__none"
                >
                  <i className="icon-star star"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="table__items b__bottom">
          <div className="t__items">
            <div className="t__items__left">
              <h6>Chicago Bulls @</h6>
              <span className="text">Sacramento Kings</span>
              <p>
                <Link href="URL:void(0)">TTomorrow / 05:10</Link>
                <Link href="URL:void(0)" className="today">
                  BUILD A BET
                </Link>
              </p>
            </div>
          </div>
          <div className="tablebasket__main__wrap">
            <div className="tablebasket__martpoin__wrap">
              <div className="mart__point__items">
                <Link href="URL:void(0)" className="twing twing__right">
                  <i className="icon-twer"></i>
                </Link>
                <Link href="URL:void(0)" className="mart">
                  <i className="icon-pmart"></i>
                </Link>
              </div>
              <div className="tablemartbasket__colum">
                <div className="mart__point__items mb__10">
                  <Link href="#0box" className="point__box">
                    <span className="spoint">+6,5</span>
                    <span>3.25</span>
                  </Link>
                  <Link href="#0box" className="point__box">
                    <span className="spoint">O 109,5</span>
                    <span>6.33</span>
                  </Link>
                  <Link href="#0box" className="point__box">
                    7.50
                  </Link>
                </div>
                <div className="mart__point__items">
                  <Link href="#0box" className="point__box">
                    <span className="spoint">-6,5</span>
                    <span>1.80</span>
                  </Link>
                  <Link href="#0box" className="point__box">
                    <span className="spoint">U 109,5</span>
                    <span>1.87</span>
                  </Link>
                  <Link href="#0box" className="point__box">
                    1.55
                  </Link>
                </div>
              </div>
            </div>
            <div className="mart__point__items pl__40 pr__40">
              <Link href="#0box" className="point__box bg__none">
                <i className="icon-lock lock"></i>
              </Link>
            </div>
            <div className="mart__point__items">
              <div className="martbas__pointlast">
                <div className="mart__point__left mb__10">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">O 79,5</span>
                    <span>9.36</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    3.25
                  </Link>
                </div>
                <div className="mart__point__left">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">U 79,5</span>
                    <span>6.35</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    1.60
                  </Link>
                </div>
              </div>
              <div className="mart__point__right">
                <Link
                  href="URL:void(0)"
                  className="point__box point__boxpadding bg__none"
                >
                  <i className="icon-star star"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="table__items b__bottom">
          <div className="t__items">
            <div className="t__items__left">
              <h6>Denver Nuggets @</h6>
              <span className="text">New Orleans Pelicans</span>
              <p>
                <Link href="URL:void(0)">Today / 21:00</Link>
                <Link href="URL:void(0)" className="today">
                  BUILD A BET
                </Link>
              </p>
            </div>
          </div>
          <div className="tablebasket__main__wrap">
            <div className="tablebasket__martpoin__wrap">
              <div className="mart__point__items">
                <Link href="URL:void(0)" className="twing twing__right">
                  <i className="icon-twer"></i>
                </Link>
                <Link href="URL:void(0)" className="mart">
                  <i className="icon-pmart"></i>
                </Link>
              </div>
              <div className="tablemartbasket__colum">
                <div className="mart__point__items mb__10">
                  <Link href="#0box" className="point__box">
                    <span className="spoint">+6,5</span>
                    <span>2.70</span>
                  </Link>
                  <Link href="#0box" className="point__box">
                    <span className="spoint">O 109,5</span>
                    <span>8.50</span>
                  </Link>
                  <Link href="#0box" className="point__box">
                    7.50
                  </Link>
                </div>
                <div className="mart__point__items">
                  <Link href="#0box" className="point__box">
                    <span className="spoint">-6,5</span>
                    <span>1.80</span>
                  </Link>
                  <Link href="#0box" className="point__box">
                    <span className="spoint">U 109,5</span>
                    <span>1.87</span>
                  </Link>
                  <Link href="#0box" className="point__box">
                    1.55
                  </Link>
                </div>
              </div>
            </div>
            <div className="mart__point__items pl__40 pr__40">
              <Link href="#0box" className="point__box bg__none"></Link>
            </div>
            <div className="mart__point__items">
              <div className="martbas__pointlast martbas__pointlast__width">
                <div className="mart__point__left mb__10">
                  <Link href="URL:void(0)" className="point__box bg__none">
                    <i className="icon-lock lock"></i>
                  </Link>
                </div>
              </div>
              <div className="mart__point__right">
                <Link
                  href="URL:void(0)"
                  className="point__box point__boxpadding bg__none"
                >
                  <i className="icon-star star"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="table__items b__bottom">
          <div className="t__items">
            <div className="t__items__left">
              <h6>Indiana Pacers @</h6>
              <span className="text">Portland Trail Blazers</span>
              <p>
                <Link href="URL:void(0)">Today / 21:00</Link>
                <Link href="URL:void(0)" className="today">
                  BUILD A BET
                </Link>
              </p>
            </div>
          </div>
          <div className="tablebasket__main__wrap">
            <div className="tablebasket__martpoin__wrap">
              <div className="mart__point__items">
                <Link href="URL:void(0)" className="twing twing__right">
                  <i className="icon-twer"></i>
                </Link>
                <Link href="URL:void(0)" className="mart">
                  <i className="icon-pmart"></i>
                </Link>
              </div>
              <div className="tablemartbasket__colum">
                <div className="mart__point__items mb__10">
                  <Link href="#0box" className="point__box">
                    <span className="spoint">+6,5</span>
                    <span>2.70</span>
                  </Link>
                  <Link href="#0box" className="point__box">
                    <span className="spoint">O 109,5</span>
                    <span>8.50</span>
                  </Link>
                  <Link href="#0box" className="point__box">
                    7.50
                  </Link>
                </div>
                <div className="mart__point__items">
                  <Link href="#0box" className="point__box">
                    <span className="spoint">-6,5</span>
                    <span>1.80</span>
                  </Link>
                  <Link href="#0box" className="point__box">
                    <span className="spoint">U 109,5</span>
                    <span>1.87</span>
                  </Link>
                  <Link href="#0box" className="point__box">
                    1.55
                  </Link>
                </div>
              </div>
            </div>
            <div className="mart__point__items pl__40 pr__40">
              <Link href="#0box" className="point__box bg__none"></Link>
            </div>
            <div className="mart__point__items">
              <div className="martbas__pointlast martbas__pointlast__width">
                <div className="mart__point__left mb__10">
                  <Link href="URL:void(0)" className="point__box bg__none">
                    <i className="icon-lock lock"></i>
                  </Link>
                </div>
              </div>
              <div className="mart__point__right">
                <Link
                  href="URL:void(0)"
                  className="point__box point__boxpadding bg__none"
                >
                  <i className="icon-star star"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="table__items b__bottom">
          <div className="t__items">
            <div className="t__items__left">
              <h6>Chicago Bulls @</h6>
              <span className="text">Sacramento Kings</span>
              <p>
                <Link href="URL:void(0)">TTomorrow / 05:10</Link>
                <Link href="URL:void(0)" className="today">
                  BUILD A BET
                </Link>
              </p>
            </div>
          </div>
          <div className="tablebasket__main__wrap">
            <div className="tablebasket__martpoin__wrap">
              <div className="mart__point__items">
                <Link href="URL:void(0)" className="twing twing__right">
                  <i className="icon-twer"></i>
                </Link>
                <Link href="URL:void(0)" className="mart">
                  <i className="icon-pmart"></i>
                </Link>
              </div>
              <div className="tablemartbasket__colum">
                <div className="mart__point__items mb__10">
                  <Link href="#0box" className="point__box">
                    <span className="spoint">+6,5</span>
                    <span>3.25</span>
                  </Link>
                  <Link href="#0box" className="point__box">
                    <span className="spoint">O 109,5</span>
                    <span>6.33</span>
                  </Link>
                  <Link href="#0box" className="point__box">
                    7.50
                  </Link>
                </div>
                <div className="mart__point__items">
                  <Link href="#0box" className="point__box">
                    <span className="spoint">-6,5</span>
                    <span>1.80</span>
                  </Link>
                  <Link href="#0box" className="point__box">
                    <span className="spoint">U 109,5</span>
                    <span>1.87</span>
                  </Link>
                  <Link href="#0box" className="point__box">
                    1.55
                  </Link>
                </div>
              </div>
            </div>
            <div className="mart__point__items pl__40 pr__40">
              <Link href="#0box" className="point__box bg__none">
                <i className="icon-lock lock"></i>
              </Link>
            </div>
            <div className="mart__point__items">
              <div className="martbas__pointlast">
                <div className="mart__point__left mb__10">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">O 79,5</span>
                    <span>9.36</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    3.25
                  </Link>
                </div>
                <div className="mart__point__left">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">U 79,5</span>
                    <span>6.35</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    1.60
                  </Link>
                </div>
              </div>
              <div className="mart__point__right">
                <Link
                  href="URL:void(0)"
                  className="point__box point__boxpadding bg__none"
                >
                  <i className="icon-star star"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="table__footer">
          <Link href="URL:void(0)" className="lobby text__opa">
            Open Football lobby
          </Link>
          <Link href="URL:void(0)" className="footerpoing">
            <span>222</span>
            <span>
              <i className="fas fa-angle-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TrendingBasketballTab;
