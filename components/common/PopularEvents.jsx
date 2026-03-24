import Image from "next/image";
import Link from "next/link";
import cup from "/public/img/leftmenu/cup.png";
import europ from "/public/img/leftmenu/europ.png";
import start from "/public/img/leftmenu/start.png";

const PopularEvents = () => {
  return (
    <div className="popular__events__left display991">
      <div className="popular__events__head">
        <h5>Popular events</h5>
        <ul>
          <li>
            <span>
              <Image src={cup} alt="img" />
            </span>
            <span>Eorld Cup 2022</span>
          </li>
          <li>
            <span>
              <Image src={europ} alt="img" />
            </span>
            <span>Euroleague. Season 22/23</span>
          </li>
        </ul>
      </div>
      <div className="star__wrap">
        <span>
          <Image src={start} alt="img" />
        </span>
        <span>Favorites</span>
      </div>
      <div className="prematch__wrap">
        <div className="nav" id="nav-tabpre" role="tablist">
          <button
            className="nav-link active"
            id="nav-home-tabpre"
            data-bs-toggle="tab"
            data-bs-target="#nav-homepre"
            type="button"
            role="tab"
            aria-controls="nav-homepre"
            aria-selected="true"
          >
            Live
          </button>
          <button
            className="nav-link "
            id="nav-profile-tabpre"
            data-bs-toggle="tab"
            data-bs-target="#nav-profilepre"
            type="button"
            role="tab"
            aria-controls="nav-profilepre"
            aria-selected="false"
          >
            Prematch
          </button>
        </div>
        <div className="tab-content" id="nav-tabContentpre">
          <div
            className="tab-pane fade text-white show active"
            id="nav-homepre"
            role="tabpanel"
            aria-labelledby="nav-home-tabpre"
            tabIndex="0"
          >
            <div className="prematch__scopre">
              <Link href="#pre" className="prescore__items">
                <div className="prescore__left">
                  <span>
                    <i className="icon-football"></i>
                  </span>
                  <span className="score">Soccer</span>
                </div>
                <div className="prescore__right">
                  <span>2</span>
                  <span>
                    <i className="fa-solid fa-angle-down"></i>
                  </span>
                </div>
              </Link>
              <Link href="#pre" className="prescore__items">
                <div className="prescore__left">
                  <span>
                    <i className="icon-tennis"></i>
                  </span>
                  <span className="score">Tennis</span>
                </div>
                <div className="prescore__right">
                  <span>4</span>
                  <span>
                    <i className="fa-solid fa-angle-down"></i>
                  </span>
                </div>
              </Link>
              <Link href="#pre" className="prescore__items">
                <div className="prescore__left">
                  <span>
                    <i className="icon-basketball"></i>
                  </span>
                  <span className="score">Basketball</span>
                </div>
                <div className="prescore__right">
                  <span>4</span>
                  <span>
                    <i className="fa-solid fa-angle-down"></i>
                  </span>
                </div>
              </Link>
              <Link href="#pre" className="prescore__items">
                <div className="prescore__left">
                  <span>
                    <i className="icon-ttennis"></i>
                  </span>
                  <span className="score">Table Tennis</span>
                </div>
                <div className="prescore__right">
                  <span>8</span>
                  <span>
                    <i className="fa-solid fa-angle-down"></i>
                  </span>
                </div>
              </Link>
              <Link href="#pre" className="prescore__items">
                <div className="prescore__left">
                  <span>
                    <i className="icon-volly"></i>
                  </span>
                  <span className="score">Volleyball</span>
                </div>
                <div className="prescore__right">
                  <span>2</span>
                  <span>
                    <i className="fa-solid fa-angle-down"></i>
                  </span>
                </div>
              </Link>
              <Link href="#pre" className="prescore__items">
                <div className="prescore__left">
                  <span>
                    <i className="icon-handball"></i>
                  </span>
                  <span className="score">Handball</span>
                </div>
                <div className="prescore__right">
                  <span>1</span>
                  <span>
                    <i className="fa-solid fa-angle-down"></i>
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div
            className="tab-pane fade text-white "
            id="nav-profilepre"
            role="tabpanel"
            aria-labelledby="nav-profile-tabpre"
            tabIndex="0"
          >
            <div className="multiple__components">
              <div className="prematch__scopre">
                <Link href="#pre" className="prescore__items">
                  <div className="prescore__left">
                    <span>
                      <i className="icon-football"></i>
                    </span>
                    <span className="score">Soccer</span>
                  </div>
                  <div className="prescore__right">
                    <span>2</span>
                    <span>
                      <i className="fa-solid fa-angle-down"></i>
                    </span>
                  </div>
                </Link>
                <Link href="#pre" className="prescore__items">
                  <div className="prescore__left">
                    <span>
                      <i className="icon-tennis"></i>
                    </span>
                    <span className="score">Tennis</span>
                  </div>
                  <div className="prescore__right">
                    <span>4</span>
                    <span>
                      <i className="fa-solid fa-angle-down"></i>
                    </span>
                  </div>
                </Link>
                <Link href="#pre" className="prescore__items">
                  <div className="prescore__left">
                    <span>
                      <i className="icon-basketball"></i>
                    </span>
                    <span className="score">Basketball</span>
                  </div>
                  <div className="prescore__right">
                    <span>4</span>
                    <span>
                      <i className="fa-solid fa-angle-down"></i>
                    </span>
                  </div>
                </Link>
                <Link href="#pre" className="prescore__items">
                  <div className="prescore__left">
                    <span>
                      <i className="icon-ttennis"></i>
                    </span>
                    <span className="score">Table Tennis</span>
                  </div>
                  <div className="prescore__right">
                    <span>8</span>
                    <span>
                      <i className="fa-solid fa-angle-down"></i>
                    </span>
                  </div>
                </Link>
                <Link href="#pre" className="prescore__items">
                  <div className="prescore__left">
                    <span>
                      <i className="icon-volly"></i>
                    </span>
                    <span className="score">Volleyball</span>
                  </div>
                  <div className="prescore__right">
                    <span>2</span>
                    <span>
                      <i className="fa-solid fa-angle-down"></i>
                    </span>
                  </div>
                </Link>
                <Link href="#pre" className="prescore__items">
                  <div className="prescore__left">
                    <span>
                      <i className="icon-handball"></i>
                    </span>
                    <span className="score">Handball</span>
                  </div>
                  <div className="prescore__right">
                    <span>1</span>
                    <span>
                      <i className="fa-solid fa-angle-down"></i>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularEvents;
