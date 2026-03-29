import Link from "next/link";
import Select from "../select/Select";

const idCard1 = [
  { id: 1, name: "Choose document type" },
  { id: 2, name: "Categories One" },
  { id: 3, name: "Categories One" },
  { id: 4, name: "Categories One" },
];
const idCard2 = [
  { id: 1, name: "Choose document type" },
  { id: 2, name: "Categories One" },
  { id: 3, name: "Categories One" },
  { id: 4, name: "Categories One" },
];
const idCard3 = [
  { id: 1, name: "Choose document type" },
  { id: 2, name: "Categories One" },
  { id: 3, name: "Categories One" },
  { id: 4, name: "Categories One" },
];
const idCard4 = [
  { id: 1, name: "Choose document type" },
  { id: 2, name: "Categories One" },
  { id: 3, name: "Categories One" },
  { id: 4, name: "Categories One" },
];

const VerificationContent = () => {
  return (
    <div className="dashboard__body__wrap">
      <h3 className="account__head mb__30">Verification</h3>
      <div className="verification__wrap">
        <div className="row g-4">
          <div className="col-xxl-6 col-xl-6 col-lg-12">
            <div className="verification__box">
              <h4 className="veri__title">ID card</h4>
              <div className="attach__wrap">
                {/* select */}
                <Select data={idCard1} />
                <Link href="URL:void(0)" className="cmn--btn">
                  <span>Attach</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-12">
            <div className="verification__box">
              <h4 className="veri__title">ID card</h4>
              <div className="attach__wrap">
                {/* select */}
                <Select data={idCard2} />
                <Link href="URL:void(0)" className="cmn--btn">
                  <span>Attach</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-12">
            <div className="verification__box">
              <h4 className="veri__title">ID card</h4>
              <div className="attach__wrap">
                {/* select */}
                <Select data={idCard3} />
                <Link href="URL:void(0)" className="cmn--btn">
                  <span>Attach</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-12">
            <div className="verification__box">
              <h4 className="veri__title">ID card</h4>
              <div className="attach__wrap">
                {/* select */}
                <Select data={idCard4} />
                <Link href="URL:void(0)" className="cmn--btn">
                  <span>Attach</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom__text pt-120">
        <h4>Additional information</h4>
        <p>
          The verification procedure usually takes up to 48 hours from the
          moment of successful download and receiving of client’s data. However,
          we always try to process information as soon as possible. As soon as
          an account is verified, you will receive an email notification. You
          can also contact customer support (online chat or by phone) to clarify
          this information.
        </p>
      </div>
    </div>
  );
};

export default VerificationContent;
