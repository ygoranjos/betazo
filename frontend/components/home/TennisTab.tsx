import FooterHome from "../footer/FooterHome";
import LiveBasketballTab from "./LiveBasketballTab";

const TennisTab = () => {
  return (
    <div
      className="tab-pane mt__30 text-white fade"
      id="mainTab5"
      role="tabpanel"
      tabIndex="0"
    >
      {/* Main Body */}
      <div className="main__body__wrap left__right__space pb-60">
        <div className="live__heightlight">
          <div className="height__table">
            <div className="main__table main__table__tennis main__tabletennis">
              {/* Live Basketball Tab */}
              <LiveBasketballTab thead={false} />
            </div>
          </div>
        </div>
      </div>
      {/* Main Body */}

      {/* Footer Start */}
      <FooterHome />
      {/* Footer End */}
    </div>
  );
};

export default TennisTab;
