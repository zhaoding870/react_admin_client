import React from 'react';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';

import { reqLogin } from '../../api'; // 引入API接口文件
import userCache from '../../utils/memoryUtils';
import storageUtils from '../../utils/storageUtils';

import './index.less';
import logo from '../../assets/images/logo.png';

/**
 * 
 * @returns 登录组件
 */
export default function Login() {
    const [messageApi, contextHolder] = message.useMessage();

    const navigate = useNavigate();

    const onFinish = async values => {
        console.log('Received values of form: ', values);
        const { username, password } = values;
        const result = await reqLogin(username, password);
        if (result.status === 0) {
            messageApi.open({
                type: 'success',
                content: '登录成功'
            });
            userCache.user = result.data;
            storageUtils.saveUser(result.data); // 将用户信息保存到本地存储
            // 跳转到主页
            // 这里可以使用路由跳转到主页，例如使用 useNavigate() 钩子
            // navigate('/'); // 假设主页路由是 '/'
            navigate('/', { replace: true }); // 使用 replace 替换当前路由，避免返回时回到登录页
        } else {
            messageApi.open({
                type: 'error',
                content: result.msg,
            });
        }
    };

    // 自定义密码验证规则
    const pwdValidator = (_, value) => {
        if (!value) {
            return Promise.reject('请输入密码!');
        } else if (value.length < 4) {
            return Promise.reject('密码至少4位');
        } else if (value.length > 12) {
            return Promise.reject('密码最多12位');
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
            return Promise.reject('密码必须是英文、数字或下划线');
        } else {
            return Promise.resolve();
        }
    }


    return (
        <div className='login'>
            {contextHolder}
            <header className='login-header'>
                <img src={logo} alt='logo' />
                <h1>React 后台管理系统</h1>
            </header>
            <section className='login-section'>
                <h2>用户登陆</h2>
                <Form
                    name="login"
                    initialValues={{ remember: true }}
                    style={{ maxWidth: 360 }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            { required: true, message: '请输入用户名!' },
                            { min: 4, message: '用户名至少4位' },
                            { max: 12, message: '用户名最多12位' },
                            { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线' }
                        ]}
                    >
                        <Input prefix={<UserOutlined style={{ color: 'rgba(0, 0, 0, .25)' }} />} placeholder="用户名" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            { validator: pwdValidator }
                        ]}
                    >
                        <Input prefix={<LockOutlined style={{ color: 'rgba(0, 0, 0, .25)' }} />} type="password" placeholder="密码" />
                    </Form.Item>
                    <Form.Item>
                        <Button block type="primary" htmlType="submit">
                            登陆
                        </Button>
                    </Form.Item>
                </Form>
            </section>
        </div>
    )
}
