import FooterHome from "../footer/FooterHome";
import TodayCalenderTab from "./TodayCalenderTab";
import TodayLiveCheckTab from "./TodayLiveCheckTab";
import TodayRobotCheckTab from "./TodayRobotCheckTab";

const TodayTab = () => {
  return (
    <div
      className="tab-pane text-white fade"
      id="mainTab3"
      role="tabpanel"
      tabIndex="0"
    >
      {/* Main body */}
      <div className="main__body__wrap left__right__space pb-60">
        <div className="today__body mt__30">
          <div className="tody__tab">
            <ul className="nav nav-tabs" id="todaytab" role="tablist">
              <li>
                <i className="fas fa-chevron-left"></i>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  data-bs-toggle="tab"
                  data-bs-target="#todaytab1"
                  type="button"
                  role="tab"
                  aria-selected="true"
                >
                  <span className="icons">
                    <i className="icon-calender"></i>
                  </span>
                  <span>Calendar</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#todaytab2"
                  type="button"
                  role="tab"
                  aria-controls="todaytab2"
                  aria-selected="false"
                >
                  <span className="icons">
                    <i className="icon-clock"></i>
                  </span>
                  <span>Today</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#todaytab3"
                  type="button"
                  role="tab"
                  aria-controls="todaytab3"
                  aria-selected="false"
                >
                  <span className="icons">
                    <i className="icon-clock"></i>
                  </span>
                  <span>Robot Check</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#todaytab4"
                  type="button"
                  role="tab"
                  aria-controls="todaytab4"
                  aria-selected="false"
                >
                  <span className="icons">
                    <i className="icon-clock"></i>
                  </span>
                  <span>Live Check</span>
                </button>
              </li>
            </ul>
          </div>

          <div className="tab-content" id="myTabContenttoday">
            <div
              className="tab-pane fade show active"
              id="todaytab1"
              role="tabpanel"
              aria-labelledby="todaytab1"
              tabIndex="0"
            >
              {/* Today Calender Tab */}
              <TodayCalenderTab />
            </div>

            <div
              className="tab-pane fade"
              id="todaytab2"
              role="tabpanel"
              aria-labelledby="todaytab2"
              tabIndex="0"
            >
              {/* Today Calender Tab */}
              <TodayCalenderTab />
            </div>

            <div
              className="tab-pane fade"
              id="todaytab3"
              role="tabpanel"
              aria-labelledby="todaytab3"
              tabIndex="0"
            >
              {/* Today Robot Check Tab */}
              <TodayRobotCheckTab />
            </div>

            <div
              className="tab-pane fade"
              id="todaytab4"
              role="tabpanel"
              aria-labelledby="todaytab4"
              tabIndex="0"
            >
              {/* Today Live Check Tab */}
              <TodayLiveCheckTab />
            </div>
          </div>
        </div>
      </div>
      {/* Main body */}

      {/* Footer Start */}
      <FooterHome />
      {/* Footer End */}
    </div>
  );
};

export default TodayTab;
