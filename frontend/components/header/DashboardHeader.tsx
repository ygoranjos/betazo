"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "/public/img/logo/logo.png";
import { useUIStore } from "@/store";

const DashboardHeader = () => {
  // Use UI store instead of local useState
  const { mobileMenuOpen, toggleMobileMenu, dashboardMenuOpen, toggleDashboardMenu } = useUIStore();

  const handleDropdownClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleDashboardMenu();
  };

  return (
    <header className="header-section dashboard__header">
      <div className="container p-0">
        <div className="header-wrapper">
          <div className="menu__left__wrap">
            <div className="logo-menu px-2">
              <Link href="/" className="logo">
                <Image src={logo} alt="logo" />
              </Link>
            </div>
            <ul className={`main-menu ${mobileMenuOpen ? "active" : ""}`}>
              <li>
                <Link href="/" onClick={() => mobileMenuOpen && toggleMobileMenu()}>
                  <span>Live</span>
                </Link>
              </li>
              <li>
                <Link href="/sportsbetting" onClick={() => mobileMenuOpen && toggleMobileMenu()}>
                  <span>Sports Betting</span>
                </Link>
              </li>
              <li>
                <Link href="/casino" className="active" onClick={() => mobileMenuOpen && toggleMobileMenu()}>
                  <span>Casino</span>
                </Link>
              </li>
              <li>
                <Link href="URL:void()" onClick={() => mobileMenuOpen && toggleMobileMenu()}>
                  <span>Lucky Drops</span>
                </Link>
              </li>
              <li>
                <Link href="/livecasino" onClick={() => mobileMenuOpen && toggleMobileMenu()}>
                  <span>Live Casino</span>
                </Link>
              </li>
              <li>
                <Link href="/promotions" onClick={() => mobileMenuOpen && toggleMobileMenu()}>
                  <span>Promotions</span>
                </Link>
              </li>
              <li className="cmn-grp">
                <span className="cmn--btn">
                  <span className="rela">Deposit</span>
                </span>
              </li>
            </ul>
          </div>
          <div className="dashboar__wrap">
            <div className="items d__text">
              <span className="small">Your balance</span>
              <h6>$9.22</h6>
            </div>
            <div className="items d__cmn">
              <Link href="URL:void()" className="cmn--btn">
                <span>Deposit</span>
              </Link>
            </div>
            <div className="items dashboar__social">
              <Link href="URL:void()" className="icons">
                <i className="icon-gift"></i>
                <span className="count">2</span>
              </Link>
              <Link href="URL:void()" className="icons">
                <i className="icon-message"></i>
                <span className="count">2</span>
              </Link>
              <div className="custom-dropdown" onClick={handleDropdownClick}>
                <div className="custom-dropdown__user" data-set="custom-dropdown">
                  <Link href="URL:void()" className="icons">
                    <i className="icon-user text-white"></i>
                  </Link>
                </div>
                <div className={`custom-dropdown__content ${dashboardMenuOpen ? "is-open" : ""}`}>
                  <div className="custom-dropdown__body">
                    <ul className="custom-dropdown__list">
                      <li>
                        <Link href="/dashboard" className="custom-dropdown__body-link">
                          <span className="custom-dropdown__body-icon">
                            <i className="fas fa-layer-group"></i>
                          </span>
                          <span className="custom-dropdown__body-text">Dashboard</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="URL:void()" className="custom-dropdown__body-link">
                          <span className="custom-dropdown__body-icon">
                            <i className="fas fa-cog"></i>
                          </span>
                          <span className="custom-dropdown__body-text">Settings</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="URL:void()" className="custom-dropdown__body-link">
                          <span className="custom-dropdown__body-icon">
                            <i className="fas fa-sign-out-alt"></i>
                          </span>
                          <span className="custom-dropdown__body-text">Logout</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="lang d-flex align-items-center px-2">
              <div
                className={`header-bar d-lg-none ${mobileMenuOpen ? "active" : ""}`}
                onClick={toggleMobileMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
