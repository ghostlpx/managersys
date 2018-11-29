import React from 'react'
import { Row, Col } from 'antd'
// import axios from 'axios'
import { getRoutesMap, siderRoutes } from './routes'
import Header from './components/Header'
import Footer from './components/Footer'

export default class Admin extends React.Component {
  // componentDidMount () {
  //   axios({
  //     // 方法，restfull
  //     method: 'get',
  //     // 地址
  //     url: '/alarm/indicator/query',
  //     // 返回格式
  //     responseType: 'json'
  //   }).then(function (response) {
  //     // 结果
  //     console.log(response.data)
  //   })
  // }
  render () {
    return (
      <div className='container'>
        <Row className='header'>
          <Header />
        </Row>
        <Row className='left-to-right'>
          <Col span={4} className='nav-left'>
            {this.props.children}
          </Col>
          <Col span={20} className='content-to-footer'>
          <Row className='content'>
            <div className='route-section'>
              {getRoutesMap(siderRoutes)}
            </div>
          </Row>
          <Row className='footer'>
            <Footer />
          </Row>
          </Col>
        </Row>
      </div>
    )
  }
}
