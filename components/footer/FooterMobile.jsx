import Link from "next/link";

const FooterMobile = () => {
  return (
    <ul className="footer__menu d-lg-none">
      <li>
        <Link href="/" className="d-grid justify-content-center">
          <span>
            <i className="fas fa-table-tennis"></i>
          </span>
          <span className="texta">Sports</span>
        </Link>
      </li>
      <li>
        <Link
          href="URL:void(0)"
          className="d-grid justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#eventsp"
        >
          <span>
            <i className="fa-solid fa-gift"></i>
          </span>
          <span className="texta">Events</span>
        </Link>
      </li>
      <li className="header-bartwo d-lg-none">
        <span className="bars">
          <i className="fas fa-bars"></i>
        </span>
        <span className="cros">
          <i className="fa-solid fa-xmark"></i>
        </span>
      </li>
      <li>
        <Link
          href="URL:void(0)"
          className="d-grid justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#betsp"
        >
          <span>
            <i className="fas fa-ticket-alt"></i>
          </span>
          <span className="texta">My Bet</span>
        </Link>
      </li>
      <li>
        <Link href="/dashboard" className="d-grid justify-content-center">
          <span>
            <i className="far fa-user-circle"></i>
          </span>
          <span className="texta"> Account</span>
        </Link>
      </li>
    </ul>
  );
};

export default FooterMobile;
