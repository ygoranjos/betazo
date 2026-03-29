import Link from "next/link";

const ContactPreferenceContent = () => {
  return (
    <div className="dashboard__body__wrap">
      <h3 className="account__head mb__30">Contact Preferences</h3>
      <div className="contact__preference__wrap bgbox">
        <div className="preference__items">
          <div className="preference__left">
            <h5>Contact Preferences</h5>
            <h6>Rivalry Bonus Club</h6>
            <p>
              I want to get promos to earn free money and hear about cool new
              features
            </p>
          </div>
          <div className="preference__right">
            <div className="perfer__check">
              <input className="form-check-input" type="checkbox" id="fre1s" />
              <label className="form-check-label" htmlFor="fre1s">
                SMS
              </label>
            </div>
            <div className="perfer__check">
              <input className="form-check-input" type="checkbox" id="fre2e" />
              <label className="form-check-label" htmlFor="fre2e">
                Email
              </label>
            </div>
          </div>
        </div>
        <div className="preference__items">
          <div className="preference__left">
            <h6>Victory!</h6>
            <p>
              Tell me when my picks win so I can count my winnings and gloat.
            </p>
          </div>
          <div className="preference__right">
            <div className="perfer__check">
              <input className="form-check-input" type="checkbox" id="fre3e" />
              <label className="form-check-label" htmlFor="fre3e">
                Email
              </label>
            </div>
          </div>
        </div>
        <div className="preference__items">
          <div className="preference__left">
            <h6>Regional Announcements</h6>
            <p>
              Notify me when SportOdds betting and other games become available
              in my region.
            </p>
          </div>
          <div className="preference__right">
            <div className="perfer__check">
              <input className="form-check-input" type="checkbox" id="fre4e" />
              <label className="form-check-label" htmlFor="fre4e">
                Email
              </label>
            </div>
          </div>
        </div>
        <div className="save__btn mt-4 d-flex justify-content-end">
          <Link href="URL:void(0)" className="cmn--btn">
            <span>Save</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPreferenceContent;
