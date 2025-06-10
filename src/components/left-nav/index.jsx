import React, { useState } from 'react';

import {
    MailOutlined,
    PieChartOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';

import './index.less';
import logo from '../../assets/images/logo.png';

const items = [
    { key: '1', icon: <PieChartOutlined />, label: '首页' },
    {
        key: 'sub1',
        label: '商品',
        icon: <MailOutlined />,
        children: [
            { key: '5', icon: <MailOutlined />, label: '品类管理' },
            { key: '6', icon: <MailOutlined />, label: '商品管理' },
        ],
    },
    { key: '3', icon: <MailOutlined />, label: '用户管理' },
    { key: '4', icon: <MailOutlined />, label: '角色管理' },
    {
        key: 'sub2',
        icon: <MailOutlined />,
        label: '图形图表',
        children: [
            { key: '7', icon: <MailOutlined />, label: '柱形图' },
            { key: '8', icon: <MailOutlined />, label: '折线图' },
            { key: '9', icon: <MailOutlined />, label: '饼图' },
        ]
    },
    { key: '8', icon: <MailOutlined />, label: '订单管理' }
];

export default function LeftNav() {
    const [collapsed] = useState(false);
    return (
        <div className='left-nav'>
            <header className='left-nav-header'>
                <img src={logo} alt="logo" />
                <h1>商城后台</h1>
            </header>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}
            />
        </div>
    )
}
