(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../node_modules/webord-plugin/lib/index", "./screens/HelloWorld"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const index_1 = require("../node_modules/webord-plugin/lib/index");
    const HelloWorld_1 = require("./screens/HelloWorld");
    let WebordValue = window.Webord || index_1.Webord;
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
