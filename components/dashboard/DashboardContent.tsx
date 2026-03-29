import Image from "next/image";
import Link from "next/link";
import Select from "../select/Select";
import facebook from "/public/img/profile/facebook.png";
import goggle from "/public/img/profile/goggle.png";
import plus from "/public/img/profile/plus.png";
import profile from "/public/img/profile/profile.png";
import steam from "/public/img/profile/steam.png";
import twitch from "/public/img/profile/twitch.png";
import twitter from "/public/img/profile/twitter.png";
import vkonta from "/public/img/profile/vkonta.png";

const lang = [
  { id: 1, name: "English" },
  { id: 2, name: "Turki" },
  { id: 3, name: "Spanish" },
];

const DashboardContent = () => {
  return (
    <div className="dashboard__body__wrap">
      <h3 className="account__head mb__30">Account Settings</h3>
      <div className="row g-4">
        <div className="col-xl-4">
          <div className="user__box">
            <div className="img__change">
              <Image src={profile} alt="profile" />
              <div className="icons" id="profile-picture">
                <i className="fas fa-pen"></i>
              </div>
            </div>
            <div className="user__content">
              <h5 className="usertext__one">strdxc321</h5>
              <h6 className="usertext__two">UUID:</h6>
              <Link href="URL:void()" className="link">
                ffbe99f2-7f4b-11ed-9e24-3ee8038fe302
              </Link>
            </div>
            <div className="reset__wrap">
              <Link href="URL:void()" className="reset">
                Reset Password
              </Link>
              <Link href="URL:void()" className="change">
                Change Gamertag
              </Link>
            </div>
            <div className="user__dated">
              <span className="date">Joined December 19th, 2022</span>
              <Link href="URL:void()" className="lastlogin">
                Last Login on
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          <div className="account__body">
            <div className="account__strength__box mb__30">
              <div className="strength__box">
                <div className="circle__box">
                  <div className="circle">
                    <div className="box">
                      <h3 className="text">70%</h3>
                    </div>
                  </div>
                </div>
                <h5>Account Strength</h5>
              </div>
              <div className="strength__content">
                <div className="items">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="stre1c"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="stre1c">
                    Create account
                  </label>
                </div>
                <div className="items">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="stre2"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="stre2">
                    Complete Account
                  </label>
                </div>
                <div className="items">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="stre3"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="stre3">
                    Verify Identity
                  </label>
                </div>
                <div className="items">
                  <span className="icons">
                    <i className="icon-deposit"></i>
                  </span>
                  <span>Made a Deposit</span>
                </div>
                <div className="items">
                  <span className="icons">
                    <i className="icon-user"></i>
                  </span>
                  <span>Upload Avatar</span>
                </div>
              </div>
            </div>
            <div className="account__email mb__30">
              <h5>Account Emails</h5>
              <span className="subtitle">Primary Emails</span>
              <div className="form__wrap">
                <form action="#">
                  <input type="text" placeholder="fixad56534@paxven.com" />
                  <i className="icon-lock"></i>
                </form>
                <div className="check__items">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="stre1"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="stre1">
                    Verified
                  </label>
                </div>
              </div>
              <Link href="URL:void()" className="add__email">
                <span>
                  <Image src={plus} alt="icon" />
                </span>
                <span>Add email</span>
              </Link>
            </div>
            <div className="account__email enroll__box mb__30">
              <h5>Multi_factor Authentication</h5>
              <p>
                Add an Extra Layer of security to your SportOdds account when
                logging in with Email/Passsword. A verrification code will be
                sent to your email each time you loin to secrely protect your
                account.
              </p>
              <Link href="URL:void()" className="cmn--btn">
                <span>Enroll</span>
              </Link>
            </div>
            <div className="account__email language__box mb__30">
              <h5>Language</h5>
              <span className="slanguage">Select Language</span>
              <div className="language__wrap">
                {/* Select */}
                <Select data={lang} />
                <Link href="URL:void()" className="cmn--btn">
                  <span>Save</span>
                </Link>
              </div>
            </div>
            <div className="account__email social__box mb__30">
              <h5>Social Accounts</h5>
              <span className="slanguage">
                Connect your accounts for faster login.
              </span>
              <div className="social__wrap">
                <div className="social__left">
                  <Link href="URL:void()">
                    <span>
                      <Image src={goggle} alt="icon" />
                    </span>
                    <span>Connect Google</span>
                  </Link>
                  <Link href="URL:void()">
                    <span>
                      <Image src={steam} alt="icon" />
                    </span>
                    <span>Connect steam</span>
                  </Link>
                  <Link href="URL:void()">
                    <span>
                      <Image src={twitter} alt="icon" />
                    </span>
                    <span>Connect Twitter</span>
                  </Link>
                </div>
                <div className="social__left">
                  <Link href="URL:void()">
                    <span>
                      <Image src={facebook} alt="icon" />
                    </span>
                    <span>Connect facebook</span>
                  </Link>
                  <Link href="URL:void()">
                    <span>
                      <Image src={twitch} alt="icon" />
                    </span>
                    <span>Connect twitch</span>
                  </Link>
                  <Link href="URL:void()">
                    <span>
                      <Image src={vkonta} alt="icon" />
                    </span>
                    <span>Connect vkontakte</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="account__email enroll__box">
              <h5>Archive Account</h5>
              <p>Want to temporarily close your account?</p>
              <Link href="URL:void()" className="cmn--btn">
                <span>Archive Account</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
