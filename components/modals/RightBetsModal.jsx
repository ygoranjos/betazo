import Link from "next/link";

const RightBetsModal = () => {
  return (
    <div
      className="modal mybets__modal"
      id="betsp"
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
          <div className="right__site__section">
            <div className="betslip__wrap">
              <h5 className="betslip__title">Betslip</h5>
              <div className="nav" id="nav-tabr" role="tablist">
                <button
                  className="nav-link "
                  id="nav-home-tabr"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-homer"
                  type="button"
                  role="tab"
                  aria-selected="true"
                >
                  Single
                </button>
                <button
                  className="nav-link active"
                  id="nav-profile-tabr"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profiler"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  Multiple
                </button>
                <button
                  className="nav-link"
                  id="nav-contact-tabr"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-contactr"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  System
                </button>
              </div>
              <div className="tab-content" id="nav-tabContentr">
                <div
                  className="tab-pane fade text-white "
                  id="nav-homer"
                  role="tabpanel"
                  aria-labelledby="nav-home-tabr"
                  tabIndex="0"
                >
                  <div className="multiple__components">
                    <div className="multiple__items">
                      <div className="multiple__head">
                        <div className="multiple__left">
                          <span className="icons">
                            <i className="icon-football"></i>
                          </span>
                          <span>Real Kashmir vs Trau FC</span>
                        </div>
                        <Link href="URL:void(0)" className="cros">
                          <i className="icon-cross"></i>
                        </Link>
                      </div>
                      <div className="multiple__point">
                        <span className="pbox">50.2</span>
                        <span className="rightname">
                          <span className="fc">Trau FC</span>
                          <span className="point">1x2</span>
                        </span>
                      </div>
                    </div>
                    <div className="total__odds">
                      <div className="total__head">
                        <h6 className="odd">Total Odds</h6>
                        <span>25</span>
                      </div>
                      <div className="wrapper">
                        <div className="result">
                          <span>Stake amount, $</span>
                          <span className="result">0.00 $</span>
                        </div>
                        <div className="buttons">
                          <button type="button">5</button>
                          <button type="button">10</button>
                          <button type="button">50</button>
                        </div>
                      </div>
                    </div>
                    <div className="possible__pay">
                      <span>Possible Payout</span>
                      <span>0.00$</span>
                    </div>
                    <Link href="URL:void(0)" className="cmn--btn2">
                      <span>Sign In & Bet</span>
                    </Link>
                  </div>
                  <div className="setting__area">
                    <div className="tab-content" id="nav-tabContentsettingr">
                      <div
                        className="tab-pane fade text-white"
                        id="nav-homesettr"
                        role="tabpanel"
                        aria-labelledby="nav-home-tabsettingr"
                        tabIndex="0"
                      >
                        <div className="sign__bets__wrap">
                          <h5 className="betslip__title">Betslip</h5>
                          <div className="sign__boxes">
                            <div className="content">
                              <h6>Erase Betslip</h6>
                              <p>Are you sure you want to erase Betslip?</p>
                              <div className="btn__grp">
                                <Link href="URL:void(0)" className="cmn--btn">
                                  <span>No</span>
                                </Link>
                                <Link href="URL:void(0)" className="cmn--btn2">
                                  <span>Accept</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade text-white"
                        id="nav-homeett2r"
                        role="tabpanel"
                        aria-labelledby="nav-home-tabsetting2r"
                        tabIndex="0"
                      >
                        <div className="sign__bets__wrap">
                          <h5 className="betslip__title">Betslip</h5>
                          <div className="setting__boxes">
                            <div className="setting__boxes__head">
                              <span>Accept Changes automatically?</span>
                              <Link href="URL:void(0)">
                                <i className="icon-cross"></i>
                              </Link>
                            </div>
                            <div className="check__wrap">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="check11"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="check11"
                                >
                                  Accept any odds changes
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="check2oa"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="check2oa"
                                >
                                  Only accept increased odds
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="check3a"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="check3a"
                                >
                                  Always ask
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="nav" id="nav-tabsetingr" role="tablist">
                      <button
                        className="nav-link"
                        id="nav-home-tabsettingr"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-homesettr"
                        type="button"
                        role="tab"
                        aria-selected="true"
                      >
                        <span className="icons">
                          <i className="icon-trush"></i>
                        </span>
                        <span className="text">Sign IN & Bet</span>
                      </button>
                      <button
                        className="nav-link"
                        id="nav-home-tabsetting2r"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-homeett2r"
                        type="button"
                        role="tab"
                        aria-selected="false"
                      >
                        <span className="icons">
                          <i className="icon-setting"></i>
                        </span>
                        <span className="text">Settings</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade text-white show active"
                  id="nav-profiler"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tabr"
                  tabIndex="0"
                >
                  <div className="multiple__components">
                    <div className="multiple__items">
                      <div className="multiple__head">
                        <div className="multiple__left">
                          <span className="icons">
                            <i className="icon-football"></i>
                          </span>
                          <span>Real Kashmir vs Trau FC</span>
                        </div>
                        <Link href="URL:void(0)" className="cros">
                          <i className="icon-cross"></i>
                        </Link>
                      </div>
                      <div className="multiple__point">
                        <span className="pbox">50.2</span>
                        <span className="rightname">
                          <span className="fc">Trau FC</span>
                          <span className="point">1x2</span>
                        </span>
                      </div>
                    </div>
                    <div className="multiple__items">
                      <div className="multiple__head">
                        <div className="multiple__left">
                          <span className="icons">
                            <i className="icon-football"></i>
                          </span>
                          <span>Stodder, Timo vs Kopriva, Vit</span>
                        </div>
                        <Link href="URL:void(0)" className="cros">
                          <i className="icon-cross"></i>
                        </Link>
                      </div>
                      <div className="multiple__point">
                        <span className="pbox">3.66</span>
                        <span className="rightname">
                          <span className="fc">Stodder, Timo</span>
                          <span className="point">Winner</span>
                        </span>
                      </div>
                    </div>
                    <div className="total__odds">
                      <div className="total__head">
                        <h6 className="odd">Total Odds</h6>
                        <span>25</span>
                      </div>
                      <div className="wrapper">
                        <div className="result">
                          <span>Stake amount, $</span>
                          <span className="result">0.00 $</span>
                        </div>
                        <div className="buttons">
                          <button type="button">5</button>
                          <button type="button">10</button>
                          <button type="button">50</button>
                        </div>
                      </div>
                    </div>
                    <Link href="URL:void(0)" className="cmn--btn2">
                      <span>Sign In & Bet</span>
                    </Link>
                  </div>
                </div>
                <div
                  className="tab-pane fade text-white"
                  id="nav-contactr"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tabr"
                  tabIndex="0"
                >
                  <div className="multiple__components">
                    <div className="multiple__items">
                      <div className="multiple__head">
                        <div className="multiple__left">
                          <span className="icons">
                            <i className="icon-football"></i>
                          </span>
                          <span>Real Kashmir vs Trau FC</span>
                        </div>
                        <Link href="URL:void(0)" className="cros">
                          <i className="icon-cross"></i>
                        </Link>
                      </div>
                      <div className="multiple__point">
                        <span className="pbox">50.2</span>
                        <span className="rightname">
                          <span className="fc">Trau FC</span>
                          <span className="point">1x2</span>
                        </span>
                      </div>
                    </div>
                    <div className="multiple__items">
                      <div className="multiple__head">
                        <div className="multiple__left">
                          <span className="icons">
                            <i className="icon-football"></i>
                          </span>
                          <span>Stodder, Timo vs Kopriva, Vit</span>
                        </div>
                        <Link href="URL:void(0)" className="cros">
                          <i className="icon-cross"></i>
                        </Link>
                      </div>
                      <div className="multiple__point">
                        <span className="pbox">3.66</span>
                        <span className="rightname">
                          <span className="fc">Stodder, Timo</span>
                          <span className="point">Winner</span>
                        </span>
                      </div>
                    </div>
                    <div className="total__odds">
                      <div className="total__head">
                        <h6 className="odd">Total Odds</h6>
                        <span>25</span>
                      </div>
                      <div className="wrapper">
                        <div className="result">
                          <span>Stake amount, $</span>
                          <span className="result">0.00 $</span>
                        </div>
                        <div className="buttons">
                          <button type="button">5</button>
                          <button type="button">10</button>
                          <button type="button">50</button>
                        </div>
                      </div>
                    </div>
                    <Link href="URL:void(0)" className="cmn--btn2">
                      <span>Sign In & Bet</span>
                    </Link>
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

export default RightBetsModal;
