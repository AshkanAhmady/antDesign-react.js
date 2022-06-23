import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  UserOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Menu,
  Rate,
  Avatar,
  Carousel,
  Timeline,
  Collapse,
  Progress,
} from "antd";
import React, { useState } from "react";
import { red, green } from "@ant-design/colors";
import {
  DatePicker as DatePickerJalali,
  Calendar,
  JalaliLocaleListener,
} from "antd-jalali";

const { Header, Sider, Content } = Layout;

const { Panel } = Collapse;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

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
          className="site-layout-background content"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <div className="mainContent">
            <div>
              <h1>Projects</h1>
              <Collapse defaultActiveKey={["1"]} onChange={onChange}>
                <Panel header="todo list" key="1">
                  <p>
                    This application is a todo list whose todos can be deleted
                    and updated, and a filter is displayed to show the completed
                    todos.
                  </p>
                </Panel>
                <Panel header="quiz" key="2">
                  <p>
                    A simple quiz project created with the help of react and
                    tailwind frameworks and you can test your ability to answer
                    basic html questions. The project also uses the
                    reactRouterDom library.
                  </p>
                </Panel>
                <Panel header="Digitize Shopping" key="3">
                  <p>
                    An online store of products such as (laptops, mobile phones
                    and digital watches) developed with tailwind and has pages
                    such as product list, single product page and shopping cart
                    that have been implemented and responded with tailwind
                  </p>
                </Panel>
              </Collapse>
            </div>
            <div>
              <h1>Skills</h1>
              <strong>HTML</strong>
              <Progress percent={100} steps={50} strokeColor={green[6]} />
              <br />
              <strong>CSS</strong>
              <Progress percent={100} steps={50} strokeColor={green[6]} />
              <br />
              <strong>JAVASCRIPT</strong>
              <Progress percent={80} steps={50} />
              <br />
              <strong>REACT.JS</strong>
              <Progress percent={60} steps={50} />
            </div>
          </div>
          <div className="sideContent">
            <h1>Activities</h1>
            <Timeline mode="right">
              <Timeline.Item label="2015-09-01">
                Create a services
              </Timeline.Item>
              <Timeline.Item label="2018-02-03">
                Solve initial network problems
              </Timeline.Item>
              <Timeline.Item>Technical testing</Timeline.Item>
              <Timeline.Item>Technical testing</Timeline.Item>
              <Timeline.Item label="2019-01-01 07:10:00">
                Network problems being solved
              </Timeline.Item>
              <Timeline.Item label="2019-12-01 09:00:00">
                responsive Problem being solved
              </Timeline.Item>
              <Timeline.Item label="2020-09-01 01:12:21">
                Network problems being solved
              </Timeline.Item>
            </Timeline>
          </div>
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
