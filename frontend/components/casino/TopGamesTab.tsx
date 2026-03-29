import { topGameData } from "@/data/gameData";
import CasinoBoxCard from "../cards/CasinoBoxCard";

const TopGamesTab = () => {
  return (
    <div
      className="tab-pane fade mt__30 text-white"
      id="casinot1"
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
        {topGameData.map((itm, i) => (
          <div
            key={i}
            className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6"
          >
            {/* Casino Box Card */}
            <CasinoBoxCard img={itm} />
          </div>
        ))}
      </div>
      {/* Top Games */}
    </div>
  );
};

export default TopGamesTab;
