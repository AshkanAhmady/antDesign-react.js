import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  UserOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Rate, Avatar, Carousel, Button } from "antd";
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
            ]}
          />
          <Carousel
            className={`sidebarSlider ${collapsed !== true && "show"}`}
            autoplay
          >
            <div>
              <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1655841603567-72ca4d864457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1655841603567-72ca4d864457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1655810120657-9ce44d2f9e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
            </div>
          </Carousel>
          <div className="logout">
            <LogoutOutlined />
            <span className={`text ${collapsed !== true && "show"}`}>
              Logout
            </span>
          </div>
        </div>
        <div className={`satisfaction ${collapsed !== true && "show"}`}>
          <span>Your satisfaction level</span>
          <Rate allowHalf defaultValue={2.5} />
        </div>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background header"
          style={{ padding: 0 }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="profile">
            <span className="profileName">Ashkan</span>
            <Avatar size={34} icon={<UserOutlined />} />
          </div>
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
