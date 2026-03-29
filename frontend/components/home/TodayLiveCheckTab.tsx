import Link from "next/link";

const TodayLiveCheckTab = () => {
  return (
    <div className="row mb-4">
      <div className="col-xl-6 col-lg-6">
        <div className="topsport__wrap">
          <Link href="URL:void(0)" className="tsport__items">
            <div className="tsport__itemsleft">
              <span>Live</span>
            </div>
            <div className="ssportright">
              <span>10</span>
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
            </div>
          </Link>
          <Link href="URL:void(0)" className="tsport__items">
            <div className="tsport__itemsleft">
              <span>Starting in 60&#39;</span>
            </div>
            <div className="ssportright">
              <span>15</span>
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
            </div>
          </Link>
          <Link href="URL:void(0)" className="tsport__items">
            <div className="tsport__itemsleft">
              <span>Today</span>
            </div>
            <div className="ssportright">
              <span>33</span>
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
            </div>
          </Link>
          <Link href="URL:void(0)" className="tsport__items">
            <div className="tsport__itemsleft">
              <span>08/12/2022</span>
            </div>
            <div className="ssportright">
              <span>20</span>
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6">
        <div className="topsport__wrap">
          <Link href="URL:void(0)" className="tsport__items">
            <div className="tsport__itemsleft">
              <span>Tennis</span>
            </div>
            <div className="ssportright">
              <span>5 </span>
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
            </div>
          </Link>
          <Link href="URL:void(0)" className="tsport__items">
            <div className="tsport__itemsleft">
              <span>Ice Hockey</span>
            </div>
            <div className="ssportright">
              <span>1</span>
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
            </div>
          </Link>
          <Link href="URL:void(0)" className="tsport__items">
            <div className="tsport__itemsleft">
              <span>Table Tennis</span>
            </div>
            <div className="ssportright">
              <span>50</span>
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
            </div>
          </Link>
          <Link href="URL:void(0)" className="tsport__items">
            <div className="tsport__itemsleft">
              <span>Table Tennis</span>
            </div>
            <div className="ssportright">
              <span>60</span>
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TodayLiveCheckTab;
