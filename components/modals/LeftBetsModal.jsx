import Image from "next/image";
import Link from "next/link";
import cup from "/public/img/leftmenu/cup.png";
import europ from "/public/img/leftmenu/europ.png";
import start from "/public/img/leftmenu/start.png";

const LeftBetsModal = () => {
  return (
    <div
      className="modal event__modal"
      id="eventsp"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog  modal-lg modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header mt-2">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="left__site__section">
            <div className="tab-content" id="myTabContentmainevent">
              <div
                className="tab-pane text-white fade show active"
                id="mainTabevent"
                role="tabpanel"
                tabIndex="0"
              >
                <div className="popular__events__body">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-xxl-2 col-xl-3 col-lg-3">
                        <div className="popular__events__left">
                          <div className="popular__events__head">
                            <h5>Popular events</h5>
                            <ul>
                              <li>
                                <span>
                                  <Image src={cup} alt="img" />
                                </span>
                                <span>Eorld Cup 2022</span>
                              </li>
                              <li>
                                <span>
                                  <Image src={europ} alt="img" />
                                </span>
                                <span>Euroleague. Season 22/23</span>
                              </li>
                            </ul>
                          </div>
                          <div className="star__wrap">
                            <span>
                              <Image src={start} alt="img" />
                            </span>
                            <span>Favorites</span>
                          </div>
                          <div className="prematch__wrap">
                            <div
                              className="nav"
                              id="nav-tabpreevent"
                              role="tablist"
                            >
                              <button
                                className="nav-link active"
                                id="nav-home-tabpreevent"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-homepreevent"
                                type="button"
                                role="tab"
                                aria-selected="true"
                              >
                                Live
                              </button>
                              <button
                                className="nav-link "
                                id="nav-profile-tabpreevent"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-profilepreevent"
                                type="button"
                                role="tab"
                                aria-selected="false"
                              >
                                Prematch
                              </button>
                            </div>
                            <div
                              className="tab-content"
                              id="nav-tabContentpreevent"
                            >
                              <div
                                className="tab-pane fade text-white show active"
                                id="nav-homepreevent"
                                role="tabpanel"
                                aria-labelledby="nav-home-tabpreevent"
                                tabIndex="0"
                              >
                                <div className="prematch__scopre">
                                  <Link
                                    href="URL:void(0)"
                                    className="prescore__items"
                                  >
                                    <div className="prescore__left">
                                      <span>
                                        <i className="icon-football"></i>
                                      </span>
                                      <span className="score">Soccer</span>
                                    </div>
                                    <div className="prescore__right">
                                      <span>2</span>
                                      <span>
                                        <i className="fa-solid fa-angle-down"></i>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="URL:void(0)"
                                    className="prescore__items"
                                  >
                                    <div className="prescore__left">
                                      <span>
                                        <i className="icon-tennis"></i>
                                      </span>
                                      <span className="score">Tennis</span>
                                    </div>
                                    <div className="prescore__right">
                                      <span>4</span>
                                      <span>
                                        <i className="fa-solid fa-angle-down"></i>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="URL:void(0)"
                                    className="prescore__items"
                                  >
                                    <div className="prescore__left">
                                      <span>
                                        <i className="icon-basketball"></i>
                                      </span>
                                      <span className="score">Basketball</span>
                                    </div>
                                    <div className="prescore__right">
                                      <span>4</span>
                                      <span>
                                        <i className="fa-solid fa-angle-down"></i>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="URL:void(0)"
                                    className="prescore__items"
                                  >
                                    <div className="prescore__left">
                                      <span>
                                        <i className="icon-ttennis"></i>
                                      </span>
                                      <span className="score">
                                        Table Tennis
                                      </span>
                                    </div>
                                    <div className="prescore__right">
                                      <span>8</span>
                                      <span>
                                        <i className="fa-solid fa-angle-down"></i>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="URL:void(0)"
                                    className="prescore__items"
                                  >
                                    <div className="prescore__left">
                                      <span>
                                        <i className="icon-volly"></i>
                                      </span>
                                      <span className="score">Volleyball</span>
                                    </div>
                                    <div className="prescore__right">
                                      <span>2</span>
                                      <span>
                                        <i className="fa-solid fa-angle-down"></i>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="URL:void(0)"
                                    className="prescore__items"
                                  >
                                    <div className="prescore__left">
                                      <span>
                                        <i className="icon-handball"></i>
                                      </span>
                                      <span className="score">Handball</span>
                                    </div>
                                    <div className="prescore__right">
                                      <span>1</span>
                                      <span>
                                        <i className="fa-solid fa-angle-down"></i>
                                      </span>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                              <div
                                className="tab-pane fade text-white "
                                id="nav-profilepreevent"
                                role="tabpanel"
                                aria-labelledby="nav-profile-tabpreevent"
                                tabIndex="0"
                              >
                                <div className="multiple__components">
                                  <div className="prematch__scopre">
                                    <Link
                                      href="URL:void(0)"
                                      className="prescore__items"
                                    >
                                      <div className="prescore__left">
                                        <span>
                                          <i className="icon-football"></i>
                                        </span>
                                        <span className="score">Soccer</span>
                                      </div>
                                      <div className="prescore__right">
                                        <span>2</span>
                                        <span>
                                          <i className="fa-solid fa-angle-down"></i>
                                        </span>
                                      </div>
                                    </Link>
                                    <Link
                                      href="URL:void(0)"
                                      className="prescore__items"
                                    >
                                      <div className="prescore__left">
                                        <span>
                                          <i className="icon-tennis"></i>
                                        </span>
                                        <span className="score">Tennis</span>
                                      </div>
                                      <div className="prescore__right">
                                        <span>4</span>
                                        <span>
                                          <i className="fa-solid fa-angle-down"></i>
                                        </span>
                                      </div>
                                    </Link>
                                    <Link
                                      href="URL:void(0)"
                                      className="prescore__items"
                                    >
                                      <div className="prescore__left">
                                        <span>
                                          <i className="icon-basketball"></i>
                                        </span>
                                        <span className="score">
                                          Basketball
                                        </span>
                                      </div>
                                      <div className="prescore__right">
                                        <span>4</span>
                                        <span>
                                          <i className="fa-solid fa-angle-down"></i>
                                        </span>
                                      </div>
                                    </Link>
                                    <Link
                                      href="URL:void(0)"
                                      className="prescore__items"
                                    >
                                      <div className="prescore__left">
                                        <span>
                                          <i className="icon-ttennis"></i>
                                        </span>
                                        <span className="score">
                                          Table Tennis
                                        </span>
                                      </div>
                                      <div className="prescore__right">
                                        <span>8</span>
                                        <span>
                                          <i className="fa-solid fa-angle-down"></i>
                                        </span>
                                      </div>
                                    </Link>
                                    <Link
                                      href="URL:void(0)"
                                      className="prescore__items"
                                    >
                                      <div className="prescore__left">
                                        <span>
                                          <i className="icon-volly"></i>
                                        </span>
                                        <span className="score">
                                          Volleyball
                                        </span>
                                      </div>
                                      <div className="prescore__right">
                                        <span>2</span>
                                        <span>
                                          <i className="fa-solid fa-angle-down"></i>
                                        </span>
                                      </div>
                                    </Link>
                                    <Link
                                      href="URL:void(0)"
                                      className="prescore__items"
                                    >
                                      <div className="prescore__left">
                                        <span>
                                          <i className="icon-handball"></i>
                                        </span>
                                        <span className="score">Handball</span>
                                      </div>
                                      <div className="prescore__right">
                                        <span>1</span>
                                        <span>
                                          <i className="fa-solid fa-angle-down"></i>
                                        </span>
                                      </div>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBetsModal;
