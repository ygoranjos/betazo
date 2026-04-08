"use client";

import DashboardSideBar from "../common/DashboardSideBar";
import FooterMobile from "../footer/FooterMobile";
import DashboardHeader from "../header/DashboardHeader";
import type { LayoutProps } from "@/types";
import { useUIStore } from "@/store";

const DashboardMain = ({ children }: LayoutProps) => {
  const { setDashboardMenu } = useUIStore();

  return (
    <div onClick={() => setDashboardMenu(false)}>
      {/* Dashboard Header */}
      <DashboardHeader />

      <section className="dashboard__body mt__30 pb-60">
        <div className="container">
          <div className="row g-4">
            <div className="col-xxl-3 col-xl-3 col-lg-4">
              {/* Dashboard Side Bar */}
              <DashboardSideBar />
            </div>
            <div className="col-xxl-9 col-xl-9 col-lg-8">{children}</div>
          </div>
        </div>
        {/* footer Bottom Menu */}
        <FooterMobile />
        {/* footer Bottom Menu */}
      </section>
    </div>
  );
};

export default DashboardMain;
