import React from "react";
import "./dashboard.scss";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";

function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard__container">
        <Sidebar />
        <div className="dashboard__containerInner">
          <h1 className="dashboard__containerInnerH1">Users</h1>
          <div className="dashboard__widget">
            <Widget type="user" />
            <Widget type="active users" />
            <Widget type="users with loans" />
            <Widget type="users with savings" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
