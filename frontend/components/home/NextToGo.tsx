import NextAllTab from "./NextAllTab";
import NextAmericanFootballTab from "./NextAmericanFootballTab";
import NextBasketballTab from "./NextBasketballTab";
import NextFootballTab from "./NextFootballTab";
import NextIceHockeyTab from "./NextIceHockeyTab";
import NextTennisTab from "./NextTennisTab";

const NextToGo = () => {
  return (
    <>
      <div className="heightlight__tab nexttogo__tab">
        <div className="nav pt-20" id="nav-tabheightnextgo" role="tablist">
          <button
            className="nav-link active"
            id="lightnext"
            data-bs-toggle="tab"
            data-bs-target="#height1next"
            type="button"
            role="tab"
            aria-selected="true"
          >
            <span className="icons">
              <i className="icon-football"></i>
            </span>
            <span>All</span>
          </button>
          <button
            className="nav-link "
            id="lightall"
            data-bs-toggle="tab"
            data-bs-target="#nextfootball"
            type="button"
            role="tab"
            aria-selected="false"
          >
            <span className="icons">
              <i className="icon-football"></i>
            </span>
            <span>Football</span>
          </button>
          <button
            className="nav-link "
            id="lightnext2"
            data-bs-toggle="tab"
            data-bs-target="#nextgotennistab"
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
            id="lightlighttab3next"
            data-bs-toggle="tab"
            data-bs-target="#nextbaskettab"
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
            id="lightlighttab4next"
            data-bs-toggle="tab"
            data-bs-target="#nexticehockytab"
            type="button"
            role="tab"
            aria-selected="false"
          >
            <span className="icons">
              <i className="icon-icehockey"></i>
            </span>
            <span>Ice Hockey</span>
          </button>
          <button
            className="nav-link "
            id="lightlighttab5next"
            data-bs-toggle="tab"
            data-bs-target="#afootballtab"
            type="button"
            role="tab"
            aria-selected="false"
          >
            <span className="icons">
              <i className="icon-afootball"></i>
            </span>
            <span>American Football</span>
          </button>
        </div>
      </div>

      <div className="height__table">
        <div className="tab-content" id="nav-tabContentheightnext">
          <div
            className="tab-pane fade text-white show active"
            id="height1next"
            role="tabpanel"
            aria-labelledby="nav-home-tabpre"
            tabIndex="0"
          >
            <div className="main__table">
              {/* Next All Tab */}
              <NextAllTab />
            </div>
          </div>
          <div
            className="tab-pane fade text-white "
            id="nextfootball"
            role="tabpanel"
            tabIndex="0"
          >
            <div className="main__table main__table__nextfootball">
              {/* Next Football Tab */}
              <NextFootballTab />
            </div>
          </div>
          <div
            className="tab-pane fade text-white "
            id="nextgotennistab"
            role="tabpanel"
            tabIndex="0"
          >
            <div className="main__table main__table__nextfootball">
              {/* Next Tennis Tab */}
              <NextTennisTab />
            </div>
          </div>
          <div
            className="tab-pane fade text-white "
            id="nextbaskettab"
            role="tabpanel"
            tabIndex="0"
          >
            <div className="main__table main__table__nextfootball">
              {/* Next Basketball Tab */}
              <NextBasketballTab />
            </div>
          </div>
          <div
            className="tab-pane fade text-white "
            id="nexticehockytab"
            role="tabpanel"
            tabIndex="0"
          >
            <div className="main__table main__table__nextfootball">
              {/* Next IceHockey Tab */}
              <NextIceHockeyTab />
            </div>
          </div>
          <div
            className="tab-pane fade text-white "
            id="afootballtab"
            role="tabpanel"
            tabIndex="0"
          >
            <div className="main__table main__table__nextfootball">
              {/* Next American Football Tab */}
              <NextAmericanFootballTab />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NextToGo;
