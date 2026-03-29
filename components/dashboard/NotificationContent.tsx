import Link from "next/link";

const NotificationContent = () => {
  return (
    <div className="dashboard__body__wrap">
      <h3 className="account__head mb__30">Notifications</h3>
      <div className="notification__wrap">
        <h4>Notifications</h4>
        <div className="notification__items">
          <div className="left">
            <h5>Announcements</h5>
            <p>Occasional announcements of new features</p>
          </div>
          <div className="right form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="downs"
              defaultChecked
            />
          </div>
        </div>
        <div className="notification__items">
          <div className="left">
            <h5>Feedback requests</h5>
            <p>Occasional requests for feedback</p>
          </div>
          <div className="right form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="downs1"
              defaultChecked
            />
          </div>
        </div>
        <div className="notification__items">
          <div className="left">
            <h5>Billing and account</h5>
            <p>Transactional emails and account notifications</p>
          </div>
          <div className="right">
            <Link href="URL:void(0)">Legally obligated</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationContent;
