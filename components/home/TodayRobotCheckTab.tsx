import Link from "next/link";

const TodayRobotCheckTab = () => {
  return (
    <>
      <div className="robot__wrap">
        <form
          action="https://api.form-data.com/f/bqtxth46icif4r4ot1p5qn"
          method="post"
        >
          <div
            className="g-recaptcha"
            data-sitekey="6Lel4Z4UAAAAAOa8LO1Q9mqKRUiMYl_00o5mXJrR"
            // style="width: 120px;"
          ></div>
          <div className="left__capcha">
            <input type="number" placeholder="Enter your bet slip number" />
            <button className="cmn--btn" type="submit">
              <span>Check</span>
            </button>
          </div>
        </form>
      </div>
      <div className="robot__content">
        <p>
          Bet slip number is shown in the bet history section of the user
          account.
        </p>
        <div className="robot__inner">
          <div className="robot__content__wrap">
            <div className="robot__content__items">
              <span className="ttext">№ 953340653</span>
              <h6>from 01.01.2016 | 12:00</h6>
            </div>
            <div className="robot__content__items">
              <span className="ttext">ENGLAND. PREMIER LEAGUE</span>
              <h6>Burnley F.C. - Hull City A.F.C.</h6>
            </div>
            <div className="robot__content__items">
              <span className="ttext">BET TYPE</span>
              <h6>Single bet</h6>
            </div>
            <div className="robot__content__items">
              <span className="ttext">BET SLIP STATUS</span>
              <h6>Win</h6>
            </div>
            <div className="robot__content__items">
              <Link href="URL:void(0)" className="point">
                8.50
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodayRobotCheckTab;
