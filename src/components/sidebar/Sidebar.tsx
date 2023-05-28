import React from "react";
import "./sidebar.scss";

import HomeIcon from "@mui/icons-material/Home";
import SoapIcon from "@mui/icons-material/Soap";
import SavingsIcon from "@mui/icons-material/Savings";
import GroupsIcon from "@mui/icons-material/Groups";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import PeopleIcon from "@mui/icons-material/People";
import ReportIcon from "@mui/icons-material/Report";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ReceiptIcon from "@mui/icons-material/Receipt";
import WebStoriesIcon from "@mui/icons-material/WebStories";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import EvStationIcon from "@mui/icons-material/EvStation";
import HandshakeIcon from "@mui/icons-material/Handshake";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

import { Link } from "react-router-dom";

const moneybag = require("../../images/moneybag.png") as string;

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="center">
        <ul>
          <div className="sidebar__switchOrgLi">
            {" "}
            <BusinessCenterIcon className="icon" />
            <span className="sidebar__switchOrg">Switch Organization</span>
            <ExpandMoreIcon className="sidebar__expandicon" />
          </div>{" "}
          <div className="sidebar__switchOrgLi">
            {" "}
            <div className="vertical-line"></div>
            <HomeIcon className="icon" />
            <span>Dasboard</span>
          </div>
          <p className="title"> CUSTOMERS</p>
          <div className="sidebar__container">
            <li>
              <div className="vertical-line"></div>
              <PeopleIcon className="icon" />
              <span>Users</span>
            </li>
          </div>
          <li>
            <div className="vertical-line"></div>
            <GroupsIcon className="icon" />
            <span>Guarantors</span>
          </li>
          <li>
            <div className="vertical-line"></div>
            <img src={moneybag} alt="" className="icon" />
            <span>Loans</span>
          </li>{" "}
          <li>
            <div className="vertical-line"></div>
            <HandshakeIcon className="icon" />
            <span>Decision Models</span>
          </li>{" "}
          <li>
            <div className="vertical-line"></div>
            <SavingsIcon className="icon" />
            <span>Savings</span>
          </li>{" "}
          <li>
            {" "}
            <div className="vertical-line"></div>
            <SoapIcon className="icon" />
            <span>Loan Requests</span>
          </li>{" "}
          <li>
            {" "}
            <div className="vertical-line"></div>
            <PersonAddIcon className="icon" />
            <span>Whitelists</span>
          </li>{" "}
          <li>
            {" "}
            <div className="vertical-line"></div>
            <PersonRemoveIcon className="icon" />
            <span>Karma</span>
          </li>{" "}
          <p className="title"> BUSINESSES</p>
          <li>
            {" "}
            <div className="vertical-line"></div>
            <BusinessCenterIcon className="icon" />
            <span>Organization</span>
          </li>{" "}
          <li>
            {" "}
            <div className="vertical-line"></div>
            <SoapIcon className="icon" />
            <span>Loan Products</span>
          </li>
          <li>
            {" "}
            <div className="vertical-line"></div>
            <AccountBalanceIcon className="icon" />
            <span>Savings Products</span>
          </li>
          <li>
            {" "}
            <div className="vertical-line"></div>
            <EvStationIcon className="icon" />
            <span>Fees and Charges</span>
          </li>{" "}
          <li>
            {" "}
            <div className="vertical-line"></div>
            <ReceiptIcon className="icon" />
            <span>Transactions</span>
          </li>{" "}
          <li>
            {" "}
            <div className="vertical-line"></div>
            <MiscellaneousServicesIcon className="icon" />
            <span>Services</span>
          </li>{" "}
          <li>
            <div className="vertical-line"></div>
            <ManageAccountsIcon className="icon" />
            <span>Service Account</span>
          </li>{" "}
          <li>
            <div className="vertical-line"></div>
            <ReceiptLongIcon className="icon" />
            <span>Settlements</span>
          </li>{" "}
          <li>
            <div className="vertical-line"></div>
            <AssessmentIcon className="icon" />
            <span>Reports</span>
          </li>
          <p className="title"> SETTINGS</p>
          <li>
            <div className="vertical-line"></div>
            <DisplaySettingsIcon className="icon" />
            <span>Preferences</span>
          </li>
          <li>
            <div className="vertical-line"></div>
            <ReportIcon className="icon" />
            <span>Fees and Pricing</span>
          </li>
          <li>
            <div className="vertical-line"></div>
            <WebStoriesIcon className="icon" />
            <span>Audit Logs</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
