import { IConfig } from 'umi-types';
import path from 'path';

// ref: https://umijs.org/config/
const config: IConfig = {

    treeShaking: true,
    routes: [
        {
            path: '/',
            component: '../layouts/index',
            routes: [
                { path: '/', component: '../pages/index' }
            ]
        }
    ],
    plugins: [
        [
            '@umijs/plugin-qiankun',
            {
                master: {
                    // 注册子应用信息
                    apps: [
                        {
                            name: 'home', // 唯一 id
                            entry: '//localhost:3001', // html entry
                            base: '/home', // app1 的路由前缀，通过这个前缀判断是否要启动该应用，通常跟子应用的 base 保持一致
                            history: 'browser', // 子应用的 history 配置，默认为当前主应用 history 配置
                        },
                    ],
                    jsSandbox: true, // 是否启用 js 沙箱，默认为 false
                    prefetch: true, // 是否启用 prefetch 特性，默认为 true
                },
            },
        ],
        // ref: https://umijs.org/plugin/umi-plugin-react.html
        ['umi-plugin-react', {
            antd: true,
            dva: true,
            dynamicImport: { webpackChunkName: true },
            title: 'qiankuan-blog',
            dll: true,
            locale: {
                enable: true,
                default: 'en-US',
            },
            routes: {
                exclude: [
                    /models\//,
                    /services\//,
                    /model\.(t|j)sx?$/,
                    /service\.(t|j)sx?$/,
                    /components\//,
                ],
            },
        }],
    ],

}

export default config;
