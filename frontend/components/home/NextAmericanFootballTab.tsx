import Link from "next/link";

const NextAmericanFootballTab = () => {
  return (
    <div className="table__wrap">
      <div className="table__items">
        <div className="t__items">
          <div className="t__items__left t__items__left__nextogo">
            <div className="t__items__icon">
              <i className="icon-afootball"></i>
            </div>
            <div className="content">
              <h6>New Orleans Saints @</h6>
              <h6>Tampa Bay Buccaneers</h6>
            </div>
          </div>
        </div>
        <div className="mart__point__two mart__pint__nextgo">
          <div className="mart__point__left">
            <Link href="URL:void(0)" className="point__box">
              <span className="point__1">+3,5</span>
              <span>1.91</span>
            </Link>
            <Link href="URL:void(0)" className="point__box">
              <span className="point__1">-3,5</span>
              <span>1.91</span>
            </Link>
          </div>
          <div className="mart__point__right">
            <Link href="#min" className="point__box-text point__box__nextto">
              <span> Tomorrow / 07:15 </span>
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

export default NextAmericanFootballTab;
