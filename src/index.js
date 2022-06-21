import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "antd/dist/antd.css";
import "./index.css";
import { ConfigProvider } from "antd";
import fa_IR from "antd/lib/locale/fa_IR";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider locale={fa_IR}>
    <App />
  </ConfigProvider>
);
