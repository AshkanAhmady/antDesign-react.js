import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  UserOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Rate } from "antd";
import React, { useState } from "react";
import {
  DatePicker as DatePickerJalali,
  Calendar,
  JalaliLocaleListener,
} from "antd-jalali";

const { Header, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="layout">
      <Sider
        className="slider"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div>
          <div className="logo">
            <h4>LOGO</h4>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "User Info",
              },
              {
                key: "2",
                icon: <WalletOutlined />,
                label: "Wallet",
              },
              {
                key: "3",
                icon: <LogoutOutlined />,
                label: "Logout",
              },
            ]}
          />
        </div>
        <div className={`satisfaction ${collapsed !== true && "show"}`}>
          <span>Your satisfaction level</span>
          <Rate allowHalf defaultValue={2.5} />
        </div>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;

{
  /* <div className="App">
        <JalaliLocaleListener />
        انتخاب تاریخ: <DatePickerJalali />
        Jalali RangePicker: <DatePickerJalali.RangePicker />
        <br />
        <br />
        <Calendar />
      </div> */
}
