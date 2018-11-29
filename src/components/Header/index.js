import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Icon, Row, Col } from 'antd';
import './index.less';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'data',
    }
  }

  handleClick = (e) => {
    // console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">用户中心xxxxxxx</a>
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
      <Row className="header-layout">
        <Col span={4} className="logo-section" >
          <img src="./logo.png" alt="数据平台" />
          <span>DSpider</span>
        </Col>
        <Col span={12} >
          <Menu
            className="menu-section"
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="data" >
              <Link to="/admin/data">数据开发</Link>
            </Menu.Item>
            <Menu.Item key="task" >
              <Link to="/admin/task">任务运维</Link>
            </Menu.Item>
            <Menu.Item key="anlysis" >
              <Link to="/admin/analysis">自助分析</Link>
            </Menu.Item>
            <Menu.Item key="manager" >数据管理</Menu.Item>
            <Menu.Item key="storm" >实时流计算</Menu.Item>
          </Menu>
        </Col>
        <Col span={8} className="login-control-section" >
          <Dropdown overlay={menu} placement="bottomRight">
            <span className="ant-dropdown-link" style={{ cursor: 'pointer', marginRight: 20, verticalAlign: 'middle', display: 'inline-block', width: 50, textAlign: 'center' }}>
              <Icon style={{ fontSize: 22 }} type="bell" theme="filled" />
            </span>
          </Dropdown>
          <Dropdown overlay={menu}>
            <span className="ant-dropdown-link" style={{ cursor: 'pointer', marginRight: 30 }}>
            项目中心
            </span>
          </Dropdown>
          <Dropdown overlay={menu}>
            <span className="ant-dropdown-link" style={{ cursor: 'pointer', marginRight: 20 }}>
            dspider-dbms <Icon type="down" />
            </span>
          </Dropdown>
          <Dropdown overlay={menu}>
            <span className="ant-dropdown-link" style={{ cursor: 'pointer' }}>
            pengxue.liu <Icon type="down" />
            </span>
          </Dropdown>
        </Col>
      </Row>
    )
  }
}