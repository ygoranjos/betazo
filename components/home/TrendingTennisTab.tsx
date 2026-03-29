import Link from "next/link";
import Select from "../select/Select";

const categoris = [
  { id: 1, name: "2way - Who will win?" },
  { id: 2, name: "3way - Who will win?" },
  { id: 3, name: "4way - Who will win?" },
  { id: 4, name: "5way - Who will win?" },
];
const categoris2 = [
  { id: 1, name: "Who will win the set?" },
  { id: 2, name: "...." },
  { id: 3, name: "...." },
  { id: 4, name: "...." },
];
const categoris3 = [
  { id: 1, name: "Game Winner" },
  { id: 2, name: "...." },
  { id: 3, name: "...." },
  { id: 4, name: "...." },
];

const TrendingTennisTab = () => {
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
      <div className="heght__table__points">
        <span>1</span>
        <span>2</span>
        <span>1</span>
        <span>2</span>
        <span>1</span>
        <span>2</span>
      </div>
      <div className="table__wrap">
        <div className="table__items b__bottom">
          <div className="t__items">
            <div className="t__items__left">
              <h6>
                Alycia Parks <span>USA</span>
              </h6>
              <span className="text">
                Cristina Bucsa <span>ESP</span>
              </span>
            </div>
          </div>
          <div className="tableright__tennis">
            <div className="mart__point__items">
              <Link href="URL:void(0)" className="twing twing__right">
                <i className="icon-twer"></i>
              </Link>
              <Link href="URL:void(0)" className="mart opo">
                <i className="icon-pmart"></i>
              </Link>
              <Link href="#0box" className="point__box">
                1.75
              </Link>
              <Link href="#0box" className="point__box">
                2.05
              </Link>
            </div>
            <div className="mart__point__items pl__40">
              <Link href="#0box" className="point__box">
                1.75
              </Link>
              <Link href="#0box" className="point__box">
                2.05
              </Link>
            </div>
            <div className="mart__point__two pl__40">
              <div className="mart__point__right">
                <Link href="URL:void(0)" className="point__box bg__none">
                  <i className="icon-lock"></i>
                </Link>
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
              <h6>
                Rebecca Peterson <span>SWE</span>
              </h6>
              <span className="text">
                Ana Konjuh <span>CRO</span>
              </span>
              <p>
                <Link href="URL:void(0)">Today / 21:00</Link>
              </p>
            </div>
          </div>
          <div className="tableright__tennis">
            <div className="mart__point__items">
              <Link href="URL:void(0)" className="twing twing__right">
                <i className="icon-twer"></i>
              </Link>
              <Link href="URL:void(0)" className="mart opo">
                <i className="icon-pmart"></i>
              </Link>
              <Link href="#0box" className="point__box">
                1.75
              </Link>
              <Link href="#0box" className="point__box">
                8.50
              </Link>
            </div>
            <div className="mart__point__items pl__40">
              <Link href="#0box" className="point__box">
                1.75
              </Link>
              <Link href="#0box" className="point__box">
                1.95
              </Link>
            </div>
            <div className="mart__point__two pl__40">
              <div className="mart__point__right">
                <Link href="URL:void(0)" className="point__box bg__none">
                  <i className="icon-lock"></i>
                </Link>
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
              <h6>
                Nick Hardt <span>DOM</span>
              </h6>
              <span className="text">
                Victor Lilov <span>USA</span>
              </span>
              <p>
                <Link href="URL:void(0)">Today / 21:00</Link>
              </p>
            </div>
          </div>
          <div className="tableright__tennis">
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
            <div className="mart__point__items pl__40">
              <Link
                href="#0box"
                className="point__box icon__lock__box bg__none"
              >
                <i className="icon-lock lock"></i>
              </Link>
            </div>
            <div className="mart__point__two pl__40">
              <div className="mart__point__right">
                <Link href="URL:void(0)" className="point__box bg__none">
                  <i className="icon-lock"></i>
                </Link>
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
              <h6>
                Rebecca Peterson <span>SWE</span>
              </h6>
              <span className="text">
                Alycia Parks <span>USA</span>
              </span>
              <p>
                <Link href="URL:void(0)">Today / 21:00</Link>
              </p>
            </div>
          </div>
          <div className="tableright__tennis">
            <div className="mart__point__items">
              <Link href="URL:void(0)" className="twing twing__right">
                <i className="icon-twer"></i>
              </Link>
              <Link href="URL:void(0)" className="mart opo">
                <i className="icon-pmart"></i>
              </Link>
              <Link href="#0box" className="point__box">
                6.56
              </Link>
              <Link href="#0box" className="point__box">
                7.55
              </Link>
            </div>
            <div className="mart__point__items pl__40">
              <Link
                href="#0box"
                className="point__box icon__lock__box bg__none"
              >
                <i className="icon-lock lock"></i>
              </Link>
            </div>
            <div className="mart__point__two pl__40">
              <div className="mart__point__right">
                <Link href="URL:void(0)" className="point__box bg__none">
                  <i className="icon-lock"></i>
                </Link>
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
              <h6>
                Ana Konjuh <span>CRO</span>
              </h6>
              <span className="text">
                Nick Hardt <span>DOM</span>
              </span>
              <p>
                <Link href="URL:void(0)">Today / 21:00</Link>
              </p>
            </div>
          </div>
          <div className="tableright__tennis">
            <div className="mart__point__items">
              <Link href="URL:void(0)" className="twing twing__right">
                <i className="icon-twer"></i>
              </Link>
              <Link href="URL:void(0)" className="mart opo">
                <i className="icon-pmart"></i>
              </Link>
              <Link href="#0box" className="point__box">
                8.66
              </Link>
              <Link href="#0box" className="point__box">
                5.11
              </Link>
            </div>
            <div className="mart__point__items pl__40">
              <Link
                href="#0box"
                className="point__box icon__lock__box bg__none"
              >
                <i className="icon-lock lock"></i>
              </Link>
            </div>
            <div className="mart__point__two pl__40">
              <div className="mart__point__right">
                <Link href="URL:void(0)" className="point__box bg__none">
                  <i className="icon-lock"></i>
                </Link>
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
              <h6>
                Bu Yunchaokete <span>CHN</span>
              </h6>
              <span className="text">
                Mark Lajal <span>EST</span>
              </span>
              <p>
                <Link href="URL:void(0)">Today / 21:00</Link>
              </p>
            </div>
          </div>
          <div className="tableright__tennis">
            <div className="mart__point__items">
              <Link href="URL:void(0)" className="twing twing__right">
                <i className="icon-twer"></i>
              </Link>
              <Link href="URL:void(0)" className="mart opo">
                <i className="icon-pmart"></i>
              </Link>
              <Link href="#0box" className="point__box">
                5.66
              </Link>
              <Link href="#0box" className="point__box">
                2.11
              </Link>
            </div>
            <div className="mart__point__items pl__40">
              <Link
                href="#0box"
                className="point__box icon__lock__box bg__none"
              >
                <i className="icon-lock lock"></i>
              </Link>
            </div>
            <div className="mart__point__two pl__40">
              <div className="mart__point__right">
                <Link href="URL:void(0)" className="point__box bg__none">
                  <i className="icon-lock"></i>
                </Link>
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
              <h6>
                Alexis Gautier <span>FRA</span>
              </h6>
              <span className="text">
                Dino Prizmic <span>CRO</span>
              </span>
              <p>
                <Link href="URL:void(0)">Today / 21:00</Link>
              </p>
            </div>
          </div>
          <div className="tableright__tennis">
            <div className="mart__point__items">
              <Link href="URL:void(0)" className="twing twing__right">
                <i className="icon-twer"></i>
              </Link>
              <Link href="URL:void(0)" className="mart opo">
                <i className="icon-pmart"></i>
              </Link>
              <Link href="#0box" className="point__box">
                4.06
              </Link>
              <Link href="#0box" className="point__box">
                3.01
              </Link>
            </div>
            <div className="mart__point__items pl__40">
              <Link
                href="#0box"
                className="point__box icon__lock__box bg__none"
              >
                <i className="icon-lock lock"></i>
              </Link>
            </div>
            <div className="mart__point__two pl__40">
              <div className="mart__point__right">
                <Link href="URL:void(0)" className="point__box bg__none">
                  <i className="icon-lock"></i>
                </Link>
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
              <h6>
                Cristina Dinu <span>CZE</span>
              </h6>
              <span className="text">
                Daniel Rincon <span>ESP</span>
              </span>
              <p>
                <Link href="URL:void(0)">Today / 21:00</Link>
              </p>
            </div>
          </div>
          <div className="tableright__tennis">
            <div className="mart__point__items">
              <Link href="URL:void(0)" className="twing twing__right">
                <i className="icon-twer"></i>
              </Link>
              <Link href="URL:void(0)" className="mart opo">
                <i className="icon-pmart"></i>
              </Link>
              <Link href="#0box" className="point__box">
                3.55
              </Link>
              <Link href="#0box" className="point__box">
                2.36
              </Link>
            </div>
            <div className="mart__point__items pl__40">
              <Link
                href="#0box"
                className="point__box icon__lock__box bg__none"
              >
                <i className="icon-lock lock"></i>
              </Link>
            </div>
            <div className="mart__point__two pl__40">
              <div className="mart__point__right">
                <Link href="URL:void(0)" className="point__box bg__none">
                  <i className="icon-lock"></i>
                </Link>
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
              <h6>
                Mark Lajal <span>EST</span>
              </h6>
              <span className="text">
                Ana Konjuh <span>CRO</span>
              </span>
              <p>
                <Link href="URL:void(0)">Today / 21:00</Link>
              </p>
            </div>
          </div>
          <div className="tableright__tennis">
            <div className="mart__point__items">
              <Link href="URL:void(0)" className="twing twing__right">
                <i className="icon-twer"></i>
              </Link>
              <Link href="URL:void(0)" className="mart opo">
                <i className="icon-pmart"></i>
              </Link>
              <Link href="#0box" className="point__box">
                6.33
              </Link>
              <Link href="#0box" className="point__box">
                4.55
              </Link>
            </div>
            <div className="mart__point__items pl__40">
              <Link
                href="#0box"
                className="point__box icon__lock__box bg__none"
              >
                <i className="icon-lock lock"></i>
              </Link>
            </div>
            <div className="mart__point__two pl__40">
              <div className="mart__point__right">
                <Link href="URL:void(0)" className="point__box bg__none">
                  <i className="icon-lock"></i>
                </Link>
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
              <h6>
                Lucija Ciric Bagaric <span>CRO</span>
              </h6>
              <span className="text">
                Ana Konjuh <span>CRO</span>
              </span>
              <p>
                <Link href="URL:void(0)">Today / 21:00</Link>
              </p>
            </div>
          </div>
          <div className="tableright__tennis">
            <div className="mart__point__items">
              <Link href="URL:void(0)" className="twing twing__right">
                <i className="icon-twer"></i>
              </Link>
              <Link href="URL:void(0)" className="mart opo">
                <i className="icon-pmart"></i>
              </Link>
              <Link href="#0box" className="point__box">
                1.22
              </Link>
              <Link href="#0box" className="point__box">
                3.22
              </Link>
            </div>
            <div className="mart__point__items pl__40">
              <Link
                href="#0box"
                className="point__box icon__lock__box bg__none"
              >
                <i className="icon-lock lock"></i>
              </Link>
            </div>
            <div className="mart__point__two pl__40">
              <div className="mart__point__right">
                <Link href="URL:void(0)" className="point__box bg__none">
                  <i className="icon-lock"></i>
                </Link>
                <Link href="URL:void(0)" className="point__box bg__none">
                  <i className="icon-star star"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="table__footer">
          <Link href="URL:void(0)" className="lobby text__opa">
            Open Tennis lobby
          </Link>
          <Link href="URL:void(0)" className="footerpoing">
            <span>50</span>
            <span>
              <i className="fas fa-angle-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TrendingTennisTab;
