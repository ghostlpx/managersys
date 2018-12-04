import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

export function getMenus (menuArray) {
  return menuArray.map(item => {
    if (item.children && item.children.length > 0) {
      return (
        <Menu.SubMenu key={item.key} title={<span>{(item.extra && item.extra !== '') ? <Icon type={item.extra} /> : ''}{item.name}</span>}>
          {getMenus(item.children)}
        </Menu.SubMenu>
      )
    } else {
      return (
        <Menu.Item key={item.key}>
          <Link to={item.url} replace>
            {(item.extra && item.extra !== '') ? <Icon type={item.extra} /> : ''}
            {item.name}
          </Link>
        </Menu.Item>
      )
    }
  })
}
