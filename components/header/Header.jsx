import Search from "../common/Search";

const Header = () => {
  return (
    <section className="main__tab__slide">
      <ul className="nav nav-tabs" id="myTabmain" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="main-tab"
            data-bs-toggle="tab"
            data-bs-target="#mainTab"
            type="button"
            role="tab"
            aria-selected="true"
          >
            <span className="icons">
              <i className="icon-home"></i>
            </span>
            <span>Home</span>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="main-tab2"
            data-bs-toggle="tab"
            data-bs-target="#mainTab2"
            type="button"
            role="tab"
            aria-selected="false"
          >
            <span className="icons">
              <i className="icon-live"></i>
            </span>
            <span>Live</span>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="main-tab3"
            data-bs-toggle="tab"
            data-bs-target="#mainTab3"
            type="button"
            role="tab"
            aria-selected="false"
          >
            <span className="icons">
              <i className="icon-calender"></i>
            </span>
            <span>Today</span>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="main-tab4"
            data-bs-toggle="tab"
            data-bs-target="#mainTab4"
            type="button"
            role="tab"
            aria-selected="false"
          >
            <span className="icons">
              <i className="icon-football"></i>
            </span>
            <span>Football</span>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="main-tab5"
            data-bs-toggle="tab"
            data-bs-target="#mainTab5"
            type="button"
            role="tab"
            aria-selected="false"
          >
            <span className="icons">
              <i className="icon-tennis"></i>
            </span>
            <span>Tennis</span>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="main-tab6"
            data-bs-toggle="tab"
            data-bs-target="#mainTab6"
            type="button"
            role="tab"
            aria-selected="false"
          >
            <span className="icons">
              <i className="icon-basketball"></i>
            </span>
            <span>Basketball</span>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="main-tab7"
            data-bs-toggle="tab"
            data-bs-target="#mainTab7"
            type="button"
            role="tab"
            aria-selected="false"
          >
            <span className="icons">
              <i className="icon-icehockey"></i>
            </span>
            <span>Ice Hockey</span>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="main-tab8"
            data-bs-toggle="tab"
            data-bs-target="#mainTab8"
            type="button"
            role="tab"
            aria-selected="false"
          >
            <span className="icons">
              <i className="icon-handball"></i>
            </span>
            <span>Handball</span>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="main-tab9"
            data-bs-toggle="tab"
            data-bs-target="#mainTab9"
            type="button"
            role="tab"
            aria-selected="false"
          >
            <span className="icons">
              <i className="icon-afootball"></i>
            </span>
            <span>American Football</span>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="main-tab10"
            data-bs-toggle="tab"
            data-bs-target="#mainTab10"
            type="button"
            role="tab"
            aria-selected="false"
          >
            <span className="icons">
              <i className="icon-baseball"></i>
            </span>
            <span>Baseball</span>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="main-tab11"
            data-bs-toggle="tab"
            data-bs-target="#mainTab11"
            type="button"
            role="tab"
            aria-selected="false"
          >
            <span className="icons">
              <i className="icon-horse"></i>
            </span>
            <span>Horse Racing</span>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="main-tab12"
            data-bs-toggle="tab"
            data-bs-target="#mainTab12"
            type="button"
            role="tab"
            aria-selected="false"
          >
            <span className="icons">
              <i className="icon-v"></i>
            </span>
            <span>Virtuals</span>
          </button>
        </li>
        <li className="nav-item">
          {/* Search */}
          <Search />
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="main-tab14"
            data-bs-toggle="tab"
            data-bs-target="#mainTab14"
            type="button"
            role="tab"
            aria-selected="false"
          >
            <span className="icons">
              <i className="icon-star"></i>
            </span>
            <span>Favourites</span>
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Header;
