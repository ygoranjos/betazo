import Image from "next/image";
import Link from "next/link";
import modal from "/public/img/modal/modal.png";

const LoginModal = () => {
  return (
    <div
      className="modal register__modal"
      id="signInPin"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="row align-items-center g-4">
                <div className="col-lg-6">
                  <div className="modal__left">
                    <Image src={modal} alt="modal" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="modal__right">
                    <ul className="nav nav-tabs" id="myTab2" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link "
                          id="home-tab1"
                          data-bs-toggle="tab"
                          data-bs-target="#home2"
                          type="button"
                          role="tab"
                          aria-selected="true"
                        >
                          Sign Up
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="contact-tab3"
                          data-bs-toggle="tab"
                          data-bs-target="#contact2"
                          type="button"
                          role="tab"
                          aria-selected="false"
                        >
                          Sign In
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent2">
                      <div
                        className="tab-pane fade "
                        id="home2"
                        role="tabpanel"
                      >
                        <div className="form__tabs__wrap">
                          <div className="focus__icon">
                            <p>or registration via social media accounts</p>
                            <div className="social__head">
                              <ul className="social">
                                <li>
                                  <Link href="URL:void(0)">
                                    <i className="fa-brands fa-facebook-f"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="URL:void(0)">
                                    <i className="fab fa-twitter"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="URL:void(0)">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <form action="#0">
                            <div className="form__grp">
                              <label htmlFor="emailsign">Email</label>
                              <input
                                type="email"
                                id="emailsign"
                                placeholder="Email Your"
                              />
                            </div>
                            <div className="form__grp">
                              <label htmlFor="toggle-password3">Password</label>
                              <input
                                id="toggle-password3"
                                type="password"
                                placeholder="Your Password"
                              />
                              <span
                                id="#toggle-password3"
                                className="fa fa-fw fa-eye field-icon toggle-password3"
                              ></span>
                            </div>
                            <div className="login__signup">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="remem"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="remem"
                                >
                                  Remember me
                                </label>
                              </div>
                              <Link href="URL:void(0)">Forgot Password</Link>
                            </div>
                            <div className="create__btn">
                              <Link href="URL:void(0)" className="cmn--btn">
                                <span>Sign Up</span>
                              </Link>
                            </div>
                            <p>
                              Do you have an account?{" "}
                              <Link href="URL:void(0)">Registration</Link>
                            </p>
                          </form>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade show active"
                        id="contact2"
                        role="tabpanel"
                      >
                        <div className="form__tabs__wrap">
                          <div className="focus__icon">
                            <p>or registration via social media accounts</p>
                            <div className="social__head">
                              <ul className="social">
                                <li>
                                  <Link href="URL:void(0)">
                                    <i className="fa-brands fa-facebook-f"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="URL:void(0)">
                                    <i className="fab fa-twitter"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="URL:void(0)">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <form action="#0">
                            <div className="form__grp">
                              <label htmlFor="email34">Email</label>
                              <input
                                type="email"
                                id="email34"
                                placeholder="Email Your"
                              />
                            </div>
                            <div className="form__grp">
                              <label htmlFor="toggle-password10">
                                Password
                              </label>
                              <input
                                id="toggle-password10"
                                type="password"
                                placeholder="Your Password"
                              />
                              <span
                                id="#toggle-password10"
                                className="fa fa-fw fa-eye field-icon toggle-password10"
                              ></span>
                            </div>
                            <div className="create__btn">
                              <Link href="URL:void(0)" className="cmn--btn">
                                <span>Sign Up</span>
                              </Link>
                            </div>
                            <p>
                              Do you have an account?{" "}
                              <Link href="URL:void(0)">Login</Link>
                            </p>
                          </form>
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

export default LoginModal;
