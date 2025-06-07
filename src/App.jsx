import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ConfigProvider } from 'antd';


import Admin from './pages/admin';
import Login from './pages/login';


export default function App() {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#00b96b', // 设置全局主色调
                }
            }}
        >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Admin />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </ConfigProvider >
    )
}
