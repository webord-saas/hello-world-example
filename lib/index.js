(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./screens/HelloWorld"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const HelloWorld_1 = require("./screens/HelloWorld");
    let WebordValue = window.WebordPlugin;
    WebordValue.registerCategory({
        key: 'hello-world',
        name: 'Hello World from Plugin',
        path: '/hello-world',
    });
    WebordValue.registerLink({
        key: 'hello-world',
        name: 'Hello World',
        path: '/',
        categoryKey: 'hello-world',
        component: HelloWorld_1.HelloWorld,
    });
    console.log('Hello World from Plugin');
});
