import FooterMobile from "../footer/FooterMobile";
import AllGamesTab from "./AllGamesTab";
import JackpotsTab from "./JackpotsTab";
import LiveGamesTab from "./LiveGamesTab";
import NewGamesTab from "./NewGamesTab";
import PopularGamesTab from "./PopularGamesTab";
import SlotsGamesTab from "./SlotsGamesTab";
import TableGamesTab from "./TableGamesTab";
import TopGamesTab from "./TopGamesTab";

const CasinoMain = () => {
  return (
    <section className="main__body__area">
      <div className="container">
        <div className="row g-0">
          <div className="casino__tab__area">
            <div className="tab-content" id="nav-tabCcasino">
              {/* all games */}
              <AllGamesTab show="show active" />

              {/* Top games */}
              <TopGamesTab />

              {/* new games */}
              <NewGamesTab />

              {/* Popular games */}
              <PopularGamesTab />

              {/* Slots games */}
              <SlotsGamesTab />

              {/* Table Games */}
              <TableGamesTab />

              {/* Jackpots */}
              <JackpotsTab />

              {/* Live Games */}
              <LiveGamesTab />
            </div>
          </div>
        </div>
      </div>
      {/* footer Bottom Menu */}
      <FooterMobile />
      {/* footer Bottom Menu */}
    </section>
  );
};

export default CasinoMain;
