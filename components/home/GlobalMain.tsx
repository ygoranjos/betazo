import PopularEvents from "../common/PopularEvents";
import AmericanTab from "./AmericanTab";
import BaseballTab from "./BaseballTab";
import BasketballTab from "./BasketballTab";
import FootballTab from "./FootballTab";
import FovatiresTab from "./FovatiresTab";
import HandballTab from "./HandballTab";
import HomeTab from "./HomeTab";
import HorseRacingTab from "./HorseRacingTab";
import IceHockeyTab from "./IceHockeyTab";
import LiveTab from "./LiveTab";
import TennisTab from "./TennisTab";
import TodayTab from "./TodayTab";
import VirtualTab from "./VirtualTab";

const GlobalMain = () => {
  return (
    <div className="popular__events__body">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-xxl-2 col-xl-3 col-lg-3">
            {/* Popular Events */}
            <PopularEvents />
          </div>
          <div className="col-xxl-10 col-xl-9 col-lg-9">
            {/* Home Page Tabs Here */}
            <HomeTab />
            {/* Home Page Tabs Here */}

            {/* Live Page Tabs Here */}
            <LiveTab />
            {/* Live Page Tabs End */}

            {/* Today Page Tabs Here */}
            <TodayTab />
            {/* Today Page Tabs End */}

            {/* Football Page Tabs Here */}
            <FootballTab />
            {/* Football Page Tabs End */}

            {/* Tennis Page Tabs Here */}
            <TennisTab />
            {/* Tennis Page Tabs End */}

            {/* Basketball Page Tabs Here */}
            <BasketballTab />
            {/* Basketball Page Tabs End */}

            {/* IceHockey Page Tabs Here */}
            <IceHockeyTab />
            {/* IceHockey Page Tabs End */}

            {/* Handball Page Tabs Here */}
            <HandballTab />
            {/* Handball Page Tabs End */}

            {/* American Page Tabs Here */}
            <AmericanTab />
            {/* American Page Tabs End */}

            {/* Baseball Page Tabs Here */}
            <BaseballTab />
            {/* Baseball Page Tabs End */}

            {/* Horse Racing Page Tabs Here */}
            <HorseRacingTab />
            {/* Horse Racing Page Tabs End */}

            {/* Virtual Page Tabs Here */}
            <VirtualTab />
            {/* Virtual Page Tabs End */}

            {/* Fovatires Page Tabs Here */}
            <FovatiresTab />
            {/* Fovatires Page Tabs End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalMain;
