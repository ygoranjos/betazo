"use client";

import { useState } from "react";
import DashboardSideBar from "../common/DashboardSideBar";
import FooterMobile from "../footer/FooterMobile";
import DashboardHeader from "../header/DashboardHeader";

const DashboardMain = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div onClick={() => setIsOpen(false)}>
      {/* Dashboard Header */}
      <DashboardHeader isOpen={isOpen} setIsOpen={setIsOpen} />

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
