import TrendingAmericanFootballTab from "./TrendingAmericanFootballTab";
import TrendingBasketballTab from "./TrendingBasketballTab";
import TrendingBeachVolleyballTab from "./TrendingBeachVolleyballTab";
import TrendingCyclingTab from "./TrendingCyclingTab";
import TrendingFootballTab from "./TrendingFootballTab";
import TrendingGolfTab from "./TrendingGolfTab";
import TrendingTableTennisTab from "./TrendingTableTennisTab";
import TrendingTennisTab from "./TrendingTennisTab";
import TrendingVollyballTab from "./TrendingVollyballTab";

const Trending = () => {
  return (
    <>
      <div className="heightlight__tab">
        <div
          className="nav b__bottom"
          id="nav-tabheighttrending"
          role="tablist"
        >
          <button
            className="nav-link active"
            id="lightlighttabtrend"
            data-bs-toggle="tab"
            data-bs-target="#height1trend"
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
            id="treading1"
            data-bs-toggle="tab"
            data-bs-target="#treand2"
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
            id="treading2"
            data-bs-toggle="tab"
            data-bs-target="#treand3"
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
            id="treading3"
            data-bs-toggle="tab"
            data-bs-target="#treand4"
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
            id="treading4"
            data-bs-toggle="tab"
            data-bs-target="#treand5"
            type="button"
            role="tab"
            aria-selected="false"
          >
            <span className="icons">
              <i className="icon-ttennis"></i>
            </span>
            <span>Table Tennis</span>
          </button>
          <button
            className="nav-link "
            id="treading5"
            data-bs-toggle="tab"
            data-bs-target="#treand6"
            type="button"
            role="tab"
            aria-selected="false"
          >
            <span className="icons">
              <i className="icon-afootball"></i>
            </span>
            <span>American Football</span>
          </button>
          <button
            className="nav-link "
            id="treading7"
            data-bs-toggle="tab"
            data-bs-target="#treand7"
            type="button"
            role="tab"
            aria-selected="false"
          >
            <span className="icons">
              <i className="icon-golf"></i>
            </span>
            <span>Golf</span>
          </button>
          <button
            className="nav-link "
            id="treading8"
            data-bs-toggle="tab"
            data-bs-target="#treand8"
            type="button"
            role="tab"
            aria-selected="false"
          >
            <span className="icons">
              <i className="icon-cycling"></i>
            </span>
            <span>Cycling</span>
          </button>
          <button
            className="nav-link "
            id="treading9"
            data-bs-toggle="tab"
            data-bs-target="#treand9"
            type="button"
            role="tab"
            aria-selected="false"
          >
            <span className="icons">
              <i className="icon-golf"></i>
            </span>
            <span>Beach Volleyball</span>
          </button>
        </div>
      </div>

      <div className="height__table">
        <div className="tab-content" id="nav-tabContentheighttrending">
          {/* football */}
          <div
            className="tab-pane fade text-white show active"
            id="height1trend"
            role="tabpanel"
            aria-labelledby="nav-home-tabpre"
            tabIndex="0"
          >
            <div className="main__table larg__width treanding__table">
              {/* Trending Football Tab */}
              <TrendingFootballTab />
            </div>
          </div>
          {/* Tennis */}
          <div
            className="tab-pane fade text-white "
            id="treand2"
            role="tabpanel"
            tabIndex="0"
          >
            <div className="main__table larg__width2 treanding__table main__tabletennis">
              {/* Trending Tennis Tab */}
              <TrendingTennisTab />
            </div>
          </div>
          {/* Basketball */}
          <div
            className="tab-pane fade text-white"
            id="treand3"
            role="tabpanel"
            aria-labelledby="nav-home-tabpre"
            tabIndex="0"
          >
            <div className="main__table larg__width4 treanding__table main__basketballtable">
              {/* Trending Basketball Tab */}
              <TrendingBasketballTab />
            </div>
          </div>
          {/* Vollyball */}
          <div
            className="tab-pane fade text-white"
            id="treand4"
            role="tabpanel"
            aria-labelledby="nav-home-tabpre"
            tabIndex="0"
          >
            <div className="main__table larg__width5  treanding__table main__basketballtable">
              {/* Trending Vollyball Tab */}
              <TrendingVollyballTab />
            </div>
          </div>
          {/* Table Tennis */}
          <div
            className="tab-pane fade text-white"
            id="treand5"
            role="tabpanel"
            aria-labelledby="nav-home-tabpre"
            tabIndex="0"
          >
            <div className="main__table larg__width6 treanding__table main__basketballtable">
              {/* Trending Table Tennis Tab */}
              <TrendingTableTennisTab />
            </div>
          </div>
          {/* American Football */}
          <div
            className="tab-pane fade text-white"
            id="treand6"
            role="tabpanel"
            aria-labelledby="nav-home-tabpre"
            tabIndex="0"
          >
            <div className="main__table treanding__table main__basketballtable larg__width7">
              {/* Trending American Football Tab */}
              <TrendingAmericanFootballTab />
            </div>
          </div>
          {/* Golf Playing */}
          <div
            className="tab-pane fade text-white"
            id="treand7"
            role="tabpanel"
            aria-labelledby="nav-home-tabpre"
            tabIndex="0"
          >
            <div className="main__table larg__width6 treanding__table main__basketballtable">
              {/* Trending Golf Tab */}
              <TrendingGolfTab />
            </div>
          </div>
          {/* Cycling Playing */}
          <div
            className="tab-pane fade text-white"
            id="treand8"
            role="tabpanel"
            aria-labelledby="nav-home-tabpre"
            tabIndex="0"
          >
            <div className="main__table larg__width6 treanding__table main__basketballtable">
              {/* Trending Cycling Tab */}
              <TrendingCyclingTab />
            </div>
          </div>
          {/* Beach Playing */}
          <div
            className="tab-pane fade text-white"
            id="treand9"
            role="tabpanel"
            aria-labelledby="nav-home-tabpre"
            tabIndex="0"
          >
            <div className="main__table larg__width6 treanding__table main__basketballtable">
              {/* Trending Beach Volleyball */}
              <TrendingBeachVolleyballTab />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
