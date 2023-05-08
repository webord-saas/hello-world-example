"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const webord_plugin_1 = require("webord-plugin");
const HelloWorld_ts_1 = require("./screens/HelloWorld.ts");
const init = () => {
    webord_plugin_1.Webord.registerCategory({
        key: 'hello-world',
        name: 'Hello World from Plugin',
        path: '/hello-world',
    });
    webord_plugin_1.Webord.registerLink({
        key: 'hello-world',
        name: 'Hello World',
        path: '/',
        categoryKey: 'hello-world',
        component: HelloWorld_ts_1.HelloWorld,
    });
};
exports.init = init;
