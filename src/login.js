import React from 'react';
import axios from 'axios';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

class Login extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { loginEmail, password } = values;
        axios.post('/userReq/doLogin', {
          loginEmail,
          password
        }).then((res) => {
          if (res.status === 200) {
            console.log(res);
            this.props.history.push('/admin');
          }
        });
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-background">
        <div className="login">
          <section className="logo-section">
            <img src="./logo.png" alt="数据平台" />
            <span>DSpider</span>
          </section>
          <h1>数据调度平台</h1>
          <section className="login-form-section">
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('loginEmail', {
                  rules: [{ required: true, message: '请输入您的邮箱！' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="优车邮箱" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码！' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登录
                </Button>
              </FormItem>
            </Form>
          </section>
        </div>
      </div>
    )
  }
}

const LoginForm = Form.create()(Login);

export default LoginForm;