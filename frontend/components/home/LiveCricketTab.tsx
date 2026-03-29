import Link from "next/link";
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

const LiveCricketTab = ({ thead = true }) => {
  return (
    <>
      <div className="section__head b__bottom">
        <div className="left__head">
          <span className="icons">
            <i className="icon-cricket"></i>
          </span>
          <span>Cricket</span>
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
        {thead && (
          <div className="table__items table__pointnone__items">
            <div className="t__items">
              <div className="t__items__left"></div>
              <div className="serial"></div>
            </div>
            <div className="tennis__right">
              <div className="mart__point__two">
                <div className="mart__point__left">
                  <Link href="URL:void(0)" className="point__box bg__none">
                    1
                  </Link>
                  <Link href="URL:void(0)" className="point__box bg__none">
                    2
                  </Link>
                </div>
                <div className="mart__point__right">
                  <Link href="URL:void(0)" className="point__box bg__none opo">
                    <i className="icon-star star"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="table__items b__bottom">
          <div className="t__items">
            <div className="t__items__left">
              <h6>Tokyo Great Bears</h6>
              <span className="text">JT Thunders</span>
              <p>
                <Link href="URL:void(0)">Live</Link>
                <span>3rd Set</span>
              </p>
            </div>
            <div className="serial">264/7</div>
          </div>
          <div className="tennis__right">
            <div className="mart__point__two">
              <div className="mart__point__left">
                <Link href="URL:void(0)" className="point__box">
                  3.05
                </Link>
                <Link href="URL:void(0)" className="point__box">
                  6.50
                </Link>
              </div>
              <div className="mart__point__right">
                <Link href="URL:void(0)" className="point__box bg__none">
                  <i className="icon-star star"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="table__footer">
          <Link href="URL:void(0)" className="lobby text__opa">
            Open <span className="text__btn"> Volleyball Live</span> Events
          </Link>
          <Link href="URL:void(0)" className="footerpoing">
            <span>8</span>
            <span>
              <i className="fas fa-angle-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LiveCricketTab;
