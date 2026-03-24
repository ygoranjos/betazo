import {
  allGameData,
  jackpotData,
  liveGameData,
  newGameData,
  popularGameData,
  slotsData,
  topGameData,
} from "@/data/gameData";
import CasinoBoxCard from "../cards/CasinoBoxCard";
import AllGamesTab from "../casino/AllGamesTab";
import JackpotsTab from "../casino/JackpotsTab";
import NewGamesTab from "../casino/NewGamesTab";
import PopularGamesTab from "../casino/PopularGamesTab";
import SlotsGamesTab from "../casino/SlotsGamesTab";
import TableGamesTab from "../casino/TableGamesTab";
import TopGamesTab from "../casino/TopGamesTab";
import FooterMobile from "../footer/FooterMobile";

const LivecasinoMain = () => {
  return (
    <section className="main__body__area">
      <div className="container">
        <div className="row g-0">
          <div className="casino__tab__area">
            <div className="tab-content" id="nav-tabCcasino">
              {/* all games */}
              <AllGamesTab />

              {/* Top games */}
              <TopGamesTab />

              {/* new games */}
              <NewGamesTab />

              {/* Popular games */}
              <PopularGamesTab />

              {/* Slots games */}
              <SlotsGamesTab />

              {/* Table games */}
              <TableGamesTab />

              {/* Jackpots games */}
              <JackpotsTab />

              {/* Live games */}
              <div
                className="tab-pane fade text-white show active mt__30"
                id="casinot7"
                role="tabpanel"
                aria-labelledby="casinot7"
                tabIndex="0"
              >
                {/* Top Games */}
                <div className="common__head mb__30">
                  <span className="icons">
                    <i className="icon-live"></i>
                  </span>
                  <span>Top Games</span>
                </div>
                <div className="row g-4 pb-60">
                  {topGameData.slice(4, 8).map((itm, i) => (
                    <div
                      key={i}
                      className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6"
                    >
                      <CasinoBoxCard img={itm} live={true} />
                    </div>
                  ))}
                </div>

                {/* New Games */}
                <div className="common__head mb__30">
                  <span className="icons">
                    <i className="icon-game"></i>
                  </span>
                  <span>New Games</span>
                </div>
                <div className="row g-4 pb-60">
                  {newGameData.slice(0, 8).map((itm, i) => (
                    <div
                      key={i}
                      className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6"
                    >
                      <CasinoBoxCard img={itm} live={true} />
                    </div>
                  ))}
                </div>

                {/* Popular Games */}
                <div className="common__head mb__30">
                  <span className="icons">
                    <i className="icon-popular"></i>
                  </span>
                  <span>Popular Games</span>
                </div>
                <div className="row g-4 pb-60">
                  {popularGameData.slice(4, 8).map((itm, i) => (
                    <div
                      key={i}
                      className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6"
                    >
                      <CasinoBoxCard img={itm} live={true} />
                    </div>
                  ))}
                </div>

                {/* Slots Games */}
                <div className="common__head mb__30">
                  <span className="icons">
                    <i className="icon-slots"></i>
                  </span>
                  <span>Slots</span>
                </div>
                <div className="row g-4 pb-60">
                  {slotsData.slice(0, 8).map((itm, i) => (
                    <div
                      key={i}
                      className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6"
                    >
                      <CasinoBoxCard img={itm} live={true} />
                    </div>
                  ))}
                </div>

                {/* Jackpots Games */}
                <div className="common__head mb__30">
                  <span className="icons">
                    <i className="icon-jackpot"></i>
                  </span>
                  <span>Jackpots</span>
                </div>
                <div className="row g-4 pb-60">
                  {jackpotData.slice(0, 8).map((itm, i) => (
                    <div
                      key={i}
                      className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6"
                    >
                      <CasinoBoxCard img={itm} live={true} />
                    </div>
                  ))}
                </div>

                {/* Live Games */}
                <div className="common__head mb__30">
                  <span className="icons">
                    <i className="icon-live"></i>
                  </span>
                  <span>Live Games</span>
                </div>
                <div className="row g-4 pb-60">
                  {liveGameData.slice(0, 8).map((itm, i) => (
                    <div
                      key={i}
                      className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6"
                    >
                      <CasinoBoxCard img={itm} live={true} />
                    </div>
                  ))}
                </div>

                {/* All Games */}
                <div className="common__head mb__30">
                  <span className="icons">
                    <i className="icon-game"></i>
                  </span>
                  <span>All Games</span>
                </div>
                <div className="row g-4 pb-60">
                  {allGameData.slice(0, 8).map((itm, i) => (
                    <div
                      key={i}
                      className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6"
                    >
                      <CasinoBoxCard img={itm} live={true} />
                    </div>
                  ))}
                </div>
              </div>
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

export default LivecasinoMain;
