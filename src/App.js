import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  AppstoreOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import Home from './Home';
import Products from './Products';
import AboutUs from './AboutUs';
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<AppstoreOutlined />}>
              <Link to="/products">Products</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<InfoCircleOutlined />}>
              <Link to="/about-us">About Us</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          My Webapp ©2024 Created with Ant Design
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
