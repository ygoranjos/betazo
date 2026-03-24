import LiveBasketballTab from "./LiveBasketballTab";
import LiveCricketTab from "./LiveCricketTab";
import LiveFootballTab from "./LiveFootballTab";
import LiveTableTennisTab from "./LiveTableTennisTab";
import LiveTennisTab from "./LiveTennisTab";
import LiveVollyballTab from "./LiveVollyballTab";

const LiveHeightlight = () => {
  return (
    <>
      <div className="heightlight__tab">
        <div className="nav b__bottom" id="nav-tabheight" role="tablist">
          <button
            className="nav-link active"
            id="lightlighttab"
            data-bs-toggle="tab"
            data-bs-target="#height1"
            type="button"
            role="tab"
            aria-selected="true"
          >
            <span className="icons">
              <i className="icon-football"></i>
            </span>
            <span>Football</span>
          </button>
          <button
            className="nav-link "
            id="lightlighttab2tennis"
            data-bs-toggle="tab"
            data-bs-target="#height2tennis"
            type="button"
            role="tab"
            aria-selected="false"
          >
            <span className="icons">
              <i className="icon-tennis"></i>
            </span>
            <span>Tennis</span>
          </button>
          <button
            className="nav-link "
            id="lightlighttab3basket"
            data-bs-toggle="tab"
            data-bs-target="#basketbtab"
            type="button"
            role="tab"
            aria-selected="false"
          >
            <span className="icons">
              <i className="icon-basketball"></i>
            </span>
            <span>Basketball</span>
          </button>
          <button
            className="nav-link "
            id="lightlighttabvolly"
            data-bs-toggle="tab"
            data-bs-target="#vollyballs"
            type="button"
            role="tab"
            aria-selected="false"
          >
            <span className="icons">
              <i className="icon-volly"></i>
            </span>
            <span>Volleyball</span>
          </button>
          <button
            className="nav-link "
            id="lightlighttab5cricket"
            data-bs-toggle="tab"
            data-bs-target="#crickettab"
            type="button"
            role="tab"
            aria-selected="false"
          >
            <span className="icons">
              <i className="icon-cricket"></i>
            </span>
            <span>Cricket</span>
          </button>
          <button
            className="nav-link "
            id="lightlighttable"
            data-bs-toggle="tab"
            data-bs-target="#tabletennis"
            type="button"
            role="tab"
            aria-selected="false"
          >
            <span className="icons">
              <i className="icon-ttennis"></i>
            </span>
            <span>Table Tennis</span>
          </button>
        </div>
      </div>

      <div className="height__table">
        <div className="tab-content" id="nav-tabContentheight">
          {/* Football */}
          <div
            className="tab-pane fade text-white show active"
            id="height1"
            role="tabpanel"
            aria-labelledby="nav-home-tabpre"
            tabIndex="0"
          >
            <div className="main__table">
              {/* Live Football Tab */}
              <LiveFootballTab />
            </div>
          </div>
          {/* Football */}

          {/* Tennis */}
          <div
            className="tab-pane fade text-white "
            id="height2tennis"
            role="tabpanel"
            tabIndex="0"
          >
            <div className="main__table main__table__tennis">
              {/* Live Tennis Tab */}
              <LiveTennisTab />
            </div>
          </div>
          {/* Tennis */}

          {/* Basketball */}
          <div
            className="tab-pane fade text-white "
            id="basketbtab"
            role="tabpanel"
            tabIndex="0"
          >
            <div className="main__table main__table__tennis main__table__basketball">
              {/* Live Basketball Tab */}
              <LiveBasketballTab />
            </div>
          </div>
          {/* Basketball */}

          {/* Vollyball */}
          <div
            className="tab-pane fade text-white "
            id="vollyballs"
            role="tabpanel"
            tabIndex="0"
          >
            <div className="main__table volloy__max main__table__tennis">
              {/* Live Vollyball Tab */}
              <LiveVollyballTab />
            </div>
          </div>
          {/* Vollyball */}

          {/* Cricket */}
          <div
            className="tab-pane fade text-white "
            id="crickettab"
            role="tabpanel"
            tabIndex="0"
          >
            <div className="main__table main__table__tennis main__table__cricket">
              {/* Live Cricket Tab */}
              <LiveCricketTab />
            </div>
          </div>
          {/* Cricket */}

          {/* Table Tennis */}
          <div
            className="tab-pane fade text-white "
            id="tabletennis"
            role="tabpanel"
            tabIndex="0"
          >
            <div className="main__table volloy__max main__table__tennis main__table__ttennis">
              {/* Live Table Tennis Tab */}
              <LiveTableTennisTab />
            </div>
          </div>
          {/* Table Tennis */}
        </div>
      </div>
    </>
  );
};

export default LiveHeightlight;
