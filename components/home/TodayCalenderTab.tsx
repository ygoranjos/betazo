import Link from "next/link";

const TodayCalenderTab = () => {
  return (
    <>
      <Link href="URL:void(0)" className="home__box">
        <span className="icons">
          <i className="icon-home"></i>
        </span>
        <span>Home</span>
      </Link>
      <h5 className="tspot__title">Top Sports</h5>
      <div className="row mb-4">
        <div className="col-xl-6 col-lg-6">
          <div className="topsport__wrap">
            <Link href="URL:void(0)" className="tsport__items">
              <div className="tsport__itemsleft">
                <span className="icons">
                  <i className="icon-football"></i>
                </span>
                <span>Football</span>
              </div>
              <div className="ssportright">
                <i className="fas fa-chevron-right"></i>
              </div>
            </Link>
            <Link href="URL:void(0)" className="tsport__items">
              <div className="tsport__itemsleft">
                <span className="icons">
                  <i className="icon-basketball"></i>
                </span>
                <span>Basketball</span>
              </div>
              <div className="ssportright">
                <i className="fas fa-chevron-right"></i>
              </div>
            </Link>
            <Link href="URL:void(0)" className="tsport__items">
              <div className="tsport__itemsleft">
                <span className="icons">
                  <i className="icon-volly"></i>
                </span>
                <span>Vollyball</span>
              </div>
              <div className="ssportright">
                <i className="fas fa-chevron-right"></i>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="topsport__wrap">
            <Link href="URL:void(0)" className="tsport__items">
              <div className="tsport__itemsleft">
                <span className="icons">
                  <i className="icon-tennis"></i>
                </span>
                <span>Tennis</span>
              </div>
              <div className="ssportright">
                <i className="fas fa-chevron-right"></i>
              </div>
            </Link>
            <Link href="URL:void(0)" className="tsport__items">
              <div className="tsport__itemsleft">
                <span className="icons">
                  <i className="icon-icehockey"></i>
                </span>
                <span>Ice Hockey</span>
              </div>
              <div className="ssportright">
                <i className="fas fa-chevron-right"></i>
              </div>
            </Link>
            <Link href="URL:void(0)" className="tsport__items">
              <div className="tsport__itemsleft">
                <span className="icons">
                  <i className="icon-ttennis"></i>
                </span>
                <span>Table Tennis</span>
              </div>
              <div className="ssportright">
                <i className="fas fa-chevron-right"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <h5 className="tspot__title">Sports</h5>
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <div className="topsport__wrap">
            <Link href="URL:void(0)" className="tsport__items">
              <div className="tsport__itemsleft">
                <span className="icons">
                  <i className="icon-afootball"></i>
                </span>
                <span>American Football Virtual</span>
              </div>
              <div className="ssportright">
                <i className="fas fa-chevron-right"></i>
              </div>
            </Link>
            <Link href="URL:void(0)" className="tsport__items">
              <div className="tsport__itemsleft">
                <span className="icons">
                  <i className="icon-cricket"></i>
                </span>
                <span>Cricket</span>
              </div>
              <div className="ssportright">
                <i className="fas fa-chevron-right"></i>
              </div>
            </Link>
            <Link href="URL:void(0)" className="tsport__items">
              <div className="tsport__itemsleft">
                <span className="icons">
                  <i className="icon-football"></i>
                </span>
                <span>Football Virtual</span>
              </div>
              <div className="ssportright">
                <i className="fas fa-chevron-right"></i>
              </div>
            </Link>
            <Link href="URL:void(0)" className="tsport__items">
              <div className="tsport__itemsleft">
                <span className="icons">
                  <i className="icon-tennis"></i>
                </span>
                <span>Tennis Virtual</span>
              </div>
              <div className="ssportright">
                <i className="fas fa-chevron-right"></i>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="topsport__wrap">
            <Link href="URL:void(0)" className="tsport__items">
              <div className="tsport__itemsleft">
                <span className="icons">
                  <i className="icon-basketball"></i>
                </span>
                <span>Basketball Virtual</span>
              </div>
              <div className="ssportright">
                <i className="fas fa-chevron-right"></i>
              </div>
            </Link>
            <Link href="URL:void(0)" className="tsport__items">
              <div className="tsport__itemsleft">
                <span className="icons">
                  <i className="icon-darts"></i>
                </span>
                <span>Darts</span>
              </div>
              <div className="ssportright">
                <i className="fas fa-chevron-right"></i>
              </div>
            </Link>
            <Link href="URL:void(0)" className="tsport__items">
              <div className="tsport__itemsleft">
                <span className="icons">
                  <i className="icon-horse"></i>
                </span>
                <span>Horse Racing</span>
              </div>
              <div className="ssportright">
                <i className="fas fa-chevron-right"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodayCalenderTab;
