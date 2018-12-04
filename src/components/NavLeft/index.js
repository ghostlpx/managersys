import React from 'react';
import { withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import { inject, observer } from 'mobx-react';
import './index.less';
import { getMenus } from '../../util/util';

@inject((stores) => {
  return {
    menus: stores.sysState.user.menus
  }
}) @observer
class NavLeft extends React.Component {
  render() {
    const { menus } = this.props;
    return (
      <div className="nav-left-menu">
        <Menu
          mode="inline"
          // onClick={this.handleClick}
          // defaultSelectedKeys={['dataManage']}
          // defaultOpenKeys={['sub1']}
        >
          {getMenus(menus)}
        </Menu>
      </div>
    )
  }
}

export default withRouter(NavLeft);