import React from "react";
import {
  AccountBalanceWalletOutlined,
  MonetizationOnOutlined,
  Person2Outlined,
  ShoppingCartCheckoutOutlined,
} from "@mui/icons-material";
import "./widget.scss";
function Widget({ type }: { type: string }) {
  type data = {
    title: string;
    icon: JSX.Element;
  };

  const amount: number = 100;
  let data = {
    title: "",
    icon: <></>,
  };

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        icon: (
          <Person2Outlined
            className="icon"
            style={{ color: "crimson", backgroundColor: "rgba(255,0,0,0.2)" }}
          />
        ),
      };
      break;
    case "active users":
      data = {
        title: "ACTIVE USERS",
        icon: (
          <ShoppingCartCheckoutOutlined
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218,165,32,0.2)",
            }}
          />
        ),
      };
      break;
    case "users with loans":
      data = {
        title: "USERS WITH LOANS",
        icon: (
          <MonetizationOnOutlined
            className="icon"
            style={{ color: "green", backgroundColor: "rgba(0,128,0,0.2)" }}
          />
        ),
      };
      break;
    case "users with savings":
      data = {
        title: "USERS WITH SAVINGS",
        icon: (
          <AccountBalanceWalletOutlined
            className="icon"
            style={{ color: "purple", backgroundColor: "rgba(128,0,128,0.2)" }}
          />
        ),
      };
      break;
    default:
      break;
  }
  /* <span className="link">{data.link}</span>  <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp />
          {diff} %
        </div>
      </div>*/
  return (
    <div className="widget">
      <div className="left">
        {data.icon}
        <span className="title">{data.title}</span>
        <span className="counter">{amount}</span>
      </div>
    </div>
  );
}

export default Widget;
