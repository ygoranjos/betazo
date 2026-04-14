"use client";

import dynamic from "next/dynamic";
import PopularEvents from "../common/PopularEvents";
import HomeTab from "./HomeTab"; // Tab ativa — carrega imediatamente

// Tabs inativas: carregadas em background após o render inicial
const LiveTab = dynamic(() => import("./LiveTab"), { ssr: false });
const TodayTab = dynamic(() => import("./TodayTab"), { ssr: false });
const FootballTab = dynamic(() => import("./FootballTab"), { ssr: false });
const TennisTab = dynamic(() => import("./TennisTab"), { ssr: false });
const BasketballTab = dynamic(() => import("./BasketballTab"), { ssr: false });
const IceHockeyTab = dynamic(() => import("./IceHockeyTab"), { ssr: false });
const HandballTab = dynamic(() => import("./HandballTab"), { ssr: false });
const AmericanTab = dynamic(() => import("./AmericanTab"), { ssr: false });
const BaseballTab = dynamic(() => import("./BaseballTab"), { ssr: false });
const HorseRacingTab = dynamic(() => import("./HorseRacingTab"), { ssr: false });
const VirtualTab = dynamic(() => import("./VirtualTab"), { ssr: false });
const FovatiresTab = dynamic(() => import("./FovatiresTab"), { ssr: false });

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
