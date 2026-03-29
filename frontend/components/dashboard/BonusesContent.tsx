import Image from "next/image";
import Link from "next/link";
import bonus1 from "/public/img/profile/bonus1.jpg";
import bonus2 from "/public/img/profile/bonus2.jpg";
import bonus3 from "/public/img/profile/bonus3.jpg";
import bonus4 from "/public/img/profile/bonus4.jpg";

const BonusesContent = () => {
  return (
    <>
      <div className="dashboard__body__wrap">
        <h3 className="account__head mb__30">Bonuses</h3>
      </div>
      <div className="bonuses__wrap">
        <h4 className="bonus">Sports bets</h4>
        <div className="row mb-4 g-4">
          <div className="col-xxl-6 col-xl-6 col-lg-12">
            <div className="promomy__items bonus__last__items">
              <div className="thumb">
                <Image src={bonus1} alt="img" />
              </div>
              <div className="content">
                <h4>2022 Winter bonus 3</h4>
                <span className="smalltext">Use code at deposit</span>
                <Link href="URL:void(0)" className="cmn--btn">
                  <span>WELCOME100</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-12">
            <div className="promomy__items bonus__last__items">
              <div className="thumb">
                <Image src={bonus2} alt="img" />
              </div>
              <div className="content">
                <h4>Betting Welcome Bonus</h4>
                <Link href="URL:void(0)" className="cmn--btn">
                  <span>WELCOME100</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <h4 className="bonus">Sports bets</h4>
        <div className="row g-4">
          <div className="col-xxl-6 col-xl-6 col-lg-12">
            <div className="promomy__items bonus__last__items">
              <div className="thumb">
                <Image src={bonus3} alt="img" />
              </div>
              <div className="content">
                <h4>Christmas Bonus</h4>
                <span className="smalltext">Use code at deposit</span>
                <Link href="URL:void(0)" className="cmn--btn">
                  <span>WELCOME100</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-12">
            <div className="promomy__items bonus__last__items">
              <div className="thumb">
                <Image src={bonus4} alt="img" />
              </div>
              <div className="content">
                <h4>Welcome Casino Bonus</h4>
                <Link href="URL:void(0)" className="cmn--btn">
                  <span>WELCOME100</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BonusesContent;
