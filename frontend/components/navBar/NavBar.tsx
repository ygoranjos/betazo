"use client";

import Image from "next/image";
import Link from "next/link";
import Select from "../select/Select";
import type { SelectOption } from "@/types";
import { useAuth, useLogout } from "@/hooks";
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
  const { mobileMenuOpen, toggleMobileMenu } = useUIStore();
  const { user, isAuthenticated } = useAuth();
  const logout = useLogout();

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <header className="header-section py-1 py-lg-3">
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
                  <Link href="/dashboard" className="cmn--btn" onClick={() => mobileMenuOpen && toggleMobileMenu()}>
                    <span>Dashboard</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="cmn--btn2"
                    style={{ border: "none", background: "none", padding: 0 }}
                  >
                    <span className="rela">Logout ({user.username})</span>
                  </button>
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
          <div className="mneu-btn-grp">
            <div className="language__wrap">
              <div className="flag">
                <Image src={uk} alt="flag" />
              </div>
              {/* Select */}
              <Select data={lang} />
            </div>
            {isAuthenticated && user ? (
              <>
                <Link href="/dashboard" className="cmn--btn">
                  <span>Dashboard</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="cmn--btn2"
                  style={{ border: "none", background: "none", padding: 0 }}
                >
                  <span className="rela">Logout ({user.username})</span>
                </button>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
