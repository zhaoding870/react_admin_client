import store from 'store';
const USER_KEY = 'user_key'; // 定义用户信息在本地存储中的键名

const storageUtils = {
    // 保存用户信息
    saveUser(user) {
        // 使用 store.js 保存用户信息到本地存储
        store.set(USER_KEY, user);
    },
    // 获取用户信息
    getUser() {
        // 从本地存储中获取用户信息
        return store.get(USER_KEY) || {};
    },
    // 清除用户信息
    clearUser() {
        // 清除本地存储中的用户信息
        store.remove(USER_KEY);
    }
}

export default storageUtils;