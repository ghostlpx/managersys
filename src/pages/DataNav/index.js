import React from 'react';
import { Menu, Icon } from 'antd';
import './index.less';

const SubMenu = Menu.SubMenu;

export default class DataNav extends React.Component {
  handleClick = (e) => {
    // console.log(this.props);
    this.props.history.push(`/admin/data/${e.key}`);
  }
  
  render() {
    return (
      <div className="nav-left-menu">
        <Menu
          onClick={this.handleClick}
          mode="inline"
          defaultSelectedKeys={['dataManage']}
          defaultOpenKeys={['sub1']}
        >
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>数据管理</span></span>}>
            <Menu.Item key="dataManage">数据列表</Menu.Item>
            <Menu.Item key="2">运行记录</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>数据流管理</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="setting" /><span>实例运维</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}