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
import n1 from "/public/img/games/n1.jpg";
import popu from "/public/img/games/popu.jpg";
import t1 from "/public/img/games/t1.jpg";

const AllGamesTab = ({ show = "" }) => {
  return (
    <div
      className={`tab-pane mt__30 fade text-white ${show}`}
      id="casinot8"
      role="tabpanel"
      aria-labelledby="casinot1"
      tabIndex="0"
    >
      {/* Top Games */}
      <div className="common__head mb__30">
        <span className="icons">
          <i className="icon-top"></i>
        </span>
        <span>Top Games</span>
      </div>
      <div className="row g-4 pb-60">
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <CasinoBoxCard img={t1} />
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div className="casino__box__dobble">
            <CasinoBoxCard img={topGameData[1]} />
            <CasinoBoxCard img={topGameData[2]} />
          </div>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div className="casino__box__dobble">
            <CasinoBoxCard img={topGameData[3]} />
            <CasinoBoxCard img={topGameData[4]} />
          </div>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div className="casino__box__dobble">
            <CasinoBoxCard img={topGameData[5]} />
            <CasinoBoxCard img={topGameData[6]} />
          </div>
        </div>
      </div>
      {/* Top Games */}

      {/* New Games */}
      <div className="common__head mb__30">
        <span className="icons">
          <i className="icon-new"></i>
        </span>
        <span>New Games</span>
      </div>
      <div className="row g-4 pb-60">
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <CasinoBoxCard img={n1} />
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div className="casino__box__dobble">
            <CasinoBoxCard img={newGameData[1]} />
            <CasinoBoxCard img={newGameData[2]} />
          </div>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div className="casino__box__dobble">
            <CasinoBoxCard img={newGameData[3]} />
            <CasinoBoxCard img={newGameData[4]} />
          </div>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div className="casino__box__dobble">
            <CasinoBoxCard img={newGameData[5]} />
            <CasinoBoxCard img={newGameData[6]} />
          </div>
        </div>
      </div>
      {/* New Games */}

      {/* Popular Games */}
      <div className="common__head mb__30">
        <span className="icons">
          <i className="icon-popular"></i>
        </span>
        <span>Popular Games</span>
      </div>
      <div className="row g-4 pb-60">
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <CasinoBoxCard img={popu} />
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div className="casino__box__dobble">
            <CasinoBoxCard img={popularGameData[1]} />
            <CasinoBoxCard img={popularGameData[2]} />
          </div>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div className="casino__box__dobble">
            <CasinoBoxCard img={popularGameData[3]} />
            <CasinoBoxCard img={popularGameData[4]} />
          </div>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div className="casino__box__dobble">
            <CasinoBoxCard img={popularGameData[5]} />
            <CasinoBoxCard img={popularGameData[6]} />
          </div>
        </div>
      </div>
      {/* Popular Games */}

      {/* slots Games */}
      <div className="common__head mb__30">
        <span className="icons">
          <i className="icon-slots"></i>
        </span>
        <span>Slots</span>
      </div>
      <div className="row g-4 pb-60">
        {slotsData.slice(0, 12).map((itm, i) => (
          <div
            key={i}
            className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6"
          >
            <CasinoBoxCard img={itm} />
          </div>
        ))}
      </div>
      {/* slots Games */}

      {/* jackpots Games */}
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
            <CasinoBoxCard img={itm} />
          </div>
        ))}
      </div>
      {/* jackpots Games */}

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
      {/* Live Games */}

      {/* All Games */}
      <div className="common__head mb__30">
        <span className="icons">
          <i className="icon-game"></i>
        </span>
        <span>All Games</span>
      </div>
      <div className="row g-4 pb-60">
        {allGameData.map((itm, i) => (
          <div
            key={i}
            className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6"
          >
            <CasinoBoxCard img={itm} />
          </div>
        ))}
      </div>
      {/* All Games */}
    </div>
  );
};

export default AllGamesTab;
