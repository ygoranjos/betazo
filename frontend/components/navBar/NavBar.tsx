"use client";

import Image from "next/image";
import Link from "next/link";
import Select from "../select/Select";
import type { SelectOption } from "@/types";
import { usePathname } from "next/navigation";
import { useAuth, useBalance, useLogout } from "@/hooks";
import { useUIStore } from "@/store";
import uk from "/public/img/header/uk.png";
import logo from "/public/img/logo/logo.png";

const lang: SelectOption[] = [
  { id: 1, name: "En" },
  { id: 2, name: "Cy" },
  { id: 3, name: "Et" },
];

const NavBar = () => {
  // Use UI store for mobile menu state instead of local useState
  const { mobileMenuOpen, toggleMobileMenu, dashboardMenuOpen, toggleDashboardMenu } = useUIStore();
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");
  const { user, isAuthenticated } = useAuth();
  const balance = useBalance();
  const logout = useLogout();

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  const handleDropdownClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleDashboardMenu();
  };

  return (
    <header className={`header-section ${isAuthenticated && user ? "dashboard__header" : "py-1 py-lg-3"}`}>
      <div className="container-fluid p-0">
        <div className="header-wrapper">
          <div className="menu__left__wrap">
            <div className="logo-menu px-2">
              <Link href="/" className="logo">
                <Image src={logo} alt="logo" />
              </Link>
            </div>
            <div className="lang d-flex align-items-center px-2">
              <div className="language__wrap">
                <div className="flag">
                  <Image src={uk} alt="flag" />
                </div>
                {/* Select */}
                <Select data={lang} />
              </div>
              <div
                className={`header-bar d-lg-none ${mobileMenuOpen ? "active" : ""}`}
                onClick={toggleMobileMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <ul className={`main-menu ${mobileMenuOpen ? "active" : ""}`}>
              <li>
                <Link href="/" onClick={() => mobileMenuOpen && toggleMobileMenu()}>
                  <span>Live</span>
                </Link>
              </li>
              <li>
                <Link href="/" onClick={() => mobileMenuOpen && toggleMobileMenu()}>
                  <span>Sports Betting</span>
                </Link>
              </li>
              <li>
                <Link href="/casino" onClick={() => mobileMenuOpen && toggleMobileMenu()}>
                  <span>Casino</span>
                </Link>
              </li>
              <li>
                <Link href="URL:void(0)" onClick={() => mobileMenuOpen && toggleMobileMenu()}>
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
              {isAuthenticated && user ? (
                <li className="cmn-grp">
                  <span className="cmn--btn">
                    <span className="rela">Deposit</span>
                  </span>
                </li>
              ) : (
                <li className="cmn-grp">
                  <Link
                    href="URL:void(0)"
                    className="cmn--btn"
                    data-bs-toggle="modal"
                    data-bs-target="#signInPin"
                    onClick={() => mobileMenuOpen && toggleMobileMenu()}
                  >
                    <span>Sign In</span>
                  </Link>
                  <Link
                    href="URL:void(0)"
                    className="cmn--btn2"
                    data-bs-toggle="modal"
                    data-bs-target="#signUpPin"
                    onClick={() => mobileMenuOpen && toggleMobileMenu()}
                  >
                    <span className="rela">Sign Up</span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
          {isAuthenticated && user ? (
            <div className="dashboar__wrap">
              <div className="items d__text">
                <span className="small">{user.username}</span>
                <h6>{balance !== null ? `$${balance.toFixed(2)}` : "—"}</h6>
              </div>
              <div className="items d__cmn">
                <Link href="#" className="cmn--btn">
                  <span>Deposit</span>
                </Link>
              </div>
              <div className="items dashboar__social">
                <Link href="#" className="icons">
                  <i className="icon-gift"></i>
                  <span className="count">2</span>
                </Link>
                <Link href="#" className="icons">
                  <i className="icon-message"></i>
                  <span className="count">2</span>
                </Link>
                <div className="custom-dropdown" onClick={handleDropdownClick}>
                  <div className="custom-dropdown__user" data-set="custom-dropdown">
                    <Link href="#" className="icons">
                      <i className="icon-user text-white"></i>
                    </Link>
                  </div>
                  <div className={`custom-dropdown__content ${dashboardMenuOpen ? "is-open" : ""}`}>
                    <div className="custom-dropdown__body">
                      <ul className="custom-dropdown__list">
                        <li>
                          <Link href={isDashboard ? "/" : "/dashboard"} className="custom-dropdown__body-link">
                            <span className="custom-dropdown__body-icon">
                              <i className={isDashboard ? "fas fa-home" : "fas fa-layer-group"}></i>
                            </span>
                            <span className="custom-dropdown__body-text">{isDashboard ? "Home" : "Dashboard"}</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="custom-dropdown__body-link">
                            <span className="custom-dropdown__body-icon">
                              <i className="fas fa-cog"></i>
                            </span>
                            <span className="custom-dropdown__body-text">Settings</span>
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={handleLogout}
                            className="custom-dropdown__body-link"
                            style={{ background: "none", border: "none", width: "100%", textAlign: "left", padding: 0, cursor: "pointer" }}
                          >
                            <span className="custom-dropdown__body-icon">
                              <i className="fas fa-sign-out-alt"></i>
                            </span>
                            <span className="custom-dropdown__body-text">Logout</span>
                          </button>
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
          ) : (
            <div className="mneu-btn-grp">
              <div className="language__wrap">
                <div className="flag">
                  <Image src={uk} alt="flag" />
                </div>
                <Select data={lang} />
              </div>
              <Link
                href="URL:void(0)"
                className="cmn--btn"
                data-bs-toggle="modal"
                data-bs-target="#signInPin"
              >
                <span>Sign In</span>
              </Link>
              <Link
                href="URL:void(0)"
                className="cmn--btn2"
                data-bs-toggle="modal"
                data-bs-target="#signUpPin"
              >
                <span className="rela">Sign Up</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
