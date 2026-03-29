import Link from "next/link";

const IdentityContent = () => {
  return (
    <div className="dashboard__body__wrap">
      <h3 className="account__head mb__30">Identity Details</h3>
      <div className="identity__details bgbox">
        <h5 className="identity__title">About You</h5>
        <div className="identity__left mb-5">
          <form action="#">
            <div className="row g-2 mb-3">
              <div className="col-lg-6">
                <div className="form__box">
                  <label htmlFor="name">First Name (Given Name)</label>
                  <input type="text" id="name" placeholder="First Name" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form__box">
                  <label htmlFor="name2">
                    Last Name (Surname / Family Name)
                  </label>
                  <input type="text" id="name2" placeholder="Last Name" />
                </div>
              </div>
            </div>

            <div className="row g-2">
              <div className="col-lg-6">
                <label htmlFor="dob">Date Of Birth</label>
                <div className="row g-2">
                  <div className="col-lg-4">
                    <div className="form__box">
                      <input type="date" id="dob" placeholder="XX" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form__box">
                      <input type="date" placeholder="XX" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form__box">
                      <input type="date" placeholder="XXXX" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <label htmlFor="dob">Phone Number</label>
                <div className="row g-2">
                  <div className="col-lg-4">
                    <div className="form__box">
                      <input type="text" placeholder="+962" />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="form__box">
                      <input type="number" placeholder="XXXXXXXX" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <h5 className="identity__title">Address</h5>
        <div className="identity__left mb-3">
          <form action="#">
            <div className="row g-3">
              <div className="col-lg-6">
                <div className="form__box">
                  <label htmlFor="add1">Address</label>
                  <input type="text" id="add1" placeholder="XXXXX" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form__box">
                  <label htmlFor="add2">Apt, Suite, etc</label>
                  <input type="text" id="add2" placeholder="XXXXX" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form__box">
                  <label htmlFor="add3">City / Region</label>
                  <input type="text" id="add3" placeholder="XXXXX" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form__box">
                  <label htmlFor="add4">Country</label>
                  <input type="text" id="add4" placeholder="United Kingdom" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form__box">
                  <label htmlFor="add5">State / Province</label>
                  <input type="text" id="add5" placeholder="XXXXX" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form__box">
                  <label htmlFor="add6">Postal Code</label>
                  <input type="text" id="add6" placeholder="XXXX" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="authorize__wrap">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="aut1"
          />
          <label className="form-check-label" htmlFor="aut1">
            I authorize SportOdds to collect and transmit my personal
            information for identity verification or{" "}
            <span>similar uses as defined</span> in order to confirm my ability
            to use the website.
          </label>
        </div>
        <div className="save__btn mt-3 d-flex">
          <Link href="URL:void(0)" className="cmn--btn">
            <span>Save</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IdentityContent;
