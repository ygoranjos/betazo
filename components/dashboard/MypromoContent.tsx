import Image from "next/image";
import Link from "next/link";
import promo1 from "/public/img/profile/promo1.jpg";
import promo2 from "/public/img/profile/promo2.jpg";
import promo3 from "/public/img/profile/promo3.jpg";

const MypromoContent = () => {
  return (
    <>
      <div className="dashboard__body__wrap">
        <h3 className="account__head mb__30">My Promos</h3>
        <div className="promocode__wrap">
          <h3>Got a Promo Code?</h3>
          <form action="#0">
            <input type="text" />
            <Link href="URL:void()" className="cmn--btn">
              <span>Check</span>
            </Link>
          </form>
        </div>
      </div>
      <div className="promor__tab">
        <ul className="nav nav-tabs" id="myTabpro" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#protab1"
              type="button"
              role="tab"
              aria-controls="protab1"
              aria-selected="true"
            >
              Offers 3
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#protab2"
              type="button"
              role="tab"
              aria-controls="protab2"
              aria-selected="false"
            >
              In Progress 0
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#protab3"
              type="button"
              role="tab"
              aria-controls="protab3"
              aria-selected="false"
            >
              Used
            </button>
          </li>
        </ul>
      </div>
      <div className="promo__tab__body">
        <div className="tab-content" id="myTabContentpro">
          <div
            className="tab-pane   fade show active"
            id="protab1"
            role="tabpanel"
            aria-labelledby="protab1"
            tabIndex="0"
          >
            <div className="promomy__items mb__30">
              <div className="thumb">
                <Image src={promo1} alt="img" />
              </div>
              <div className="content">
                <h4>Welcome Bonus</h4>
                <p>
                  Get 100% up to $100 as a bonus on your first deposit!Get 100%
                  up to $100 as a bonus on your first deposit!
                </p>
                <span className="smalltext">Use code at deposit</span>
                <Link href="URL:void()" className="cmn--btn">
                  <span>WELCOME100</span>
                </Link>
              </div>
            </div>
            <div className="promomy__items mb__30">
              <div className="thumb">
                <Image src={promo2} alt="img" />
              </div>
              <div className="content">
                <h4>Welcome Bonus</h4>
                <p>
                  Get 100% up to $300 as a bonus on your first deposit!Get 100%
                  up to $100 as a bonus on your first deposit!
                </p>
                <span className="smalltext">Use code at deposit</span>
                <Link href="URL:void()" className="cmn--btn">
                  <span>WELCOME100</span>
                </Link>
              </div>
            </div>
            <div className="promomy__items">
              <div className="thumb">
                <Image src={promo3} alt="img" />
              </div>
              <div className="content">
                <h4>Welcome Bonus</h4>
                <p>
                  Get 100% up to $600 as a bonus on your first deposit!Get 100%
                  up to $100 as a bonus on your first deposit!
                </p>
                <span className="smalltext">Use code at deposit</span>
                <Link href="URL:void()" className="cmn--btn">
                  <span>WELCOME100</span>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="protab2"
            role="tabpanel"
            aria-labelledby="protab2"
            tabIndex="0"
          >
            <div className="promomy__items mb__30">
              <div className="thumb">
                <Image src={promo2} alt="img" />
              </div>
              <div className="content">
                <h4>Welcome Bonus</h4>
                <p>
                  Get 100% up to $300 as a bonus on your first deposit!Get 100%
                  up to $100 as a bonus on your first deposit!
                </p>
                <span className="smalltext">Use code at deposit</span>
                <Link href="URL:void()" className="cmn--btn">
                  <span>WELCOME100</span>
                </Link>
              </div>
            </div>
            <div className="promomy__items mb__30">
              <div className="thumb">
                <Image src={promo1} alt="img" />
              </div>
              <div className="content">
                <h4>Welcome Bonus</h4>
                <p>
                  Get 100% up to $100 as a bonus on your first deposit!Get 100%
                  up to $100 as a bonus on your first deposit!
                </p>
                <span className="smalltext">Use code at deposit</span>
                <Link href="URL:void()" className="cmn--btn">
                  <span>WELCOME100</span>
                </Link>
              </div>
            </div>
            <div className="promomy__items">
              <div className="thumb">
                <Image src={promo3} alt="img" />
              </div>
              <div className="content">
                <h4>Welcome Bonus</h4>
                <p>
                  Get 100% up to $600 as a bonus on your first deposit!Get 100%
                  up to $100 as a bonus on your first deposit!
                </p>
                <span className="smalltext">Use code at deposit</span>
                <Link href="URL:void()" className="cmn--btn">
                  <span>WELCOME100</span>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="protab3"
            role="tabpanel"
            aria-labelledby="protab3"
            tabIndex="0"
          >
            <div className="promomy__items mb__30">
              <div className="thumb">
                <Image src={promo3} alt="img" />
              </div>
              <div className="content">
                <h4>Welcome Bonus</h4>
                <p>
                  Get 100% up to $600 as a bonus on your first deposit!Get 100%
                  up to $100 as a bonus on your first deposit!
                </p>
                <span className="smalltext">Use code at deposit</span>
                <Link href="URL:void()" className="cmn--btn">
                  <span>WELCOME100</span>
                </Link>
              </div>
            </div>
            <div className="promomy__items mb__30">
              <div className="thumb">
                <Image src={promo1} alt="img" />
              </div>
              <div className="content">
                <h4>Welcome Bonus</h4>
                <p>
                  Get 100% up to $100 as a bonus on your first deposit!Get 100%
                  up to $100 as a bonus on your first deposit!
                </p>
                <span className="smalltext">Use code at deposit</span>
                <Link href="URL:void()" className="cmn--btn">
                  <span>WELCOME100</span>
                </Link>
              </div>
            </div>
            <div className="promomy__items">
              <div className="thumb">
                <Image src={promo2} alt="img" />
              </div>
              <div className="content">
                <h4>Welcome Bonus</h4>
                <p>
                  Get 100% up to $300 as a bonus on your first deposit!Get 100%
                  up to $100 as a bonus on your first deposit!
                </p>
                <span className="smalltext">Use code at deposit</span>
                <Link href="URL:void()" className="cmn--btn">
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

export default MypromoContent;
