import { liveGameData } from "@/data/gameData";
import CasinoBoxCard from "../cards/CasinoBoxCard";

const LiveGamesTab = () => {
  return (
    <div
      className="tab-pane fade text-white mt__30"
      id="casinot7"
      role="tabpanel"
      aria-labelledby="casinot7"
      tabIndex="0"
    >
      {/* Live Games */}
      <div className="common__head mb__30">
        <span className="icons">
          <i className="icon-live"></i>
        </span>
        <span>Live Games</span>
      </div>
      <div className="row g-4 pb-60">
        {liveGameData.map((itm, i) => (
          <div
            key={i}
            className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6"
          >
            <CasinoBoxCard img={itm} live={true} />
          </div>
        ))}
      </div>
      {/* Top Games */}
    </div>
  );
};

export default LiveGamesTab;
