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

const TrendingVollyballTab = () => {
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
              <h6>ZAKSA Kedzierzyn-Kozle</h6>
              <span className="text">Cerrad Czarni Radom</span>
              <p>
                <Link href="URL:void(0)">Today / 19:45</Link>
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
                    1.04
                  </Link>
                  <Link href="#0box" className="point__box">
                    1.26
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
              <h6>Sao Paulo Barueri VC</h6>
              <span className="text">Unilife Maringa</span>
              <p>
                <Link href="URL:void(0)">Tomorrow / 02:00</Link>
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
                    1.28
                  </Link>
                  <Link href="#0box" className="point__box">
                    9.50
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
                <Link href="URL:void(0)">Tomorrow / 02:00</Link>
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
              <h6>Verona</h6>
              <span className="text">Volley Siena</span>
              <p>
                <Link href="URL:void(0)">Tomorrow / 02:00</Link>
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
                    2.30
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
              <h6>Vero Volley Monza</h6>
              <span className="text">Modena Volley</span>
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
              <h6>Volley Bergamo</h6>
              <span className="text">ASD Pallavolo Pinerolo</span>
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
                    1.15
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
                    <span>3.65</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">Set 1</span>
                    <span>2.35</span>
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
              <h6>Volley Milano</h6>
              <span className="text">Volley Civitanova</span>
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
                    2.70
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
                    <span>1.87</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">Set 1</span>
                    <span>2.65</span>
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
              <h6>ZAKSA Kedzierzyn-Kozle</h6>
              <span className="text">Cerrad Czarni Radom</span>
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
                    1.01
                  </Link>
                  <Link href="#0box" className="point__box">
                    10.00
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
              <h6>Unet E-Work Busto Arsizio</h6>
              <span className="text">Helvia Recina Macerata</span>
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
                    2.70
                  </Link>
                  <Link href="#0box" className="point__box">
                    160
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
              <h6>Reale Mutua Fenera Chieri</h6>
              <span className="text">Volley Vallefoglia</span>
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
                    4.50
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
        <div className="table__items b__bottom">
          <div className="t__items">
            <div className="t__items__left">
              <h6>Cuneo Granda Volley</h6>
              <span className="text">Vero Volley Milano</span>
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
                    6.03
                  </Link>
                  <Link href="#0box" className="point__box">
                    2.35
                  </Link>
                </div>
              </div>
            </div>
            <div className="mart__point__items">
              <div className="martbas__pointlast">
                <div className="mart__point__left">
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">Set 1</span>
                    <span>2.35</span>
                  </Link>
                  <Link href="URL:void(0)" className="point__box">
                    <span className="spoint">Set 1</span>
                    <span>3.87</span>
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
            <span>100</span>
            <span>
              <i className="fas fa-angle-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TrendingVollyballTab;
