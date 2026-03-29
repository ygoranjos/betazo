import Link from "next/link";

const NextTennisTab = () => {
  return (
    <div className="table__wrap">
      <div className="table__items b__bottom">
        <div className="t__items">
          <div className="t__items__left t__items__left__nextogo">
            <div className="t__items__icon">
              <i className="icon-tennis"></i>
            </div>
            <div className="content">
              <h6>
                Dusan Lajovic <span>SRB</span>
              </h6>
              <h6>
                Steven Diez <span>FRA</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="mart__point__two mart__pint__nextgo">
          <div className="mart__point__left">
            <Link href="URL:void(0)" className="point__box">
              <span className="point__1">1</span>
              <span>2.25</span>
            </Link>
            <Link href="URL:void(0)" className="point__box">
              <span className="point__1">2</span>
              <span>2.82</span>
            </Link>
          </div>
          <div className="mart__point__right">
            <Link href="#min" className="point__box-text point__box__nextto">
              <span> Today / 16:15</span>
              <span className="icons">
                <i className="fas fa-angle-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="table__items b__bottom">
        <div className="t__items">
          <div className="t__items__left t__items__left__nextogo">
            <div className="t__items__icon">
              <i className="icon-tennis"></i>
            </div>
            <div className="content">
              <h6>
                Maximilian Neuchrist <span>AUT</span>
              </h6>
              <h6>
                Luca Van Assche <span>FRA</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="mart__point__two mart__pint__nextgo">
          <div className="mart__point__left">
            <Link href="URL:void(0)" className="point__box">
              <span className="point__1">1</span>
              <span>3.22</span>
            </Link>
            <Link href="URL:void(0)" className="point__box">
              <span className="point__1">2</span>
              <span>4.33</span>
            </Link>
          </div>
          <div className="mart__point__right">
            <Link href="#min" className="point__box-text point__box__nextto">
              <span> Today / 26:15</span>
              <span className="icons">
                <i className="fas fa-angle-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="table__items">
        <div className="t__items">
          <div className="t__items__left t__items__left__nextogo">
            <div className="t__items__icon">
              <i className="icon-tennis"></i>
            </div>
            <div className="content">
              <h6>
                Rebecca Peterson <span>SWE</span>
              </h6>
              <h6>
                Alycia Parks <span>USA</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="mart__point__two mart__pint__nextgo">
          <div className="mart__point__left">
            <Link href="URL:void(0)" className="point__box">
              <span className="point__1">1</span>
              <span>1.25</span>
            </Link>
            <Link href="URL:void(0)" className="point__box">
              <span className="point__1">2</span>
              <span>2.55</span>
            </Link>
          </div>
          <div className="mart__point__right">
            <Link href="#min" className="point__box-text point__box__nextto">
              <span> Today / 19:15</span>
              <span className="icons">
                <i className="fas fa-angle-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextTennisTab;
