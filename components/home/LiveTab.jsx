import FooterHome from "../footer/FooterHome";
import LiveBasketballTab from "./LiveBasketballTab";
import LiveCricketTab from "./LiveCricketTab";
import LiveFootballTab from "./LiveFootballTab";
import LiveTableTennisTab from "./LiveTableTennisTab";
import LiveTennisTab from "./LiveTennisTab";
import LiveVollyballTab from "./LiveVollyballTab";

const LiveTab = () => {
  return (
    <div
      className="tab-pane text-white fade"
      id="mainTab2"
      role="tabpanel"
      tabIndex="0"
    >
      {/* Main Body */}
      <div className="main__body__wrap left__right__space pb-60">
        {/* Home Here */}
        <div className="live__heightlight mb__30 mt__30">
          <div className="height__table">
            {/* Football */}
            <div className="main__table">
              {/* Football */}
              <LiveFootballTab thead={false} />
            </div>
            {/* Football */}
          </div>
        </div>
        {/* Home End */}

        {/* Tennis Start */}
        <div className="live__heightlight">
          <div className="height__table">
            <div className="main__table main__table__tennis">
              {/* Tennis */}
              <LiveTennisTab thead={false} />
            </div>
          </div>
        </div>
        {/* Tennis End */}

        {/* Basketball Start */}
        <div className="live__heightlight mt__30 ">
          <div className="height__table">
            <div className="main__table main__table__tennis main__table__basketball">
              {/* Basketball */}
              <LiveBasketballTab thead={false} />
            </div>
          </div>
        </div>
        {/* Basketball End */}

        {/* Vollyball Start */}
        <div className="live__heightlight mt__30 ">
          <div className="height__table">
            <div className="main__table main__table__tennis">
              {/* Vollyball */}
              <LiveVollyballTab thead={false} />
            </div>
          </div>
        </div>
        {/* Vollyball End */}

        {/* Cricket Start */}
        <div className="live__heightlight mt__30 ">
          <div className="height__table">
            <div className="main__table main__table__tennis main__table__cricket">
              {/* Cricket */}
              <LiveCricketTab thead={false} />
            </div>
          </div>
        </div>
        {/* Cricket End */}

        {/* Table Tennis Start */}
        <div className="live__heightlight mt__30">
          <div className="height__table">
            <div className="main__table main__table__tennis main__table__ttennis">
              {/* Table Tennis */}
              <LiveTableTennisTab thead={false} />
            </div>
          </div>
        </div>
        {/* Table Tennis End */}
      </div>
      {/* Main Body */}

      {/* Footer Start */}
      <FooterHome />
      {/* Footer End */}
    </div>
  );
};

export default LiveTab;
