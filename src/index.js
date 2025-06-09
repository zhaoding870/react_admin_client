/**
 * 应用入口文件
 * @file index.js
 */

import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import storageUtils from "./utils/storageUtils";
import userCache from "./utils/memoryUtils";

// 从本地存储中获取用户信息
const user = storageUtils.getUser();
// 如果用户信息存在，则保存到内存中
userCache.user = user;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <App />
);
