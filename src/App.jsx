import React from 'react';

import { Button, ConfigProvider, message } from "antd";

export default function App() {
    const [ messageApi, contextHolder ] = message.useMessage();
    const handleClick = () => {
        messageApi.info("这是一个信息提示！" + new Date().toLocaleTimeString(), 3);
    }
  return (
    <ConfigProvider
        theme={{
            token: {
                colorPrimary: '#00b96b', // 设置主色调
                borderRadius: 2, // 设置组件圆角
                colorBgContainer: '#f6ffed', // 设置容器背景色
            }
        }}
    >
        <div>
            {contextHolder}
            <Button type="primary" onClick={handleClick}>按钮</Button>
            <Button>默认</Button>
        </div>
    </ConfigProvider>
  )
}
