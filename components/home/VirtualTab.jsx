"use client";

import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import FooterHome from "../footer/FooterHome";
import TimeTableTab from "./TimeTableTab";
import play from "/public/img/games/play.png";
import virtual2 from "/public/img/virtuals/virtual2.jpg";
import virtual3 from "/public/img/virtuals/virtual3.jpg";
import vr1 from "/public/img/virtuals/vr1.jpg";
import vr2 from "/public/img/virtuals/vr2.jpg";
import vr3 from "/public/img/virtuals/vr3.jpg";
import vr4 from "/public/img/virtuals/vr4.jpg";
import vr5 from "/public/img/virtuals/vr5.jpg";
import vr6 from "/public/img/virtuals/vr6.jpg";
import vr7 from "/public/img/virtuals/vr7.jpg";
import vr8 from "/public/img/virtuals/vr8.jpg";
import vr9 from "/public/img/virtuals/vr9.jpg";
import world from "/public/img/virtuals/world.jpg";

const VirtualTab = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* TODO: Video Modal  */}
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="orf582WJV_c"
        onClose={() => setOpen(false)}
      />

      <div
        className="tab-pane mt__30 text-white fade"
        id="mainTab12"
        role="tabpanel"
        tabIndex="0"
      >
        {/* main Body */}
        <div className="main__body__wrap left__right__space pb-60">
          <div className="virtual__tabs">
            <ul
              className="nav nav-pills mb-3"
              id="pills-tabsports"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  data-bs-toggle="pill"
                  data-bs-target="#virtualfoot1"
                  type="button"
                  role="tab"
                  aria-selected="true"
                >
                  <span className="icon">
                    <i className="icon-football"></i>
                  </span>
                  <span>Football</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="pill"
                  data-bs-target="#virtualfoot2"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  <span className="icon">
                    <i className="icon-basketball"></i>
                  </span>
                  <span>Basketball</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="pill"
                  data-bs-target="#virtualfoot3"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  <span className="icon">
                    <i className="icon-afootball"></i>
                  </span>
                  <span>American Foot..</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="pill"
                  data-bs-target="#virtualfoot4"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  <span className="icon">
                    <i className="icon-live"></i>
                  </span>
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContent">
            {/* football */}
            <div
              className="tab-pane fade show active"
              id="virtualfoot1"
              role="tabpanel"
              aria-labelledby="virtualfoot1"
              tabIndex="0"
            >
              <div className="world__cup__area">
                <div className="world__tabs">
                  <ul
                    className="nav nav-pills mb-3"
                    id="pills-tabworld"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        data-bs-toggle="pill"
                        data-bs-target="#worlds1"
                        type="button"
                        role="tab"
                        aria-selected="true"
                      >
                        <span>World Cup</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        data-bs-toggle="pill"
                        data-bs-target="#worlds2"
                        type="button"
                        role="tab"
                        aria-selected="false"
                      >
                        <span>Champions Cup</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        data-bs-toggle="pill"
                        data-bs-target="#worlds3"
                        type="button"
                        role="tab"
                        aria-selected="false"
                      >
                        <span>Permiership</span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="tab-content" id="pills-tabContentworldsss100">
                  <div
                    className="tab-pane fade active show"
                    id="worlds1"
                    role="tabpanel"
                    aria-labelledby="worlds1"
                    tabIndex="0"
                  >
                    <div className="world__thumb__wrap">
                      <div className="thumb">
                        <Image src={world} alt="virtuals" />
                        <button
                          className="play-btn bg-transparent border-0"
                          onClick={() => setOpen(true)}
                        >
                          <Image src={play} alt="img" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="worlds2"
                    role="tabpanel"
                    aria-labelledby="worlds2"
                    tabIndex="0"
                  >
                    <div className="world__thumb__wrap">
                      <div className="thumb">
                        <Image src={virtual2} alt="virtuals" />
                        <button
                          className="play-btn bg-transparent border-0"
                          onClick={() => setOpen(true)}
                        >
                          <Image src={play} alt="img" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="worlds3"
                    role="tabpanel"
                    aria-labelledby="worlds3"
                    tabIndex="0"
                  >
                    <div className="world__thumb__wrap">
                      <div className="thumb">
                        <Image src={virtual3} alt="virtuals" />
                        <button
                          className="play-btn bg-transparent border-0"
                          onClick={() => setOpen(true)}
                        >
                          <Image src={play} alt="img" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Time Table Tab */}
              <TimeTableTab id="104" />
            </div>
            {/* basketball */}
            <div
              className="tab-pane fade"
              id="virtualfoot2"
              role="tabpanel"
              aria-labelledby="virtualfoot2"
              tabIndex="0"
            >
              <div className="world__cup__area">
                <div className="world__tabs">
                  <ul
                    className="nav nav-pills mb-3"
                    id="pills-tabbas"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        data-bs-toggle="pill"
                        data-bs-target="#worlds1bas"
                        type="button"
                        role="tab"
                        aria-selected="true"
                      >
                        <span>World Cup</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        data-bs-toggle="pill"
                        data-bs-target="#worlds2bas"
                        type="button"
                        role="tab"
                        aria-selected="false"
                      >
                        <span>Champions Cup</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        data-bs-toggle="pill"
                        data-bs-target="#worlds3bas"
                        type="button"
                        role="tab"
                        aria-selected="false"
                      >
                        <span>Permiership</span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="tab-content" id="pills-tabContentworldsss101">
                  <div
                    className="tab-pane fade active show"
                    id="worlds1bas"
                    role="tabpanel"
                    aria-labelledby="worlds1bas"
                    tabIndex="0"
                  >
                    <div className="world__thumb__wrap">
                      <div className="thumb">
                        <Image src={virtual3} alt="virtuals" />
                        <button
                          className="play-btn bg-transparent border-0"
                          onClick={() => setOpen(true)}
                        >
                          <Image src={play} alt="img" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="worlds2bas"
                    role="tabpanel"
                    aria-labelledby="worlds2bas"
                    tabIndex="0"
                  >
                    <div className="world__thumb__wrap">
                      <div className="thumb">
                        <Image src={virtual2} alt="virtuals" />
                        <button
                          className="play-btn bg-transparent border-0"
                          onClick={() => setOpen(true)}
                        >
                          <Image src={play} alt="img" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="worlds3bas"
                    role="tabpanel"
                    aria-labelledby="worlds3bas"
                    tabIndex="0"
                  >
                    <div className="world__thumb__wrap">
                      <div className="thumb">
                        <Image src={virtual3} alt="virtuals" />
                        <button
                          className="play-btn bg-transparent border-0"
                          onClick={() => setOpen(true)}
                        >
                          <Image src={play} alt="img" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Time Table Tab */}
              <TimeTableTab id="101" />
            </div>
            {/* American Football */}
            <div
              className="tab-pane fade"
              id="virtualfoot3"
              role="tabpanel"
              aria-labelledby="virtualfoot3"
              tabIndex="0"
            >
              <div className="world__cup__area">
                <div className="world__tabs">
                  <ul
                    className="nav nav-pills mb-3"
                    id="pills-tabaffot"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        data-bs-toggle="pill"
                        data-bs-target="#worlds1afoot"
                        type="button"
                        role="tab"
                        aria-selected="true"
                      >
                        <span>World Cup</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        data-bs-toggle="pill"
                        data-bs-target="#worlds2afoot"
                        type="button"
                        role="tab"
                        aria-selected="false"
                      >
                        <span>Champions Cup</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        data-bs-toggle="pill"
                        data-bs-target="#worlds3afoot"
                        type="button"
                        role="tab"
                        aria-selected="false"
                      >
                        <span>Permiership</span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="tab-content" id="pills-tabContentworldsss102">
                  <div
                    className="tab-pane fade active show"
                    id="worlds1afoot"
                    role="tabpanel"
                    aria-labelledby="worlds1afoot"
                    tabIndex="0"
                  >
                    <div className="world__thumb__wrap">
                      <div className="thumb">
                        <Image src={virtual2} alt="virtuals" />
                        <button
                          className="play-btn bg-transparent border-0"
                          onClick={() => setOpen(true)}
                        >
                          <Image src={play} alt="img" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="worlds2afoot"
                    role="tabpanel"
                    aria-labelledby="worlds2afoot"
                    tabIndex="0"
                  >
                    <div className="world__thumb__wrap">
                      <div className="thumb">
                        <Image src={virtual2} alt="virtuals" />
                        <button
                          className="play-btn bg-transparent border-0"
                          onClick={() => setOpen(true)}
                        >
                          <Image src={play} alt="img" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="worlds3afoot"
                    role="tabpanel"
                    aria-labelledby="worlds3afoot"
                    tabIndex="0"
                  >
                    <div className="world__thumb__wrap">
                      <div className="thumb">
                        <Image src={virtual3} alt="virtuals" />
                        <button
                          className="play-btn bg-transparent border-0"
                          onClick={() => setOpen(true)}
                        >
                          <Image src={play} alt="img" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Time Table Tab */}
              <TimeTableTab id="103" />
            </div>
            {/* Video play */}
            <div
              className="tab-pane fade"
              id="virtualfoot4"
              role="tabpanel"
              aria-labelledby="virtualfoot4"
              tabIndex="0"
            >
              <div className="virtual__video__wrap">
                {[vr1, vr2, vr3, vr4, vr5, vr6, vr7, vr8, vr9].map((itm, i) => (
                  <div key={i} className="items">
                    <div className="thumb">
                      <Image src={itm} alt="vrimg" />
                      <button
                        className="play-btn bg-transparent border-0"
                        onClick={() => setOpen(true)}
                      >
                        <Image src={play} alt="img" />
                      </button>
                    </div>
                    <span>Instant Football</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* main Body */}

        {/* Footer Start */}
        <FooterHome />
        {/* Footer End */}
      </div>
    </>
  );
};

export default VirtualTab;
