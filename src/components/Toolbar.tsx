import React from 'react';
import { Menu } from 'antd';
import './ImageEditor.scss';

const Toolbar: React.FC = () => (
    <Menu className="toolbar" mode="vertical">
        <Menu.Item>Upload</Menu.Item>
        <Menu.Item>Resize</Menu.Item>
        <Menu.Item>Crop</Menu.Item>
    </Menu>
);

export default Toolbar;
