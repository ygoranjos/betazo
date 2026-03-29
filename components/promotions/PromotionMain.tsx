import Image from "next/image";
import Link from "next/link";
import FooterMobile from "../footer/FooterMobile";
import pro1 from "/public/img/games/pro1.png";
import pro2 from "/public/img/games/pro2.png";
import pro3 from "/public/img/games/pro3.png";
import pro4 from "/public/img/games/pro4.png";

const PromotionMain = () => {
  return (
    <section className="main__body__area">
      <div className="container">
        <div className="row g-0">
          <div className="promotions__wrap mt__30 pb-60">
            <h3>Promotions</h3>
            <div className="row g-4">
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="promo__items">
                  <div className="promo__content">
                    <h3>Cashback Bonus</h3>
                    <h2>20% up to €800</h2>
                    <Link href="URL:void(0)" className="cmn--btn2">
                      <span>Get Bonus</span>
                    </Link>
                  </div>
                  <div className="promo__thumb">
                    <Image src={pro2} alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="promo__items">
                  <div className="promo__content">
                    <h3>Casino Welcome bonus</h3>
                    <h2>50% up to €900</h2>
                    <Link href="URL:void(0)" className="cmn--btn2">
                      <span>Get Bonus</span>
                    </Link>
                  </div>
                  <div className="promo__thumb">
                    <Image src={pro1} alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="promo__items">
                  <div className="promo__content">
                    <h3>Weekend Reload Bonus</h3>
                    <h2>€700 + 50 Bonus Spins</h2>
                    <Link href="URL:void(0)" className="cmn--btn2">
                      <span>Get Bonus</span>
                    </Link>
                  </div>
                  <div className="promo__thumb">
                    <Image src={pro3} alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="promo__items">
                  <div className="promo__content">
                    <h3>Casino Welcome bonus</h3>
                    <h2>25% up to €4,000</h2>
                    <Link href="URL:void(0)" className="cmn--btn2">
                      <span>Get Bonus</span>
                    </Link>
                  </div>
                  <div className="promo__thumb">
                    <Image src={pro4} alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer Bottom Menu */}
      <FooterMobile />
      {/* footer Bottom Menu */}
    </section>
  );
};

export default PromotionMain;
