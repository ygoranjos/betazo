import Search from "../common/Search";

const SubHeader = ({ active }) => {
  return (
    <section className="main__tab__slide">
      <ul className="nav nav-tabs" id="myTabmain" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${active === "all-games" ? "active" : ""}`}
            id="main-tab8cas"
            data-bs-toggle="tab"
            data-bs-target="#casinot8"
            type="button"
            role="tab"
            aria-selected="false"
          >
            <span className="icons">
              <i className="icon-game"></i>
            </span>
            <span>All Games</span>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="main-tabcasino"
            data-bs-toggle="tab"
            data-bs-target="#casinot1"
            type="button"
            role="tab"
            aria-selected="true"
          >
            <span className="icons">
              <i className="icon-top"></i>
            </span>
            <span>Top</span>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="main-tab2cas"
            data-bs-toggle="tab"
            data-bs-target="#casinot2"
            type="button"
            role="tab"
            aria-selected="false"
          >
            <span className="icons">
              <i className="icon-new"></i>
            </span>
            <span>New</span>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="main-tab3cas"
            data-bs-toggle="tab"
            data-bs-target="#casinot3"
            type="button"
            role="tab"
            aria-selected="false"
          >
            <span className="icons">
              <i className="icon-popular"></i>
            </span>
            <span>Popular</span>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="main-tab4cas"
            data-bs-toggle="tab"
            data-bs-target="#casinot4"
            type="button"
            role="tab"
            aria-selected="false"
          >
            <span className="icons">
              <i className="icon-slots"></i>
            </span>
            <span>Slots</span>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="main-tab5cas"
            data-bs-toggle="tab"
            data-bs-target="#casinot5"
            type="button"
            role="tab"
            aria-selected="false"
          >
            <span className="icons">
              <i className="icon-ttennis"></i>
            </span>
            <span>Table Games</span>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="main-tab6cas"
            data-bs-toggle="tab"
            data-bs-target="#casinot6"
            type="button"
            role="tab"
            aria-selected="false"
          >
            <span className="icons">
              <i className="icon-jackpot"></i>
            </span>
            <span>Jackpots</span>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${active === "live-games" ? "active" : ""}`}
            id="main-tabcass"
            data-bs-toggle="tab"
            data-bs-target="#casinot7"
            type="button"
            role="tab"
            aria-selected="false"
          >
            <span className="icons">
              <i className="icon-live"></i>
            </span>
            <span>Live Games</span>
          </button>
        </li>
        <li className="nav-item">
          {/* Search */}
          <Search />
        </li>
      </ul>
    </section>
  );
};

export default SubHeader;
