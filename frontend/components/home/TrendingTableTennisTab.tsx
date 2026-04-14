import Link from "next/link";
import Select from "../select/Select";

const categoris = [
  { id: 2, name: "3way - Who will win?" },
  { id: 3, name: "4way - Who will win?" },
  { id: 4, name: "5way - Who will win?" },
  { id: 5, name: "6way - Who will win?" },
];

const categoris2 = [
  { id: 2, name: "Set Winner" },
  { id: 3, name: "...." },
  { id: 4, name: "...." },
  { id: 5, name: "...." },
];

const TrendingTableTennisTab = () => {
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
            {/* Select */}
            <Select data={categoris} />
          </div>
          <div className="right__cate__items">
            {/* Select */}
            <Select data={categoris2} />
          </div>
        </div>
      </div>
      <div className="table__wrap">
        <div className="table__items table__pointnone__items">
          <div className="t__items">
            <div className="t__items__left"></div>
          </div>
          <div className="tablebasket__main__wrap">
            <div className="tablebasket__martpoin__wrap pr__40">
              <div className="mart__point__items">
                <Link href="URL:void(0)" className="twing twing__right opo">
                  <i className="icon-twer"></i>
                </Link>
                <Link href="URL:void(0)" className="mart opo">
                  <i className="icon-pmart"></i>
                </Link>
              </div>
              <div className="tablemartbasket__colum">
                <div className="mart__point__items">
                  <Link href="#0box" className="point__box bg__none">
                    1
                  </Link>
                  <Link href="#0box" className="point__box bg__none">
                    2
                  </Link>
                </div>
              </div>
            </div>
            <div className="mart__point__items">
              <div className="martbas__pointlast">
                <div className="mart__point__left">
                  <Link href="URL:void(0)" className="point__box bg__none">
                    1
                  </Link>
                  <Link href="URL:void(0)" className="point__box bg__none">
                    2
                  </Link>
                </div>
              </div>
              <div className="mart__point__right">
                <Link
                  href="URL:void(0)"
                  className="point__box point__boxpadding bg__none opo"
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
              <h6>
                Jiri Louda <span>CZE</span>
              </h6>
              <span className="text">
                Petr Oliver Korp <span>CZE</span>
              </span>
              <p>
                <Link href="URL:void(0)">Today / 19:45</Link>
                <Link href="URL:void(0)" className="text__btn">
                  35 min
                </Link>
              </p>
            </div>
          </div>
          <div className="tablebasket__main__wrap">
            <div className="tablebasket__martpoin__wrap pr__40">
              <div className="mart__point__items">
                <Link href="URL:void(0)" className="twing twing__right">
                  <i className="icon-twer"></i>
                </Link>
                <Link href="URL:void(0)" className="mart opo">
                  <i className="icon-pmart"></i>
                </Link>
              </div>
              <div className="tablemartbasket__colum">
                <div className="mart__point__items">
                  <Link href="#0box" className="point__box">
                    3.22
                  </Link>
                  <Link href="#0box" className="point__box">
                    5.44
                  </Link>
                </div>
              </div>
            </div>
            <div className="mart__point__items">
              <div className="martbas__pointlast">
                <div className="mart__point__left">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">Set 1</span>
                    <span>1.15</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">Set 1</span>
                    <span>1.87</span>
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
              <h6>
                Pavel Kulhanek <span>CZE</span>
              </h6>
              <span className="text">
                Jiri Svec <span>CZE</span>
              </span>
              <p>
                <Link href="URL:void(0)">Starting in</Link>
                <Link href="URL:void(0)" className="text__btn">
                  35 min
                </Link>
              </p>
            </div>
          </div>
          <div className="tablebasket__main__wrap">
            <div className="tablebasket__martpoin__wrap pr__40">
              <div className="mart__point__items">
                <Link href="URL:void(0)" className="twing twing__right">
                  <i className="icon-twer"></i>
                </Link>
                <Link href="URL:void(0)" className="mart opo">
                  <i className="icon-pmart"></i>
                </Link>
              </div>
              <div className="tablemartbasket__colum">
                <div className="mart__point__items">
                  <Link href="#0box" className="point__box">
                    2.28
                  </Link>
                  <Link href="#0box" className="point__box">
                    6.50
                  </Link>
                </div>
              </div>
            </div>
            <div className="mart__point__items">
              <div className="martbas__pointlast">
                <div className="mart__point__left">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">Set 1</span>
                    <span>1.11</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">Set 1</span>
                    <span>5.25</span>
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
              <h6>Gas Sales Piacenza</h6>
              <span className="text">Top Volley Cisterna</span>
              <p>
                <Link href="URL:void(0)">Starting in</Link>
              </p>
            </div>
          </div>
          <div className="tablebasket__main__wrap">
            <div className="tablebasket__martpoin__wrap pr__40">
              <div className="mart__point__items">
                <Link href="URL:void(0)" className="twing twing__right">
                  <i className="icon-twer"></i>
                </Link>
                <Link href="URL:void(0)" className="mart opo">
                  <i className="icon-pmart"></i>
                </Link>
              </div>
              <div className="tablemartbasket__colum">
                <div className="mart__point__items">
                  <Link href="#0box" className="point__box">
                    1.19
                  </Link>
                  <Link href="#0box" className="point__box">
                    4.33
                  </Link>
                </div>
              </div>
            </div>
            <div className="mart__point__items">
              <div className="martbas__pointlast">
                <div className="mart__point__left">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">Set 1</span>
                    <span>2.10</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">Set 1</span>
                    <span>1.65</span>
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
              <h6>
                Jan Mecl Jr. <span>CZE</span>
              </h6>
              <span className="text">
                Martin Kowalik <span>CZE</span>
              </span>
              <p>
                <Link href="URL:void(0)">Tomorrow/ 01:30</Link>
              </p>
            </div>
          </div>
          <div className="tablebasket__main__wrap">
            <div className="tablebasket__martpoin__wrap pr__40">
              <div className="mart__point__items">
                <Link href="URL:void(0)" className="twing twing__right">
                  <i className="icon-twer"></i>
                </Link>
                <Link href="URL:void(0)" className="mart opo">
                  <i className="icon-pmart"></i>
                </Link>
              </div>
              <div className="tablemartbasket__colum">
                <div className="mart__point__items">
                  <Link href="#0box" className="point__box">
                    4.30
                  </Link>
                  <Link href="#0box" className="point__box">
                    1.57
                  </Link>
                </div>
              </div>
            </div>
            <div className="mart__point__items">
              <div className="martbas__pointlast">
                <div className="mart__point__left">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">Set 1</span>
                    <span>3.25</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">Set 1</span>
                    <span>2.10</span>
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
              <h6>
                Petr Oliver Korp <span>CZE</span>
              </h6>
              <span className="text">
                Jan Mecl Jr. <span>CZE</span>
              </span>
              <p>
                <Link href="URL:void(0)">Today / 23:00</Link>
              </p>
            </div>
          </div>
          <div className="tablebasket__main__wrap">
            <div className="tablebasket__martpoin__wrap pr__40">
              <div className="mart__point__items">
                <Link href="URL:void(0)" className="twing twing__right">
                  <i className="icon-twer"></i>
                </Link>
                <Link href="URL:void(0)" className="mart opo">
                  <i className="icon-pmart"></i>
                </Link>
              </div>
              <div className="tablemartbasket__colum">
                <div className="mart__point__items">
                  <Link href="#0box" className="point__box">
                    2.70
                  </Link>
                  <Link href="#0box" className="point__box">
                    3.50
                  </Link>
                </div>
              </div>
            </div>
            <div className="mart__point__items">
              <div className="martbas__pointlast">
                <div className="mart__point__left">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">Set 1</span>
                    <span>1.15</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">Set 1</span>
                    <span>1.87</span>
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
              <h6>
                Martin Kowalik <span>CZE</span>
              </h6>
              <span className="text">
                Jiri Louda <span>CZE</span>
              </span>
              <p>
                <Link href="URL:void(0)">06/12/2022 00:30</Link>
              </p>
            </div>
          </div>
          <div className="tablebasket__main__wrap">
            <div className="tablebasket__martpoin__wrap pr__40">
              <div className="mart__point__items">
                <Link href="URL:void(0)" className="twing twing__right">
                  <i className="icon-twer"></i>
                </Link>
                <Link href="URL:void(0)" className="mart opo">
                  <i className="icon-pmart"></i>
                </Link>
              </div>
              <div className="tablemartbasket__colum">
                <div className="mart__point__items">
                  <Link href="#0box" className="point__box">
                    1.70
                  </Link>
                  <Link href="#0box" className="point__box">
                    8.50
                  </Link>
                </div>
              </div>
            </div>
            <div className="mart__point__items">
              <div className="martbas__pointlast">
                <div className="mart__point__left">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">Set 1</span>
                    <span>2.65</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">Set 1</span>
                    <span>1.87</span>
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
              <h6>
                Tibor Kolenic <span>CZE</span>
              </h6>
              <span className="text">
                Pavel Kulhanek <span>CZE</span>
              </span>
              <p>
                <Link href="URL:void(0)">Today / 22:00</Link>
              </p>
            </div>
          </div>
          <div className="tablebasket__main__wrap">
            <div className="tablebasket__martpoin__wrap pr__40">
              <div className="mart__point__items">
                <Link href="URL:void(0)" className="twing twing__right">
                  <i className="icon-twer"></i>
                </Link>
                <Link href="URL:void(0)" className="mart opo">
                  <i className="icon-pmart"></i>
                </Link>
              </div>
              <div className="tablemartbasket__colum">
                <div className="mart__point__items">
                  <Link href="#0box" className="point__box">
                    5.01
                  </Link>
                  <Link href="#0box" className="point__box">
                    9.00
                  </Link>
                </div>
              </div>
            </div>
            <div className="mart__point__items">
              <div className="martbas__pointlast">
                <div className="mart__point__left">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">Set 1</span>
                    <span>1.36</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">Set 1</span>
                    <span>2.90</span>
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
              <h6>
                Jiri Louda <span>CZE</span>
              </h6>
              <span className="text">
                Jan Mecl Jr. <span>CZE</span>
              </span>
              <p>
                <Link href="URL:void(0)">Today / 22:00</Link>
              </p>
            </div>
          </div>
          <div className="tablebasket__main__wrap">
            <div className="tablebasket__martpoin__wrap pr__40">
              <div className="mart__point__items">
                <Link href="URL:void(0)" className="twing twing__right">
                  <i className="icon-twer"></i>
                </Link>
                <Link href="URL:void(0)" className="mart opo">
                  <i className="icon-pmart"></i>
                </Link>
              </div>
              <div className="tablemartbasket__colum">
                <div className="mart__point__items">
                  <Link href="#0box" className="point__box">
                    3.70
                  </Link>
                  <Link href="#0box" className="point__box">
                    1.60
                  </Link>
                </div>
              </div>
            </div>
            <div className="mart__point__items">
              <div className="martbas__pointlast">
                <div className="mart__point__left">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">Set 1</span>
                    <span>1.45</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">Set 1</span>
                    <span>2.55</span>
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
              <h6>
                Pavel Kulhanek <span>CZE</span>
              </h6>
              <span className="text">
                Radek Bartunek <span>CZE</span>
              </span>
              <p>
                <Link href="URL:void(0)">Today / 21:00</Link>
              </p>
            </div>
          </div>
          <div className="tablebasket__main__wrap">
            <div className="tablebasket__martpoin__wrap pr__40">
              <div className="mart__point__items">
                <Link href="URL:void(0)" className="twing twing__right">
                  <i className="icon-twer"></i>
                </Link>
                <Link href="URL:void(0)" className="mart opo">
                  <i className="icon-pmart"></i>
                </Link>
              </div>
              <div className="tablemartbasket__colum">
                <div className="mart__point__items">
                  <Link href="#0box" className="point__box">
                    5.50
                  </Link>
                  <Link href="#0box" className="point__box">
                    3.33
                  </Link>
                </div>
              </div>
            </div>
            <div className="mart__point__items">
              <div className="martbas__pointlast">
                <div className="mart__point__left">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">Set 1</span>
                    <span>1.15</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">Set 1</span>
                    <span>2.75</span>
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
            OPEN VOLLEYBALL LOBBY
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

export default TrendingTableTennisTab;
