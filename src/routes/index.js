import { Navigate } from 'react-router-dom';

import Admin from "../pages/admin";
import Login from "../pages/login";
import Home from "../pages/home";
import Category from "../pages/category";
import Product from "../pages/product";
import User from "../pages/user";
import Role from "../pages/role";
import Bar from "../pages/charts/bar";
import Line from "../pages/charts/line";
import Pie from "../pages/charts/pie";

const routers = [
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/',
        element: <Admin />,
        children: [
            {
                index: true, // 默认子路由
                element: <Home />
            },
            {
                path: 'category',
                element: <Category />
            },
            {
                path: 'product',
                element: <Product />
            },
            {
                path: 'user',
                element: <User />
            },
            {
                path: 'role',
                element: <Role />
            },
            {
                path: 'charts',
                children: [
                    {
                        path: 'bar',
                        element: <Bar />
                    },
                    {
                        path: 'line',
                        element: <Line />
                    },
                    {
                        path: 'pie',
                        element: <Pie />
                    }
                ]
            }
        ]
    },
    {
        path: '*', // 匹配所有未定义的路由
        element: <Navigate to="/login" replace={true} />
    }
];

export default routers;