import { Button, Form, Input } from "antd";
import 'antd/dist/antd.css';
import React from "react";
import { Layout, Menu } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { showFailedLoginAttemptNotification } from "./components/notifications/Notifications";


const { Header } = Layout;
const App = () => {

  let isLoggedInValue=useSelector(state=>state);
  const dispatch= useDispatch();
  const [form] = Form.useForm();

  const onFinish = (values) => {

    console.log("Global State",isLoggedInValue);

    if (values.username == "dgpays@mail.com" && values.password == "123") {
      dispatch({type:"true",payload:"1"})
      console.log("Success!!", values.username, values.password,isLoggedInValue);
      
    }
    else{
      showFailedLoginAttemptNotification('error')
      console.log("Failed!!", values.username, values.password,isLoggedInValue);
      form.resetFields()
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (<><div><div><Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}  string={"enes"}>
      <Menu theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['1']}>
        
        <Menu.Item>Login</Menu.Item>
      </Menu>
    </Header>

  </Layout></div>
    <div style={{paddingTop: "125px", paddingRight:"1117px" }}><Form
      form={form}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item style={{ marginLeft: 'auto' }}
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" style={{float:"right"}}>
          Submit
        </Button>
      </Form.Item>
    </Form></div></div></>
  );
};

export default App;
