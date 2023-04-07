import React from "react";
import "./SideNav.scss";
import Briefcase from "../assets/icons/briefcase 1.svg";
import Dashboard from "../assets/icons/home 1.svg";
import Users from "../assets/icons/users 1.svg";
import Guarantors from "../assets/icons/user-friends 1.svg";
import Loans from "../assets/icons/sack 1.svg";
import DecisionModels from "../assets/icons/shakehands.svg";
import Savings from "../assets/icons/piggy-bank 1.svg";
import LoanRequests from "../assets/icons/Group 104.svg";
import Whitelist from "../assets/icons/user-check 1.svg";
import Karma from "../assets/icons/user-times 1.svg";
import LoanProducts from "../assets/icons/Group 104.svg";
import SavingsProducts from "../assets/icons/bank.svg";
import FeesAndCharges from "../assets/icons/coins-solid 1.svg";
import Transactions from "../assets/icons/icon.svg";
import Sevices from "../assets/icons/galaxy 1.svg";
import ServicesAccount from "../assets/icons/user-cog 1.svg";
import Settlement from "../assets/icons/scroll 1.svg";
import Reports from "../assets/icons/chart-bar 2.svg";
import Preference from "../assets/icons/sliders-h 1.svg";
import Fees from "../assets/icons/badge-percent 1.svg";
import Audit from "../assets/icons/clipboard-list 1.svg";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const SideNav = ({ children }: Props) => {
  return (
    <div className="side">
      <div className="side__bar">
        <div className="side__bar__items">
          <div className="side__bar__heading__container">
            <Link to="/" className="link">
              <img src={Briefcase} className="side__bar__image " alt="" />
              <span className="side__bar__heading">Switch Organization</span>
            </Link>
          </div>
          <div className="side__bar__title__container">
            <Link to="/" className="link">
              <img src={Dashboard} className="side__bar__image " alt="" />
              <span className="side__bar__title">Dashboard</span>
            </Link>
          </div>
          <div className="side__bar__sub-heading__container">
            <span className="side__bar__sub-heading">CUSTOMERS</span>
          </div>
          <div className="side__bar__title__container link__active">
            <Link to="/" className="link ">
              <img src={Guarantors} className="side__bar__image " alt="" />
              <span className="side__bar__title">Users</span>
            </Link>
          </div>
          <div className="side__bar__title__container">
            <Link className="link" to="/">
              <img src={Users} className="side__bar__image " alt="" />
              <span className="side__bar__title">Guarantors</span>
            </Link>
          </div>
          <div className="side__bar__title__container">
            <Link className="link" to="/">
              <img src={Loans} className="side__bar__image " alt="" />
              <span className="side__bar__title">Loans</span>
            </Link>
          </div>
          <div className="side__bar__title__container">
            <Link className="link" to="/">
              <img src={DecisionModels} className="side__bar__image " alt="" />
              <span className="side__bar__title">Decision Models</span>
            </Link>
          </div>
          <div className="side__bar__title__container">
            <Link className="link" to="/">
              <img src={Savings} className="side__bar__image " alt="" />
              <span className="side__bar__title">Savings</span>
            </Link>
          </div>
          <div className="side__bar__title__container">
            <Link className="link" to="/">
              <img src={LoanRequests} className="side__bar__image " alt="" />
              <span className="side__bar__title">Loan Requests</span>
            </Link>
          </div>
          <div className="side__bar__title__container">
            <Link className="link" to="/">
              <img src={Whitelist} className="side__bar__image " alt="" />
              <span className="side__bar__title">Whitelist</span>
            </Link>
          </div>
          <div className="side__bar__title__container">
            <Link className="link" to="/">
              <img src={Karma} className="side__bar__image " alt="" />
              <span className="side__bar__title">Karma</span>
            </Link>
          </div>
          <div className="side__bar__sub-heading__container">
            <span className="side__bar__sub-heading">Business</span>
          </div>
          <div className="side__bar__title__container">
            <Link className="link" to="/">
              <img src={LoanProducts} className="side__bar__image " alt="" />
              <span className="side__bar__title">Organization</span>
            </Link>
          </div>
          <div className="side__bar__title__container">
            <Link className="link" to="/">
              <img src={LoanProducts} className="side__bar__image " alt="" />
              <span className="side__bar__title">Loan Products</span>
            </Link>
          </div>
          <div className="side__bar__title__container">
            <Link className="link" to="/">
              <img src={SavingsProducts} className="side__bar__image " alt="" />
              <span className="side__bar__title">Savings Products</span>
            </Link>
          </div>
          <div className="side__bar__title__container">
            <Link className="link" to="/">
              <img src={FeesAndCharges} className="side__bar__image " alt="" />
              <span className="side__bar__title">Fees And Charges</span>
            </Link>
          </div>
          <div className="side__bar__title__container">
            <Link className="link" to="/">
              <img src={Transactions} className="side__bar__image " alt="" />
              <span className="side__bar__title">Transactions</span>
            </Link>
          </div>
          <div className="side__bar__title__container">
            <Link className="link" to="/">
              <img src={Sevices} className="side__bar__image " alt="" />
              <span className="side__bar__title">Sevices</span>
            </Link>
          </div>
          <div className="side__bar__title__container">
            <Link className="link" to="/">
              <img src={ServicesAccount} className="side__bar__image " alt="" />
              <span className="side__bar__title">ServicesAccount</span>
            </Link>
          </div>
          <div className="side__bar__title__container">
            <Link className="link" to="/">
              <img src={Settlement} className="side__bar__image " alt="" />
              <span className="side__bar__title">Settlement</span>
            </Link>
          </div>
          <div className="side__bar__title__container">
            <Link className="link" to="/">
              <img src={Reports} className="side__bar__image " alt="" />
              <span className="side__bar__title">Reports</span>
            </Link>
          </div>
          <div className="side__bar__sub-heading__container">
            <span className="side__bar__sub-heading">Settings</span>
          </div>
          <div className="side__bar__title__container">
            <Link className="link" to="/">
              <img src={Preference} className="side__bar__image " alt="" />
              <span className="side__bar__title">Preference</span>
            </Link>
          </div>
          <div className="side__bar__title__container">
            <Link className="link" to="/">
              <img src={Fees} className="side__bar__image " alt="" />
              <span className="side__bar__title">Fees</span>
            </Link>
          </div>
          <div className="side__bar__title__container">
            <Link className="link" to="/">
              <img src={Audit} className="side__bar__image " alt="" />
              <span className="side__bar__title">Audit</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="main">{children}</div>
    </div>
  );
};

export default SideNav;
