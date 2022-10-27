import React, { useState } from "react";
// import "antd/dist/antd.css";
import "antd/dist/antd.min.css";

import "../App.css";
import { Form, Input, Button } from "antd";
import { Row, Col, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function LoginPage({ setCurrentUser, setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const error = () => {
    const success = message.error("Invalid username or password!", 0);
    setTimeout(success, 2500);
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password
      }),
    })
    .then(res => res.json())
    .then((user) => {
      console.log(user)
      if (user.error) {
        error();
      } else {
        setCurrentUser(user);
        localStorage.setItem("token", user.token);
        setIsAuthenticated(true);
        navigate("/home");
      }
    }) 
  }



  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div>
      <Row gutter={[8, 16]}>
        <Col span={8}></Col>
        <Col span={8}>
          <h1
            style={{
              textAlign: "center",
              marginTop: "100px",
            }}
          >
            Login
          </h1>
        </Col>
        <Col span={8}></Col>

        <Col span={8}></Col>
        <Col span={8}>
          {" "}
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            size="large"
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item
                style={{
                  textAlign: "left",
                }}
                name="remember"
                valuePropName="checked"
                noStyle
              >
              </Form.Item>
            </Form.Item>

            <Form.Item
              style={{
                textAlign: "center",
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                shape="round"
                style={{
                  margin: "auto",
                }}
                onClick={handleSubmit}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={8}></Col>
      </Row>
    </div>
  );
}

export default LoginPage;