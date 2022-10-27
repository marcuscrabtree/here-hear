import React, { useState, useEffect } from "react";
import "antd/dist/antd.min.css";
import "../App.css";
import { Layout, Menu, Avatar } from "antd";
import {
  CustomerServiceOutlined,
  DownOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header } = Layout;
const { SubMenu } = Menu;

function HeaderLoggedIn({ handleLogout, currentUser, handleCollection }) {
  const [state, setState] = useState("");

  function handleClick(e) {
    setState({ current: e.key });
  }

  return (
    <div>
      <Layout>
        <Header
          style={{
            backgroundColor: "black",
            display: "flex",
            justifyContent: "space-betweeen",
          }}
        >
          <Link to="/home">
            <div
              style={{
                color: "white",
                fontSize: 30,
              }}
            >
              The Vinyl Countdown
            </div>
          </Link>
          <Menu
            style={{ backgroundColor: 'black', marginLeft: "auto", paddingRight: "50px" }}
            onClick={handleClick}
            mode="horizontal"
            theme="dark"
          >
            <Link to="/collection">
              <Menu.Item
                style={{ backgroundColor: 'black', color: 'white' }}
                key="mail"
                icon={<CustomerServiceOutlined onClick={handleCollection} />}
              >
                My Collection
              </Menu.Item>
            </Link>
            <SubMenu
              style={{ backgroundColor: 'black', color: 'white' }}
              key="SubMenu"
              icon={<DownOutlined />}
              title={`${currentUser.username}`}
            >
              <Menu.Item 
                style={{ backgroundColor: 'black', color: 'white' }}
                key="setting:1">
                <Link to="/profile">
                  <div>
                    <Avatar
                      style={{
                        backgroundColor: "red",
                        marginRight: "10px",
                      }}
                      size="small"
                      icon={<UserOutlined />}
                    />
                    Profile
                  </div>
                </Link>
              </Menu.Item>
              <Menu.Item 
                style={{ backgroundColor: 'black', color: 'white' }}
                key="setting:2" onClick={handleLogout}>
                Logout
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Header>
      </Layout>
    </div>
  );
}

export default HeaderLoggedIn;