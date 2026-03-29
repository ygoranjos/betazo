import Link from "next/link";
import FooterHome from "../footer/FooterHome";
import Select from "../select/Select";

const categoris = [
  { id: 1, name: "Game Lines" },
  { id: 2, name: "Game Lines 2" },
  { id: 3, name: "Game Lines 3" },
  { id: 4, name: "Game Lines 4" },
];

const BaseballTab = () => {
  return (
    <div
      className="tab-pane mt__30 text-white fade"
      id="mainTab10"
      role="tabpanel"
      tabIndex="0"
    >
      {/* main body */}
      <div className="main__body__wrap left__right__space pb-60">
        <div className="live__heightlight">
          <div className="height__table">
            <div className="main__table treanding__table main__basketballtable">
              <div className="section__head b__bottom">
                <div className="left__head">
                  <span className="icons">
                    <i className="icon-golf"></i>
                  </span>
                  <span>Beach Volleyball</span>
                </div>
                <div className="right__catagoris">
                  <div className="right__cate__items">
                    {/* select */}
                    <Select data={categoris} />
                  </div>
                </div>
              </div>
              <div className="heght__table__points">
                <span>Run Spread</span>
                <span>Total</span>
                <span>Money Lines</span>
              </div>
              <div className="table__wrap">
                <div className="table__items b__bottom">
                  <div className="t__items">
                    <div className="t__items__left">
                      <h6 className="text__opa">
                        2023 World Baseball Classic - Futures
                      </h6>
                      <p>
                        <Link href="URL:void(0)">20/03/2023 05:00</Link>
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
                            <span className="text__opa">Bet now</span>
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
                <div className="table__items">
                  <div className="t__items">
                    <div className="t__items__left">
                      <h6 className="text__opa">2023 MLB - Futures</h6>
                      <p>
                        <Link href="URL:void(0)">20/03/2023 05:00</Link>
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
                            <span className="text__opa">Bet now</span>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* main body */}

      {/* Footer Start */}
      <FooterHome />
      {/* Footer End */}
    </div>
  );
};

export default BaseballTab;
