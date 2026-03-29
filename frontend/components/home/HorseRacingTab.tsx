import Link from "next/link";
import FooterHome from "../footer/FooterHome";
import HorseSlider from "../sliders/HorseSlider";

const HorseRacingTab = () => {
  return (
    <div
      className="tab-pane mt__30 text-white fade"
      id="mainTab11"
      role="tabpanel"
      tabIndex="0"
    >
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-xl-8 col-lg-8">
            <div className="racing__tab">
              <nav>
                <div className="nav nav-tabs" id="nav-tabo" role="tablist">
                  {/* Today Btn */}
                  <button
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#horsein1"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    Today
                  </button>

                  {/* Tomorrow Btn */}
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#horsein2"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Tomorrow
                  </button>

                  {/* Future & Btn */}
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#horsein3"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Future & Specials
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {/* Horse Slider */}
        <HorseSlider />
      </div>
      {/* Main Body */}
      <div className="main__body__wrap left__space pb-60">
        <div className="horse__racing__wrap">
          <div className="tab-content" id="nav-tabContenttoday">
            {/* Today */}
            <div
              className="tab-pane fade show active"
              id="horsein1"
              role="tabpanel"
              aria-labelledby="horsein1"
              tabIndex="0"
            >
              <div className="horse__chart__wrap">
                <h4 className="head__horse">United Kingdom & Ireland</h4>
                <div className="horse__chart__items">
                  <h5>Lingfield</h5>
                  <div className="chart__point__wrap">
                    <Link href="URL:void(0)">
                      <span>17:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>17:30</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>18:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>18:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>12:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>11:20</span>
                      <span className="ptext">p</span>
                    </Link>
                  </div>
                </div>
                <div className="horse__chart__items">
                  <h5>Hexham</h5>
                  <div className="chart__point__wrap">
                    <Link href="URL:void(0)">
                      <span>17:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>17:30</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>18:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>18:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>12:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>11:20</span>
                      <span className="ptext">p</span>
                    </Link>
                  </div>
                </div>
                <div className="horse__chart__items">
                  <h5>Kempton</h5>
                  <div className="chart__point__wrap">
                    <Link href="URL:void(0)">
                      <span>17:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>17:30</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>18:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>18:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>12:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>11:20</span>
                      <span className="ptext">p</span>
                    </Link>
                  </div>
                </div>
                <div className="horse__chart__items">
                  <h5>Leicester</h5>
                  <div className="chart__point__wrap">
                    <Link href="URL:void(0)">
                      <span>17:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>17:30</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>18:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>18:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>12:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>11:20</span>
                      <span className="ptext">p</span>
                    </Link>
                  </div>
                </div>
                <div className="horse__chart__items">
                  <h5>Dundalk</h5>
                  <div className="chart__point__wrap">
                    <Link href="URL:void(0)">
                      <span>17:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>17:30</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>18:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>18:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>12:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>11:20</span>
                      <span className="ptext">p</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="horse__chart__wrap mt__30">
                <h4 className="head__horse">France</h4>
                <div className="horse__chart__items">
                  <h5>Pau</h5>
                  <div className="chart__point__wrap">
                    <Link href="URL:void(0)">
                      <span>17:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>17:30</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>18:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>18:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>12:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>11:20</span>
                      <span className="ptext">p</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="horse__chart__wrap mt__30">
                <h4 className="head__horse">USA</h4>
                <div className="horse__chart__items">
                  <h5>Mountaineer</h5>
                  <div className="chart__point__wrap">
                    <Link href="URL:void(0)">
                      <span>1:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>7:30</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>8:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>9:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>2:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>11:20</span>
                      <span className="ptext">p</span>
                    </Link>
                  </div>
                </div>
                <div className="horse__chart__items">
                  <h5>Gulfstream</h5>
                  <div className="chart__point__wrap">
                    <Link href="URL:void(0)">
                      <span>11:20</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>17:30</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>18:20</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>19:20</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>11:20</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>11:20</span>
                    </Link>
                  </div>
                </div>
                <div className="horse__chart__items">
                  <h5>Tampa Bay Downs</h5>
                  <div className="chart__point__wrap">
                    <Link href="URL:void(0)">
                      <span>11:20</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>17:30</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>18:20</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>19:20</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>11:20</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>11:20</span>
                    </Link>
                  </div>
                </div>
                <div className="horse__chart__items">
                  <h5>Turf Paradise</h5>
                  <div className="chart__point__wrap">
                    <Link href="URL:void(0)">
                      <span>11:20</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>17:30</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>18:20</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>19:20</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>11:20</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>11:20</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="horse__chart__wrap mt__30">
                <h4 className="head__horse">France</h4>
                <div className="horse__chart__items">
                  <h5>Kenilworth</h5>
                  <div className="chart__point__wrap">
                    <Link href="URL:void(0)">
                      <span>17:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>17:30</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>18:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>18:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>12:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>11:20</span>
                      <span className="ptext">p</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Tomorrow */}
            <div
              className="tab-pane fade"
              id="horsein2"
              role="tabpanel"
              aria-labelledby="horsein2"
              tabIndex="0"
            >
              <div className="horse__chart__wrap">
                <h4 className="head__horse">France</h4>
                <div className="horse__chart__items">
                  <h5>Pau</h5>
                  <div className="chart__point__wrap">
                    <Link href="URL:void(0)">
                      <span>17:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>17:30</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>18:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>18:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>12:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>11:20</span>
                      <span className="ptext">p</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="horse__chart__wrap mt__30">
                <h4 className="head__horse">USA</h4>
                <div className="horse__chart__items">
                  <h5>Mountaineer</h5>
                  <div className="chart__point__wrap">
                    <Link href="URL:void(0)">
                      <span>1:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>7:30</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>8:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>9:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>2:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>11:20</span>
                      <span className="ptext">p</span>
                    </Link>
                  </div>
                </div>
                <div className="horse__chart__items">
                  <h5>Gulfstream</h5>
                  <div className="chart__point__wrap">
                    <Link href="URL:void(0)">
                      <span>11:20</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>17:30</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>18:20</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>19:20</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>11:20</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>11:20</span>
                    </Link>
                  </div>
                </div>
                <div className="horse__chart__items">
                  <h5>Tampa Bay Downs</h5>
                  <div className="chart__point__wrap">
                    <Link href="URL:void(0)">
                      <span>11:20</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>17:30</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>18:20</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>19:20</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>11:20</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>11:20</span>
                    </Link>
                  </div>
                </div>
                <div className="horse__chart__items">
                  <h5>Turf Paradise</h5>
                  <div className="chart__point__wrap">
                    <Link href="URL:void(0)">
                      <span>11:20</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>17:30</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>18:20</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>19:20</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>11:20</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>11:20</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="horse__chart__wrap mt__30">
                <h4 className="head__horse">France</h4>
                <div className="horse__chart__items">
                  <h5>Kenilworth</h5>
                  <div className="chart__point__wrap">
                    <Link href="URL:void(0)">
                      <span>17:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>17:30</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>18:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>18:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>12:20</span>
                      <span className="ptext">p</span>
                    </Link>
                    <Link href="URL:void(0)">
                      <span>11:20</span>
                      <span className="ptext">p</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* special */}
            <div
              className="tab-pane fade"
              id="horsein3"
              role="tabpanel"
              aria-labelledby="horsein3"
              tabIndex="0"
            >
              <div className="horse__chart__wrap">
                <h4 className="head__horse">Planing Step One</h4>
                <div className="horse__chart__items">
                  <h5>Ante Post Flat Racing</h5>
                  <div className="racing__list">
                    <Link href="URL:void(0)">1000 Guineeas</Link>
                    <Link href="URL:void(0)">Derby</Link>
                    <Link href="URL:void(0)">200 Guineeas</Link>
                    <Link href="URL:void(0)">500 Guineeas</Link>
                    <Link href="URL:void(0)">Planing</Link>
                    <Link href="URL:void(0)">Grand National</Link>
                  </div>
                </div>
              </div>
              <div className="horse__chart__wrap mt__30">
                <h4 className="head__horse">Planing Step Two</h4>
                <div className="horse__chart__items">
                  <h5>Cheltenham Festival</h5>
                  <div className="racing__list">
                    <Link href="URL:void(0)">Stayers Hurdle</Link>
                    <Link href="URL:void(0)">Derby</Link>
                    <Link href="URL:void(0)">200 Guineeas</Link>
                    <Link href="URL:void(0)">500 Guineeas</Link>
                    <Link href="URL:void(0)">Planing</Link>
                    <Link href="URL:void(0)">Grand National</Link>
                  </div>
                </div>
              </div>
              <div className="horse__chart__wrap mt__30">
                <h4 className="head__horse">Planing Step Three</h4>
                <div className="horse__chart__items">
                  <h5>Anitree Grand Festival</h5>
                  <div className="racing__list">
                    <Link href="URL:void(0)">Champion Durdle</Link>
                    <Link href="URL:void(0)">Chanllenge Trophy</Link>
                    <Link href="URL:void(0)">Leage Match</Link>
                    <Link href="URL:void(0)">500 Guineeas</Link>
                    <Link href="URL:void(0)">Planing pint</Link>
                    <Link href="URL:void(0)">Grand National</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Body */}

      {/* Footer Start */}
      <FooterHome />
      {/* Footer End */}
    </div>
  );
};

export default HorseRacingTab;
