"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardSideBar = () => {
  const pathName = usePathname();

  return (
    <div className="dashboard__side__bar">
      <ul className="account__menu">
        {[
          ["Account Settings", "/dashboard"],
          ["Contact Preferences", "/dashboard/contact-preference"],
          ["Identity Details", "/dashboard/identity"],
          ["Verify", "/dashboard/verification"],
          ["Casino bets", "/dashboard/casinobet"],
          ["My Promos", "/dashboard/mypromo"],
          ["Deposit", "/dashboard/deposit"],
          ["Withdraw", "/dashboard/withdraw"],
          ["Transction History", "/dashboard/transaction"],
          ["Notifications", "/dashboard/notification"],
          ["Bet History", "/dashboard/bethistory"],
          ["Bonuses", "/dashboard/bonuses"],
        ].map(([itm, url], i) => (
          <li key={i}>
            <Link href={url} className={`${pathName === url && "active"}`}>
              <span className="icons">
                <i className="icon-user"></i>
              </span>
              <span>{itm}</span>
            </Link>
          </li>
        ))}
        <li>
          <Link href="URL:void()">
            <span className="icons">
              <i className="icon-logout"></i>
            </span>
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DashboardSideBar;
