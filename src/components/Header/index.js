import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Icon } from 'antd';
import './index.less';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'data',
    }
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">用户中心</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">安全手册</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">退出登录</a>
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="header-layout">
        <Menu
          className="menu-section"
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="data" >
            <Link to="/data">数据开发</Link>
          </Menu.Item>
          <Menu.Item key="task" >
            <Link to="/task">任务运维</Link>
          </Menu.Item>
          <Menu.Item key="anlysis" >
            <Link to="/analysis">自助分析</Link>
          </Menu.Item>
          <Menu.Item key="manager" >数据管理</Menu.Item>
          <Menu.Item key="storm" >实时流计算</Menu.Item>
        </Menu>
        <div className="login-control-section" >
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
              pengxue.liu <Icon type="down" />
            </a>
          </Dropdown>
        </div>
      </div>
    )
  }
}