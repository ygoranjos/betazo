import { jackpotData } from "@/data/gameData";
import CasinoBoxCard from "../cards/CasinoBoxCard";

const JackpotsTab = () => {
  return (
    <div
      className="tab-pane fade text-white mt__30"
      id="casinot6"
      role="tabpanel"
      aria-labelledby="casinot6"
      tabIndex="0"
    >
      {/* Jackpots */}
      <div className="common__head mb__30">
        <span className="icons">
          <i className="icon-jackpot"></i>
        </span>
        <span>Jackpots</span>
      </div>
      <div className="row g-4 pb-60">
        {jackpotData.map((itm, i) => (
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

export default JackpotsTab;
