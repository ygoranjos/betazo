import { slotsData } from "@/data/gameData";
import CasinoBoxCard from "../cards/CasinoBoxCard";

const SlotsGamesTab = () => {
  return (
    <div
      className="tab-pane fade text-white mt__30"
      id="casinot4"
      role="tabpanel"
      aria-labelledby="casinot4"
      tabIndex="0"
    >
      {/* Slots Games */}
      <div className="common__head mb__30">
        <span className="icons">
          <i className="icon-slots"></i>
        </span>
        <span>Slots</span>
      </div>
      <div className="row g-4 pb-60">
        {slotsData.map((itm, i) => (
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

export default SlotsGamesTab;
