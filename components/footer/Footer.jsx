import Image from "next/image";
import Link from "next/link";
import rightarrow from "/public/img/footer/rightarrow.png";
import footerlogo from "/public/img/logo/footerlogo.png";

const Footer = () => {
  return (
    <footer className="footer__section pt-60">
      <div className="container">
        <div className="footer__top pb-60">
          <div className="row g-5">
            <div
              className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay="0.9s"
            >
              <div className="widget__items">
                <div className="footer-head">
                  <Link href="URL:void(0)" className="footer-logo">
                    <Image src={footerlogo} alt="f-logo" />
                  </Link>
                </div>
                <div className="content-area">
                  <p>
                    Lorem ipsum dolor sit of the cart amet, consectetur
                    adipiscing elit. I talk out of the moon.
                  </p>
                  <h6>Follow Us</h6>
                  <ul className="social">
                    <li>
                      <Link href="URL:void(0)" className="icon">
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="URL:void(0)" className="icon">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="URL:void(0)" className="icon">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="URL:void(0)" className="icon">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-2 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="widget__items">
                <div className="footer-head">
                  <h3 className="title">Company</h3>
                </div>
                <div className="content-area">
                  <ul className="quick-link">
                    <li>
                      <Link href="index.html">
                        <Image
                          width={17}
                          height={17}
                          src={rightarrow}
                          alt="angle"
                        />
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="URL:void(0)">
                        <Image
                          width={17}
                          height={17}
                          src={rightarrow}
                          alt="angle"
                        />
                        Slots
                      </Link>
                    </li>
                    <li>
                      <Link href="URL:void(0)">
                        <Image
                          width={17}
                          height={17}
                          src={rightarrow}
                          alt="angle"
                        />
                        Tournament
                      </Link>
                    </li>
                    <li>
                      <Link href="URL:void(0)">
                        <Image
                          width={17}
                          height={17}
                          src={rightarrow}
                          alt="angle"
                        />
                        Jackpots
                      </Link>
                    </li>
                    <li>
                      <Link href="livecasino.html">
                        <Image
                          width={17}
                          height={17}
                          src={rightarrow}
                          alt="angle"
                        />
                        Live Games
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-3 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="widget__items">
                <div className="footer-head">
                  <h3 className="title">Support</h3>
                </div>
                <div className="content-area">
                  <ul className="quick-link">
                    <li>
                      <Link href="URL:void(0)">
                        <Image
                          width={17}
                          height={17}
                          src={rightarrow}
                          alt="angle"
                        />
                        Faqs
                      </Link>
                    </li>
                    <li>
                      <Link href="URL:void(0)">
                        <Image
                          width={17}
                          height={17}
                          src={rightarrow}
                          alt="angle"
                        />
                        Support
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-4 col-xl-5 col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="widget__items">
                <div className="footer-head">
                  <h3 className="title">Subscribe Our Newslatter</h3>
                </div>

                <p>
                  Proin mauris ligula, pretium eu est ut, imperdiet imperdiet
                  massa. Nullam sodales ut orci vehicula aliquam. Suspendisse.
                </p>
                <div className="content-area">
                  <form action="#0">
                    <input type="text" placeholder="Enter Your Email address" />
                    <button className="cmn--btn" type="submit">
                      <span>Subscribe</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="text-white">
            Copyright &copy; 2023,{" "}
            <Link href="URL:void(0)" className="text--base">
              SportOdds
            </Link>{" "}
            - All Right Reserved
          </p>
          <ul className="bottom__ling">
            <li>
              <Link href="URL:void(0)" className="text-white">
                Affiliate program
              </Link>
            </li>
            <li>
              <Link href="URL:void(0)" className="text-white">
                Terms & conditions
              </Link>
            </li>
            <li>
              <Link href="URL:void(0)" className="text-white">
                Bonus terms & conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
