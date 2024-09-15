import React from 'react';
import { Layout } from 'antd';
import Header from './components/Header';
import Toolbar from './components/Toolbar';
import ImageEditor from './components/ImageEditor';
import Footer from './components/Footer';
import './components/ImageEditor.scss'

const { Content } = Layout;

const App: React.FC = () => {
  return (
      <Layout className="app-layout">
        <Header />
        <Layout>
          <Toolbar />
          <Content className="content">
            <ImageEditor />
          </Content>
        </Layout>
        <Footer />
      </Layout>
  );
};

export default App;
