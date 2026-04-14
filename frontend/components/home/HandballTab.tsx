import Link from "next/link";
import FooterHome from "../footer/FooterHome";
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

const HandballTab = () => {
  return (
    <div
      className="tab-pane mt__30 text-white fade"
      id="mainTab8"
      role="tabpanel"
      tabIndex="0"
    >
      {/* Main Body */}
      <div className="main__body__wrap left__right__space pb-60">
        <div className="live__heightlight">
          <div className="height__table">
            <div className="main__table treanding__table">
              <div className="section__head b__bottom">
                <div className="left__head">
                  <span className="icons">
                    <i className="icon-handball"></i>
                  </span>
                  <span>Handball</span>
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
                <div className="table__items b__bottom">
                  <div className="t__items">
                    <div className="t__items__left">
                      <h6>Ferencvarosi TC</h6>
                      <span className="text">Valur Reykjavik</span>
                      <p>
                        <Link href="URL:void(0)">Today / 23:45</Link>
                      </p>
                    </div>
                  </div>
                  <div className="mart__point__items">
                    <Link href="#0box" className="point__box">
                      <span className="smallt">-2,5</span>
                      <span>1.15</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span className="smallt">+2,5</span>
                      <span>1.87</span>
                    </Link>
                  </div>
                  <div className="mart__point__items">
                    <Link href="#0box" className="point__box">
                      <span>1.48</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span>10.50</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span>3.25</span>
                    </Link>
                  </div>
                  <div className="cart__point cart__point__two">67,5</div>
                  <div className="mart__point__two">
                    <div className="mart__point__right">
                      <Link href="URL:void(0)" className="point__box">
                        1.87
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        1.80
                      </Link>
                      <Link
                        href="URL:void(0)"
                        className="point__box bg__none spacing__initial"
                      >
                        <i className="icon-star star"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="table__items b__bottom">
                  <div className="t__items">
                    <div className="t__items__left">
                      <h6>Fuchse Berlin</h6>
                      <span className="text">Skanderborg Aarhus</span>
                      <p>
                        <Link href="URL:void(0)">Today / 23:45</Link>
                      </p>
                    </div>
                  </div>
                  <div className="mart__point__items">
                    <Link href="#0box" className="point__box">
                      <span className="smallt">-3,5</span>
                      <span>2.15</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span className="smallt">+3,5</span>
                      <span>2.87</span>
                    </Link>
                  </div>
                  <div className="mart__point__items">
                    <Link href="#0box" className="point__box">
                      <span>2.48</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span>20.50</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span>2.25</span>
                    </Link>
                  </div>
                  <div className="cart__point cart__point__two">67,5</div>
                  <div className="mart__point__two">
                    <div className="mart__point__right">
                      <Link href="URL:void(0)" className="point__box">
                        1.87
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        1.80
                      </Link>
                      <Link
                        href="URL:void(0)"
                        className="point__box bg__none spacing__initial"
                      >
                        <i className="icon-star star"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="table__items b__bottom">
                  <div className="t__items">
                    <div className="t__items__left">
                      <h6>Pauc Handball</h6>
                      <span className="text">Ystads IF</span>
                      <p>
                        <Link href="URL:void(0)">Today / 23:45</Link>
                      </p>
                    </div>
                  </div>
                  <div className="mart__point__items">
                    <Link href="#0box" className="point__box">
                      <span className="smallt">-3,5</span>
                      <span>3.15</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span className="smallt">+3,5</span>
                      <span>3.87</span>
                    </Link>
                  </div>
                  <div className="mart__point__items">
                    <Link href="#0box" className="point__box">
                      <span>3.48</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span>30.50</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span>3.25</span>
                    </Link>
                  </div>
                  <div className="cart__point cart__point__two">67,5</div>
                  <div className="mart__point__two">
                    <div className="mart__point__right">
                      <Link href="URL:void(0)" className="point__box">
                        31.87
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        31.80
                      </Link>
                      <Link
                        href="URL:void(0)"
                        className="point__box bg__none spacing__initial"
                      >
                        <i className="icon-star star"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="table__items b__bottom">
                  <div className="t__items">
                    <div className="t__items__left">
                      <h6>RK Nexe</h6>
                      <span className="text">Fraikin BM. Granollers</span>
                      <p>
                        <Link href="URL:void(0)">Today / 23:45</Link>
                      </p>
                    </div>
                  </div>
                  <div className="mart__point__items">
                    <Link href="#0box" className="point__box">
                      <span className="smallt">-4,5</span>
                      <span>4.15</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span className="smallt">+4,5</span>
                      <span>4.87</span>
                    </Link>
                  </div>
                  <div className="mart__point__items">
                    <Link href="#0box" className="point__box">
                      <span>5.48</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span>2.50</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span>7.25</span>
                    </Link>
                  </div>
                  <div className="cart__point cart__point__two">67,5</div>
                  <div className="mart__point__two">
                    <div className="mart__point__right">
                      <Link href="URL:void(0)" className="point__box">
                        5.87
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        8.80
                      </Link>
                      <Link
                        href="URL:void(0)"
                        className="point__box bg__none spacing__initial"
                      >
                        <i className="icon-star star"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="table__items b__bottom">
                  <div className="t__items">
                    <div className="t__items__left">
                      <h6>HC Midtjylland</h6>
                      <span className="text">Mors-Thy Handbold</span>
                      <p>
                        <Link href="URL:void(0)">Today / 23:45</Link>
                      </p>
                    </div>
                  </div>
                  <div className="mart__point__items">
                    <Link href="#0box" className="point__box">
                      <span className="smallt">-1,5</span>
                      <span>1.15</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span className="smallt">+1,5</span>
                      <span>1.87</span>
                    </Link>
                  </div>
                  <div className="mart__point__items">
                    <Link href="#0box" className="point__box">
                      <span>6.48</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span>6.50</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span>6.25</span>
                    </Link>
                  </div>
                  <div className="cart__point cart__point__two">67,5</div>
                  <div className="mart__point__two">
                    <div className="mart__point__right">
                      <Link href="URL:void(0)" className="point__box">
                        7.87
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        7.80
                      </Link>
                      <Link
                        href="URL:void(0)"
                        className="point__box bg__none spacing__initial"
                      >
                        <i className="icon-star star"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="table__items b__bottom">
                  <div className="t__items">
                    <div className="t__items__left">
                      <h6>Aguas Santas</h6>
                      <span className="text">HC Motor Zaporozhye</span>
                      <p>
                        <Link href="URL:void(0)">Today / 23:45</Link>
                      </p>
                    </div>
                  </div>
                  <div className="mart__point__items">
                    <Link href="#0box" className="point__box">
                      <span className="smallt">-1,5</span>
                      <span>1.15</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span className="smallt">+1,5</span>
                      <span>1.87</span>
                    </Link>
                  </div>
                  <div className="mart__point__items">
                    <Link href="#0box" className="point__box">
                      <span>6.48</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span>6.50</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span>6.25</span>
                    </Link>
                  </div>
                  <div className="cart__point cart__point__two">67,5</div>
                  <div className="mart__point__two">
                    <div className="mart__point__right">
                      <Link href="URL:void(0)" className="point__box">
                        7.87
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        7.80
                      </Link>
                      <Link
                        href="URL:void(0)"
                        className="point__box bg__none spacing__initial"
                      >
                        <i className="icon-star star"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="table__items b__bottom">
                  <div className="t__items">
                    <div className="t__items__left">
                      <h6>Tomorrow/ 01:45</h6>
                      <span className="text">Balatonfuredi KC</span>
                      <p>
                        <Link href="URL:void(0)">Tomorrow / 01:45</Link>
                      </p>
                    </div>
                  </div>
                  <div className="mart__point__items">
                    <Link href="#0box" className="point__box">
                      <span className="smallt">-1,5</span>
                      <span>1.15</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span className="smallt">+1,5</span>
                      <span>1.87</span>
                    </Link>
                  </div>
                  <div className="mart__point__items">
                    <Link href="#0box" className="point__box">
                      <span>6.48</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span>6.50</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span>6.25</span>
                    </Link>
                  </div>
                  <div className="cart__point cart__point__two">67,5</div>
                  <div className="mart__point__two">
                    <div className="mart__point__right">
                      <Link href="URL:void(0)" className="point__box">
                        7.87
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        7.80
                      </Link>
                      <Link
                        href="URL:void(0)"
                        className="point__box bg__none spacing__initial"
                      >
                        <i className="icon-star star"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="table__items b__bottom">
                  <div className="t__items">
                    <div className="t__items__left">
                      <h6>BM. Benidorm</h6>
                      <span className="text">SG Flensburg-Handewitt</span>
                      <p>
                        <Link href="URL:void(0)">Tomorrow / 01:45</Link>
                      </p>
                    </div>
                  </div>
                  <div className="mart__point__items">
                    <Link href="#0box" className="point__box">
                      <span className="smallt">-1,5</span>
                      <span>1.15</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span className="smallt">+1,5</span>
                      <span>1.87</span>
                    </Link>
                  </div>
                  <div className="mart__point__items">
                    <Link href="#0box" className="point__box">
                      <span>6.48</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span>6.50</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span>6.25</span>
                    </Link>
                  </div>
                  <div className="cart__point cart__point__two">67,5</div>
                  <div className="mart__point__two">
                    <div className="mart__point__right">
                      <Link href="URL:void(0)" className="point__box">
                        7.87
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        7.80
                      </Link>
                      <Link
                        href="URL:void(0)"
                        className="point__box bg__none spacing__initial"
                      >
                        <i className="icon-star star"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="table__items b__bottom">
                  <div className="t__items">
                    <div className="t__items__left">
                      <h6>Montpellier</h6>
                      <span className="text">Benfica</span>
                      <p>
                        <Link href="URL:void(0)">Tomorrow / 01:45</Link>
                      </p>
                    </div>
                  </div>
                  <div className="mart__point__items">
                    <Link href="#0box" className="point__box">
                      <span className="smallt">-1,5</span>
                      <span>1.15</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span className="smallt">+1,5</span>
                      <span>1.87</span>
                    </Link>
                  </div>
                  <div className="mart__point__items">
                    <Link href="#0box" className="point__box">
                      <span>6.48</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span>6.50</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span>6.25</span>
                    </Link>
                  </div>
                  <div className="cart__point cart__point__two">67,5</div>
                  <div className="mart__point__two">
                    <div className="mart__point__right">
                      <Link href="URL:void(0)" className="point__box">
                        7.87
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        7.80
                      </Link>
                      <Link
                        href="URL:void(0)"
                        className="point__box bg__none spacing__initial"
                      >
                        <i className="icon-star star"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="table__items b__bottom">
                  <div className="t__items">
                    <div className="t__items__left">
                      <h6>Bidasoa Irun</h6>
                      <span className="text">Pelister Bitola</span>
                      <p>
                        <Link href="URL:void(0)">Tomorrow / 01:45</Link>
                      </p>
                    </div>
                  </div>
                  <div className="mart__point__items">
                    <Link href="#0box" className="point__box">
                      <span className="smallt">-1,5</span>
                      <span>1.15</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span className="smallt">+1,5</span>
                      <span>1.87</span>
                    </Link>
                  </div>
                  <div className="mart__point__items">
                    <Link href="#0box" className="point__box">
                      <span>6.48</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span>6.50</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span>6.25</span>
                    </Link>
                  </div>
                  <div className="cart__point cart__point__two">67,5</div>
                  <div className="mart__point__two">
                    <div className="mart__point__right">
                      <Link href="URL:void(0)" className="point__box">
                        7.87
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        7.80
                      </Link>
                      <Link
                        href="URL:void(0)"
                        className="point__box bg__none spacing__initial"
                      >
                        <i className="icon-star star"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="table__items b__bottom">
                  <div className="t__items">
                    <div className="t__items__left">
                      <h6>Frisch Auf Goppingen</h6>
                      <span className="text">Kadetten Schaffhausen</span>
                      <p>
                        <Link href="URL:void(0)">Tomorrow / 01:45</Link>
                      </p>
                    </div>
                  </div>
                  <div className="mart__point__items">
                    <Link href="#0box" className="point__box">
                      <span className="smallt">-1,5</span>
                      <span>1.15</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span className="smallt">+1,5</span>
                      <span>1.87</span>
                    </Link>
                  </div>
                  <div className="mart__point__items">
                    <Link href="#0box" className="point__box">
                      <span>6.48</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span>6.50</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span>6.25</span>
                    </Link>
                  </div>
                  <div className="cart__point cart__point__two">67,5</div>
                  <div className="mart__point__two">
                    <div className="mart__point__right">
                      <Link href="URL:void(0)" className="point__box">
                        7.87
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        7.80
                      </Link>
                      <Link
                        href="URL:void(0)"
                        className="point__box bg__none spacing__initial"
                      >
                        <i className="icon-star star"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="table__items b__bottom">
                  <div className="t__items">
                    <div className="t__items__left">
                      <h6>Skjern Håndbold</h6>
                      <span className="text">Sporting Clube de Portugal</span>
                      <p>
                        <Link href="URL:void(0)">Tomorrow / 01:45</Link>
                      </p>
                    </div>
                  </div>
                  <div className="mart__point__items">
                    <Link href="#0box" className="point__box">
                      <span className="smallt">-1,5</span>
                      <span>1.15</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span className="smallt">+1,5</span>
                      <span>1.87</span>
                    </Link>
                  </div>
                  <div className="mart__point__items">
                    <Link href="#0box" className="point__box">
                      <span>6.48</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span>6.50</span>
                    </Link>
                    <Link href="#0box" className="point__box">
                      <span>6.25</span>
                    </Link>
                  </div>
                  <div className="cart__point cart__point__two">67,5</div>
                  <div className="mart__point__two">
                    <div className="mart__point__right">
                      <Link href="URL:void(0)" className="point__box">
                        7.87
                      </Link>
                      <Link href="URL:void(0)" className="point__box">
                        7.80
                      </Link>
                      <Link
                        href="URL:void(0)"
                        className="point__box bg__none spacing__initial"
                      >
                        <i className="icon-star star"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="table__footer">
                  <Link href="URL:void(0)" className="lobby text__opa">
                    Open Handball lobby
                  </Link>
                  <Link href="URL:void(0)" className="footerpoing">
                    <span>30</span>
                    <span>
                      <i className="fas fa-angle-right"></i>
                    </span>
                  </Link>
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

export default HandballTab;
