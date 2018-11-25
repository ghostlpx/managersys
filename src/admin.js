import React from 'react';
import { Route } from 'react-router-dom';
import { Row, Col } from 'antd';
import Header from './components/Header';
import NavLeft from './components/NavLeft';
import Footer from './components/Footer';

export default class Admin extends React.Component {
  render() {
    return (
      <div className="container" >
        <Row className="header" >
          <Header />
        </Row>
        <Row className="left-to-right" >
          <Col span={4} className="nav-left" >
            {this.props.children}
          </Col>
          <Col span={20} className="content-to-footer" >
            <Row className="content" >
              <div
                style={{ border: '1px solid #eee', height: '100%', background: '#fff', boxShadow: '0 2px 4px 0 rgba(0,0,0,0.08)' }}
              >content</div>
            </Row>
            <Row className="footer" >
              <Footer />
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}