import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { Layout } from 'antd';

import userCache from '../../utils/memoryUtils'
import Header from '../../components/header';
import LeftNav from '../../components/left-nav';

const { Content, Footer, Sider } = Layout;

export default function Admin() {

    const user = userCache.user;
    if (!user || !user._id) {
        // 如果没有登录，重定向到登录页面
        return <Navigate to="/login" replace={true} />
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider>
                <LeftNav />
            </Sider>
            <Layout>
                <Header />
                <Content style={{ margin: '0 16px', backgroundColor: '#fff' }}>
                    <Outlet />
                    {/* Outlet 用于渲染子路由组件 */}
                </Content>
                <Footer style={{ textAlign: 'center', color: '#cccccc' }}>
                    推荐使用谷歌浏览器，可以获得更佳页面操作体验
                </Footer>
            </Layout>
        </Layout>
    )
}
