"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Select from "../select/Select";
import uk from "/public/img/header/uk.png";
import logo from "/public/img/logo/logo.png";

const lang = [
  { id: 1, name: "En" },
  { id: 2, name: "Cy" },
  { id: 3, name: "Et" },
];

const NavBar = () => {
  const [active, setActive] = useState(false);

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
                className={`header-bar d-lg-none ${active ? "active" : ""}`}
                onClick={() => setActive(!active)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <ul className={`main-menu ${active ? "active" : ""}`}>
              <li>
                <Link href="/">
                  <span>Live</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span>Sports Betting</span>
                </Link>
              </li>
              <li>
                <Link href="/casino">
                  <span>Casino</span>
                </Link>
              </li>
              <li>
                <Link href="URL:void(0)">
                  <span>Lucky Drops</span>
                </Link>
              </li>
              <li>
                <Link href="/livecasino">
                  <span>Live Casino</span>
                </Link>
              </li>
              <li>
                <Link href="/promotions">
                  <span>Promotions</span>
                </Link>
              </li>
              <li className="cmn-grp">
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
              </li>
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
        </div>
      </div>
    </header>
  );
};

export default NavBar;
