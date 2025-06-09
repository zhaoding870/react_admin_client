/**
 * Ajax utility for making HTTP requests.
 * This module provides functions to perform GET and POST requests using the Fetch API.
 * It includes error handling and response parsing.
 */

import axios from "axios";

import { message } from "antd";

export default function ajax(url, options = {}, type = 'GET') {

    return new Promise(resolve => {
        let promise;
        if (type === 'GET') {
            promise = axios.get(url, {
                params: options,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } else {
            promise = axios.post(url, options, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        promise.then(response => resolve(response.data))
            .catch(error => {
                // 处理错误
                message.error('请求失败: ' + error.message);
            });
    });

}