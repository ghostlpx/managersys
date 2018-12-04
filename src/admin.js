import React from 'react'
import { inject, observer } from 'mobx-react';
import { Row, Col } from 'antd'
import { getRoutesMap, siderRoutes } from './routes'
import Header from './components/Header'


@inject((stores) => {
  return {
    isLogin: stores.sysState.user.isLogin
  }
}) @observer
class Admin extends React.Component {
  render () {
    return (
      <div className='container'>
        <Row className='header'>
          <Header />
        </Row>
        <Row className='left-to-right'>
          <Col span={3} className='nav-left'>
            {this.props.children}
          </Col>
          <Col span={21} className='content'>
            <div className='route-section'>
              {getRoutesMap(siderRoutes)}
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Admin;