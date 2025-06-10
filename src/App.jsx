import React from 'react';

import { useRoutes } from 'react-router-dom';

import { ConfigProvider } from 'antd';

import routers from './routes';

export default function App() {
    const elements = useRoutes(routers);
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#00b96b', // 设置全局主色调
                }
            }}
        >

            {elements}
        </ConfigProvider >
    )
}
