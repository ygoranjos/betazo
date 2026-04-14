import Link from "next/link";
import Select from "../select/Select";

const gameLine = [
  { id: 1, name: "Game Lines" },
  { id: 2, name: "Game Lines 1" },
  { id: 3, name: "Game Lines 2" },
  { id: 4, name: "Game Lines 3" },
  { id: 5, name: "Game Lines 4" },
];

const TrendingAmericanFootballTab = () => {
  return (
    <>
      <div className="section__head b__bottom">
        <div className="left__head">
          <span className="icons">
            <i className="icon-afootball"></i>
          </span>
          <span>American Football</span>
        </div>
        <div className="right__catagoris">
          <div className="right__cate__items">
            {/* select */}
            <Select data={gameLine} />
          </div>
        </div>
      </div>
      <div className="table__wrap">
        <div className="table__items table__pointnone__items">
          <div className="t__items">
            <div className="t__items__left"></div>
          </div>
          <div className="tablebasket__main__wrap">
            <div className="tablebasket__martpoin__wrap pr__10">
              <div className="mart__point__items">
                <Link href="URL:void(0)" className="twing twing__right opo">
                  <i className="icon-twer"></i>
                </Link>
                <Link href="URL:void(0)" className="mart opo">
                  <i className="icon-pmart"></i>
                </Link>
              </div>
            </div>
            <div className="mart__point__items">
              <div className="martbas__pointlast americanf__point__box">
                <div className="mart__point__left">
                  <Link href="URL:void(0)" className="point__box bg__none">
                    Spread
                  </Link>
                  <Link href="URL:void(0)" className="point__box bg__none">
                    Total
                  </Link>
                  <Link href="URL:void(0)" className="point__box bg__none">
                    Money Line
                  </Link>
                </div>
              </div>
              <div className="mart__point__right">
                <Link
                  href="URL:void(0)"
                  className="point__box opo point__boxpadding bg__none"
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
              <h6>New Orleans Saints @</h6>
              <span className="text">Tampa Bay Buccaneers</span>
              <p>
                <Link href="URL:void(0)">Tomorrow / 05:10</Link>
                <Link href="URL:void(0)" className="today">
                  BUILD A BET
                </Link>
              </p>
            </div>
          </div>
          <div className="tablebasket__main__wrap">
            <div className="tablebasket__martpoin__wrap pr__10">
              <div className="mart__point__items">
                <Link href="URL:void(0)" className="twing twing__right">
                  <i className="icon-twer"></i>
                </Link>
                <Link href="URL:void(0)" className="mart">
                  <i className="icon-pmart"></i>
                </Link>
              </div>
            </div>
            <div className="mart__point__items">
              <div className="martbas__pointlast americanf__point__box">
                <div className="mart__point__left mb__10">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">+3,5</span>
                    <span>1.91</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">0 40,5</span>
                    <span>1.91</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    2.50
                  </Link>
                </div>
                <div className="mart__point__left">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">-3,5</span>
                    <span>1.91</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">U 40,5</span>
                    <span>1.91</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    1.53
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
              <h6>Kansas City Chiefs @</h6>
              <span className="text">Denver Broncos</span>
              <p>
                <Link href="URL:void(0)">12/12/2022 03:05</Link>
              </p>
            </div>
          </div>
          <div className="tablebasket__main__wrap">
            <div className="tablebasket__martpoin__wrap pr__10">
              <div className="mart__point__items">
                <Link href="URL:void(0)" className="twing twing__right">
                  <i className="icon-twer"></i>
                </Link>
                <Link href="URL:void(0)" className="mart">
                  <i className="icon-pmart"></i>
                </Link>
              </div>
            </div>
            <div className="mart__point__items">
              <div className="martbas__pointlast americanf__point__box">
                <div className="mart__point__left mb__10">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">-8,5</span>
                    <span>1.91</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">0 42,5</span>
                    <span>1.91</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    4.50
                  </Link>
                </div>
                <div className="mart__point__left">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">+9,5</span>
                    <span>1.91</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">U 44,5</span>
                    <span>1.87</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    1.22
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
              <h6>New York Jets @</h6>
              <span className="text">Buffalo Bills</span>
              <p>
                <Link href="URL:void(0)">12/12/2022 03:05</Link>
              </p>
            </div>
          </div>
          <div className="tablebasket__main__wrap">
            <div className="tablebasket__martpoin__wrap pr__10">
              <div className="mart__point__items">
                <Link href="URL:void(0)" className="twing twing__right">
                  <i className="icon-twer"></i>
                </Link>
                <Link href="URL:void(0)" className="mart">
                  <i className="icon-pmart"></i>
                </Link>
              </div>
            </div>
            <div className="mart__point__items">
              <div className="martbas__pointlast americanf__point__box">
                <div className="mart__point__left mb__10">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">+9,5</span>
                    <span>2.70</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">0 44,5</span>
                    <span>8.50</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    7.50
                  </Link>
                </div>
                <div className="mart__point__left">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">-6,5</span>
                    <span>1.80</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">U 44,5</span>
                    <span>1.87</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    1.55
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
              <h6>Las Vegas Raiders @</h6>
              <span className="text">Los Angeles Rams</span>
              <p>
                <Link href="URL:void(0)">12/12/2022 03:05</Link>
              </p>
            </div>
          </div>
          <div className="tablebasket__main__wrap">
            <div className="tablebasket__martpoin__wrap pr__10">
              <div className="mart__point__items">
                <Link href="URL:void(0)" className="twing twing__right">
                  <i className="icon-twer"></i>
                </Link>
                <Link href="URL:void(0)" className="mart">
                  <i className="icon-pmart"></i>
                </Link>
              </div>
            </div>
            <div className="mart__point__items">
              <div className="martbas__pointlast americanf__point__box">
                <div className="mart__point__left mb__10">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">+6,5</span>
                    <span>1.91</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">0 43</span>
                    <span>1.91</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    7.50
                  </Link>
                </div>
                <div className="mart__point__left">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">-6,5</span>
                    <span>1.80</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">U 43</span>
                    <span>1.91</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    1.55
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
              <h6>Philadelphia Eagles @</h6>
              <span className="text">New York Giants</span>
              <p>
                <Link href="URL:void(0)">12/12/2022 03:05</Link>
              </p>
            </div>
          </div>
          <div className="tablebasket__main__wrap">
            <div className="tablebasket__martpoin__wrap pr__10">
              <div className="mart__point__items">
                <Link href="URL:void(0)" className="twing twing__right">
                  <i className="icon-twer"></i>
                </Link>
                <Link href="URL:void(0)" className="mart">
                  <i className="icon-pmart"></i>
                </Link>
              </div>
            </div>
            <div className="mart__point__items">
              <div className="martbas__pointlast americanf__point__box">
                <div className="mart__point__left mb__10">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">+6,5</span>
                    <span>2.70</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">O 109,5</span>
                    <span>8.50</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    7.50
                  </Link>
                </div>
                <div className="mart__point__left">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">-6,5</span>
                    <span>1.80</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">U 109,5</span>
                    <span>1.87</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    1.55
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
              <h6>Jacksonville Jaguars @</h6>
              <span className="text">Tennessee Titans</span>
              <p>
                <Link href="URL:void(0)">12/12/2022 03:05</Link>
              </p>
            </div>
          </div>
          <div className="tablebasket__main__wrap">
            <div className="tablebasket__martpoin__wrap pr__10">
              <div className="mart__point__items">
                <Link href="URL:void(0)" className="twing twing__right">
                  <i className="icon-twer"></i>
                </Link>
                <Link href="URL:void(0)" className="mart">
                  <i className="icon-pmart"></i>
                </Link>
              </div>
            </div>
            <div className="mart__point__items">
              <div className="martbas__pointlast americanf__point__box">
                <div className="mart__point__left mb__10">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">+6,5</span>
                    <span>1.91</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">0 44,5</span>
                    <span>1.91</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    1.48
                  </Link>
                </div>
                <div className="mart__point__left">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">-6,5</span>
                    <span>2.70</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">U 44,5</span>
                    <span>1.91</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    3.20
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
              <h6>Cleveland Browns @</h6>
              <span className="text">Cincinnati Bengals</span>
              <p>
                <Link href="URL:void(0)">12/12/2022 03:05</Link>
              </p>
            </div>
          </div>
          <div className="tablebasket__main__wrap">
            <div className="tablebasket__martpoin__wrap pr__10">
              <div className="mart__point__items">
                <Link href="URL:void(0)" className="twing twing__right">
                  <i className="icon-twer"></i>
                </Link>
                <Link href="URL:void(0)" className="mart">
                  <i className="icon-pmart"></i>
                </Link>
              </div>
            </div>
            <div className="mart__point__items">
              <div className="martbas__pointlast americanf__point__box">
                <div className="mart__point__left mb__10">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">+3,5</span>
                    <span>2.70</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">0 42</span>
                    <span>8.50</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    7.50
                  </Link>
                </div>
                <div className="mart__point__left">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">-3,5</span>
                    <span>U 42</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">U 44,5</span>
                    <span>1.87</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    1.55
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
              <h6>Carolina Panthers @</h6>
              <span className="text">Seattle Seahawks</span>
              <p>
                <Link href="URL:void(0)">12/12/2022 03:05</Link>
              </p>
            </div>
          </div>
          <div className="tablebasket__main__wrap">
            <div className="tablebasket__martpoin__wrap pr__10">
              <div className="mart__point__items">
                <Link href="URL:void(0)" className="twing twing__right">
                  <i className="icon-twer"></i>
                </Link>
                <Link href="URL:void(0)" className="mart">
                  <i className="icon-pmart"></i>
                </Link>
              </div>
            </div>
            <div className="mart__point__items">
              <div className="martbas__pointlast americanf__point__box">
                <div className="mart__point__left mb__10">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">+1</span>
                    <span>2.70</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">O 109,5</span>
                    <span>8.50</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    6.33
                  </Link>
                </div>
                <div className="mart__point__left">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">-1</span>
                    <span>1.80</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">U 109,5</span>
                    <span>1.87</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    1.55
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
              <h6>Minnesota Vikings @</h6>
              <span className="text">Detroit Lions</span>
              <p>
                <Link href="URL:void(0)">12/12/2022 03:05</Link>
              </p>
            </div>
          </div>
          <div className="tablebasket__main__wrap">
            <div className="tablebasket__martpoin__wrap pr__10">
              <div className="mart__point__items">
                <Link href="URL:void(0)" className="twing twing__right">
                  <i className="icon-twer"></i>
                </Link>
                <Link href="URL:void(0)" className="mart">
                  <i className="icon-pmart"></i>
                </Link>
              </div>
            </div>
            <div className="mart__point__items">
              <div className="martbas__pointlast americanf__point__box">
                <div className="mart__point__left mb__10">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">+6,5</span>
                    <span>2.70</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">O 109,5</span>
                    <span>8.50</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    7.50
                  </Link>
                </div>
                <div className="mart__point__left">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">-1</span>
                    <span>1.80</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">-6,5</span>
                    <span>1.87</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    1.55
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
            OPEN AMERICAN FOOTBALL LOBBY
          </Link>
          <Link href="URL:void(0)" className="footerpoing">
            <span>42</span>
            <span>
              <i className="fas fa-angle-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TrendingAmericanFootballTab;
