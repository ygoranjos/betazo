"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import bitcoin from "/public/img/profile/bitcoin.png";
import bvisa from "/public/img/profile/bvisa.png";
import coins from "/public/img/profile/coins.png";
import inovarav from "/public/img/profile/inovarav.png";
import much from "/public/img/profile/much.png";
import neteller from "/public/img/profile/neteller.png";
import paypal from "/public/img/profile/paypal.png";
import phonerpe from "/public/img/profile/phonerpe.png";
import skrill from "/public/img/profile/skrill.png";
import visa from "/public/img/profile/visa.png";
import visap from "/public/img/profile/visap.png";
import visas from "/public/img/profile/visas.png";
import webpay from "/public/img/profile/webpay.png";
import yandex from "/public/img/profile/yandex.png";

const DepositContent = () => {
  const [depositAmount, setDepositAmount] = useState(20);

  return (
    <div className="dashboard__body__wrap">
      <h3 className="account__head mb__30">Deposit</h3>
      <div className="payment__cart__check">
        <div className="row g-4">
          {[
            visa,
            webpay,
            skrill,
            inovarav,
            bitcoin,
            paypal,
            much,
            visas,
            yandex,
            coins,
            phonerpe,
            neteller,
          ].map((itm, i) => (
            <div
              key={i}
              className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6"
            >
              <div className="payment__cart__items">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`deposit${i}`}
                />
                <label className="form-check-label" htmlFor={`deposit${i}`}>
                  <Image src={itm} alt="visa" />
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="deposit__complate">
        <h3>Complete Your Deposit</h3>
        <div className="deposit__wallet">
          <div className="deopsit__wallet__items">
            <p>Deposit to Wallet</p>
            <div className="usd__chacnge">
              <span>USD</span>
              <div className="icons" id="profile-picture">
                <i className="fas fa-pen"></i>
              </div>
            </div>
          </div>
          <div className="deopsit__wallet__items">
            <p>Payment Provider</p>
            <div className="usd__chacnge">
              <span>
                <Image src={bvisa} alt="vissa" />
              </span>
              <div className="icons" id="profile-picture2">
                <i className="fas fa-pen"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="promo__code">
          <span className="promo">Promo Code</span>
          <Link href="URL:void(0)">
            <span>Enter Code</span>
            <span>
              <i className="fas fa-plus"></i>
            </span>
          </Link>
        </div>
        <Link href="URL:void(0)" className="visa__card">
          <Image src={visap} alt="visa" />
        </Link>
        <ul className="quick-value">
          {[20, 30, 200].map((itm, i) => (
            <li key={i}>
              <h5
                className={itm === depositAmount ? "active" : ""}
                onClick={() => setDepositAmount(itm)}
              >
                {itm}
              </h5>
            </li>
          ))}

          <li>
            <Link href="URL:void()">Custom</Link>
          </li>
        </ul>
        <form action="#">
          <div className="single-input mb__20">
            <input
              type="text"
              id="dAmount"
              placeholder="Enter Amount"
              value={`$${depositAmount}`}
              onChange={() => {}}
            />
          </div>
          <div className="single-input">
            <input type="text" id="eemail" placeholder="Email" />
          </div>
          <div className="total__amount">
            <div className="items">
              <span>Amount Fee</span>
              <span>$20</span>
            </div>
            <div className="items">
              <span>Total</span>
              <span>$20</span>
            </div>
          </div>
          <div className="btn-area">
            <button className="cmn--btn">
              <span>Deposit</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DepositContent;
