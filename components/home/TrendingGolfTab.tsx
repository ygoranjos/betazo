import Link from "next/link";
import Select from "../select/Select";

const categoris = [
  { id: 2, name: "3-ball Match" },
  { id: 3, name: "4-ball Match" },
  { id: 4, name: "5-ball Match" },
  { id: 5, name: "6-ball Match" },
];

const categoris2 = [
  { id: 2, name: "3-ball Match" },
  { id: 3, name: "4-ball Match" },
  { id: 4, name: "5-ball Match" },
  { id: 5, name: "6-ball Match" },
];

const TrendingGolfTab = () => {
  return (
    <>
      <div className="section__head b__bottom">
        <div className="left__head">
          <span className="icons">
            <i className="icon-golf"></i>
          </span>
          <span>Golf</span>
        </div>
        <div className="right__catagoris">
          <div className="right__cate__items">
            {/* Select */}
            <Select data={categoris} />
          </div>
          <div className="right__cate__items">
            {/* Select */}
            <Select data={categoris} />
          </div>
        </div>
      </div>
      <div className="heght__table__points">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>1</span>
        <span>2</span>
      </div>
      <div className="table__wrap">
        <div className="table__items b__bottom">
          <div className="t__items">
            <div className="t__items__left">
              <h6>To win a Major in 2023</h6>
              <p>
                <Link href="URL:void(0)">23/07/2023 22:00</Link>
              </p>
            </div>
          </div>
          <div className="tablebasket__main__wrap">
            <div className="mart__point__items">
              <div className="martbas__pointlast">
                <div className="mart__point__left">
                  <Link
                    href="URL:void(0)"
                    className="point__box aroow__text bg__none"
                  >
                    <span>Bet now</span>
                    <span className="icons">
                      <i className="fas fa-chevron-right"></i>
                    </span>
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
              <h6 className="p__max">
                Rory McIlroy major championship wins in 2023 (bets void if he
                does not play in all...
              </h6>
              <p>
                <Link href="URL:void(0)">23/07/2023 22:00</Link>
              </p>
            </div>
          </div>
          <div className="tablebasket__main__wrap">
            <div className="mart__point__items">
              <div className="martbas__pointlast">
                <div className="mart__point__left">
                  <Link
                    href="URL:void(0)"
                    className="point__box aroow__text bg__none"
                  >
                    <span>Bet now</span>
                    <span className="icons">
                      <i className="fas fa-chevron-right"></i>
                    </span>
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
              <h6>The Match VII</h6>
              <p>
                <Link href="URL:void(0)">23/07/2023 22:00</Link>
              </p>
            </div>
          </div>
          <div className="tablebasket__main__wrap">
            <div className="mart__point__items">
              <div className="martbas__pointlast">
                <div className="mart__point__left">
                  <Link
                    href="URL:void(0)"
                    className="point__box aroow__text bg__none"
                  >
                    <span>Bet now</span>
                    <span className="icons">
                      <i className="fas fa-chevron-right"></i>
                    </span>
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
            OPEN GOLF LOBBY
          </Link>
          <Link href="URL:void(0)" className="footerpoing">
            <span>4</span>
            <span>
              <i className="fas fa-angle-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TrendingGolfTab;
